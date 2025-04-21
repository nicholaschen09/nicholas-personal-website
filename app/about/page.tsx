'use client';
import Footer from '@/components/footer/footer';
import Image from 'next/image';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-24 pt-40 md:pt-32">
      <div className="max-w-6xl w-full pt-16 md:pt-20">
        {/* Two-column layout: About text and Image */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="space-y-4 order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-10 mt-4">
              Hey I'm Nicholas!
            </h1>
            <div className="text-base sm:text-lg text-gray-300 min-h-[150px] md:min-h-[120px]">
              <TypeAnimation
                sequence={[
                  "Hello! I'm a Systems Design Engineering student at the University of Waterloo. In the past, I've worked at companies like Ownr, RBC and Meta Hash Capital where I made some pretty cool things.",
                  1000,
                ]}
                wrapper="p"
                speed={50}
                className="text-base sm:text-lg text-gray-300"
                repeat={0}
              />
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-8 pt-4 justify-center sm:justify-start">
              <Link
                href="https://www.linkedin.com/in/nicholas-chen-85886726a/"
                className="text-white hover:text-gray-300 transition-colors"
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
                    className="max-w-full max-h-full object-contain translate-y-1"
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
          </div>

          <div className="flex flex-col items-center order-1 md:order-2 mb-0 md:mb-0">
            <div className="relative w-full max-w-[250px] md:max-w-md aspect-square overflow-hidden rounded-lg">
              <Image
                src="/me.png"
                alt="Nicholas Chen"
                width={1000}
                height={1000}
                className="object-cover rounded-lg mb-6"
              />
              <p className="text-gray-400 text-center italic text-sm sm:text-base mb-4">
                Throwback to a picture of me on the last day of highschool
              </p>
            </div>
          </div>
        </div>

        {/* Experience, Education, Community, Awards Section */}
        <div className="space-y-8 mt-10 md:mt-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white border-b border-gray-700 pb-2">
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
                  <span className="text-gray-400 text-sm sm:text-base">
                    Jan 2025 - April 2025
                  </span>
                </div>
                <p className="text-gray-300 font-medium">Ownr - RBCx</p>
                <p className="text-gray-400 text-sm sm:text-base">
                  Working on full-stack web development, implementing new
                  features, and improving existing functionality. Collaborating
                  with cross-functional teams to deliver high-quality software
                  solutions.
                </p>
                {/* Technical Skills */}
                <div className="mt-2">
                  <p className="text-white text-sm font-medium">
                    Technical Skills:
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      React
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      TypeScript
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      Node.js
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      Docker
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      AWS
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      Kubernetes
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      NestJS
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      Redis
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      RabbitMQ
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      Jest
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      REST APIs
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      PostgreSQL
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      Git
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      Helios
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      CI/CD
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h4 className="text-lg sm:text-xl font-semibold text-white">
                    Innovation Developer Intern
                  </h4>
                  <span className="text-gray-400 text-sm sm:text-base">
                    Jul 2024 - Aug 2024
                  </span>
                </div>
                <p className="text-gray-300 font-medium">
                  Royal Bank of Canada
                </p>
                <p className="text-gray-400 text-sm sm:text-base">
                  Developed a machine learning model using python to predict
                  monthly sign-in volumes, improving resource allocation and
                  reducing support team work times.
                </p>
                {/* Technical Skills */}
                <div className="mt-2">
                  <p className="text-white text-sm font-medium">
                    Technical Skills:
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      Python
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      Machine Learning
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      Data Analysis
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      Pandas
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      Numpy
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      Matplotlib
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h4 className="text-lg sm:text-xl font-semibold text-white">
                    UX Design Intern
                  </h4>
                  <span className="text-gray-400 text-sm sm:text-base">
                    Mar 2023 - Aug 2023
                  </span>
                </div>
                <p className="text-gray-300 font-medium">Meta Hash Capital</p>
                <p className="text-gray-400 text-sm sm:text-base">
                  Worked on blockchain and cryptocurrency projects, developing
                  solutions through designing wireframes, prototypes, and
                  high-fidelity mockups using Figma and Adobe Creative Suite.
                </p>
                {/* Technical Skills */}
                <div className="mt-2">
                  <p className="text-white text-sm font-medium">
                    Technical Skills:
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      Figma
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      Adobe XD
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      Wireframing
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      Prototyping
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      User Research
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      UI/UX Design
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      Adobe Photoshop
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      Adobe Illustrator
                    </span>
                  </div>
                </div>
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
                <span className="text-gray-400 text-sm sm:text-base">
                  2024 - 2029
                </span>
              </div>
              <p className="text-gray-300 font-medium">
                University of Waterloo
              </p>
              <p className="text-gray-400 text-sm sm:text-base">
                Focusing on interdisciplinary engineering with specialization in
                software systems and human-centered design.
              </p>

              {/* Relevant Courses */}
              <div className="mt-3">
                <h5 className="text-white font-medium mb-2">
                  Relevant Courses:
                </h5>
                <ul className="text-gray-400 text-sm sm:text-base flex flex-wrap gap-x-4 gap-y-1">
                  <li>Introduction to Design</li>
                  <li>Digital Computation</li>
                  <li>Elementary Engineering Math</li>
                  <li>Visual Communications</li>
                  <li>Calculus 1</li>
                  <li>Physics: Statics</li>
                  <li>Communications</li>
                </ul>
              </div>

              {/* Academic Skills */}
              <div className="mt-4">
                <h5 className="text-white font-medium mb-2">
                  Academic Skills:
                </h5>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                    Engineering Design
                  </span>
                  <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                    Calculus
                  </span>
                  <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                    Engineering Math
                  </span>
                  <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                    C++
                  </span>
                  <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                    Technical Writing
                  </span>
                  <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                    SOLIDWORKS
                  </span>
                  <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                    Problem Analysis
                  </span>
                  <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                    Statics
                  </span>
                </div>
              </div>

              {/* Academic Projects */}
              <div className="mt-4">
                <h5 className="text-white font-medium mb-2">Projects:</h5>
                <ul className="list-disc pl-5 text-gray-400 text-sm space-y-1 mt-2">
                  <li>
                    Designed and built a small-scale installation to allow
                    people to see the different constellations at different
                    viewpoints while also being eco-friendly and sustainable.
                  </li>
                  <li>
                    Designed using SOLIDWORKS printed a 3D model of a bear.
                  </li>
                  <li>Created a library management system using C++.</li>
                </ul>
              </div>
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
                  <span className="text-gray-400 text-sm sm:text-base">
                    Sept 2024 - Dec 2024
                  </span>
                </div>
                <p className="text-gray-300 font-medium">Software Engineer</p>
                <p className="text-gray-400 text-sm sm:text-base">
                  Worked on designing and implementing software systems for our
                  alternative fuel vehicle.
                </p>

                {/* Technical Skills */}
                <div className="mt-2">
                  <p className="text-white text-sm font-medium">
                    Technical Skills:
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      Circuit Design
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      PCB Layout
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      Microcontroller Programming
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      CAD Modeling
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      3D Printing
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      Mechanical Assembly
                    </span>
                  </div>
                </div>
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
                  <span className="text-gray-400">Feb 2025</span>
                </div>
                <p className="text-gray-300 font-medium">
                  University of Toronto
                </p>
                <p className="text-gray-400">
                  Placed second with a team of four people to develop an
                  innovative solution for helping people with bad posture.
                </p>

                {/* Project Details */}
                <div className="mt-2">
                  <p className="text-white text-sm font-medium">
                    Project: Fernando - Posture Correction Robot
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      OpenCV
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      Machine Learning
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      Hardware Integration
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      Rapid Prototyping
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      Terraform
                    </span>
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      NextJS
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-lg font-semibold text-white">
                    Engineering Entrance Scholarship
                  </h4>
                  <span className="text-gray-400">Apr 2024</span>
                </div>
                <p className="text-gray-300 font-medium">
                  University of Waterloo
                </p>
                <p className="text-gray-400">
                  Awarded a $5000 merit-based scholarship for academic
                  achievement and leadership potential.
                </p>
                {/* Qualification Details */}
                <div className="mt-2">
                  <p className="text-white text-sm font-medium">
                    Qualification Criteria:
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="px-2 py-1 border border-pink-500 text-pink-500 rounded-md text-xs">
                      95%+ High School Average
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
}
