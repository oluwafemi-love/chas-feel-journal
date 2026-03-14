// import { createFileRoute } from '@tanstack/react-router'

// export const Route = createFileRoute('/MyFavourites/')({
//   component: RouteComponent,
// })

// function RouteComponent() {
//   return <div>Hello "/MyFavourites/"!</div>
// }

import { createFileRoute } from '@tanstack/react-router'
import { useJournals } from "../../context/JournalContext";
import React from 'react';
import Journal from "../../components/Journal/Journal";

export const Route = createFileRoute('/MyFavourites/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { journals } = useJournals(); 

  const favoriteJournals = journals.filter(
    (journal) => journal.metadata.isFavorite === true
  );

  return (
    <div className="p-8 bg-[#0a0505] min-h-screen text-white">
      <header className="mb-10 text-right">
        <h1 className="text-3xl font-bold">Favourites</h1>
        <p className="text-gray-500 mt-2">Notes you have marked as important.</p>
      </header>

      {favoriteJournals.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favoriteJournals.map((journal) => (
            <Journal key={journal.id} journal={journal} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-[#1a1616] rounded-3xl border border-dashed border-white/10">
          <p className="text-gray-500 italic">No favorite journals found.</p>
        </div>
      )}
    </div>
  );
}