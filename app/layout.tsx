import type { Metadata } from "next";
import type React from "react";
import { Merriweather } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-merriweather",
  display: "swap",
});

export const metadata: Metadata = {
  title: "amaan",
  metadataBase: new URL("https://amaandoes.tech"),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={merriweather.variable}>
      <body className="bg-[#1a1a1a] min-h-screen antialiased font-serif">{children}</body>
    </html>
  );
}
