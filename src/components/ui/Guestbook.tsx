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
    <section className="px-4 pb-4 scroll-mt-20" id="guestbook">
      <h3 className="text-white font-bold text-lg mb-6 pl-1 border-l-4 border-primary leading-none">기대평</h3>
      <div className="space-y-4 mb-6">
        {entries.length === 0 ? (
           <div className="text-center text-zinc-500 text-xs py-4 bg-surface/30 rounded-lg">
            첫번째 방명록을 남겨주세요!
           </div>
        ) : (
          entries.map((entry) => (
            <div key={entry.id} className="p-3 bg-surface/50 rounded-lg border-l-2 border-primary">
              <p className="text-sm font-bold mb-1">{entry.name}</p>
              <p className="text-xs text-zinc-400">"{entry.message}"</p>
            </div>
          ))
        )}
      </div>
      <div className="relative">
        <input 
            type="text" 
            placeholder="Your Name" 
            className="w-full bg-surface border border-white/10 rounded-lg p-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none mb-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <textarea
          className="w-full bg-surface border border-white/10 rounded-lg p-3 text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none min-h-[100px]"
          placeholder="Leave a message for the couple..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button 
            onClick={handleSubmit} 
            disabled={loading}
            className="mt-2 w-full bg-primary text-white py-3 rounded-md font-bold text-sm disabled:opacity-50 hover:bg-red-700 transition-colors"
        >
          {loading ? '등록중...' : '등록'}
        </button>
      </div>
    </section>
  );
}
