import React, { createContext, useContext, useState } from "react";
import ALL_JOURNALS from "../data/AllJournals"; // seeds initial data

const JournalContext = createContext(null);

export function JournalProvider({ children }) {
  const [journals, setJournals] = useState(ALL_JOURNALS);

  function addJournal({ title, text, userId }) {
    const now = new Date().toISOString();
    const theuuid = crypto.randomUUID();
    const newEntry = {
      id: theuuid,
      userId,
      title: title || "",
      content: {
        text,
        transcript: null,
      },
      media: { images: [] },
      mood: { primary: "neutral", intensity: 3 },
      tags: [],
      metadata: {
        isFavorite: false,
        source: "manual",
        wordCount: text.trim().split(/\s+/).filter(Boolean).length,
      },
      createdAt: now,
      updatedAt: now,
    };

    setJournals((prev) => [newEntry, ...prev]);
  }

  function deleteJournal(id) {
    setJournals((prev) => prev.filter((j) => j.id !== id));
  }

  function toggleFavorite(id) {
    setJournals((prev) =>
      prev.map((j) =>
        j.id === id
          ? { ...j, metadata: { ...j.metadata, isFavorite: !j.metadata.isFavorite } }
          : j
      )
    );
  }

  return (
    <JournalContext.Provider value={{ journals, addJournal, deleteJournal, toggleFavorite }}>
      {children}
    </JournalContext.Provider>
  );
}

// This is a Custom hook —  instead of using useContext directly, I'll use this
export function useJournals() {
  const ctx = useContext(JournalContext);
  if (!ctx) throw new Error("useJournals must be used inside <JournalProvider>");
  return ctx;
}