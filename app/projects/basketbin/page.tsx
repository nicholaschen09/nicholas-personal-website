import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function BasketBinProject() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <article className="max-w-4xl w-full space-y-8 pt-24 md:pt-16">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to homepage
        </Link>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          BasketBin
        </h1>
      </article>
      {/* Footer */}
      <footer className="w-full mt-8 pt-8">
        <div className="max-w-5xl mx-auto w-full">
          <hr className="border-t border-gray-700 mb-8" />
          <div className="flex flex-col items-center md:items-start">
            <p className="text-gray-400 mb-4">
              © 2025 Nicholas Chen. All rights reserved.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-8 pt-4 justify-center sm:justify-start">
              <Link
                href="https://www.linkedin.com/in/nicholas-chen-85886726a/"
                className="text-white hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src="/linkedin.png"
                    alt="LinkedIn"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/nicholaschen09"
                className="text-white hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src="/github.png"
                    alt="GitHub"
                    className="w-7 h-7 md:w-8 md:h-8"
                  />
                </div>
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="mailto:nicholas.chen243@gmail.com"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src="/email.png"
                    alt="Email"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="sr-only">Email</span>
              </Link>
            </div>

            <p className="text-gray-500 text-sm mt-6 text-center md:text-left">
              Designed and built by Nicholas Chen
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
