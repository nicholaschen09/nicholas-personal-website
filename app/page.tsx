'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      {/* Hero Section */}
      <div className="max-w-6xl w-full space-y-4 md:space-y-6 mb-10 md:mb-16 pt-24 md:pt-16">
        <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-white">
          Nicholas Chen
        </h1>

        <div className="h-auto min-h-[150px] md:min-h-[120px]">
          <TypeAnimation
            sequence={[
              "I am a software engineering intern at Ownr doing full stack web development, and a Systems Design Engineering student at the University of Waterloo. Previously, I've helped create awesome things at RBC and Meta Hash Capital.",
              1000,
            ]}
            wrapper="p"
            speed={50}
            className="text-base sm:text-lg md:text-xl text-gray-300"
            repeat={0}
          />
        </div>

        <div className="flex space-x-8 pt-2 justify-center sm:justify-start">
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
        </div>
      </div>
      {/* Blog Section */}
      <div className="w-full max-w-6xl mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-10">
          Blogs
        </h2>

        <div className="space-y-8">
          {/* Blog Post 1 */}
          <div className="bg-transparent border border-gray-700 rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-white">
                My SYDE 1A Experience
              </h3>
              <span className="text-gray-400 text-sm mt-1 md:mt-0">
                March 13, 2025
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              In this blog post, I reflect on my first semester in the Systems
              Design Engineering program at the University of Waterloo. I
              discuss the challenges I faced, the projects I worked on, and the
              valuable lessons I learned. This experience has shaped my approach
              to problem-solving and teamwork.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge
                variant="outline"
                className="bg-transparent text-white border-gray-500 font-medium"
              >
                Design
              </Badge>
              <Badge
                variant="outline"
                className="bg-transparent text-white border-gray-500 font-medium"
              >
                Programming
              </Badge>
              <Badge
                variant="outline"
                className="bg-transparent text-white border-gray-500 font-medium"
              >
                Engineering
              </Badge>
            </div>
            <Link
              href="/blogs/syde1aexperience"
              className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
            >
              Read more <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          {/* Blog Post 2 */}
          <div className="bg-transparent border border-gray-700 rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-white">
                How Social Media Has Changed My Life
              </h3>
              <span className="text-gray-400 text-sm mt-1 md:mt-0">
                March 24, 2025
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              In this article, I share my personal journey and experiences with
              social media, discussing both the positive and negative impacts it
              has had on my life. From connecting with friends and family to
              dealing with online distractions, I explore how social media has
              shaped my daily routine and overall well-being.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge
                variant="outline"
                className="bg-transparent text-white border-gray-500 font-medium"
              >
                Creativity
              </Badge>
              <Badge
                variant="outline"
                className="bg-transparent text-white border-gray-500 font-medium"
              >
                Video Editing
              </Badge>
              <Badge
                variant="outline"
                className="bg-transparent text-white border-gray-500 font-medium"
              >
                Content Creation
              </Badge>
            </div>
            <Link
              href="/blogs/socialmedia"
              className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
            >
              Read more <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
          {/* Blog Post 3 */}
          <div className="bg-transparent border border-gray-700 rounded-lg p-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
              <h3 className="text-xl font-bold text-white">
                What I Loved About Being A Software Engineering Intern at Ownr
              </h3>
              <span className="text-gray-400 text-sm mt-1 md:mt-0">
                April 20, 2025
              </span>
            </div>
            <p className="text-gray-300 mb-4">
              In this article, I share my experiences during my first co-op term
              at Ownr, an RBCx company. I discuss the projects I worked on, the
              skills I developed, and the challenges I faced. This term provided
              me with valuable insights into full-stack web development and the
              importance of teamwork in a professional setting.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <Badge
                variant="outline"
                className="bg-transparent text-white border-gray-500 font-medium"
              >
                Communication
              </Badge>
              <Badge
                variant="outline"
                className="bg-transparent text-white border-gray-500 font-medium"
              >
                Software Engineering
              </Badge>
              <Badge
                variant="outline"
                className="bg-transparent text-white border-gray-500 font-medium"
              >
                Javascript
              </Badge>
            </div>
            <Link
              href="/blogs/ownr"
              className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
            >
              Read more <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
      {/* Projects Section */}
      <div className="w-full max-w-6xl mb-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-10">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <Card className="bg-transparent border border-gray-700 overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="E-commerce Platform"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4 space-y-3">
              <h3 className="text-xl font-bold text-white">Fernando</h3>
              <p className="text-gray-300 text-sm">
                A posture correcting robot that helps you maintain a healthy
                posture while working at your desk by slapping you when you
                slouch.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge
                  variant="outline"
                  className="bg-transparent text-white border-gray-500 font-medium"
                >
                  NextJS
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-transparent text-white border-gray-500 font-medium"
                >
                  OpenCV
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-transparent text-white border-gray-500 font-medium"
                >
                  Terraform
                </Badge>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between">
              <Link
                href="https://github.com"
                className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
              >
                <Github className="w-4 h-4" />
                Code
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Link>
            </CardFooter>
          </Card>

          {/* Project 2 */}
          <Card className="bg-transparent border border-gray-700 overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="AI Content Generator"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4 space-y-3">
              <h3 className="text-xl font-bold text-white">
                AI Content Generator
              </h3>
              <p className="text-gray-300 text-sm">
                An application that leverages AI to generate blog posts, social
                media content, and marketing copy.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge
                  variant="outline"
                  className="bg-transparent text-white border-gray-500 font-medium"
                >
                  Next.js
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-transparent text-white border-gray-500 font-medium"
                >
                  OpenAI API
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-transparent text-white border-gray-500 font-medium"
                >
                  Tailwind CSS
                </Badge>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between">
              <Link
                href="https://github.com"
                className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
              >
                <Github className="w-4 h-4" />
                Code
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Link>
            </CardFooter>
          </Card>

          {/* Project 3 */}
          <Card className="bg-transparent border border-gray-700 overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Fitness Tracker"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4 space-y-3">
              <h3 className="text-xl font-bold text-white">Fitness Tracker</h3>
              <p className="text-gray-300 text-sm">
                A mobile-first application for tracking workouts, nutrition, and
                fitness progress with data visualization.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge
                  variant="outline"
                  className="bg-transparent text-white border-gray-500 font-medium"
                >
                  React Native
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-transparent text-white border-gray-500 font-medium"
                >
                  Firebase
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-transparent text-white border-gray-500 font-medium"
                >
                  D3.js
                </Badge>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between">
              <Link
                href="https://github.com"
                className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
              >
                <Github className="w-4 h-4" />
                Code
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Link>
            </CardFooter>
          </Card>

          {/* Project 4 */}
          <Card className="bg-transparent border border-gray-700 overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Blockchain Explorer"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4 space-y-3">
              <h3 className="text-xl font-bold text-white">
                Blockchain Explorer
              </h3>
              <p className="text-gray-300 text-sm">
                A web application for exploring blockchain transactions,
                addresses, and smart contracts with real-time data.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge
                  variant="outline"
                  className="bg-transparent text-white border-gray-500 font-medium"
                >
                  TypeScript
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-transparent text-white border-gray-500 font-medium"
                >
                  Ethereum
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-transparent text-white border-gray-500 font-medium"
                >
                  Web3.js
                </Badge>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between">
              <Link
                href="https://github.com"
                className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
              >
                <Github className="w-4 h-4" />
                Code
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Link>
            </CardFooter>
          </Card>

          {/* Project 5 */}
          <Card className="bg-transparent border border-gray-700 overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Smart Home Dashboard"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4 space-y-3">
              <h3 className="text-xl font-bold text-white">
                Smart Home Dashboard
              </h3>
              <p className="text-gray-300 text-sm">
                An IoT dashboard for monitoring and controlling smart home
                devices with automation capabilities.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge
                  variant="outline"
                  className="bg-transparent text-white border-gray-500 font-medium"
                >
                  Vue.js
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-transparent text-white border-gray-500 font-medium"
                >
                  MQTT
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-transparent text-white border-gray-500 font-medium"
                >
                  Chart.js
                </Badge>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between">
              <Link
                href="https://github.com"
                className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
              >
                <Github className="w-4 h-4" />
                Code
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Link>
            </CardFooter>
          </Card>

          {/* Project 6 */}
          <Card className="bg-transparent border border-gray-700 overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Collaborative Whiteboard"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4 space-y-3">
              <h3 className="text-xl font-bold text-white">
                Collaborative Whiteboard
              </h3>
              <p className="text-gray-300 text-sm">
                A real-time collaborative whiteboard application for remote
                teams with drawing tools and chat functionality.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge
                  variant="outline"
                  className="bg-transparent text-white border-gray-500 font-medium"
                >
                  React
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-transparent text-white border-gray-500 font-medium"
                >
                  Socket.io
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-transparent text-white border-gray-500 font-medium"
                >
                  Canvas API
                </Badge>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between">
              <Link
                href="https://github.com"
                className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
              >
                <Github className="w-4 h-4" />
                Code
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Link>
            </CardFooter>
          </Card>
          {/* Footer */}
          <footer className="w-full max-w-4xl mt-16 pt-8 border-t border-gray-700">
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
          </footer>
        </div>
      </div>
    </main>
  );
}
