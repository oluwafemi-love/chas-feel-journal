import { createFileRoute } from '@tanstack/react-router'
import { ALL_QUOTES } from "../../data/AllQuotes";
import React, { useMemo } from "react";

export const Route = createFileRoute('/QuotesPage/')({
  component: QuotesPage,
})

function QuotesPage() {
  // Select a random quote from the data source
  const quote = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * ALL_QUOTES.length);
    return ALL_QUOTES[randomIndex];
  }, []);

  return (
    <div className="flex flex-col h-[50vh]  text-white overflow-hidden font-sans">
  

      {/* Main Content Area - Displays the daily/random quote*/}
      <main className="flex-1 flex flex-col justify-center px-10 relative">
        <span className="absolute top-20 left-4 text-[120px] font-serif text-white/5 select-none pointer-events-none opacity-20">“</span>
        
        <div className="relative z-10 max-w-xl">
          <header className="mb-8">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gray-500 font-bold mb-1 italic">
              {quote.category || "Inspiration"}
            </h4>
            <time className="text-[11px] text-gray-600">{(new Date()).toDateString()}</time>
          </header>

          <h2 className="text-2xl md:text-4xl font-light leading-snug mb-8 text-gray-100 italic">
            "{quote.text}"
          </h2>

          <footer className="flex items-center gap-3">
            <div className="w-6 h-[1px] bg-gray-800"></div>
            <p className="text-sm text-gray-500 italic">{quote.author}</p>
          </footer>
        </div>

        <span className="absolute bottom-20 right-10 text-[120px] font-serif text-white/5 select-none pointer-events-none opacity-20">”</span>
      </main>
    </div>
  );
}