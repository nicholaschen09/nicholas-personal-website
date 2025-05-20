import type React from 'react';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Image from 'next/image';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  weight: ['400', '700'],
});

export const metadata = {
  title: 'Nicholas Chen | Portfolio',
  description:
    'Personal website of Nicholas Chen, Systems Design Engineering student',
  generator: 'v0.dev',
};

export const generateViewport = () => ({
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body
        className={`${jetbrainsMono.className} bg-[#1a1a1a] min-h-screen antialiased`}
      >
        {/* Cat sticker easter egg */}
        <div className="absolute top-60 right-60 z-50 pointer-events-none select-none" style={{ transform: 'rotate(12deg)' }}>
          <Image
            src="/ghcat.png"
            alt="Cat sticker"
            width={100}
            height={100}
            className="drop-shadow-lg rounded-xl border-2 border-white/60 opacity-90"
            priority
          />
        </div>
        <Header />
        {children}
      </body>
    </html>
  );
}

import './globals.css';
