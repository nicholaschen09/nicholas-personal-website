import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Github, ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export default function EngineeringProject() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24 text-white">
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
          </div>

          <p className="text-xl text-gray-300">
            A showcase of my engineering projects, featuring 3D modeling with
            SOLIDWORKS, as well as physical and systems design innovations.
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden border border-gray-800">
          <Image
            src="/car.png"
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
          ></a>
          <a
            href="https://github.com/enxilium/posture-checker-robot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="text-white bg-transparent hover:text-gray-400 transition-colors">
              <Image
                src="/github.png"
                alt="GitHub Logo"
                width={16}
                height={16}
                className="mr-2"
              />
              Github
            </Button>
          </a>
        </div>
        {/* Overview Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Overview</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Welcome to my engineering portfolio, where I showcase a collection
            of innovative projects that highlight my skills in software
            development, hardware integration, and problem-solving. From
            building intelligent systems to designing user-friendly
            applications, each project reflects my passion for creating
            impactful solutions that bridge technology and real-world
            challenges. I also leverage tools like SolidWorks for 3D modeling
            and prototyping, enabling precise and efficient hardware designs.
          </p>
        </section>

        {/* Gallery */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative aspect-[3/3] rounded-lg overflow-hidden border border-gray-800">
              <Image
                src="/nintendo.png"
                alt="Fernando prototype"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-800">
              <Image
                src="/carfinal.png"
                alt="Fernando internal components"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-square rounded-lg overflow-hidden border border-gray-800">
              <Image
                src="/spreadpieces.png"
                alt="Fernando in use"
                fill
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
              View all Projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-transparent border border-gray-700 overflow-hidden">
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
                <p className="text-gray-300 text-sm">
                  A machine learning model that predicts TikTok video views
                  using linear regression.
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row gap-3 sm:justify-between">
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/nicholaschen09/tiktok-view-predictor"
                    className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
                  >
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <img src="/github.png" alt="GitHub" className="w-4 h-4" />
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
                  className="text-gray-300 hover:te
                  
                  xt-white flex items-center gap-1 text-sm"
                >
                  Read more <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-transparent border border-gray-700 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/etl.png"
                  alt="Engineering"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4 space-y-3">
                <h3 className="text-xl font-bold text-white">
                  Customer FeedBack ETL Pipeline
                </h3>
                <p className="text-gray-300 text-sm">
                  An ETL pipeline that processes customer feedback with
                  sentiment analysis for actionable insights.
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row gap-3 sm:justify-between">
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/nicholaschen09/engineering-portfolio"
                    className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
                  >
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <img src="/github.png" alt="GitHub" className="w-4 h-4" />
                    </div>
                    Code
                  </Link>
                </div>
                <Link
                  href="/projects/engineeringportfolio"
                  className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
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
          <hr className="border-t border-gray-700 mb-8" />
          <div className="flex flex-col items-center md:items-start">
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
          <p className="text-gray-400 mt-10 mb-4">© 2025 Nicholas Chen.</p>
        </div>
      </footer>
    </main>
  );
}
