'use client';
import type React from 'react';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Image from 'next/image';
import { useState, useRef } from 'react';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  weight: ['400', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Set a smaller initial position for mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const [catPos, setCatPos] = useState({ x: isMobile ? 20 : 60, y: isMobile ? 20 : 60 });
  const [dragging, setDragging] = useState(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setDragging(true);
    dragOffset.current = {
      x: e.clientX - catPos.x,
      y: e.clientY - catPos.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!dragging) return;
    setCatPos({
      x: e.clientX - dragOffset.current.x,
      y: e.clientY - dragOffset.current.y,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  // Touch support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setDragging(true);
    const touch = e.touches[0];
    dragOffset.current = {
      x: touch.clientX - catPos.x,
      y: touch.clientY - catPos.y,
    };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!dragging) return;
    const touch = e.touches[0];
    setCatPos({
      x: touch.clientX - dragOffset.current.x,
      y: touch.clientY - dragOffset.current.y,
    });
  };

  const handleTouchEnd = () => {
    setDragging(false);
  };

  return (
    <html lang="en" className={jetbrainsMono.variable}>
      <body
        className={`${jetbrainsMono.className} bg-[#1a1a1a] min-h-screen antialiased`}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Cat sticker easter egg */}
        <div
          className={`absolute z-[9999] select-none ${dragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          style={{
            top: catPos.y,
            left: catPos.x,
            transform: 'rotate(12deg)',
          }}
        >
          <Image
            src="/ghcat.png"
            alt="Cat sticker"
            width={150}
            height={150}
            className="drop-shadow-lg rounded-xl border-2 border-white/60 opacity-90 w-[80px] h-[80px] md:w-[150px] md:h-[150px]"
            priority
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            draggable={false}
          />
        </div>
        <Header />
        {children}
      </body>
    </html>
  );
}

import './globals.css';
