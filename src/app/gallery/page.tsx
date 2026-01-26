'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { WEDDING_IMAGES } from '@/constants/images';

export default function GalleryPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const thumbnailRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 썸네일 클릭 시 중앙으로 스크롤 정렬
  useEffect(() => {
    const activeThumb = thumbnailRefs.current[selectedIndex];
    if (activeThumb) {
      activeThumb.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  }, [selectedIndex]);

  const nextImage = () => {
    setSelectedIndex((prev) => (prev + 1) % WEDDING_IMAGES.length);
  };

  const prevImage = () => {
    setSelectedIndex((prev) => (prev - 1 + WEDDING_IMAGES.length) % WEDDING_IMAGES.length);
  };

  return (
    <main className="max-w-md mx-auto h-[100dvh] bg-black text-white flex flex-col relative shadow-[0_0_100px_rgba(0,0,0,0.5)] overflow-hidden">
      {/* Header */}
      <header className="p-4 flex items-center justify-between bg-black/60 backdrop-blur-md z-10 w-full max-w-md shrink-0">
        <Link href="/" className="flex items-center gap-1 hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-[28px]">arrow_back</span>
          <span className="font-bold text-sm">Back</span>
        </Link>
        <h1 className="text-sm font-black italic tracking-tighter text-primary">THE WEDDING</h1>
        <div className="w-10"></div> {/* Spacer */}
      </header>

      {/* Main Image Viewer */}
      <div className="flex-1 min-h-0 relative flex items-center justify-center p-6 pb-2">
        {/* Background Blurred Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src={WEDDING_IMAGES[selectedIndex]}
            alt="Background"
            fill
            className="object-cover blur-lg opacity-30 scale-110 transition-all duration-700"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative w-full h-full group z-10 transition-all duration-500">
          <Image
            src={WEDDING_IMAGES[selectedIndex]}
            alt={`Wedding Photo ${selectedIndex + 1}`}
            fill
            className="object-contain animate-in fade-in duration-500 scale-100 ease-out"
            priority
          />
          
          {/* Navigation Arrows */}
          <button 
            onClick={prevImage}
            className="absolute left-2 top-1/2 -translate-y-1/2 size-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button 
            onClick={nextImage}
            className="absolute right-2 top-1/2 -translate-y-1/2 size-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>

          {/* Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold tracking-widest text-zinc-300">
            {selectedIndex + 1} / {WEDDING_IMAGES.length}
          </div>
        </div>
      </div>

      {/* Bottom Thumbnail Bar */}
      <div className="p-6 pt-4 shrink-0">
        <p className="text-zinc-500 text-[10px] uppercase font-bold tracking-[0.2em] mb-3 text-center">
            Episode Selection
        </p>
        <div className="flex overflow-x-auto no-scrollbar gap-2 px-2 pb-4 snap-x">
          {WEDDING_IMAGES.map((src, i) => (
            <div
              key={i}
              ref={(el: HTMLDivElement | null) => { thumbnailRefs.current[i] = el; }}
              onClick={() => setSelectedIndex(i)}
              className={`flex-none w-16 aspect-[2/3] rounded-md overflow-hidden bg-zinc-800 snap-center transition-all duration-300 cursor-pointer relative ${
                selectedIndex === i 
                    ? 'ring-2 ring-primary scale-110 shadow-[0_0_15px_rgba(229,9,20,0.5)] z-10 opacity-100' 
                    : 'opacity-40 grayscale-[50%]'
              }`}
            >
              <Image
                src={src}
                alt={`Thumb ${i}`}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
