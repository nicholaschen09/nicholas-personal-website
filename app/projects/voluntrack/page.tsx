import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function VoluntrackProject() {
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
              VolunTrack
            </h1>
          </div>

          <p className="text-xl text-gray-300">
            A comprehensive volunteer tracking platform that streamlines event
            management and fosters community engagement.
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-gray-800">
          <Image
            src="/voluntrack.png"
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
            href="https://voluntrack-demo.example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors"
            >
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Button>
          </a>
          <a
            href="https://github.com/VolunTrack"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="border border-white text-white bg-transparent hover:bg-white hover:text-black transition-colors"
            >
              <Image
                src="/github.png"
                alt="GitHub Logo"
                width={16}
                height={16}
                className="mr-2"
              />
              View Code
            </Button>
          </a>
        </div>

        {/* Overview Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Overview</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            VolunTrack is an innovative web-based platform designed to simplify
            volunteer management. The system automates the tracking of volunteer
            hours, event participation, and community contributions, enabling
            organizations to generate real-time insights and comprehensive
            reports that boost engagement.
          </p>
        </section>

        {/* Problem & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold">The Problem</h2>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-gray-800">
              <Image
                src="/voluntrack-problem.png"
                alt="Inefficient volunteer tracking"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
            <p className="text-gray-300">
              Many organizations struggle with manually tracking volunteer
              contributions and event participation, leading to inefficiencies
              and missed opportunities for engagement.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold">The Solution</h2>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-gray-800">
              <Image
                src="/voluntrack-solution.png"
                alt="Automated volunteer tracking"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
            <p className="text-gray-300">
              VolunTrack offers an integrated platform that automates data
              collection, standardizes volunteer hours, and generates real-time
              reports. This streamlined process enhances resource allocation and
              improves community engagement.
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
                  <span className="text-white font-bold">DB</span>
                </div>
                <h3 className="text-xl font-bold">Real-Time Dashboard</h3>
                <p className="text-gray-400">
                  Provides up-to-date insights into volunteer participation and
                  event performance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-transparent border border-gray-800">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full border border-white flex items-center justify-center">
                  <span className="text-white font-bold">AT</span>
                </div>
                <h3 className="text-xl font-bold">Automated Tracking</h3>
                <p className="text-gray-400">
                  Automatically records volunteer hours and event attendance to
                  eliminate manual entry.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-transparent border border-gray-800">
              <CardContent className="p-6 space-y-4">
                <div className="h-12 w-12 rounded-full border border-white flex items-center justify-center">
                  <span className="text-white font-bold">RP</span>
                </div>
                <h3 className="text-xl font-bold">Robust Reporting</h3>
                <p className="text-gray-400">
                  Generates detailed reports that help organizations assess
                  volunteer impact and streamline operations.
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
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>APIs for volunteer event data and registrations</li>
                <li>CSV file ingestion for historical volunteer records</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Software Stack</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>Next.js & React for the web interface</li>
                <li>Node.js & Express for API services</li>
                <li>Firebase/Firestore for real-time data storage</li>
                <li>RESTful APIs for data integration</li>
                <li>Custom analytics and reporting modules</li>
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
                  <span className="text-4xl font-bold text-white">+30%</span>
                  <p className="text-gray-400 mt-2">
                    Increase in volunteer engagement
                  </p>
                </div>
                <div className="border border-gray-800 p-6 rounded-lg text-center">
                  <span className="text-4xl font-bold text-white">-80%</span>
                  <p className="text-gray-400 mt-2">
                    Reduction in manual tracking effort
                  </p>
                </div>
              </div>
              <p className="text-gray-300">
                Based on a 6-month pilot with multiple community organizations.
              </p>
            </div>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-gray-800">
              <Image
                src="/voluntrack-results.png"
                alt="VolunTrack Results Dashboard"
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
                src="/voluntrack-1.png"
                alt="VolunTrack Home Screen"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-800">
              <Image
                src="/voluntrack-2.png"
                alt="Volunteer Event Tracking"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-800">
              <Image
                src="/voluntrack-3.png"
                alt="Detailed Reporting"
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
                  src="/tiktokview.png"
                  alt="TikTok View Predictor"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">
                  TikTok View Predictor
                </h3>
                <p className="text-gray-400">
                  A machine learning model that forecasts TikTok video views
                  using linear regression and data analytics.
                </p>
                <Link
                  href="/projects/tiktokviewpredictor"
                  className="text-gray-400 hover:text-white inline-flex items-center"
                >
                  View project →
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-transparent border border-gray-800 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/customerfeedback.png"
                  alt="Customer Feedback ETL Pipeline"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white">
                  Customer Feedback ETL Pipeline
                </h3>
                <p className="text-gray-400">
                  An end-to-end data pipeline that processes customer feedback
                  using ETL techniques and machine learning analysis.
                </p>
                <Link
                  href="/projects/customerfeedbacketl"
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
                    className="max-w-full max-h-full object-contain translate-y-1 translate-x-1"
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
