import { useState, useRef, useCallback } from "react";
import { APPYHUB_CONFIG } from "../config/apiConfig";

const APPYHUB_API_KEY = APPYHUB_CONFIG.TOKEN;
const APPYHUB_ENDPOINT = APPYHUB_CONFIG.BASE_URL;
const LANGUAGE = "en-US";

export function useSpeechRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const start = useCallback(async () => {
    setError(null);
    audioChunksRef.current = [];

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      mediaRecorder.start(100);
    } catch (err) {
      setError("Microphone access denied.");
      return;
    }

    setIsRecording(true);
  }, []);

  const stop = useCallback(() => {
    return new Promise((resolve) => {
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
            headers: { "apy-token": `${APPYHUB_API_KEY}` },
            body: formData,
          });

          if (!response.ok) throw new Error("AppyHub request failed");

          const data = await response.json();
          console.log("Raw Data from AppyHub", data);
          console.log("Full AppyHub response:", JSON.stringify(data));
          resolve(data?.data ?? "");
        } catch (err) {
          console.error("AppyHub error:", err);
          setError("Transcription failed. Please try again.");
          resolve(null); 
        } finally {
          setIsProcessing(false);
          mediaRecorder.stream.getTracks().forEach((t) => t.stop());
        }
      };

      mediaRecorder.stop();
      setIsRecording(false);
    });
  }, []); 

  return { isRecording, isProcessing, error, start, stop };
}