import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import ALL_USERS from "./data/AllUsers";
import ALL_JOURNALS from "./data/AllJournals";

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

    Meanwhile, enjoy the solemn background music  
  `;

function App() {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <>
      <Header
        onToggleSidebar={() => setSidebarOpen((prev) => !prev)}
      />
      <Sidebar sidebarIsOpen={sidebarOpen} />
      <main className="px-4.5 py-8">
        <h1> Welcome {currentUser?.displayName || null},</h1>

        {hasLogin && !hasCreatedJournal && (
          <div>{notYetCreatedAJournalMessage}</div>
        )}

        {hasLogin && hasCreatedJournal && (
          <div>
            {userJournals.map((journal) => (
              <div key={journal.id}> {journal.title} </div>
            ))}
          </div>
        )}

        {!hasLogin && (
          <div>
            Please, login or create an account to sync your details
          </div>
        )}
      </main>
    </>
  );
}

export default App;
