import { useState, useRef, useCallback } from "react";
import { APPYHUB_CONFIG } from "../config/apiConfig";

const APPYHUB_API_KEY = APPYHUB_CONFIG.TOKEN;
const APPYHUB_ENDPOINT = APPYHUB_CONFIG.BASE_URL;
const LANGUAGE = "en-US";

// Converts any audio blob to WAV using Web Audio API
async function convertToWav(blob) {
  const arrayBuffer = await blob.arrayBuffer();
  const audioContext = new AudioContext();
  const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

  const numChannels = audioBuffer.numberOfChannels;
  const sampleRate = audioBuffer.sampleRate;
  const numSamples = audioBuffer.length;
  const bytesPerSample = 2; // 16-bit
  const dataLength = numSamples * numChannels * bytesPerSample;
  const bufferLength = 44 + dataLength;

  const wavBuffer = new ArrayBuffer(bufferLength);
  const view = new DataView(wavBuffer);

  // WAV header
  const writeString = (offset, str) => {
    for (let i = 0; i < str.length; i++)
      view.setUint8(offset + i, str.charCodeAt(i));
  };

  writeString(0, "RIFF");
  view.setUint32(4, 36 + dataLength, true);
  writeString(8, "WAVE");
  writeString(12, "fmt ");
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true); // PCM
  view.setUint16(22, numChannels, true);
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * numChannels * bytesPerSample, true);
  view.setUint16(32, numChannels * bytesPerSample, true);
  view.setUint16(34, 16, true);
  writeString(36, "data");
  view.setUint32(40, dataLength, true);

  // Write PCM samples
  let offset = 44;
  for (let i = 0; i < numSamples; i++) {
    for (let ch = 0; ch < numChannels; ch++) {
      const sample = Math.max(-1, Math.min(1, audioBuffer.getChannelData(ch)[i]));
      view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7fff, true);
      offset += 2;
    }
  }

  await audioContext.close();
  return new Blob([wavBuffer], { type: "audio/wav" });
}

export function useSpeechRecorder() {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState(null);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const mimeTypeRef = useRef("");

  const start = useCallback(async () => {
    setError(null);
    audioChunksRef.current = [];

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });

      const mimeType = MediaRecorder.isTypeSupported("audio/ogg;codecs=opus")
        ? "audio/ogg;codecs=opus"
        : MediaRecorder.isTypeSupported("audio/webm;codecs=opus")
        ? "audio/webm;codecs=opus"
        : "audio/wav";

      mimeTypeRef.current = mimeType;
      const mediaRecorder = new MediaRecorder(stream, { mimeType });
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
          const mimeType = mimeTypeRef.current;
          const rawBlob = new Blob(audioChunksRef.current, { type: mimeType });

          // Convert to WAV regardless of what the browser recorded
          console.log("Converting to WAV...");
          const wavBlob = await convertToWav(rawBlob);
          console.log("WAV size:", wavBlob.size);

          const formData = new FormData();
          formData.append("file", wavBlob, "recording.wav");
          formData.append("language", LANGUAGE);

          const response = await fetch(APPYHUB_ENDPOINT, {
            method: "POST",
            headers: { "apy-token": `${APPYHUB_API_KEY}` },
            body: formData,
          });

          if (!response.ok) {
            const errorBody = await response.text();
            console.error("AppyHub error body:", errorBody);
            throw new Error("AppyHub request failed");
          }

          const data = await response.json();
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