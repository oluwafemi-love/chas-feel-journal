// import { createFileRoute } from '@tanstack/react-router'

// export const Route = createFileRoute('/QuotesPage/')({
//   component: RouteComponent,
// })

// function RouteComponent() {
//   return <div>Hello "/QuotesPage/"!</div>
// }

import { createFileRoute } from '@tanstack/react-router'
import { ALL_QUOTES } from "../../data/AllQuotes";
import { Search, Menu } from "lucide-react";
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
    <div className="flex flex-col h-screen bg-[#0a0505] text-white overflow-hidden font-sans">
      <header className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          <Menu className="text-gray-400 cursor-pointer hover:text-white transition-colors" size={20} />
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
            <input 
              type="text"
              placeholder="Search Journal"
              className="w-full bg-[#1a1616] border border-white/5 rounded-full py-2 pl-10 pr-4 text-sm outline-none focus:border-white/10"
            />
          </div>
        </div>
        <div className="ml-4">
          <img 
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lovelace" 
            className="w-8 h-8 rounded-full border border-white/10" 
            alt="avatar" 
          />
        </div>
      </header>

      {/* Main Content Area - Displays the daily/random quote*/}
      <main className="flex-1 flex flex-col justify-center px-10 relative">
        <span className="absolute top-20 left-4 text-[120px] font-serif text-white/5 select-none pointer-events-none opacity-20">“</span>
        
        <div className="relative z-10 max-w-xl">
          <header className="mb-8">
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-gray-500 font-bold mb-1 italic">
              {quote.category || "Inspiration"}
            </h4>
            <time className="text-[11px] text-gray-600">13th Feb 2026</time>
          </header>

          <h2 className="text-2xl md:text-4xl font-light leading-snug mb-8 text-gray-100 italic">
            "{quote.text}"
          </h2>

          <footer className="flex items-center gap-3">
            <div className="w-6 h-[1px] bg-gray-800"></div>
            <p className="text-sm text-gray-500 italic">-- {quote.author}</p>
          </footer>
        </div>

        <span className="absolute bottom-20 right-10 text-[120px] font-serif text-white/5 select-none pointer-events-none opacity-20">”</span>
      </main>
    </div>
  );
}