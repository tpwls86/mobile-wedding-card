'use client';

import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk"

export default function KakaoMap() {
  const [loading, error] = useKakaoLoader({
    appkey: process.env.NEXT_PUBLIC_KAKAO_APP_KEY as string, 
  })

  // 제주 호텔난타 좌표
  // 위도(lat): 33.4455968
  // 경도(lng): 126.5475578
  const center = { lat: 33.4455968, lng: 126.5475578 };

  if (loading || error) {
      return (
        <div className="w-full h-full bg-zinc-800 animate-pulse flex items-center justify-center text-xs text-zinc-500">
            {error ? "지도를 불러올 수 없습니다." : "지도 로딩 중..."}
        </div>
      )
  }

  return (
    <Map 
        center={center} 
        style={{ width: "100%", height: "100%" }}
        level={3} // 확대 레벨
    >
        <MapMarker position={center}>
            {/* 마커 클릭 시 나타날 정보 (선택 사항) */}
            {/* <div style={{padding: "5px", color: "#000"}}>호텔난타</div> */}
        </MapMarker>
    </Map>
  )
}
