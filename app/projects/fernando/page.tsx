import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export default function FernandoProject() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24 text-white">
      <div className="max-w-5xl w-full space-y-12">
        {/* Navigation */}
        <Link
          href="/projects"
          className="inline-flex items-center text-stone-400 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-4 py-2 rounded-md"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to projects
        </Link>
        {/* Hero Section */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
            <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-white">
              Fernando
            </h1>
          </div>

          <p className="text-xl text-stone-300">
            A posture-correcting robot that taps you when you slouch
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-stone-800">
          <Image
            src="/fernando.png"
            alt="Fernando Robot"
            width={1200}
            height={800}
            className="object-cover"
            priority
          />
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://youtu.be/EBsmGGOubCk?si=aTxg0qsva-svoK6d"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="text-white bg-white/5 hover:bg-white/10 hover:text-stone-400 transition-colors rounded-md px-4 py-2">
              <ExternalLink className="mr-2 h-4 w-4" /> Demo
            </Button>
          </a>
          <a
            href="https://github.com/enxilium/posture-checker-robot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="group text-white bg-white/5 hover:bg-white/10 hover:text-stone-400 transition-colors rounded-md px-4 py-2">
              <Image
                src="/github1.png"
                alt="GitHub Logo"
                width={24}
                height={24}
                className="mr-2 transition-opacity group-hover:opacity-70"
              />
              Code
            </Button>
          </a>
        </div>

        {/* Overview Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Overview</h2>
          <p className="text-stone-300 text-lg leading-relaxed">
            Fernando is a hardware robot designed to help you maintain proper
            posture while working at your desk. Using computer vision to detect
            your posture, Fernando physically corrects bad habits by gently
            tapping your hand when you slouch. Unlike apps that are easy to
            ignore, Fernando provides immediate physical feedback that's
            impossible to miss, helping you develop better posture habits over
            time.
          </p>
        </section>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">The Problem</h2>
            <p className="text-stone-300">
              Poor posture during long hours at a desk leads to chronic back
              pain, neck strain, and other health issues. Most existing
              solutions rely on passive notifications that are easy to ignore,
              resulting in continued poor habits.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">The Solution</h2>
            <p className="text-stone-300">
              Fernando provides immediate physical feedback when your posture
              deteriorates. The gentle tap from its mechanical arm creates an
              unmistakable reminder that helps reinforce good habits through
              consistent, timely correction.
            </p>
          </section>
        </div>

        {/* Key Features */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Key Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-white/5 rounded-md border-0">
              <CardContent className="p-6 space-y-2">
                <div className="">
                  <span className="text-white font-bold">CV</span>
                </div>

                <p className="text-stone-400">
                  Real-time posture detection using OpenCV and MediaPipe to
                  track 33 key body points, with 94% accuracy in identifying
                  poor posture.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 rounded-md border-0">
              <CardContent className="p-6 space-y-2">
                <div className="">
                  <span className="text-white font-bold">Arm</span>
                </div>

                <p className="text-stone-400">
                  A robotic arm with force-calibrated tapping mechanism,
                  designed for comfort while providing effective tactile
                  feedback.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 rounded-md border-0">
              <CardContent className="p-6 space-y-2">
                <div className="">
                  <span className="text-white font-bold">App</span>
                </div>

                <p className="text-stone-400">
                  Next.js web application for tracking posture history,
                  customizing sensitivity, and providing personalized
                  improvement recommendations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">How It Works</h2>

          <div
            className="relative w-full rounded-xl overflow-hidden border border-stone-800 mb-6"
            style={{ height: '340px' }}
          >
            <Image
              src="/fernando1.png"
              alt="Fernando system diagram"
              width={1200}
              height={400}
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="space-y-2">
              <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mx-auto">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <h3 className="font-semibold text-white">Detection</h3>
              <p className="text-stone-400 text-sm">
                Camera monitors your posture in real-time
              </p>
            </div>

            <div className="space-y-2">
              <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mx-auto">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <h3 className="font-semibold text-white">Analysis</h3>
              <p className="text-stone-400 text-sm">
                AI determines if your posture needs correction
              </p>
            </div>

            <div className="space-y-2">
              <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mx-auto">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <h3 className="font-semibold text-white">Correction</h3>
              <p className="text-stone-400 text-sm">
                Mechanical arm delivers a gentle tap
              </p>
            </div>

            <div className="space-y-2">
              <div className="h-12 w-12 rounded-full bg-white/5 flex items-center justify-center mx-auto">
                <span className="text-xl font-bold text-white">4</span>
              </div>
              <h3 className="font-semibold text-white">Learning</h3>
              <p className="text-stone-400 text-sm">
                System adapts to your habits over time
              </p>
            </div>
          </div>
        </section>

        {/* Technical Details */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Technical Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">
                Hardware Components
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-stone-300">
                <li>Raspberry Pi 4 (4GB) for processing</li>
                <li>HD webcam for posture detection</li>
                <li>3 high-torque servo motors for arm movement</li>
                <li>Custom 3D-printed PLA housing and arm</li>
                <li>Silicone padding for comfortable contact</li>
                <li>5000mAh LiPo battery for 8-10 hours of operation</li>
                <li>USB-C charging port</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Software Stack</h3>
              <ul className="list-disc pl-5 space-y-2 text-stone-300">
                <li>Python for core processing and control</li>
                <li>OpenCV and MediaPipe for pose estimation</li>
                <li>TensorFlow Lite for optimized edge inference</li>
                <li>Next.js and React for the web interface</li>
                <li>Vercel for application hosting</li>
                <li>WebSockets for real-time communication</li>
                <li>Custom microservices architecture</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Results</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-6 rounded-md text-center">
                  <span className="text-4xl font-bold text-white">92%</span>
                  <p className="text-stone-400 mt-2">
                    Improved posture awareness
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-md text-center">
                  <span className="text-4xl font-bold text-white">78%</span>
                  <p className="text-stone-400 mt-2">
                    Measurable posture improvement
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-md text-center">
                  <span className="text-4xl font-bold text-white">85%</span>
                  <p className="text-stone-400 mt-2">
                    Preferred over app notifications
                  </p>
                </div>
                <div className="bg-white/5 p-6 rounded-md text-center">
                  <span className="text-4xl font-bold text-white">88%</span>
                  <p className="text-stone-400 mt-2">
                    Rated the feedback as comfortable
                  </p>
                </div>
              </div>
              <p className="text-stone-300">
                Based on a 4-week study with 25 participants using Fernando in
                their daily work environment.
              </p>
            </div>

            <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-stone-800">
              <Image
                src="/fernando2.png"
                alt="User testing Fernando"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* More Projects */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white">More Projects</h2>
            <Link
              href="/projects"
              className="inline-flex px-4 py-2 bg-white/5 hover:bg-white/10 text-stone-400 hover:text-white transition-colors rounded-md"
            >
              View all Projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Project 3 */}
            <Card className="bg-transparent border border-stone-700 overflow-hidden">
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
                <p className="text-stone-300 text-sm">
                  A machine learning-powered model that predicts the number of
                  views a TikTok video will receive using linear regression.
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row gap-3 sm:justify-between">
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/nicholaschen09/tiktok-view-predictor"
                    className="text-stone-300 hover:text-white flex items-center gap-1 text-sm"
                  >
                    <div className="w-6 h-6 flex items-center justify-center mr-2">
                      <img
                        src="/github1.png"
                        alt="GitHub"
                        className="w-6 h-6"
                      />
                    </div>
                    Code
                  </Link>
                  <Link
                    href="#"
                    className="text-stone-300 hover:text-white flex items-center gap-1 text-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Link>
                </div>
                <Link
                  href="/projects/tiktokviewpredictor"
                  className="text-stone-300 hover:text-white flex items-center gap-1 text-sm"
                >
                  Read more <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-transparent border border-stone-700 overflow-hidden">
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
                <p className="text-stone-300 text-sm">
                  An automated garbage sorter that leverages computer vision to
                  sort garbage thrown in depending on if it is recyclable or
                  not.
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row gap-3 sm:justify-between">
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/DerrickHa/ht6"
                    className="text-stone-300 hover:text-white flex items-center gap-1 text-sm"
                  >
                    <div className="w-6 h-6 flex items-center justify-center mr-2">
                      <img
                        src="/github1.png"
                        alt="GitHub"
                        className="w-6 h-6"
                      />
                    </div>
                    Code
                  </Link>
                  <Link
                    href="https://youtu.be/6YRTP7_Oet8?si=nBcCJkoi8awZF-kz"
                    className="text-stone-300 hover:text-white flex items-center gap-1 text-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Link>
                </div>
                <Link
                  href="/projects/basketbin"
                  className="text-stone-300 hover:text-white flex items-center gap-1 text-sm"
                >
                  Read more <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full mt-8 pt-8">
        <div className="max-w-5xl mx-auto w-full">
          <hr className="border-t border-stone-700 mb-8" />
          <div className="flex flex-col items-center md:items-start">
            {/* Social Media Links */}
            <div className="flex space-x-8 pt-4 justify-center sm:justify-start">
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
          <p className="text-stone-400 mt-10 mb-4">© 2025 Nicholas Chen</p>
        </div>
      </footer>
    </main>
  );
}
