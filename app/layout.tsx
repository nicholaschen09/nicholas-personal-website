import type React from 'react';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Nicholas Chen | Portfolio',
  description:
    'Personal portfolio of Nicholas Chen, Systems Design Engineering student',
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
    <html lang="en">
      <body
        className={`${inter.className} bg-black bg-dotted-pattern min-h-screen`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

import './globals.css';
