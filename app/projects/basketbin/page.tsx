import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export default function BasketBinProject() {
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
              BasketBin
            </h1>
          </div>

          <p className="text-xl text-stone-300">
            A fun and interactive waste sorting system to improve waste
            management on campuses.
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-stone-800">
          <Image
            src="/h63.jpg"
            alt="BasketBin Image"
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
            BasketBin is a smart waste sorting system that encourages students
            to correctly dispose of their waste in a fun and interactive way.
            The system uses sensors and computer vision to detect if waste is
            thrown into the correct bin, rewarding students with points for
            correct disposal.
          </p>
        </section>

        {/* Key Features */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Key Features</h2>
          <div className="grid grid-cols-1 gap-8">
            <Card className="bg-white/5 rounded-xl p-6 border-0">
              <CardContent className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-xl font-bold text-white">
                  Waste Sorting with Feedback
                </h3>
                <p className="text-white">
                  Uses sensors to determine if waste is placed in the correct
                  bin, providing immediate feedback to the user.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 rounded-xl p-6 border-0">
              <CardContent className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-xl font-bold text-white">
                  Gamified Experience
                </h3>
                <p className="text-white">
                  Users earn points for correctly disposing of waste, which can
                  be redeemed for prizes across campus.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 rounded-xl p-6 border-0">
              <CardContent className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-xl font-bold text-white">
                  Educational Tool
                </h3>
                <p className="text-white">
                  Helps educate students about recycling practices and
                  encourages environmentally responsible behavior.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-stone-800">
          <Image
            src="/hack2.jpg"
            alt="Random Image 1"
            width={1100}
            height={600}
            className="object-cover"
          />
        </div>

        {/* Technical Stack */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Technical Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">
                Hardware Components
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-stone-300">
                <li>Servo motors for sorting waste</li>
                <li>Ultrasonic and PIR sensors for waste detection</li>
                <li>Webcam for real-time feedback</li>
                <li>Cardboard box for the base structure</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Software Stack</h3>
              <ul className="list-disc pl-5 space-y-2 text-stone-300">
                <li>Flask server for web application</li>
                <li>Supabase for user and scoring database</li>
                <li>Python for hardware control and logic</li>
                <li>OpenCV for object detection</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-stone-800">
          <Image
            src="/hack.jpg"
            alt="Random Image 1"
            width={1100}
            height={400}
            className="object-cover"
          />
        </div>

        {/* Challenges */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Challenges We Encountered</h2>
          <p className="text-stone-300 text-lg leading-relaxed">
            Linking all the components of the project — from Flask and Supabase
            to the sensors and hardware — was challenging, especially since it
            was our first time working with these technologies. However, we
            overcame these challenges by focusing on problem-solving and testing
            each part iteratively.
          </p>
        </section>

        {/* Accomplishments */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Accomplishments</h2>
          <p className="text-stone-300 text-lg leading-relaxed">
            We are proud of the seamless interaction between all the project
            components and how it engages students with an enjoyable and
            informative way to dispose of waste. The integration of hardware,
            computer vision, and the database has made this project a success.
          </p>
        </section>

        {/* What's Next */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">What's Next for BasketBin</h2>
          <p className="text-stone-300 text-lg leading-relaxed">
            We aim to integrate BasketBin into campuses across Canada to promote
            recycling and waste management in an engaging and educational
            manner.
          </p>
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
                  src="/fernando.png"
                  alt="Fernando"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4 space-y-3">
                <h3 className="text-xl font-bold text-white">Fernando</h3>
                <p className="text-stone-300 text-sm">
                  A posture correcting robot that helps you maintain a healthy
                  posture while working at your desk by slapping you when you
                  slouch.
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row gap-3 sm:justify-between">
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/enxilium/posture-checker-robot"
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
                    href="https://youtu.be/EBsmGGOubCk?si=1_ksNQak9YQNffQ6"
                    className="text-stone-300 hover:text-white flex items-center gap-1 text-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Link>
                </div>
                <Link
                  href="/projects/fernando"
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
