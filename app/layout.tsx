import type { Metadata } from 'next';
import type React from 'react';
import { JetBrains_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

import Script from 'next/script';

import ClientProviders from '@/components/ClientProviders';

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

export const metadata: Metadata = {
  metadataBase: new URL('https://nicholaschen.me'),
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${minecraft.variable}`}>
      <body className={`bg-[#1a1a1a] min-h-screen antialiased`}>
        <ClientProviders>
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
        </ClientProviders>
      </body>
    </html>
  );
}
