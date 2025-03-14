import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Nicholas Chen | Portfolio",
  description: "Personal portfolio of Nicholas Chen, Systems Design Engineering student",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black bg-dotted-pattern min-h-screen`}>
        <Header />
        {children}
      </body>
    </html>
  )
}



import './globals.css'