'use client';

import Link from 'next/link';
import Guestbook from '@/components/ui/Guestbook';

export default function MorePage() {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-black text-white pb-24 animate-in fade-in duration-700 ease-out">
      {/* Header */}
      <header className="p-4 flex items-center justify-between bg-black/60 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-1 hover:text-primary transition-colors">
          <span className="material-symbols-outlined text-[28px]">arrow_back</span>
          <span className="font-bold text-sm">Back</span>
        </Link>
        <h1 className="text-sm font-black italic tracking-tighter text-primary">MESSAGE</h1>
        <div className="w-10"></div> {/* Spacer */}
      </header>

      {/* Hero Section of More Page */}
      <div className="px-6 py-10">
        <h2 className="text-2xl font-bold mb-1 tracking-tight">
            WARMEST <br/>
            WISHES
        </h2>
        <p className="text-zinc-500 text-[11px] font-medium uppercase tracking-wider mt-2">
            따뜻한 응원의 한마디를 남겨주세요.
        </p>
      </div>

      {/* Guestbook Component */}
      <Guestbook />

      {/* Footer Info */}
      <div className="px-6 py-10 text-center border-t border-white/5 mt-10">
        <div className="flex justify-center gap-4 mb-6">
            <span className="text-zinc-700 text-[10px] border border-zinc-800 px-2 py-1">18+</span>
            <span className="text-zinc-700 text-[10px] border border-zinc-800 px-2 py-1">HD</span>
            <span className="text-zinc-700 text-[10px] border border-zinc-800 px-2 py-1">5.1</span>
        </div>
        <p className="text-zinc-600 text-[10px] leading-relaxed">
            민성 & 세진의 결혼식에 소중한 시간을 내어 주셔서 감사합니다.<br/>
            여러분의 따뜻한 축복이 저희의 새로운 시작에 큰 힘이 됩니다.
        </p>
        <p className="mt-4 text-zinc-800 text-[9px]">© 2026 Minseong & Sejin. All rights reserved.</p>
      </div>

      {/* Bottom Navigation (Simplified or just a Home button) */}
      <nav className="fixed bottom-0 inset-x-0 mx-auto max-w-md z-50 bg-[#121212]/90 backdrop-blur-md border-t border-white/5 px-6 pt-2 pb-[calc(1rem+env(safe-area-inset-bottom,0px))] md:pb-8">
        <div className="flex justify-center">
          <Link className="flex flex-col items-center gap-1 group w-14" href="/">
            <div className="group-active:scale-90 transition-transform">
                <span className="material-symbols-outlined text-xl text-zinc-500 group-hover:text-white transition-colors">home</span>
            </div>
            <span className="text-[9px] text-zinc-500 group-hover:text-white transition-colors">Home</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
