import React from "react";
import icons from "../../constants/icons";
import * as Dialog from "@radix-ui/react-dialog";
import { useSpeechRecorder } from "../../hooks/useSpeechRecorder";
import "./AddJournalBySpeech.css";

function AddJournalBySpeech({ onTranscriptReady }) {
  const { isRecording, isProcessing, error, start, stop } = useSpeechRecorder();
  const [open, setOpen] = React.useState(false);

  async function handleOpen() {
    setOpen(true);
    await start();
  }

  async function handleFinish() {
    const finalTranscript = await stop();
    setOpen(false);
    setTimeout(() => {
      if (finalTranscript) onTranscriptReady(finalTranscript);
    }, 100);
  }

  function handleCancel() {
    stop();
    setOpen(false);
  }

  return (
    <>
      <button
        className="add-journal-by-speech-trigger"
        onClick={handleOpen}
        disabled={isProcessing}
      >
        <div className="button-content-speech">
          {icons.micIcon()}
          <span className="visually-hidden">Add Journal By Speech</span>
        </div>
      </button>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="dialog-overlay" />
          <Dialog.Content className="dialog-content">
            <Dialog.Title className="dialog-title">
              {isProcessing ? "Transcribing..." : "Recording..."}
            </Dialog.Title>

            {isRecording && !isProcessing && (
              <div className="recording-indicator">
                <span className="pulse-dot" /> Listening
              </div>
            )}

            {isProcessing && (
              <div className="processing-indicator">
                Be happy; the audio is being transcribed...
              </div>
            )}

            {error && <div className="transcript-error">{error}</div>}

            <div className="dialog-actions by-speech-dialog-actions">
              <button className="dialog-btn-cancel" onClick={handleCancel}>
                Cancel
              </button>
              <button
                className="dialog-btn-save"
                onClick={handleFinish}
                disabled={isProcessing || !isRecording}
              >
                ✓ Finish
              </button>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}

export default AddJournalBySpeech;