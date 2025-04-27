'use client';
import SearchBar from '@/components/search/search';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Footer from '@/components/footer/footer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24 overflow-x-hidden">
      {/* Hero Section */}
      <div className="max-w-6xl w-full space-y-4 md:space-y-6 mb-10 md:mb-16 pt-24 md:pt-16">
        <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-white">
          Nicholas Chen
        </h1>

        <div className="h-auto min-h-[150px] md:min-h-[120px]">
          <TypeAnimation
            sequence={[
              "I am currently studying Systems Design Engineering at the University of Waterloo. Previously, I've helped create some awesome things at Ownr, RBC and Meta Hash Capital.",
              1000,
            ]}
            wrapper="p"
            speed={50}
            className="text-base sm:text-lg md:text-xl text-gray-300"
            repeat={0}
          />
        </div>

        <div className="flex space-x-8 pt-1 justify-center sm:justify-start">
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
            className="text-white hover:text-gray-300 transition-colors"
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
            className="text-white hover:text-gray-300 transition-colors"
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
            className="text-white hover:text-gray-300 transition-colors"
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
            
      <SearchBar />

      {/* Blog Section */}
      <div className="w-full max-w-6xl mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-10">
          Featured Blogs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Blog Post 1 */}
          <Card className="bg-transparent border border-gray-700 overflow-hidden">
            <div className="relative h-40 md:h-58">
              <Image
                src="/syde.png"
                alt="SYDE 1A Experience"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4 space-y-3">
              <div className="flex flex-col justify-between mb-2">
                <h3 className="text-xl font-bold text-white">
                  My SYDE 1A Experience
                </h3>
                <span className="text-gray-400 text-sm mt-1">
                  March 13, 2025
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                In this blog post, I reflect on my first semester in the Systems
                Design Engineering program at the University of Waterloo. I
                discuss the challenges I faced, the projects I worked on, and
                the valuable lessons I learned.
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Link
                href="/blogs/syde1aexperience"
                className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
              >
                Read more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </CardFooter>
          </Card>

          {/* Blog Post 2 */}
          <Card className="bg-transparent border border-gray-700 overflow-hidden">
            <div className="relative h-40 md:h-58">
              <Image
                src="/socialmedia.jpeg"
                alt="Social Media Impact"
                fill
                className="object-cover"
                style={{ objectPosition: 'center' }}
              />
            </div>
            <CardContent className="p-4 space-y-3">
              <div className="flex flex-col justify-between mb-2">
                <h3 className="text-xl font-bold text-white">
                  How Social Media Changed My Life
                </h3>
                <span className="text-gray-400 text-sm mt-1">
                  March 24, 2025
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                In this article, I share my personal journey and experiences
                with social media, discussing both the positive and negative
                impacts it has had on my life. From connecting with friends to
                dealing with online distractions.
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Link
                href="/blogs/socialmedia"
                className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
              >
                Read more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </CardFooter>
          </Card>

          {/* Blog Post 3 */}
          <Card className="bg-transparent border border-gray-700 overflow-hidden md:col-span-2">
            <div className="relative h-40 md:h-58">
              <Image
                src="/ownr.png"
                alt="Software Engineering Intern at Ownr"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4 space-y-3">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">
                  What I Loved About Being A Software Engineer Intern at Ownr
                </h3>
                <span className="text-gray-400 text-sm mt-1 md:mt-0">
                  April 20, 2025
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                In this article, I share my experiences during my first co-op
                term at Ownr, an RBCx company. I discuss the projects I worked
                on, the skills I developed, and the challenges I faced. This
                term provided me with valuable insights into full-stack web
                development and the importance of teamwork in a professional
                setting.
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Link
                href="/blogs/ownr"
                className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
              >
                Read more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Projects Section */}
      <div className="w-full max-w-6xl mb-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-10">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project 1 */}
          <Card className="bg-transparent border border-gray-700 overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/fernando.png"
                alt="Fernando"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4 space-y-3">
              <h3 className="text-xl font-bold text-white">Fernando</h3>
              <p className="text-gray-400 text-sm">
                A posture correcting robot that helps you maintain a healthy
                posture while working at your desk by slapping you when you
                slouch.
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row gap-3 sm:justify-between">
              <div className="flex gap-4">
                <Link
                  href="https://github.com/enxilium/posture-checker-robot"
                  className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
                >
                  <div className="w-6 h-6 flex items-center justify-center mr-2">
                    <img src="/github1.png" alt="GitHub" className="w-6 h-6" />
                  </div>
                  Code
                </Link>
                <Link
                  href="https://youtu.be/EBsmGGOubCk?si=1_ksNQak9YQNffQ6"
                  className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Link>
              </div>
              <Link
                href="/projects/fernando"
                className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
              >
                Read more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </CardFooter>
          </Card>

          {/* Project 2 */}
          <Card className="bg-transparent border border-gray-700 overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/basketbin.jpg"
                alt="AI Content Generator"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4 space-y-3">
              <h3 className="text-xl font-bold text-white">BasketBin</h3>
              <p className="text-gray-400 text-sm">
                An automated garbage sorter that leverages computer vision to
                sort garbage thrown in depending on if it is recyclable or not.
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row gap-3 sm:justify-between">
              <div className="flex gap-4">
                <Link
                  href="https://github.com/DerrickHa/ht6"
                  className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
                >
                  <div className="w-6 h-6 flex items-center justify-center mr-2">
                    <img src="/github1.png" alt="GitHub" className="w-6 h-6" />
                  </div>
                  Code
                </Link>
                <Link
                  href="https://youtu.be/6YRTP7_Oet8?si=nBcCJkoi8awZF-kz"
                  className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Link>
              </div>
              <Link
                href="/projects/basketbin"
                className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
              >
                Read more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </CardFooter>
          </Card>

          {/* Project 3 */}
          <Card className="bg-transparent border border-gray-700 overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/pandas.png"
                alt="pandas"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4 space-y-3">
              <h3 className="text-xl font-bold text-white">
                TikTok View Predictor
              </h3>
              <p className="text-gray-400 text-sm">
                A machine learning-powered model that predicts the number of
                views a TikTok video will receive using linear regression.
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row gap-3 sm:justify-between">
              <div className="flex gap-4">
                <Link
                  href="https://github.com/nicholaschen09/tiktok-view-predictor"
                  className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
                >
                  <div className="w-6 h-6 flex items-center justify-center mr-2">
                    <img src="/github1.png" alt="GitHub" className="w-6 h-6" />
                  </div>
                  Code
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Link>
              </div>
              <Link
                href="/projects/tiktokviewpredictor"
                className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
              >
                Read more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </CardFooter>
          </Card>

          {/* Project 4 */}
          <Card className="bg-transparent border border-gray-700 overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/etl.png"
                alt="customer feedback etl pipeline"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4 space-y-3">
              <h3 className="text-xl font-bold text-white">
                Customer Feedback ETL Pipeline
              </h3>
              <p className="text-gray-400 text-sm">
                An ETL pipeline that processes customer feedback with sentiment
                analysis for actionable insights
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row gap-3 sm:justify-between">
              <div className="flex gap-4">
                <Link
                  href="https://github.com/nicholaschen09/customer-feedback-etl-pipeline"
                  className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
                >
                  <div className="w-6 h-6 flex items-center justify-center mr-2">
                    <img src="/github1.png" alt="GitHub" className="w-6 h-6" />
                  </div>
                  Code
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Link>
              </div>
              <Link
                href="/projects/customerfeedback"
                className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
              >
                Read more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </CardFooter>
          </Card>

          <hr className="w-full border-t border-gray-700 my-8 col-span-1 md:col-span-2" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 md:mb-6">
            My Other Links
          </h2>

          {/* Art Website */}
          <Card className="bg-transparent border border-gray-700 overflow-hidden md:col-span-2">
            <div className="relative h-32 md:h-48">
              <Image
                src="/art1.png"
                alt="art website"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4 space-y-3">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">
                  My Art Portfolio Website
                </h3>
                <span className="text-gray-400 text-sm mt-1 md:mt-0">
                  April 20, 2024
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                In this website, I share the process of creating my art
                portfolio website. I discuss the design choices, the
                technologies used, and the challenges faced during development.
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Link
                href="https://nicholaschen243.wixsite.com/nicholas-chen"
                className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
              >
                <span className="hover:text-gray-300 transition-colors">
                  Link to Website
                </span>
                <img
                  src="/link1.png"
                  alt="Link"
                  className="ml-2 w-5 h-5 hover:opacity-75 transition-opacity"
                />
              </Link>
            </CardFooter>
          </Card>

          {/* Leetcode */}
          <Card className="bg-transparent border border-gray-700 overflow-hidden md:col-span-2">
            <div className="flex flex-col md:flex-row">
              <CardContent className="p-4 space-y-3 flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">
                    Leetcode Profile
                  </h3>
                </div>
                <p className="text-gray-400 text-sm">
                  My{' '}
                  <a
                    href="https://leetcode.com/u/nic_09/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:underline underline underline-offset-4 mt-2"
                  >
                    Leetcode Profile
                  </a>{' '}
                  where I practice coding problems for software engineering
                  technical interviews.
                </p>
              </CardContent>
            </div>
          </Card>
          {/* Devpost */}
          <Card className="bg-transparent border border-gray-700 overflow-hidden md:col-span-2">
            <div className="flex flex-col md:flex-row">
              <CardContent className="p-4 space-y-3 flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">
                    Devpost Profile
                  </h3>
                </div>
                <p className="text-gray-400 text-sm">
                  My{' '}
                  <a
                    href="https://devpost.com/nicholaschen09?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-500 hover:underline underline underline-offset-4 mt-2"
                  >
                    Devpost Profile
                  </a>{' '}
                  for all my hackathon projects that I worked on and have
                  submitted to devpost
                </p>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </main>
  );
}
