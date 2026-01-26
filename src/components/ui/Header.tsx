import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md z-50 transition-all duration-300 flex items-center justify-between px-4 py-4">
      <div className="flex items-center gap-1">
        <div className="bg-primary text-black px-1.5 py-0.5 font-black text-xl leading-none rounded-sm">
          SJ & MS
        </div>
        <h2 className="text-primary text-lg font-black tracking-tighter netflix-logo-text uppercase">
          Wedding
        </h2>
      </div>
      <div className="flex items-center gap-4">
      </div>
    </header>
  );
}
