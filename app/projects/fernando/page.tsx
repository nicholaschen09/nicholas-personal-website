import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function FernandoProject() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24 bg-zinc-990 text-white">
      <div className="max-w-5xl w-full space-y-12">
        {/* Navigation */}
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to projects
        </Link>

        {/* Hero Section */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              Fernando
            </h1>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-pink-600 hover:bg-pink-700 text-white px-3 py-1 text-sm">
                Hardware
              </Badge>
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 text-sm">
                Robotics
              </Badge>
              <Badge className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 text-sm">
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
            src="/placeholder.svg?height=800&width=1200"
            alt="Fernando Robot"
            width={1200}
            height={800}
            className="object-cover"
            priority
          />
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4">
          <Button className="bg-white text-black hover:bg-gray-200">
            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-gray-800"
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
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-blue-600 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="12" cy="5" r="1"></circle>
                    <circle cx="12" cy="19" r="1"></circle>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Computer Vision</h3>
                <p className="text-gray-400">
                  Real-time posture detection using OpenCV and MediaPipe to
                  track 33 key body points, with 94% accuracy in identifying
                  poor posture.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-pink-600 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <path d="M12 2v20"></path>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Mechanical Arm</h3>
                <p className="text-gray-400">
                  3-DOF robotic arm with force-calibrated tapping mechanism,
                  designed for comfort while providing effective tactile
                  feedback.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-purple-600 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white"
                  >
                    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                    <path d="M7 7h10"></path>
                    <path d="M7 12h10"></path>
                    <path d="M7 17h10"></path>
                  </svg>
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
              <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center mx-auto">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="font-semibold">Detection</h3>
              <p className="text-gray-400 text-sm">
                Camera monitors your posture in real-time
              </p>
            </div>

            <div className="space-y-2">
              <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center mx-auto">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="font-semibold">Analysis</h3>
              <p className="text-gray-400 text-sm">
                AI determines if your posture needs correction
              </p>
            </div>

            <div className="space-y-2">
              <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center mx-auto">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="font-semibold">Correction</h3>
              <p className="text-gray-400 text-sm">
                Mechanical arm delivers a gentle tap
              </p>
            </div>

            <div className="space-y-2">
              <div className="h-12 w-12 rounded-full bg-gray-700 flex items-center justify-center mx-auto">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="font-semibold">Learning</h3>
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
              <h3 className="text-xl font-bold">Hardware Components</h3>
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
              <h3 className="text-xl font-bold">Software Stack</h3>
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
                <div className="bg-gray-900 p-6 rounded-lg text-center">
                  <span className="text-4xl font-bold text-pink-500">92%</span>
                  <p className="text-gray-400 mt-2">
                    Improved posture awareness
                  </p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg text-center">
                  <span className="text-4xl font-bold text-blue-500">78%</span>
                  <p className="text-gray-400 mt-2">
                    Measurable posture improvement
                  </p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg text-center">
                  <span className="text-4xl font-bold text-purple-500">
                    85%
                  </span>
                  <p className="text-gray-400 mt-2">
                    Preferred over app notifications
                  </p>
                </div>
                <div className="bg-gray-900 p-6 rounded-lg text-center">
                  <span className="text-4xl font-bold text-green-500">88%</span>
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

        {/* Call to Action */}
        <section className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">Interested in Fernando?</h2>
          <p className="text-white/90">
            Check out the code repository or contact me for more information
            about this project.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mt-4">
            <Button className="bg-white text-black hover:bg-gray-200">
              <Github className="mr-2 h-4 w-4" /> View on GitHub
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/20"
            >
              Contact Me
            </Button>
          </div>
        </section>

        {/* More Projects */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">More Projects</h2>
            <Link href="/projects" className="text-gray-400 hover:text-white">
              View all →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-900 border-gray-800 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="AI Content Generator"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">AI Content Generator</h3>
                <p className="text-gray-400">
                  An application that leverages AI to generate blog posts,
                  social media content, and marketing copy.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gray-700 text-white">Next.js</Badge>
                  <Badge className="bg-gray-700 text-white">OpenAI</Badge>
                  <Badge className="bg-gray-700 text-white">Tailwind</Badge>
                </div>
                <Link
                  href="/projects/ai-content-generator"
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center"
                >
                  View project →
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gray-900 border-gray-800 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Smart Home Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold">Smart Home Dashboard</h3>
                <p className="text-gray-400">
                  An IoT dashboard for monitoring and controlling smart home
                  devices with automation capabilities.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-gray-700 text-white">Vue.js</Badge>
                  <Badge className="bg-gray-700 text-white">MQTT</Badge>
                  <Badge className="bg-gray-700 text-white">Chart.js</Badge>
                </div>
                <Link
                  href="/projects/smart-home-dashboard"
                  className="text-blue-400 hover:text-blue-300 inline-flex items-center"
                >
                  View project →
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full max-w-5xl mt-16 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © 2025 Nicholas Chen. All rights reserved.
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-6">
            <Link
              href="https://www.linkedin.com/in/nicholas-chen-85886726a/"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-6 h-6 flex items-center justify-center">
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
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="w-6 h-6 flex items-center justify-center">
                <img src="/github.png" alt="GitHub" className="w-5 h-5" />
              </div>
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="mailto:nicholas.chen243@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <div className="w-6 h-6 flex items-center justify-center">
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
      </footer>
    </main>
  );
}
