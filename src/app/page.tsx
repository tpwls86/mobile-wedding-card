import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import Trailer from "@/components/ui/Trailer";
import Episodes from "@/components/ui/Episodes";
import EventGrid from "@/components/ui/EventGrid";
import CastMembers from "@/components/ui/CastMembers";
import Guestbook from "@/components/ui/Guestbook";

export default function Home() {
  return (
    <div className="mobile-container shadow-2xl relative overflow-x-hidden pb-12 bg-black min-h-screen">
      <Header />
      
      {/* Scrollable Main Content */}
      <main className="max-w-md mx-auto pb-20 relative z-10 w-full">
        <Hero />
        
        {/* Overlapping Content Start */}
        <div className="space-y-4 -mt-4 relative z-20 pb-10 bg-gradient-to-b from-transparent via-[#000000] to-[#000000]">
             <Trailer />
             <Episodes />
             <EventGrid />
             <CastMembers />
             <Guestbook />
        </div>
        
        {/* Footer Area */}
        <footer className="px-6 pb-24 text-center text-zinc-700 text-[10px]">
            <p>Running Time: Forever</p>
            <p className="mt-2">© 2026 Minseong & Sejin Wedding.</p>
        </footer>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 inset-x-0 mx-auto max-w-[480px] z-[60] bg-[#121212] border-t border-white/5 px-6 pb-8 pt-2">
        <div className="flex justify-between items-end px-2">
          <a className="flex flex-col items-center gap-1 group w-14" href="#home">
             <div className="group-active:scale-90 transition-transform">
                <span className="material-symbols-outlined text-xl text-white group-hover:text-primary transition-colors">home</span>
             </div>
            <span className="text-[9px] text-white">Home</span>
          </a>
          
          <a className="flex flex-col items-center gap-1 group w-14" href="#story">
            <div className="group-active:scale-90 transition-transform">
                <span className="material-symbols-outlined text-xl text-zinc-500 group-hover:text-white transition-colors">video_library</span>
            </div>
            <span className="text-[9px] text-zinc-500 group-hover:text-white transition-colors">Our Story</span>
          </a>

          <a className="flex flex-col items-center gap-1 group w-14" href="#event">
            <div className="group-active:scale-90 transition-transform">
                <span className="material-symbols-outlined text-xl text-zinc-500 group-hover:text-white transition-colors">event_available</span>
            </div>
            <span className="text-[9px] text-zinc-500 group-hover:text-white transition-colors">RSVP</span>
          </a>

          <a className="flex flex-col items-center gap-1 group w-14" href="#guestbook">
            <div className="group-active:scale-90 transition-transform">
                <span className="material-symbols-outlined text-xl text-zinc-500 group-hover:text-white transition-colors">menu</span>
            </div>
            <span className="text-[9px] text-zinc-500 group-hover:text-white transition-colors">More</span>
          </a>
        </div>
      </nav>
      
      {/* Desktop Backgrounds */}
      <div className="hidden lg:block fixed inset-y-0 left-0 right-[calc(50%+240px)] bg-[#141414] z-[-1]"></div>
      <div className="hidden lg:block fixed inset-y-0 right-0 left-[calc(50%+240px)] bg-[#141414] z-[-1]"></div>
    </div>
  );
}
