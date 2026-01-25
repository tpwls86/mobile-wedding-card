'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function CastMembers() {
  const [isAccountOpen, setIsAccountOpen] = useState(false);

  // 신랑측 정보 (계좌 3개)
  const groom = { 
    name: "고민성", 
    image: "/images/cast-groom.png", 
    father: "고영학", 
    mother: "이미경",
    relation: "아들",
    accounts: [
        { bank: "국민은행", number: "737301-01-415568", owner: "고민성" }, 
        { bank: "농협은행", number: "352-0705-2821-93", owner: "고영학" },
        { bank: "농협은행", number: "352-3693-7081-53", owner: "이미경" }
    ]
  };
  
  // 신부측 정보 (계좌 2개)
  const bride = { 
    name: "하세진", 
    image: "/images/cast-bride.png", 
    father: "하인환", 
    mother: "임종현",
    relation: "딸",
    accounts: [
        { bank: "신한은행", number: "110-435-627895", owner: "하세진" },
        { bank: "우리은행", number: "024-266770-02-019", owner: "임종현" }
    ]
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`계좌번호가 복사되었습니다.\n${text}`);
  };

  return (
    <section className="mb-20 px-4 scroll-mt-20" id="cast">
      <h3 className="text-white font-bold text-lg mb-6 pl-1 border-l-4 border-primary leading-none">Cast Members</h3>
      
      {/* 1. Main Cast (Bride & Groom) */}
      <div className="flex justify-center items-center gap-6 mb-8">
        {/* GROOM */}
        <div className="flex flex-col items-center group">
            <div className="relative size-28 rounded-full overflow-hidden border-2 border-zinc-700 p-1 mb-3 group-hover:border-primary transition-colors">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                        src={groom.image}
                        alt="Groom"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="text-center">
                <p className="text-white font-bold text-lg mb-1">신랑 {groom.name}</p>
                <div className="text-zinc-400 text-xs">
                    <span>{groom.father} · {groom.mother}</span>
                    <span className="text-zinc-600 mx-1">의</span>
                    <span>{groom.relation}</span>
                </div>
            </div>
        </div>

        {/* HEART */}
        <div className="text-primary animate-pulse text-2xl">♥</div>

        {/* BRIDE */}
        <div className="flex flex-col items-center group">
            <div className="relative size-28 rounded-full overflow-hidden border-2 border-zinc-700 p-1 mb-3 group-hover:border-primary transition-colors">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                        src={bride.image}
                        alt="Bride"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
            <div className="text-center">
                <p className="text-white font-bold text-lg mb-1">신부 {bride.name}</p>
                <div className="text-zinc-400 text-xs">
                    <span>{bride.father} · {bride.mother}</span>
                    <span className="text-zinc-600 mx-1">의</span>
                    <span>{bride.relation}</span>
                </div>
            </div>
        </div>
      </div>

      {/* 2. Account Info (Accordion) */}
      <div className="bg-zinc-900 rounded-lg overflow-hidden border border-white/10">
        <button 
            onClick={() => setIsAccountOpen(!isAccountOpen)}
            className="w-full flex items-center justify-between p-4 hover:bg-zinc-800 transition-colors"
        >
            <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">volunteer_activism</span>
                <span className="font-bold text-sm text-zinc-200">마음 전하실 곳</span>
            </div>
            <span className={`material-symbols-outlined text-zinc-500 transition-transform ${isAccountOpen ? 'rotate-180' : ''}`}>
                expand_more
            </span>
        </button>
        
        <div 
            className={`transition-[max-height,opacity] duration-500 ease-in-out bg-black/20 overflow-hidden ${
                isAccountOpen ? 'max-h-[500px] opacity-100 border-t border-white/5' : 'max-h-0 opacity-0'
            }`}
        >
                {/* Groom's Accounts */}
                <div className="p-4 border-b border-white/5">
                    <p className="text-xs font-bold text-zinc-500 mb-3">신랑측 계좌번호</p>
                    <div className="space-y-2">
                        {groom.accounts.map((acc, idx) => (
                            <div key={idx} className="flex justify-between items-center bg-zinc-800 p-3 rounded">
                                <div>
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-xs text-zinc-300">{acc.owner}</span>
                                        <span className="text-[10px] text-zinc-500 border border-zinc-600 px-1 rounded">{acc.bank}</span>
                                    </div>
                                    <span className="text-sm font-bold text-white tracking-wide">{acc.number}</span>
                                </div>
                                <button 
                                    onClick={() => copyToClipboard(`${acc.bank} ${acc.number}`)}
                                    className="bg-white text-black text-[10px] font-bold px-2.5 py-1.5 rounded hover:bg-zinc-200 min-w-[3rem]"
                                >
                                    복사
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bride's Accounts */}
                <div className="p-4">
                    <p className="text-xs font-bold text-zinc-500 mb-3">신부측 계좌번호</p>
                    <div className="space-y-2">
                        {bride.accounts.map((acc, idx) => (
                            <div key={idx} className="flex justify-between items-center bg-zinc-800 p-3 rounded">
                                <div>
                                    <div className="flex items-center gap-2 mb-0.5">
                                        <span className="text-xs text-zinc-300">{acc.owner}</span>
                                        <span className="text-[10px] text-zinc-500 border border-zinc-600 px-1 rounded">{acc.bank}</span>
                                    </div>
                                    <span className="text-sm font-bold text-white tracking-wide">{acc.number}</span>
                                </div>
                                <button 
                                    onClick={() => copyToClipboard(`${acc.bank} ${acc.number}`)}
                                    className="bg-white text-black text-[10px] font-bold px-2.5 py-1.5 rounded hover:bg-zinc-200 min-w-[3rem]"
                                >
                                    복사
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
      </div>
    </section>
  );
}
