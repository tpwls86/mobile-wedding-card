export default function Location() {
  return (
    <section className="px-6 scroll-mt-20" id="location">
      <h2 className="text-lg font-bold mb-4">촬영 장소 (Location)</h2>
      <div className="bg-zinc-800 rounded-md overflow-hidden border border-white/10">
        <div className="h-48 w-full relative bg-zinc-900 group cursor-pointer">
           {/* Map Placeholder using Unsplash for now, typically would use Kakao Map API */}
           <div 
             className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity"
             style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?q=80&w=800&auto=format&fit=crop")'}}
           ></div>
           
           <div className="absolute inset-0 flex items-center justify-center">
                <div className="size-12 bg-primary/90 text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white animate-bounce">
                    <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
           </div>
        </div>
        <div className="p-4 bg-zinc-900/95 backdrop-blur">
          <h3 className="font-bold text-base mb-1">더 채플 앳 논현</h3>
          <p className="text-zinc-400 text-xs leading-snug mb-3">
            서울 강남구 논현로 549<br/>
            (언주역 7번 출구 도보 3분)
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button className="bg-white text-black py-2 rounded-[4px] text-xs font-bold hover:bg-zinc-200">
                네이버 지도
            </button>
            <button className="bg-zinc-800 text-white border border-white/10 py-2 rounded-[4px] text-xs font-bold hover:bg-zinc-700">
                카카오맵
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
