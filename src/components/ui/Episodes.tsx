import Image from 'next/image';
import Link from 'next/link';

export default function Episodes() {
  const episodes = [
    {
      id: 1,
      title: "아랑디는 봄날, 아도록혼 보롬왓에서",
      desc: "아름다운 봄날, 바람 부는 들판에서",
      image: "https://fsxmagdvqbyyjapejdxm.supabase.co/storage/v1/object/public/wedding/story-1.jpg",
      duration: "20m"
    },
    {
      id: 2,
      title: "과랑과랑혼 벳디 곹이 아장 빙삭이",
      desc: "쨍쨍한 햇볕 아래 같이 앉아 빙그레",
      image: "https://fsxmagdvqbyyjapejdxm.supabase.co/storage/v1/object/public/wedding/story-2.jpg",
      duration: "45m"
    },
    {
        id: 3,
        title: "펠롱펠롱혼 눈빛으로 소랑한다 고르멍",
        desc: "반짝반짝한 눈빛으로 사랑한다 말하면서",
        image: "https://fsxmagdvqbyyjapejdxm.supabase.co/storage/v1/object/public/wedding/story-3.jpg",
        duration: "32m"
      }
  ];

  return (
    <section className="mb-8" id="story">
      <div className="flex justify-between items-center px-4 mb-2">
        <h3 className="text-white font-bold text-lg">우리들의 시간</h3>
        <Link href="/gallery" className="text-zinc-500 text-[11px] font-black hover:text-primary transition-colors tracking-tighter">
            모두 보기 &gt;
        </Link>
      </div>
      
      <div className="flex overflow-x-auto no-scrollbar gap-4 snap-x ml-4">
        <div className="w-2 shrink-0" aria-hidden="true" />
        {episodes.map((ep) => (
          <div key={ep.id} className="flex-none w-64 snap-start group cursor-pointer ">
            <div className="relative aspect-video bg-zinc-800 rounded-md overflow-hidden mb-2">
                <Image
                    src={ep.image}
                    alt={ep.title}
                    fill
                    sizes="256px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="material-symbols-outlined text-3xl text-white">play_circle</span>
                </div>
                <div className="absolute bottom-1 right-1 bg-black/60 px-1 rounded text-[10px] text-zinc-300">
                    {ep.duration}
                </div>
            </div>
            <h4 className="font-bold text-sm text-zinc-100 mb-0.5 leading-tight">{ep.title}</h4>
            <p className="text-zinc-500 text-[10px] leading-snug line-clamp-2">{ep.desc}</p>
          </div>
        ))}
        <div className="w-2 shrink-0" aria-hidden="true" />
      </div>
    </section>
  );
}
