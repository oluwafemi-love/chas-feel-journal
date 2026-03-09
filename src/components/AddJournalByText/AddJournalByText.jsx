import React from "react";
import icons from "../../constants/icons";
import * as Dialog from "@radix-ui/react-dialog";
import { useJournals } from "../../context/JournalContext";
import "./AddJournalByText.css";

const currentUserId = "u-9f33x";

function AddJournalByText() {
  const { addJournal } = useJournals();
  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState("");
  const [text, setText] = React.useState("");

  function handleSave() {
    if (!text.trim()) return;
    addJournal({ title, text, userId: currentUserId });
    setTitle("");
    setText("");
    setOpen(false);
  }

  function handleCancel() {
    setTitle("");
    setText("");
    setOpen(false);
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button className="add-journal-trigger">
          <div className="button-content-text">
            {icons.writeTextIcon()}
            <span className="visually-hidden">
              Add Journal By Text
            </span>
          </div>
        </button>
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content">
          <div className="my-dialog-header-area">
            <Dialog.Title className="dialog-title">
              New Journal Entry
            </Dialog.Title>

            <Dialog.Close asChild>
              <button className="dialog-close-x" aria-label="Close">
                ✕
              </button>
            </Dialog.Close>
          </div>

          <input
            className="dialog-input dialog-input-texti"
            type="text"
            placeholder="Title (optional)"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="dialog-textarea"
            placeholder="What's on your mind?"
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={8}
            autoFocus
          />

          <div className="dialog-actions">
            <button
              className="dialog-btn-cancel"
              onClick={handleCancel}
            >
              Cancel
            </button>
            <button
              className="dialog-btn-save"
              onClick={handleSave}
              disabled={!text.trim()}
            >
              Save
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default AddJournalByText;
