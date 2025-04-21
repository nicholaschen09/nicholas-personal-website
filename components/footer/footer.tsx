import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full -mt-20 pt-8">
      <div className="max-w-6xl mx-auto w-full">
        <hr className="border-t border-gray-700 mb-8" />
        <div className="flex flex-col items-center md:items-start">
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
            <Link
              href="https://x.com/nicholaschen__"
              className="text-white hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-7 h-8 flex items-center justify-center relative">
                <img
                  src="/twitter.png"
                  alt="Twitter"
                  className="max-w-full max-h-full object-contain translate-y-1 translate-x-1"
                />
              </div>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="linktree.png"
              className="text-white hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-8 h-8 flex items-center justify-center mt-0.5 ml-1">
                <img
                  src="/linktree.png"
                  alt="Linktree"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <span className="sr-only">Linktree</span>
            </Link>
          </div>
          <p className="text-gray-400 mt-8 mb-4">© 2025 Nicholas Chen.</p>
        </div>
      </div>
    </footer>
  );
}
