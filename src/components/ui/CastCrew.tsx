import Image from "next/image";

export default function CastCrew() {
  return (
    <section className="px-6 scroll-mt-20" id="cast">
      <h2 className="text-lg font-bold mb-4">주연 (Cast)</h2>
      <div className="space-y-4">
        {/* Bride */}
        <div className="flex items-center gap-4 group">
          <div className="relative size-24 rounded-lg overflow-hidden shrink-0 border border-white/10 ring-2 ring-transparent group-hover:ring-primary/50 transition-all">
            <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop"
                alt="Bride"
                fill
                className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
                <span className="text-primary text-[10px] font-bold uppercase tracking-wider bg-primary/10 px-1.5 py-0.5 rounded">신부</span>
            </div>
            <h4 className="font-bold text-lg leading-tight mb-1">김민지</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              "넷플릭스 없인 못 사는 집순이.<br/>지훈이를 만나고 세상 밖으로 나왔습니다."
            </p>
          </div>
        </div>

        {/* Groom */}
        <div className="flex items-center gap-4 group">
          <div className="relative size-24 rounded-lg overflow-hidden shrink-0 border border-white/10 ring-2 ring-transparent group-hover:ring-primary/50 transition-all">
            <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop"
                alt="Groom"
                fill
                className="object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
                <span className="text-primary text-[10px] font-bold uppercase tracking-wider bg-primary/10 px-1.5 py-0.5 rounded">신랑</span>
            </div>
            <h4 className="font-bold text-lg leading-tight mb-1">이지훈</h4>
            <p className="text-zinc-400 text-xs leading-relaxed">
              "민지 플레이리스트의 영원한 구독자.<br/>평생 함께 정주행하고 싶습니다."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
