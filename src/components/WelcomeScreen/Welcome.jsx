import React from "react";
import ALL_USERS from "../../data/AllUsers";
import DisplayMyJournals from "../../routes/MyJournals/DisplayMyJournals";
import { useJournals } from "../../context/JournalContext";
import FloatingButtons from "../FloatingButtons/FloatingButtons"

const currentUserId = "u-1a92f";
const currentUser = ALL_USERS.find(
  (user) => user.id === currentUserId,
);



function Welcome() {
  const { journals } = useJournals();
  const userJournals = journals.filter(
    (j) => j.userId === currentUserId,
  );

  const hasLogin = !!currentUser; //Instead of  if (currentUser){ hasLogin = true;}
  const hasCreatedJournal = userJournals.length > 0;

  return (
    <>
      <h1 className="mb-4">
        {" "}
        Welcome {currentUser?.displayName || null},
      </h1>

      {hasLogin && !hasCreatedJournal && (
        <div>When you add a note, it will appear here...</div>
      )}

      {hasLogin && hasCreatedJournal && (
        <DisplayMyJournals />
      )}

      {!hasLogin && (
        <div>
          Please, login or create an account to sync your details
        </div>
      )}

      <FloatingButtons />
    </>
  );
}

export default Welcome;
