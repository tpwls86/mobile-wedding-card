export default function SaveTheDate() {
    return (
      <section className="px-4 scroll-mt-20" id="info">
        <div className="flex gap-4">
            {/* Top 10 Badge Style Date */}
          <div className="flex flex-col items-center pt-2 min-w-[3rem]">
            <span className="text-zinc-500 text-[10px] font-bold uppercase mb-[-4px]">MAR</span>
            <span className="text-4xl font-black text-white/90 tracking-tighter" style={{ textShadow: "0 0 10px rgba(0,0,0,0.5)"}}>14</span>
          </div>
          
          <div className="flex-1 bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm rounded-xl p-4 border border-white/10 shadow-xl">
            <div className="flex items-start justify-between mb-2">
                <div>
                     <h2 className="text-primary text-[10px] font-bold uppercase tracking-widest mb-1">공개 예정</h2>
                    <h3 className="text-lg font-bold leading-tight">3월 14일 토요일<br/>오전 11시 00분</h3>
                </div>
                <span className="bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-sm">
                    D-DAY
                </span>
            </div>
            <p className="text-zinc-400 text-xs mb-4 leading-relaxed">
              가장 아름다운 순간, 그 시작을 함께해주세요.<br/>
              잊지 않도록 알림 설정을 켜두세요.
            </p>
            <div className="flex gap-3">
              <button className="flex flex-col items-center gap-1 group">
                <div className="p-2 rounded-full bg-white/10 group-active:bg-white/20 transition-colors">
                    <span className="material-symbols-outlined text-lg">notifications</span>
                </div>
                <span className="text-[10px] text-zinc-400">알림받기</span>
              </button>
              <button className="flex flex-col items-center gap-1 group">
                <div className="p-2 rounded-full bg-white/10 group-active:bg-white/20 transition-colors">
                    <span className="material-symbols-outlined text-lg">share</span>
                </div>
                <span className="text-[10px] text-zinc-400">공유하기</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }
