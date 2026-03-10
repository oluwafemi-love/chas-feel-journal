import { useState, useRef, useCallback } from "react";
import { APPYHUB_CONFIG } from "../config/apiConfig";


const APPYHUB_API_KEY = APPYHUB_CONFIG.TOKEN;
const APPYHUB_ENDPOINT = APPYHUB_CONFIG.BASE_URL;
const LANGUAGE = "en-US";

export function useSpeechRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [liveTranscript, setLiveTranscript] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const recognitionRef = useRef(null);

  const start = useCallback(async () => {
    setError(null);
    setLiveTranscript("");
    audioChunksRef.current = [];

    // --- MediaRecorder (captures WAV for AppyHub) ---
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      mediaRecorder.start(100); // collect chunks every 100ms
    } catch (err) {
      setError("Microphone access denied.");
      return;
    }

    // --- Web Speech API (live transcript display) ---
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = LANGUAGE;

      recognition.onresult = (event) => {
        let interim = "";
        let final = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
          const t = event.results[i][0].transcript;
          event.results[i].isFinal ? (final += t) : (interim += t);
        }
        setLiveTranscript((prev) => prev + final || interim);
      };

      recognition.onerror = (e) => {
        // non-fatal — AppyHub will still produce the final transcript
        console.warn("Web Speech error:", e.error);
      };

      recognitionRef.current = recognition;
      recognition.start();
    }

    setIsRecording(true);
  }, []);

  const stop = useCallback(() => {
    return new Promise((resolve) => {
      // Stop Web Speech
      recognitionRef.current?.stop();

      // Stop MediaRecorder, then send to AppyHub
      const mediaRecorder = mediaRecorderRef.current;
      if (!mediaRecorder) return resolve(null);

      mediaRecorder.onstop = async () => {
        setIsProcessing(true);
        try {
          const blob = new Blob(audioChunksRef.current, { type: "audio/wav" });
          const formData = new FormData();
          formData.append("file", blob, "recording.wav");
          formData.append("language", LANGUAGE);

          const response = await fetch(APPYHUB_ENDPOINT, {
            method: "POST",
            headers: { Authorization: `Bearer ${APPYHUB_API_KEY}` },
            body: formData,
          });

          if (!response.ok) throw new Error("AppyHub request failed");

          const data = await response.json();
          // ⚠️ Adjust this path to match AppyHub's actual response shape
          console.log("data recieved:", data)
          const finalTranscript = data?.text ?? data?.transcript ?? "";
          resolve(finalTranscript);
        } catch (err) {
          setError("Transcription failed. You can still edit manually.");
          resolve(liveTranscript); // fall back to Web Speech draft
        } finally {
          setIsProcessing(false);
          // Release microphone
          mediaRecorder.stream.getTracks().forEach((t) => t.stop());
        }
      };

      mediaRecorder.stop();
      setIsRecording(false);
    });
  }, [liveTranscript]);

  return { isRecording, liveTranscript, isProcessing, error, start, stop };
}