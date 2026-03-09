import React, { createContext, useContext, useEffect } from "react";
import ALL_JOURNALS from "../data/AllJournals"; 

const JournalContext = createContext(null);
const STORAGE_KEY = "app_journals";

export function JournalProvider({ children }) {
  const [journals, setJournals] = React.useState(()=>{
    // On first load, check localStorage before falling back to static data
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : ALL_JOURNALS
    } catch {
      return ALL_JOURNALS
    }
  });

  // When journals change, sync to localStorage
  useEffect(()=>{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(journals));
  }, [journals]);

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