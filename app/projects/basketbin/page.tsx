import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export default function Project() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <article className="max-w-4xl w-full space-y-8 pt-24 md:pt-16">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-6">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to homepage
        </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            BasketBin
          </h1>
      </article>
    </main>
  )
}