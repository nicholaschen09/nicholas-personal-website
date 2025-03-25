import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function EngineeringProject() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24 bg-black text-white">
      <div className="max-w-5xl w-full space-y-12">
        {/* Navigation */}
        <Link
          href="/projects"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to projects
        </Link>

        {/* Hero Section */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
            <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-white">
              My Engineering Portfolio
            </h1>
            <div className="flex flex-wrap gap-2">
              <Badge className="border border-white text-white px-3 py-1 text-sm">
                Hardware
              </Badge>
              <Badge className="border border-white text-white px-3 py-1 text-sm">
                Robotics
              </Badge>
              <Badge className="border border-white text-white px-3 py-1 text-sm">
                Computer Vision
              </Badge>
            </div>
          </div>

          <p className="text-xl text-gray-300">
            A posture-correcting robot that slaps you when you slouch
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-gray-800">
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
          <Button
            variant="outline"
            className="border border-white text-white hover:bg-white hover:text-black transition-colors"
          >
            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
          </Button>
          <Button
            variant="outline"
            className="border border-white text-white hover:bg-white hover:text-black transition-colors"
          >
            <Github className="mr-2 h-4 w-4" /> View Code
          </Button>
        </div>
        {/* Overview Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Overview</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Fernando is a hardware robot designed to help you maintain proper
            posture while working at your desk. Using computer vision to detect
            your posture, Fernando physically corrects bad habits by gently
            slapping your back when you slouch. Unlike apps that are easy to
            ignore, Fernando provides immediate physical feedback that's
            impossible to miss, helping you develop better posture habits over
            time.
          </p>
        </section>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">The Problem</h2>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-gray-800">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Person with poor posture"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
            <p className="text-gray-300">
              Poor posture during long hours at a desk leads to chronic back
              pain, neck strain, and other health issues. Most existing
              solutions rely on passive notifications that are easy to ignore,
              resulting in continued poor habits.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">The Solution</h2>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-gray-800">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Fernando correcting posture"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
            <p className="text-gray-300">
              Fernando provides immediate physical feedback when your posture
              deteriorates. The gentle slap on your back creates an unmistakable
              reminder that helps reinforce good habits through consistent,
              timely correction.
            </p>
          </section>
        </div>

        {/* Key Features */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Key Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-transparent border border-gray-800">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full border border-white flex items-center justify-center">
                  <span className="text-white font-bold">CV</span>
                </div>
                <h3 className="text-xl font-bold">Computer Vision</h3>
                <p className="text-gray-400">
                  Real-time posture detection using OpenCV and MediaPipe to
                  track 33 key body points, with 94% accuracy in identifying
                  poor posture.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-transparent border border-gray-800">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full border border-white flex items-center justify-center">
                  <span className="text-white font-bold">Arm</span>
                </div>
                <h3 className="text-xl font-bold">Mechanical Arm</h3>
                <p className="text-gray-400">
                  3-DOF robotic arm with force-calibrated tapping mechanism,
                  designed for comfort while providing effective tactile
                  feedback.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-transparent border border-gray-800">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full border border-white flex items-center justify-center">
                  <span className="text-white font-bold">App</span>
                </div>
                <h3 className="text-xl font-bold">Companion App</h3>
                <p className="text-gray-400">
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

          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-800 mb-6">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Fernando system diagram"
              width={1200}
              height={600}
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="space-y-2">
              <div className="h-12 w-12 rounded-full border border-white flex items-center justify-center mx-auto">
                <span className="text-xl font-bold text-white">1</span>
              </div>
              <h3 className="font-semibold text-white">Detection</h3>
              <p className="text-gray-400 text-sm">
                Camera monitors your posture in real-time
              </p>
            </div>

            <div className="space-y-2">
              <div className="h-12 w-12 rounded-full border border-white flex items-center justify-center mx-auto">
                <span className="text-xl font-bold text-white">2</span>
              </div>
              <h3 className="font-semibold text-white">Analysis</h3>
              <p className="text-gray-400 text-sm">
                AI determines if your posture needs correction
              </p>
            </div>

            <div className="space-y-2">
              <div className="h-12 w-12 rounded-full border border-white flex items-center justify-center mx-auto">
                <span className="text-xl font-bold text-white">3</span>
              </div>
              <h3 className="font-semibold text-white">Correction</h3>
              <p className="text-gray-400 text-sm">
                Mechanical arm delivers a gentle tap
              </p>
            </div>

            <div className="space-y-2">
              <div className="h-12 w-12 rounded-full border border-white flex items-center justify-center mx-auto">
                <span className="text-xl font-bold text-white">4</span>
              </div>
              <h3 className="font-semibold text-white">Learning</h3>
              <p className="text-gray-400 text-sm">
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
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
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
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
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
                <div className="border border-gray-800 p-6 rounded-lg text-center">
                  <span className="text-4xl font-bold text-white">92%</span>
                  <p className="text-gray-400 mt-2">
                    Improved posture awareness
                  </p>
                </div>
                <div className="border border-gray-800 p-6 rounded-lg text-center">
                  <span className="text-4xl font-bold text-white">78%</span>
                  <p className="text-gray-400 mt-2">
                    Measurable posture improvement
                  </p>
                </div>
                <div className="border border-gray-800 p-6 rounded-lg text-center">
                  <span className="text-4xl font-bold text-white">85%</span>
                  <p className="text-gray-400 mt-2">
                    Preferred over app notifications
                  </p>
                </div>
                <div className="border border-gray-800 p-6 rounded-lg text-center">
                  <span className="text-4xl font-bold text-white">88%</span>
                  <p className="text-gray-400 mt-2">
                    Rated the feedback as comfortable
                  </p>
                </div>
              </div>
              <p className="text-gray-300">
                Based on a 4-week study with 25 participants using Fernando in
                their daily work environment.
              </p>
            </div>

            <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-gray-800">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="User testing Fernando"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Gallery</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-800">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Fernando prototype"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-800">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Fernando internal components"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-800">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Fernando in use"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* More Projects */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white">More Projects</h2>
            <Link href="/projects" className="text-gray-400 hover:text-white">
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-transparent border border-gray-800 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="AI Content Generator"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">
                  AI Content Generator
                </h3>
                <p className="text-gray-400">
                  An application that leverages AI to generate blog posts,
                  social media content, and marketing copy.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="border border-white text-white">
                    Next.js
                  </Badge>
                  <Badge className="border border-white text-white">
                    OpenAI
                  </Badge>
                  <Badge className="border border-white text-white">
                    Tailwind
                  </Badge>
                </div>
                <Link
                  href="/projects/ai-content-generator"
                  className="text-gray-400 hover:text-white inline-flex items-center"
                >
                  View project →
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-transparent border border-gray-800 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Smart Home Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">
                  Smart Home Dashboard
                </h3>
                <p className="text-gray-400">
                  An IoT dashboard for monitoring and controlling smart home
                  devices with automation capabilities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="border border-white text-white">
                    Vue.js
                  </Badge>
                  <Badge className="border border-white text-white">MQTT</Badge>
                  <Badge className="border border-white text-white">
                    Chart.js
                  </Badge>
                </div>
                <Link
                  href="/projects/smart-home-dashboard"
                  className="text-gray-400 hover:text-white inline-flex items-center"
                >
                  View project →
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

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
