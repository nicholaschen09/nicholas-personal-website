import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default function BlogPost() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <article className="max-w-4xl w-full space-y-8 pt-24 md:pt-16">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to homepage
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            What I Loved About Being A Software Engineering Intern at Ownr
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-gray-400">March 13, 2025</span>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="bg-transparent text-white border-gray-500 font-medium"
              >
                Co-op
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
                RBC
              </Badge>
              <Badge
                variant="outline"
                className="bg-transparent text-white border-gray-500 font-medium"
              >
                Ownr
              </Badge>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
          <Image
            src="/ownr.png"
            alt="Co-op Experience"
            width={1200}
            height={600}
            className="object-cover"
          />
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl leading-relaxed">
            My co-op terms at Ownr and RBC were transformative experiences that
            provided me with invaluable industry knowledge and skills. Here's a
            detailed account of my journey.
          </p>

          {/* Ownr Experience */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Ownr Co-op Term</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p>
                At Ownr, I worked as a software engineering intern focusing on
                full-stack web development. I was involved in developing new
                features and improving existing functionality for their
                platform.
              </p>
              <p>
                The collaborative environment at Ownr allowed me to work closely
                with cross-functional teams, enhancing my communication and
                teamwork skills. I also gained hands-on experience with modern
                web technologies and frameworks.
              </p>
            </div>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Ownr Co-op"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>

          {/* RBC Experience */}
          <h2 className="text-2xl font-bold mt-10 mb-4">RBC Co-op Term</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p>
                During my co-op term at RBC, I worked as an innovation developer
                intern. My primary project involved developing a machine
                learning model to predict monthly sign-in volumes, which
                significantly improved resource allocation within the support
                team.
              </p>
              <p>
                This experience honed my skills in data analysis, machine
                learning, and Python programming. I also learned the importance
                of effective communication and collaboration in a large
                organization.
              </p>
            </div>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="RBC Co-op"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>

          {/* Key Takeaways */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Key Takeaways</h2>
          <p>
            Reflecting on my co-op terms, here are the most important lessons I
            learned:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Embrace the challenge</h3>
              <p className="text-sm">
                The workload is intense, but it's designed to build your
                resilience and problem-solving abilities.
              </p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">
                Collaborate effectively
              </h3>
              <p className="text-sm">
                Learning to work in teams is essential, as many projects involve
                group collaboration.
              </p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Seek help early</h3>
              <p className="text-sm">
                Don't wait until you're struggling to ask for assistance from
                mentors, colleagues, or supervisors.
              </p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Balance is key</h3>
              <p className="text-sm">
                Make time for activities outside of work to maintain your
                well-being.
              </p>
            </div>
          </div>

          <p className="text-xl leading-relaxed mt-8">
            If you're considering a co-op term at Ownr or RBC, I hope this gives
            you a helpful glimpse into what to expect. Both experiences were
            challenging but incredibly rewarding, providing me with skills and
            knowledge that will benefit my future career.
          </p>
        </div>
      </article>
      {/* Footer */}
      <footer className="w-full mt-8 pt-8">
        <div className="max-w-4xl mx-auto w-full">
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
