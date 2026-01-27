'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/utils/supabase/client';

type GuestbookEntry = {
  id: number;
  name: string;
  message: string;
  created_at: string;
};

export default function Guestbook() {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    try {
      const { data, error } = await supabase
        .from('guestbook')
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
    if (!name.trim() || !message.trim()) return;
    setLoading(true);

    const { error } = await supabase
      .from('guestbook')
      .insert([{ name, message }]);

    if (error) {
      alert('Error posting message. Please check your connection and Supabase settings.');
      console.error(error);
    } else {
      setName('');
      setMessage('');
      fetchEntries();
    }
    setLoading(false);
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
                  <div className="size-6 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 border border-white/5">
                    <span className="material-symbols-outlined text-[14px]">person</span>
                  </div>
                  <p className="text-xs font-black text-zinc-100 uppercase tracking-tight">
                    {entry.name} <span className="text-zinc-600 font-bold ml-0.5 text-[9px]">관객</span>
                  </p>
                </div>
                <span className="text-[10px] text-zinc-600 font-bold tracking-tighter">
                  {new Date(entry.created_at).toLocaleDateString()}
                </span>
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
        
        <div className="space-y-4">
          <div className="relative">
            <input 
                type="text" 
                placeholder="성함" 
                className="w-full bg-black/60 border border-white/10 rounded-xl p-4 text-sm focus:border-primary/50 focus:ring-1 focus:ring-primary/20 outline-none transition-all placeholder:text-zinc-700 text-zinc-100 shadow-inner"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
              onClick={handleSubmit} 
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
        </div>
      </div>
    </section>
  );
}
