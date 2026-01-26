import Image from "next/image";
import KakaoMap from "./KakaoMap";

export default function EventGrid() {
  // 2026년 3월 달력 데이터 생성
  // 3월 1일은 일요일(Index 0)
  const daysInMonth = 31;
  const startDay = 0; // Sunday
  
  const calendarDays = [];
  // 빈 날짜 채우기
  for (let i = 0; i < startDay; i++) {
    calendarDays.push(null);
  }
  // 1일부터 31일까지 채우기
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const weekDays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  return (
    <section className="px-4 mb-20 scroll-mt-20" id="event">
      <h3 className="text-white font-bold text-lg mb-6 pl-1 border-l-4 border-primary leading-none">상세 내용</h3>
      
      <div className="space-y-8">
        {/* WHEN Section */}
        <div className="bg-zinc-900 rounded-xl p-6 border border-white/5">
            <h4 className="text-primary font-bold text-sm tracking-widest mb-2 uppercase">When</h4>
            <p className="text-2xl font-black text-white mb-6 leading-tight">
                2026. 03. 14<br/>
                <span className="text-lg font-bold text-zinc-300">SATURDAY 11:00 AM</span>
            </p>

            {/* Calendar UI */}
            <div className="w-full max-w-xs mx-auto bg-zinc-800/50 p-4 rounded-lg">
                <p className="text-center font-bold text-white mb-4">March 2026</p>
                <div className="grid grid-cols-7 gap-1 text-center mb-2">
                    {weekDays.map(day => (
                        <div key={day} className={`text-[10px] font-bold ${day === 'SUN' ? 'text-red-500' : 'text-zinc-500'}`}>
                            {day}
                        </div>
                    ))}
                </div>
                <div className="grid grid-cols-7 gap-1 text-center">
                    {calendarDays.map((day, index) => {
                        const isWeddingDay = day === 14;
                        const isSunday = index % 7 === 0;
                        return (
                            <div key={index} className="aspect-square flex items-center justify-center relative">
                                {day && (
                                    <>
                                        {isWeddingDay && (
                                            <div className="absolute inset-0 m-1 bg-red-600 rounded-full opacity-80 animate-pulse"></div>
                                        )}
                                        <span className={`text-sm relative z-10 font-medium ${
                                            isWeddingDay ? 'text-white font-bold' : 
                                            isSunday ? 'text-red-400' : 'text-zinc-300'
                                        }`}>
                                            {day}
                                        </span>
                                    </>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>

        {/* WHERE Section */}
        <div className="bg-zinc-900 rounded-xl p-6 border border-white/5">
            <h4 className="text-primary font-bold text-sm tracking-widest mb-2 uppercase">Where</h4>
            <p className="text-xl font-bold text-white mb-1">호텔난타</p>
            <p className="text-zinc-400 text-sm mb-6">제주 제주시 선돌목동길 56-26</p>

            {/* Map Placeholder */}
            <div className="relative w-full aspect-video bg-zinc-800 rounded-lg overflow-hidden mb-4 border border-white/10 group">
                <KakaoMap />
            </div>

            <div className="grid grid-cols-2 gap-3">
                <a 
                    href="https://map.naver.com/p/search/%EC%A0%9C%EC%A3%BC%20%ED%98%B8%ED%85%94%EB%82%9C%ED%83%80" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#03C75A] text-white py-3 rounded-md font-bold text-sm hover:opacity-90 transition-opacity"
                >
                    <span>NAVER 지도</span>
                </a>
                <a 
                    href="https://map.kakao.com/link/search/%EC%A0%9C%EC%A3%BC%20%ED%98%B8%ED%85%94%EB%82%9C%ED%83%80" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-[#FEE500] text-black py-3 rounded-md font-bold text-sm hover:opacity-90 transition-opacity"
                >
                    <span>KAKAO 맵</span>
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}
