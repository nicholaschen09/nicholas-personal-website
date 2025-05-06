'use client';
import Footer from '@/components/footer/footer';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-24 pt-20 md:pt-16">
      <div className="max-w-6xl w-full">
        {/* Two-column layout: About text and Image */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-4 order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-10 mt-10">
              Hey I'm Nicholas!
            </h1>
            <div className="text-base sm:text-lg text-stone-300 min-h-[150px] md:min-h-[120px]">
              <TypeAnimation
                sequence={[
                  "Hello! I'm a Systems Design Engineering student at the University of Waterloo. In the past, I've worked at companies like Ownr, RBC and Meta Hash Capital where I made some pretty cool things.",
                  1000,
                ]}
                wrapper="p"
                speed={50}
                className="text-base sm:text-lg text-stone-400"
                repeat={0}
              />
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-8 pt-1 justify-center sm:justify-start">
              <Link
                href="https://www.linkedin.com/in/nicholas-chen-85886726a/"
                className="text-white hover:text-stone-300 transition-colors"
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
                className="text-white hover:text-stone-300 transition-colors"
              >
                <div className="w-12 h-8 flex items-center justify-center mt-1">
                  <img
                    src="/github1.png"
                    alt="GitHub"
                    className="w-10 h-10 md:w-12 md:h-12"
                  />
                </div>
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="mailto:nicholas.chen243@gmail.com"
                className="text-white hover:text-stone-300 transition-colors"
              >
                <div className="w-11 h-12 flex items-center justify-center relative -top-1">
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
                className="text-white hover:text-stone-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-11 h-8 flex items-center justify-center relative">
                  <img
                    src="/twitter.png"
                    alt="Twitter"
                    className="max-w-full max-h-full object-contain translate-y-1 translate-x-1"
                  />
                </div>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linktr.ee/nicholas.chen__"
                className="text-white hover:text-stone-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-8 h-8 flex items-center justify-center mt-0.5">
                  <img
                    src="/linktree.png"
                    alt="Linktree"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="sr-only">Linktree</span>
              </Link>
            </div>
          </div>
        </div>
        <section className="">
          <h2 className="text-4xl font-bold text-white mt-8 mb-4">
            Contact Me
          </h2>
          <p className="text-stone-400 text-base">
            I'd love to hear from you! Want to hire me? or simply wanna chat?
            Feel free to reach out by{' '}
            <a
              href="mailto:nicholas.chen243@gmail.com"
              className="text-pink-500 hover:underline transition-colors"
            >
              email
            </a>
            , or connect with me on{' '}
            <a
              href="https://www.linkedin.com/in/nicholas-chen-85886726a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:underline transition-colors"
            >
              linkedin
            </a>
            .
          </p>
        </section>

        {/* Experience, Education, Community, Awards Section */}
        <div className="space-y-8 mt-10 md:mt-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white border-b border-stone-700 pb-2">
            Some of the Cool Things I've Done
          </h2>

          {/* Work Experience */}
          <section>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 md:mb-4">
              Work Experience
            </h3>
            <div className="space-y-5 md:space-y-6">
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h4 className="text-lg sm:text-xl font-semibold text-white">
                    Software Engineer Intern
                  </h4>
                  <span className="text-stone-400 text-sm sm:text-base">
                    Jan 2025 - April 2025
                  </span>
                </div>
                <p className="text-stone-300 font-medium">Ownr - RBCx</p>
                <p className="text-stone-400 text-sm sm:text-base">
                  Full-stack web development and infrastructure
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h4 className="text-lg sm:text-xl font-semibold text-white">
                    Innovation Developer Intern
                  </h4>
                  <span className="text-stone-400 text-sm sm:text-base">
                    Jul 2024 - Aug 2024
                  </span>
                </div>
                <p className="text-stone-300 font-medium">
                  Royal Bank of Canada
                </p>
                <p className="text-stone-400 text-sm sm:text-base">
                  Machine learning
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h4 className="text-lg sm:text-xl font-semibold text-white">
                    UX Design Intern
                  </h4>
                  <span className="text-stone-400 text-sm sm:text-base">
                    Mar 2023 - Aug 2023
                  </span>
                </div>
                <p className="text-stone-300 font-medium">Meta Hash Capital</p>
                <p className="text-stone-400 text-sm sm:text-base">Figma</p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 md:mb-4">
              Education
            </h3>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <h4 className="text-lg sm:text-xl font-semibold text-white">
                  Systems Design Engineering
                </h4>
                <span className="text-stone-400 text-sm sm:text-base">
                  2024 - 2029
                </span>
              </div>
              <p className="text-stone-300 font-medium">
                University of Waterloo
              </p>
              <p className="text-stone-400 text-sm sm:text-base">
                Interdisciplinary engineering with specialization in software
                systems and human-centered design
              </p>
            </div>
          </section>

          {/* Community Involvement */}
          <section>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 md:mb-4">
              Community Involvement
            </h3>
            <div className="space-y-5 md:space-y-6">
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h4 className="text-normal sm:text-xl font-semibold text-white">
                    University of Waterloo Alternative Fuels Team
                  </h4>
                  <span className="text-stone-400 text-sm sm:text-base">
                    Sept 2024 - Dec 2024
                  </span>
                </div>
                <p className="text-stone-300 font-medium">Software Engineer</p>
                <p className="text-stone-400 text-sm sm:text-base">
                  Software systems
                </p>
              </div>
            </div>
          </section>

          {/* Awards */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4">
              Awards & Achievements
            </h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-lg font-semibold text-white">
                    Second Place - UTRA Hacks
                  </h4>
                  <span className="text-stone-400">Feb 2025</span>
                </div>
                <p className="text-stone-300 font-medium">
                  University of Toronto
                </p>
                <p className="text-stone-400">
                  Placed second with a team of four people to develop an
                  innovative solution (Fernando) for helping people with bad
                  posture.
                </p>

                {/* Project Details */}
                <div className="mt-2"></div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
}
