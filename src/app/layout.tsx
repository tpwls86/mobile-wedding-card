import type { Metadata, Viewport } from 'next'
import { Spline_Sans } from 'next/font/google'
import './globals.css'

const splineSans = Spline_Sans({ 
  subsets: ['latin'],
  variable: '--font-spline-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '고민성 & 하세진의 결혼식',
  description: '2026년 3월 14일 토요일 오전 11시, 제주 호텔난타. 두 사람의 아름다운 시작을 함께해주세요.',
  openGraph: {
    title: '고민성 & 하세진의 결혼식',
    description: '2026년 3월 14일 토요일 오전 11시, 제주 호텔난타. 두 사람의 아름다운 시작을 함께해주세요.',
    url: 'https://mobile-web-invitation.vercel.app', // 나중에 실제 배포 주소로 변경 필요
    siteName: 'Netflix Wedding Invitation',
    images: [
      {
        url: 'https://fsxmagdvqbyyjapejdxm.supabase.co/storage/v1/object/public/wedding/GWA02445.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <head>
          <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className={`${splineSans.variable} font-display bg-zinc-900 text-white selection:bg-primary/30`}>
        {children}
      </body>
    </html>
  )
}
