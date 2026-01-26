'use client';

import Image from "next/image";
import { useState } from "react";
import WeddingDetailsModal from "./WeddingDetailsModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-zinc-900" id="home">
      <div className="absolute inset-0">
        {/* Using standard img tag to debug loading issues with large files */}
        <img
          src="https://fsxmagdvqbyyjapejdxm.supabase.co/storage/v1/object/public/wedding/hero_main.jpg"
          alt="Wedding Couple"
          className="w-full h-full object-cover opacity-80"
        />
        {/* Fallback gradient if image fails or loading */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black"></div>
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-end items-center text-center pb-16 px-4 z-10 w-full">
        <div className="flex items-center gap-2 mb-3">
            <span className="text-primary font-bold text-[9px] tracking-[0.2em] uppercase leading-none drop-shadow-md">A WEDDING ORIGINAL SERIES</span>
        </div>
        <h1 className="text-5xl font-black leading-[0.85] tracking-tighter mb-5 italic uppercase drop-shadow-2xl text-white">
          THE WEDDING:<br/>
          <span className="text-3xl font-black not-italic tracking-tight block mt-1">OUR FOREVER STORY</span>
        </h1>
        
        <div className="flex items-center gap-3 mb-8 text-[11px] text-zinc-200 font-medium drop-shadow-md">
            <span className="text-[#46d369] font-bold">99% Match</span>
            <span className="text-zinc-300">2026</span>
            <span className="border border-zinc-400 px-1.5 py-0.5 rounded-[2px] text-[10px] bg-black/40 backdrop-blur-sm">TV-MA</span>
            <span className="text-zinc-300">1 Season</span>
        </div>

        <div className="flex w-full gap-3 max-w-sm">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex-1 flex items-center justify-center gap-2 bg-zinc-600/70 text-white backdrop-blur-md py-3 rounded-[4px] font-bold text-sm transition-all active:scale-95 hover:bg-zinc-600/90"
          >
            <span className="material-symbols-outlined text-[24px]">info</span>
            Details
          </button>
        </div>
      </div>
      
      <WeddingDetailsModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
