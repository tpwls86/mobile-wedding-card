'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase/client';

type GuestbookEntry = {
  id: number;
  name: string;
  message: string;
  emoji: string;
  password: string;
  created_at: string;
};

const EMOJIS = ['😊', '💍', '💖', '🥂', '✨', '💐'];

export default function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [password, setPassword] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState(EMOJIS[0]);
  const [loading, setLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  // 삭제 모달 관련 상태
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [correctPassword, setCorrectPassword] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const { data, error } = await supabase
        .from('storybook')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) {
        console.error('Error fetching guestbook:', error);
      } else {
        setEntries(data || []);
      }
    } finally {
      setIsInitialLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!name.trim() || !message.trim() || !password.trim()) {
      alert('성함, 메시지, 비밀번호를 모두 입력해 주세요.');
      return;
    }
    setLoading(true);

    const { error } = await supabase
      .from('storybook')
      .insert([{ 
        name, 
        message, 
        password, 
        emoji: selectedEmoji 
      }]);

    if (error) {
      alert('Error posting message. Please check your connection and Supabase settings.');
      console.error(error);
    } else {
      setName('');
      setMessage('');
      setPassword('');
      fetchEntries();
    }
    setLoading(false);
  };

  const openDeleteModal = (id: number, pass: string) => {
    setDeletingId(id);
    setCorrectPassword(pass);
    setInputPassword('');
    setIsDeleteModalOpen(true);
  };

  const handleDelete = async () => {
    if (inputPassword !== correctPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    setIsDeleting(true);
    const { error } = await supabase
      .from('storybook')
      .delete()
      .eq('id', deletingId);

    if (error) {
      alert('삭제 중 오류가 발생했습니다.');
      console.error(error);
    } else {
      setIsDeleteModalOpen(false);
      fetchEntries();
    }
    setIsDeleting(false);
  };

  return (
    <section className="px-4 pb-10" id="guestbook">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-white font-bold text-lg leading-none uppercase tracking-tighter border-b-2 border-primary pb-1">Audience Reviews</h3>
        <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">{entries.length} Messages</span>
      </div>

      {/* Review List */}
      <div className="space-y-4 mb-16">
        {isInitialLoading ? (
          // Skeleton UI
          [1, 2, 3].map((i) => (
            <div key={i} className="p-5 bg-zinc-900/40 rounded-2xl border border-white/5 animate-pulse">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-full bg-zinc-800"></div>
                  <div className="h-3 w-16 bg-zinc-800 rounded"></div>
                </div>
                <div className="h-2 w-12 bg-zinc-800 rounded"></div>
              </div>
              <div className="space-y-2">
                <div className="h-3 w-full bg-zinc-800 rounded"></div>
                <div className="h-3 w-2/3 bg-zinc-800 rounded"></div>
              </div>
            </div>
          ))
        ) : entries.length === 0 ? (
          <div className="text-center py-12 bg-zinc-900/40 rounded-2xl border border-white/5 shadow-inner">
            <span className="material-symbols-outlined text-zinc-700 text-3xl mb-2 opacity-50">edit_note</span>
            <p className="text-zinc-600 text-xs italic tracking-wide">"아직 남겨진 응원이 없어요."</p>
          </div>
        ) : (
          entries.map((entry) => (
            <div key={entry.id} className="p-5 bg-zinc-900/60 rounded-2xl border border-white/10 hover:border-primary/30 transition-all duration-300 shadow-sm relative overflow-hidden group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="size-8 flex items-center justify-center text-lg">
                    {entry.emoji || '😊'}
                  </div>
                  <p className="text-xs font-black text-zinc-100 uppercase tracking-tight">
                    {entry.name} <span className="text-zinc-600 font-bold ml-0.5 text-[9px]">관객</span>
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] text-zinc-600 font-bold tracking-tighter">
                    {new Date(entry.created_at).toLocaleDateString()}
                  </span>
                  <button 
                    onClick={() => openDeleteModal(entry.id, entry.password)}
                    className="size-6 flex items-center justify-center rounded-full bg-zinc-800 text-zinc-400 hover:bg-primary hover:text-white transition-all active:scale-90 shadow-sm"
                    title="삭제"
                  >
                    <span className="material-symbols-outlined text-[14px]">close</span>
                  </button>
                </div>
              </div>
              <p className="text-[13px] text-zinc-300 leading-relaxed font-medium pl-1 border-l-2 border-zinc-800 group-hover:border-primary/20 transition-colors">
                {entry.message}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Input Area */}
      <div className="bg-zinc-900/80 p-8 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
        
        <div className="flex items-center gap-2 mb-6">
            <span className="material-symbols-outlined text-primary text-xl filled">edit_square</span>
            <p className="text-zinc-100 font-black text-xs uppercase tracking-[0.2em]">
                Leave a Message
            </p>
        </div>
        
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-5">
            {/* Emoji Selector */}
            <div className="flex justify-between items-center bg-black/40 p-2 rounded-xl border border-white/5 overflow-x-auto no-scrollbar">
                {EMOJIS.map(emoji => (
                    <button
                        key={emoji}
                        type="button"
                        onClick={() => setSelectedEmoji(emoji)}
                        className={`size-12 flex-none flex items-center justify-center rounded-lg text-2xl transition-all ${selectedEmoji === emoji ? 'bg-zinc-800 scale-125 border border-white/10' : 'opacity-30 hover:opacity-100'}`}
                    >
                        {emoji}
                    </button>
                ))}
            </div>

          <div className="grid grid-cols-2 gap-3">
            <input 
                type="text" 
                placeholder="성함" 
                autoComplete="name"
                className="w-full bg-black/60 border border-white/10 rounded-xl p-4 text-sm focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all placeholder:text-zinc-700 text-zinc-100 shadow-inner"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input 
                type="password" 
                placeholder="비밀번호" 
                autoComplete="new-password"
                className="w-full bg-black/60 border border-white/10 rounded-xl p-4 text-sm focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all placeholder:text-zinc-700 text-zinc-100 shadow-inner"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="relative">
            <textarea
              className="w-full bg-black/60 border border-white/10 rounded-xl p-4 text-sm focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none min-h-[120px] transition-all placeholder:text-zinc-700 resize-none text-zinc-100 shadow-inner"
              placeholder="따뜻한 축하의 메시지를 남겨주세요."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button 
              type="submit"
              disabled={loading}
              className="w-full bg-primary text-white py-4 rounded-xl font-black text-xs disabled:opacity-50 hover:bg-red-700 active:scale-[0.98] transition-all uppercase tracking-[0.2em] shadow-[0_10px_20px_rgba(229,9,20,0.2)]"
          >
            {loading ? (
                <span className="flex items-center justify-center gap-2">
                    <span className="size-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    전송 중
                </span>
            ) : '등록하기'}
          </button>
        </form>
      </div>

      {/* Custom Delete Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
            <div 
                className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300"
                onClick={() => setIsDeleteModalOpen(false)}
            ></div>
            <form onSubmit={(e) => { e.preventDefault(); handleDelete(); }} className="relative bg-zinc-900 w-full max-w-xs p-6 rounded-2xl border border-white/10 shadow-2xl animate-in fade-in zoom-in duration-300">
                <h4 className="text-white font-bold text-base mb-2">메시지 삭제</h4>
                <p className="text-zinc-400 text-xs mb-6 leading-relaxed">
                    작성 시 설정한 비밀번호를 입력해 주세요.<br/>삭제된 글은 복구할 수 없습니다.
                </p>
                
                <input 
                    type="text" 
                    name="username" 
                    autoComplete="username" 
                    value="guest" 
                    readOnly 
                    className="hidden" 
                />
                <input 
                    type="password" 
                    placeholder="비밀번호" 
                    autoComplete="current-password"
                    className="w-full bg-black/40 border border-white/10 rounded-xl p-4 text-sm focus:border-primary/50 outline-none transition-all text-zinc-100 mb-6"
                    value={inputPassword}
                    onChange={(e) => setInputPassword(e.target.value)}
                    autoFocus
                />
                
                <div className="flex gap-3">
                    <button 
                        type="button"
                        onClick={() => setIsDeleteModalOpen(false)}
                        className="flex-1 bg-zinc-800 text-zinc-300 py-3 rounded-xl font-bold text-xs hover:bg-zinc-700 transition-colors"
                    >
                        취소
                    </button>
                    <button 
                        type="submit"
                        disabled={isDeleting}
                        className="flex-1 bg-primary text-white py-3 rounded-xl font-bold text-xs hover:bg-red-700 disabled:opacity-50 transition-all"
                    >
                        {isDeleting ? '삭제 중...' : '삭제하기'}
                    </button>
                </div>
            </form>
        </div>
      )}
    </section>
  );
}
