export default function Loading() {
  return (
    <div className="max-w-md mx-auto h-[100dvh] bg-black flex flex-col items-center justify-center">
      <div className="relative">
        {/* Netflix style loading spinner */}
        <div className="size-12 border-4 border-zinc-800 border-t-primary rounded-full animate-spin"></div>
        <div className="mt-4 text-primary font-black italic tracking-tighter text-xl animate-pulse">
          N
        </div>
      </div>
    </div>
  );
}
