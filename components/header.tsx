'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
        <Link
          href="/"
          className="text-lg font-normal text-white hover:text-gray-300 transition-colors"
        >
          Nicholas Chen
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/about"
            className="text-white hover:text-gray-300 transition-colors mx-4"
          >
            About
          </Link>
          <Link
            href="/resumeme.pdf"
            className="text-white hover:text-gray-300 transition-colors mx-40"
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
        <div className="md:hidden bg-black bg-opacity-95 border-t border-gray-800">
          <nav className="flex flex-col p-4">
            <Link
              href="/about"
              className="text-white hover:text-gray-300 transition-colors py-3 text-center text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/resumeme.pdf"
              className="text-white hover:text-gray-300 transition-colors py-3 text-center text-lg"
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
