import React from "react";
import AddJournalBySpeech from "../AddJournalBySpeech/AddJournalBySpeech";
import AddJournalByText from "../AddJournalByText/AddJournalByText";
import ViewQuotes from "../ViewQuotes/ViewQuotes";
import "./FloatingButtons.css";

function FloatingButtons() {
  const [prefillText, setPrefillText] = useState(null);
  return (
    <div className="floating-buttons-wrapper">
      <AddJournalByText
        prefillText={prefillText}
        onClose={() => setPrefillText(null)}
      />
      <AddJournalBySpeech
        onTranscriptReady={(transcript) => setPrefillText(transcript)}
      />
      <ViewQuotes />
    </div>
  );
}

export default FloatingButtons;
