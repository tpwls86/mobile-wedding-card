import Image from "next/image";
import Link from "next/link";
import { WEDDING_IMAGES } from "@/constants/images";

export default function Gallery() {
  const previewImages = WEDDING_IMAGES.slice(0, 6);

  return (
    <section id="gallery" className="scroll-mt-20">
      <div className="flex items-center justify-between px-6 mb-3">
        <h2 className="text-lg font-bold italic tracking-tight">Gallery</h2>
        <Link href="/gallery" className="text-zinc-500 text-[11px] font-black hover:text-primary transition-colors tracking-tighter">
            SEE ALL &gt;
        </Link>
      </div>
      <div className="flex overflow-x-auto no-scrollbar px-6 gap-3 snap-x pb-4">
        {previewImages.map((src, i) => (
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
