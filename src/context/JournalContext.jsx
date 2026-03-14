import React, { createContext, useContext, useEffect } from "react";
import ALL_JOURNALS from "../data/AllJournals"; 

const JournalContext = createContext(null);
const STORAGE_KEY = "app_journals";
const TRASH_KEY = "app_trash";

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

  const [trash, setTrash] = React.useState(() => {
      try {
        const stored = localStorage.getItem(TRASH_KEY);
        return stored ? JSON.parse(stored) : [];
      } catch {
        return [];
      }
    });


  // When journals change, sync to localStorage
  useEffect(()=>{
    localStorage.setItem(STORAGE_KEY, JSON.stringify(journals));
    localStorage.setItem(TRASH_KEY, JSON.stringify(trash));
  }, [journals, trash]);

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
    const journalToDelete = journals.find((j) => j.id === id);
    if (journalToDelete) {
      setTrash((prev) => [journalToDelete, ...prev]);
      setJournals((prev) => prev.filter((j) => j.id !== id));
    }
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

  function restoreJournal(id) {
    const journalToRestore = trash.find((j) => j.id === id);
    if (journalToRestore) {
      setJournals((prev) => [journalToRestore, ...prev]);
      setTrash((prev) => prev.filter((j) => j.id !== id));
    }
  }

  return (
    <JournalContext.Provider value={{ journals, addJournal, trash, deleteJournal, toggleFavorite,restoreJournal }}>
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