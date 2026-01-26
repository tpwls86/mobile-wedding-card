import Image from 'next/image';

export default function Trailer() {
  return (
    <section className="px-4 mb-8">
      <h3 className="text-white font-bold text-lg mb-2 pl-1 border-l-4 border-primary leading-none">Trailer</h3>
      <div className="relative w-full aspect-video bg-zinc-800 rounded-md overflow-hidden group cursor-pointer">
        {/* Placeholder for trailer thumbnail */}
        <div
            className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity"
        >
            <Image
                src="https://fsxmagdvqbyyjapejdxm.supabase.co/storage/v1/object/public/wedding/trailer-thumb.jpg"
                alt="Wedding Trailer"
                fill
                sizes="(max-width: 768px) 100vw, 448px"
                className="object-cover"
            />
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="size-12 rounded-full bg-black/50 border border-white/50 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl text-white filled">play_arrow</span>
            </div>
        </div>
      </div>
    </section>
  );
}
