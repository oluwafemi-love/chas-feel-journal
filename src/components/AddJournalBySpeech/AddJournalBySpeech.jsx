import React from "react";
import icons from "../../constants/icons";
import "./AddJournalBySpeech.css";

function AddJournalBySpeech() {
  return (
    <button className="add-journal-by-speech-trigger">
      <div className="button-content-speech">
        {icons.micIcon()}
        <span className="visually-hidden">Add Journal By Speech</span>
      </div>
    </button>
  );
}

export default AddJournalBySpeech;
