import { createFileRoute } from '@tanstack/react-router'
import { useJournals } from "../../context/JournalContext";
import React from 'react';

export const Route = createFileRoute('/Trashs/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { trash = [], restoreJournal } = useJournals();

  return (
    <div className="p-8  min-h-screen text-white">
      <header className="mb-10 text-right">
        <h1 className="text-3xl font-bold">Trash</h1>
        <p className="text-gray-500 mt-2">Recently deleted notes.</p>
      </header>

      {trash.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trash.map((journal) => (
            <div 
              key={journal.id} 
              className="bg-[var(--my-shade-color)] border border-[var(--my-shade-color-l1)] p-6 rounded-2xl relative group"
            >
              <h3 className="text-lg font-medium mb-3 text-gray-300">{journal.title}</h3>
              <p className="text-gray-500 text-sm line-clamp-3 mb-6">
                {journal.content.text}
              </p>
              
              <button
                onClick={() => restoreJournal(journal.id)}
                className="mt-4 w-full py-2 px-4 bg-white/5 hover:bg-green-600/20 border border-white/10 hover:border-green-500/50 text-green-400 text-xs font-medium rounded-xl transition-all duration-300 flex items-center justify-center gap-2">
                <span className="text-lg">↺</span> Restore Note
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20  rounded-3xl border border-dashed border-white/10">
          <p className="text-gray-500 italic">Trash is empty.</p>
        </div>
      )}
    </div>
  );
}