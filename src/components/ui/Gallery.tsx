import Image from "next/image";

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1511285560982-1351cdeb9820?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522673607200-1645062cd958?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1623788506144-d8db2ba321dd?q=80&w=800&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=800&auto=format&fit=crop"
  ];

  return (
    <section id="gallery" className="scroll-mt-20">
      <div className="flex items-center justify-between px-6 mb-3">
        <h2 className="text-lg font-bold">미리보기</h2>
        <span className="text-zinc-500 text-xs font-semibold">모두 보기 &gt;</span>
      </div>
      <div className="flex overflow-x-auto no-scrollbar px-6 gap-3 snap-x pb-4">
        {images.map((src, i) => (
          <div key={i} className="flex-none w-32 aspect-[2/3] bg-zinc-800 rounded-md overflow-hidden snap-start relative group">
            <Image
                src={src}
                alt={`Gallery ${i}`}
                fill
                className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
