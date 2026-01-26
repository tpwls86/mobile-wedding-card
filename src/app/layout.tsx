import type { Metadata, Viewport } from 'next'
import { Spline_Sans } from 'next/font/google'
import './globals.css'

const splineSans = Spline_Sans({ 
  subsets: ['latin'],
  variable: '--font-spline-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: '고민성 ❤️ 하세진',
  description: '2026년 3월 14일 토요일 오전 11시, 제주 호텔난타. 두 사람의 아름다운 시작을 함께해주세요.',
  openGraph: {
    title: '고민성 ❤️ 하세진',
    description: '03. 14. SAT. AM 11:00. 제주 호텔난타. 저희 두 사람의 시작을 축복해주세요.',
    url: 'https://mobile-web-invitation.vercel.app',
    siteName: '고민성 ❤️ 하세진',
    images: [
      {
        url: '/images/SEO_PIC.jpg',
        width: 800,
        height: 400,
        alt: '고민성 ❤️ 하세진 초대장',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '고민성 ❤️ 하세진 우리 결혼합니다',
    description: '2026. 03. 14. SAT. AM 11:00. 제주 호텔난타.',
    images: ['/images/SEO_PIC.jpg'],
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
    <html lang="ko" className="dark" suppressHydrationWarning>
      <head>
          <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
      </head>
      <body className={`${splineSans.variable} font-display bg-black text-white selection:bg-primary/30`}>
        {children}
      </body>
    </html>
  )
}
