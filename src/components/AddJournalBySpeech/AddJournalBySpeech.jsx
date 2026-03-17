import React from "react";
import icons from "../../constants/icons";
import * as Dialog from "@radix-ui/react-dialog";
import { useSpeechRecorder } from "../../hooks/useSpeechRecorder";
import "./AddJournalBySpeech.css";

function AddJournalBySpeech({ onTranscriptReady }) {
  const {
    isRecording,
    liveTranscript,
    isProcessing,
    error,
    start,
    stop,
  } = useSpeechRecorder();
  const [open, setOpen] = React.useState(false);

  async function handleOpen() {
    setOpen(true);
    await start();
  }

  async function handleFinish() {
    const finalTranscript = await stop();
    setOpen(false);
    // Give React one tick to close the speech dialog before opening text dialog
    setTimeout(() => {
      if (finalTranscript) {
        onTranscriptReady(finalTranscript);
      }
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
          <span className="visually-hidden">
            🎙️ Add Journal By Speech
          </span>
        </div>
      </button>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="dialog-overlay" />
          <Dialog.Content className="dialog-content">
            <Dialog.Title className="dialog-title">
              {isProcessing ? "Processing..." : "Recording..."}
            </Dialog.Title>

            {/* Live transcript display */}
            <div className="live-transcript">
              {liveTranscript || (
                <span className="transcript-placeholder">
                  Start speaking...
                </span>
              )}
            </div>

            {/* Recording pulse indicator */}
            {isRecording && (
              <div className="recording-indicator">
                <span className="pulse-dot" /> Listening
              </div>
            )}

            {/* Processing spinner */}
            {isProcessing && (
              <div className="processing-indicator">
                Transcribing your recording...
              </div>
            )}

            {error && <div className="transcript-error">{error}</div>}

            <div className="dialog-actions">
              <button
                className="dialog-btn-cancel"
                onClick={handleCancel}
              >
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
