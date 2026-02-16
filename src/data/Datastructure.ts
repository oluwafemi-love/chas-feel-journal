// Datastructure.ts

type JournalEntry = {
  id: string; // uuid

  userId: string;

  title?: string;

  content: {
    text: string; // cleaned & normalized
    transcript?: string | null; // raw speech-to-text output
  };

  media?: {
    images?: string[];
  };

  mood: {
    primary:
      | "happy"
      | "sad"
      | "angry"
      | "anxious"
      | "calm"
      | "neutral";

    intensity: number; // 1–5
  };

  tags: string[]; // ["work", "family", "health"]

  metadata: {
    isFavorite: boolean;
    source: "manual" | "voice" | "combination";
    wordCount: number;
  };

  createdAt: string;
  updatedAt: string;
};

type Quote = {
  id: string; // uuid

  text: string;
  author?: string;

  category?:
    | "motivation"
    | "mindfulness"
    | "discipline"
    | "healing"
    | "growth";

  source: "system" | "user";

  createdAt: string;
};

type User = {
  id: string; // uuid
  email?: string; // optional for local mode
  displayName: string;
  displayPicture?: string;

  authProvider: "local" | "google" | "anonymous";

  preferences: {
    theme: "light" | "dark" | "system";
    reducedMotion: boolean;
    dailyReminderTime?: string; // "18:00"
  };

  createdAt: string; // ISO
  updatedAt: string; // ISO
};
