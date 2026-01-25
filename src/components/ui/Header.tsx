import Image from "next/image";

export default function Header() {
  return (
    <header className="absolute top-0 z-50 w-full flex items-center justify-between px-4 py-4">
      <div className="flex items-center gap-1">
        <div className="bg-primary text-black px-1.5 py-0.5 font-black text-xl leading-none rounded-sm">
          SJ & MS
        </div>
        <h2 className="text-primary text-lg font-black tracking-tighter netflix-logo-text uppercase">
          Wedding
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-white text-2xl">
          search
        </span>
        <div className="size-8 rounded bg-zinc-800 flex items-center justify-center">
             <span className="material-symbols-outlined text-zinc-400 text-xl">person</span>
        </div>
      </div>
    </header>
  );
}
