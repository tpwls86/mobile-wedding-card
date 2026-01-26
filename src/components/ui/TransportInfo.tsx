'use client';

import React from 'react';

export default function TransportInfo() {
  const transportData = [
    {
      type: '셔틀버스 (Shuttle)',
      icon: 'airport_shuttle',
      details: [
        '호텔 셔틀: 공항에서 00시 출발'
      ]
    },
    {
      type: '대중교통 (Bus)',
      icon: 'directions_bus',
      details: [
        '공항에서 112 122 132번 버스 승차 후 [제주대학교입구]에서 하차',
        '[제주대학교입구]에서 441 442번 버스 환승 후 [별빛누리공원(HOTEL NANTA 앞)]에서 하차'
      ]
    },
    {
      type: '자가용/주차 (Parking)',
      icon: 'local_parking',
      details: [
        '한라산CC 맞은편 (별빛누리공원 앞)',
        '호텔 야외 주차장 및 별빛누리공원 이용 가능',
      ]
    }
  ];

  return (
    <section className="px-4 mb-20">
      <h3 className="text-white font-bold text-lg mb-6 pl-1 border-l-4 border-primary leading-none uppercase tracking-tighter">오시는 길</h3>
      
      <div className="bg-zinc-900 rounded-xl p-6 border border-white/5 space-y-8">
        {transportData.map((item, index) => (
          <div key={index} className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl">
                {item.icon}
              </span>
              <h4 className="text-zinc-200 font-bold text-sm tracking-tight">{item.type}</h4>
            </div>
            <ul className="space-y-1.5 ml-7">
              {item.details.map((detail, idx) => (
                <li key={idx} className="text-zinc-400 text-xs leading-relaxed flex items-start gap-2">
                  <span className="mt-1.5 size-1 rounded-full bg-zinc-700 shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
