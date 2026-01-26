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

  useEffect(() => {
    fetchEntries();
  }, []);

  const fetchEntries = async () => {
    const { data, error } = await supabase
      .from('guestbook')
      .select('*')
      .order('created_at', { ascending: false });
    
    if (error) {
      console.error('Error fetching guestbook:', error);
    } else {
      setEntries(data || []);
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
      <div className="space-y-4 mb-12">
        {entries.length === 0 ? (
          <div className="text-center py-10 bg-zinc-900/30 rounded-xl border border-white/5">
            <p className="text-zinc-600 text-xs italic">"첫 번째 관람평을 남겨주세요."</p>
          </div>
        ) : (
          entries.map((entry) => (
            <div key={entry.id} className="p-4 bg-zinc-900/40 rounded-xl border border-white/5 hover:bg-zinc-900/60 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <p className="text-xs font-black text-zinc-100 uppercase tracking-tight">
                  {entry.name} <span className="text-zinc-600 font-medium ml-1">관객</span>
                </p>
                <span className="text-[10px] text-zinc-600 font-medium">
                  {new Date(entry.created_at).toLocaleDateString()}
                </span>
              </div>
              <p className="text-sm text-zinc-400 leading-relaxed font-medium">
                {entry.message}
              </p>
            </div>
          ))
        )}
      </div>

      {/* Input Area */}
      <div className="bg-zinc-900/50 p-6 rounded-2xl border border-white/5">
        <p className="text-zinc-100 font-bold text-xs mb-5 uppercase tracking-widest flex items-center gap-2">
            관람평 작성
        </p>
        
        <div className="space-y-3">
          <input 
              type="text" 
              placeholder="성함" 
              className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm focus:border-zinc-500 outline-none transition-all placeholder:text-zinc-700 text-zinc-200"
              value={name}
              onChange={(e) => setName(e.target.value)}
          />
          <textarea
            className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm focus:border-zinc-500 outline-none min-h-[100px] transition-all placeholder:text-zinc-700 resize-none text-zinc-200"
            placeholder="축하의 메시지를 남겨주세요."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button 
              onClick={handleSubmit} 
              disabled={loading}
              className="w-full bg-zinc-100 text-black py-3 rounded-lg font-bold text-xs disabled:opacity-50 hover:bg-white active:scale-[0.98] transition-all uppercase tracking-widest"
          >
            {loading ? '전송 중...' : '등록하기'}
          </button>
        </div>
      </div>
    </section>
  );
}
