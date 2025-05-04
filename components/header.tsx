'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
        <Link
          href="/"
          className={`text-lg font-normal text-white transition-colors ${
            pathname === '/'
              ? 'underline decoration-2 underline-offset-4'
              : 'hover:underline hover:underline-offset-4'
          }`}
        >
          Nicholas Chen
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <Link
            href="/about"
            className={`text-white transition-colors mx-4 ${
              pathname === '/about'
                ? 'underline decoration-2 underline-offset-4'
                : 'hover:underline hover:underline-offset-4'
            }`}
          >
            About
          </Link>
          <Link
            href="/blogs"
            className={`text-white transition-colors mx-4 ${
              pathname === '/blogs'
                ? 'underline decoration-2 underline-offset-4'
                : 'hover:underline hover:underline-offset-4'
            }`}
          >
            Blogs
          </Link>
          <Link
            href="/projects"
            className={`text-white transition-colors mx-4 ${
              pathname === '/projects'
                ? 'underline decoration-2 underline-offset-4'
                : 'hover:underline hover:underline-offset-4'
            }`}
          >
            Projects
          </Link>
          <div className="w-4"></div>
          <Link
            href="/resumev2.pdf"
            className="text-white hover:underline hover:underline-offset-4 transition-colors"
            target="_blank"
          >
            Resume
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 border-t border-stone-800">
          <nav className="flex flex-col p-4">
            <Link
              href="/about"
              className={`text-white transition-colors py-3 text-center text-lg ${
                pathname === '/about'
                  ? 'underline decoration-2 underline-offset-4'
                  : 'hover:underline hover:underline-offset-4'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/blogs"
              className={`text-white transition-colors py-3 text-center text-lg ${
                pathname === '/blogs'
                  ? 'underline decoration-2 underline-offset-4'
                  : 'hover:underline hover:underline-offset-4'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blogs
            </Link>
            <Link
              href="/projects"
              className={`text-white transition-colors py-3 text-center text-lg ${
                pathname === '/projects'
                  ? 'underline decoration-2 underline-offset-4'
                  : 'hover:underline hover:underline-offset-4'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/resumev2.pdf"
              className="text-white hover:underline hover:underline-offset-4 transition-colors py-3 text-center text-lg"
              onClick={() => setIsMenuOpen(false)}
              target="_blank"
            >
              Resume
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
