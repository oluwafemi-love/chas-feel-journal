import React from "react";
import ALL_USERS from "../../data/AllUsers";
import ALL_JOURNALS from "../../data/AllJournals";
import DisplayMyJournals from "../../routes/MyJournals/DisplayMyJournals";

const currentUserId = "u-9f33x";

const currentUser = ALL_USERS.find(
  (user) => user.id === currentUserId,
);
const userJournals = ALL_JOURNALS.filter(
  (journal) => journal.userId === currentUserId,
);

const hasLogin = !!currentUser; //Instead of  if (currentUser){ hasLogin = true;}
const hasCreatedJournal = userJournals.length > 0;

const notYetCreatedAJournalMessage = `
    When you add a note, it will appear here...  
  `;

function Welcome() {
  return (
    <>
      <h1 className="mb-4">
        {" "}
        Welcome {currentUser?.displayName || null},
      </h1>

      {hasLogin && !hasCreatedJournal && (
        <div>{notYetCreatedAJournalMessage}</div>
      )}

      {hasLogin && hasCreatedJournal && (
        <DisplayMyJournals />
        /* Todo: DisplayMyJournals is showing Journals for all users, it should only show Journals for a specific user */
      )}

      {!hasLogin && (
        <div>
          Please, login or create an account to sync your details
        </div>
      )}
    </>
  );
}

export default Welcome;
