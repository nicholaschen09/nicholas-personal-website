'use client';

import type React from 'react';
import { JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

import Script from 'next/script';

import { LanguageProvider } from '@/contexts/LanguageContext';
import { CommandPaletteProvider } from '@/contexts/CommandPaletteContext';
import CommandPalette from '@/components/CommandPalette';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
  weight: ['400', '700'],
});

const minecraft = localFont({
  src: '../public/fonts/MinecraftRegular-Bmg3.otf',
  variable: '--font-minecraft',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <CommandPaletteProvider>
        <html lang="en" className={`${jetbrainsMono.variable} ${minecraft.variable}`}>
        <head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />
          <link rel="icon" href="/favicon.ico" sizes="any" />
          <link rel="icon" href="/favicon.ico" type="image/x-icon" />
          <style
            dangerouslySetInnerHTML={{
              __html: `
            link[rel="icon"] {
              border-radius: 4px;
            }
          `,
            }}
          />
        </head>

        <body className={`bg-[#1a1a1a] min-h-screen antialiased`}>
          {/* Google Analytics Script */}
          <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-J6HJSY8DQ4"
          />
          <Script
            id="google-analytics-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-J6HJSY8DQ4', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
          {children}
          <CommandPalette />
        </body>
      </html>
      </CommandPaletteProvider>
    </LanguageProvider>
  );
}
