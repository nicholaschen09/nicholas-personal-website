import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export default function VoluntrackProject() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24 text-white">
      <div className="max-w-5xl w-full space-y-12">
        {/* Navigation */}
        <Link
          href="/projects"
          className="inline-flex items-center text-stone-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to projects
        </Link>

        {/* Hero Section */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
            <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-white">
              VolunTrack
            </h1>
          </div>

          <p className="text-xl text-stone-300">
            A comprehensive volunteer tracking platform that streamlines event
            management and fosters community engagement.
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-[16/16] rounded-xl overflow-hidden border border-stone-800">
          <Image
            src="/voluntrack1.jpg"
            alt="VolunTrack Dashboard"
            width={1200}
            height={800}
            className="object-cover"
            priority
          />
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://voluntracks.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="text-white bg-transparent hover:text-stone-400 transition-colors">
              <ExternalLink className="mr-2 h-4 w-4" /> Demo
            </Button>
          </a>
          <a
            href="https://github.com/VolunTrack"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="text-white bg-transparent hover:text-stone-400 transition-colors">
              <Image
                src="/github1.png"
                alt="GitHub Logo"
                width={24}
                height={24}
                className="mr-2"
              />
              Code
            </Button>
          </a>
        </div>

        {/* Overview Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Overview</h2>
          <p className="text-stone-300 text-lg leading-relaxed">
            VolunTrack is an innovative web-based platform designed to simplify
            volunteer management. The system automates the tracking of volunteer
            hours, event participation, and community contributions, enabling
            organizations to generate real-time insights and comprehensive
            reports that boost engagement.
          </p>
        </section>

        {/* Key Features */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-transparent border border-white p-4 rounded-lg">
              <CardContent className="p-4 space-y-3">
                <p className="text-stone-400">
                  Provides up-to-date insights into volunteer participation and
                  event performance. The dashboard offers a user-friendly
                  interface that allows organizations to monitor key metrics,
                  track trends, and make data-driven decisions to enhance
                  engagement and operational efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-transparent border border-white p-4 rounded-lg">
              <CardContent className="p-4 space-y-3">
                <p className="text-stone-400">
                  Automatically records volunteer hours and event attendance to
                  eliminate manual entry. This feature ensures accuracy and
                  saves time by seamlessly integrating with event schedules and
                  attendance logs, providing a hassle-free experience for both
                  volunteers and administrators.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-transparent border border-white p-4 rounded-lg">
              <CardContent className="p-4 space-y-3">
                <p className="text-stone-400">
                  Generates detailed reports that help organizations assess
                  volunteer impact and streamline operations. The reporting
                  tools provide customizable templates, visual analytics, and
                  exportable formats, enabling organizations to showcase their
                  achievements and identify areas for improvement.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technical Details */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Technical Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">
                Data Sources & Extraction
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-stone-300">
                <li>APIs for volunteer event data and registrations</li>
                <li>CSV file ingestion for historical volunteer records</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Software Stack</h3>
              <ul className="list-disc pl-5 space-y-2 text-stone-300">
                <li>Next.js & React for the web interface</li>
                <li>Node.js & Express for API services</li>
                <li>Firebase/Firestore for real-time data storage</li>
                <li>RESTful APIs for data integration</li>
                <li>Custom analytics and reporting modules</li>
              </ul>
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
            <Card className="bg-transparent border border-stone-700 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/pandas.png"
                  alt="TikTok View Predictor"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4 space-y-3">
                <h3 className="text-xl font-bold text-white">
                  TikTok View Predictor
                </h3>
                <p className="text-stone-300 text-sm">
                  A machine learning model that predicts TikTok video views
                  using linear regression.
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
          <p className="text-stone-400 mt-10 mb-4">© 2025 Nicholas Chen.</p>
        </div>
      </footer>
    </main>
  );
}
