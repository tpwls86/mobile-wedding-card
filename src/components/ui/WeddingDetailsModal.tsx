'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface WeddingDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WeddingDetailsModal({ isOpen, onClose }: WeddingDetailsModalProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isAnimate, setIsAnimate] = useState(false);
  const [isAddedToList, setIsAddedToList] = useState(false);
  const [isListAnimate, setIsListAnimate] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isShareAnimate, setIsShareAnimate] = useState(false);
  const [showShareToast, setShowShareToast] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setIsAnimate(true);
    setTimeout(() => setIsAnimate(false), 500);
  };

  const handleListToggle = () => {
    const nextState = !isAddedToList;
    setIsAddedToList(nextState);
    setIsListAnimate(true);
    
    if (nextState) {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
    }
    
    setTimeout(() => setIsListAnimate(false), 500);
  };

  const handleShare = async () => {
    const shareData = {
      title: '고민성 & 하세진의 결혼식',
      text: '저희 두 사람의 소중한 시작을 함께하는 자리에 귀한 발걸음 하시어 축복해 주시면 더없는 기쁨으로 간직하겠습니다.',
      url: window.location.href,
    };

    setIsShareAnimate(true);
    setTimeout(() => setIsShareAnimate(false), 500);

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShowShareToast(true);
        setTimeout(() => setShowShareToast(false), 2000);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setShowShareToast(true);
        setTimeout(() => setShowShareToast(false), 2000);
      }
    } catch (err) {
      if ((err as Error).name !== 'AbortError') {
        console.error('공유 실패:', err);
      }
    }
  };

  // 모달 열렸을 때 배경 스크롤 막기
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center px-4 pt-[60px]">
      {/* Backdrop - made lighter (60% opacity) */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content - made lighter (zinc-900 instead of #181818) */}
      <div className="relative bg-zinc-900 w-full max-w-md max-h-[85dvh] overflow-y-auto no-scrollbar rounded-lg shadow-2xl animate-in fade-in zoom-in duration-300 border border-white/10">
        {/* Close Button */}
        <button 
            onClick={onClose}
            className="absolute top-3 right-3 z-10 p-1 bg-black/50 rounded-full text-white hover:bg-black/70 transition-colors"
        >
            <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {/* Thumbnail Area */}
        <div className="relative aspect-video w-full">
            <Image
                src="https://fsxmagdvqbyyjapejdxm.supabase.co/storage/v1/object/public/wedding/GWA03358.jpg"
                alt="Wedding Still"
                fill
                sizes="(max-width: 768px) 100vw, 448px"
                className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent"></div>
            <div className="flex flex-row items-end absolute bottom-4 left-4">
                <h2 className="text-2xl font-black italic tracking-tighter text-white drop-shadow-lg mr-4">
                    THE WEDDING
                </h2>
                <h5 className="text-[10px] font-black italic tracking-tighter text-white drop-shadow-lg mb-1">
                    In Jeju
                </h5>
            </div>
        </div>

        {/* Info Area */}
        <div className="p-4 pt-0">
            {/* Meta Info */}
            <div className="flex items-center gap-3 mb-4 text-xs text-zinc-300 font-medium">
                <span className="text-[#46d369] font-bold">99% Match</span>
                <span>2026</span>
                <span className="border border-zinc-500 px-1 rounded-[2px] text-[10px]">ALL</span>
                <span>1 Season</span>
            </div>

            {/* Synopsis / Invitation Text */}
            <div className="space-y-4 mb-6">
                <p className="text-white text-sm leading-relaxed">
                    서로 다른 계절을 걷던 두 사람이 만나,<br/>
                    이제 같은 풍경을 바라보며 걸어가려 합니다.
                </p>
                <p className="text-zinc-400 text-xs leading-relaxed">
                    저희 두 사람의 소중한 시작을 함께하는 자리에<br/>
                    귀한 발걸음 하시어 축복해 주시면<br/>
                    더없는 기쁨으로 간직하겠습니다.
                </p>
            </div>

            {/* Cast & Crew Info */}
            <div className="space-y-1 text-xs mb-4">
                <div className="flex gap-1">
                    <span className="text-zinc-500">주연:</span>
                    <span className="text-zinc-300">고민성, 하세진</span>
                </div>
                <div className="flex gap-1">
                    <span className="text-zinc-500">감독:</span>
                    <span className="text-zinc-300">양가 부모님</span>
                </div>
                <div className="flex gap-1">
                    <span className="text-zinc-500">장르:</span>
                    <span className="text-zinc-300">로맨틱 코미디, 휴먼 드라마</span>
                </div>
            </div>
            
            <hr className="border-zinc-700 my-4"/>

            {/* Footer Actions */}
            <div className="flex gap-4 text-center">
                <div 
                    onClick={handleListToggle}
                    className={`flex-1 flex flex-col items-center gap-1 cursor-pointer transition-all duration-300 ${isAddedToList ? 'text-white' : 'hover:text-white text-zinc-400'}`}
                >
                    <span className={`material-symbols-outlined text-xl transition-transform duration-300 ${isListAnimate ? 'scale-150 -rotate-12' : 'scale-100'} ${isAddedToList ? 'filled' : ''}`}>
                        {isAddedToList ? 'check' : 'add'}
                    </span>
                    <span className="text-[10px]">{isAddedToList ? '리스트됨' : '내 리스트'}</span>
                </div>
                <div 
                    onClick={handleLike}
                    className={`flex-1 flex flex-col items-center gap-1 cursor-pointer transition-all duration-300 ${isLiked ? 'text-primary' : 'hover:text-white text-zinc-400'}`}
                >
                    <span className={`material-symbols-outlined text-xl transition-transform duration-300 ${isAnimate ? 'scale-150 rotate-12' : 'scale-100'} ${isLiked ? 'filled' : ''}`}>
                        thumb_up
                    </span>
                    <span className="text-[10px]">{isLiked ? '평가됨' : '평가'}</span>
                </div>
                <div 
                    onClick={handleShare}
                    className="flex-1 flex flex-col items-center gap-1 cursor-pointer hover:text-white text-zinc-400 transition-colors"
                >
                    <span className={`material-symbols-outlined text-xl transition-transform duration-500 ${isShareAnimate ? 'scale-150 rotate-[360deg]' : 'scale-100'}`}>
                        share
                    </span>
                    <span className="text-[10px]">공유</span>
                </div>
            </div>
            
            {/* Toasts */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 flex flex-col gap-2 pointer-events-none w-full items-center">
                {showToast && (
                    <div className="bg-primary/95 text-white px-4 py-2 rounded-full text-[11px] font-black shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-300">
                        나의 소중한 리스트에 담겼습니다 ❤️
                    </div>
                )}
                {showShareToast && (
                    <div className="bg-zinc-100 text-black px-4 py-2 rounded-full text-[11px] font-black shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-300">
                        초대장 링크가 복사되었습니다! 💌
                    </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
}
