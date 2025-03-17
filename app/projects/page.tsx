import Link from 'next/link';
import Image from 'next/image';
import { Github, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '@/components/header';

// Project type definition
type Project = {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: {
    name: string;
    color: string;
  }[];
  links: {
    demo?: string;
    github?: string;
    details: string;
  };
  featured: boolean;
};

// Sample projects data
const projects: Project[] = [
  {
    id: 'fernando',
    title: 'Fernando',
    description:
      'A posture-correcting robot that slaps you when you slouch, using computer vision and a mechanical arm to provide physical feedback.',
    image: '/fernando.png',
    tags: [
      { name: 'Hardware', color: 'bg-pink-600' },
      { name: 'Robotics', color: 'bg-blue-600' },
      { name: 'Computer Vision', color: 'bg-purple-600' },
    ],
    links: {
      demo: '#',
      github: '#',
      details: '/projects/fernando',
    },
    featured: true,
  },
  {
    id: 'basketbin',
    title: 'BasketBin',
    description:
      'An automated garbage sorter that leverages computer vision to sort garbage thrown in depending on if it is recylcable or not.',
    image: '/basketbin.jpg',
    tags: [
      { name: 'Next.js', color: 'bg-gray-700' },
      { name: 'OpenAI', color: 'bg-gray-700' },
      { name: 'Tailwind CSS', color: 'bg-gray-700' },
    ],
    links: {
      demo: '#',
      github: '#',
      details: '/projects/ai-content-generator',
    },
    featured: true,
  },
  {
    id: 'smart-home-dashboard',
    title: 'Smart Home Dashboard',
    description:
      'An IoT dashboard for monitoring and controlling smart home devices with automation capabilities and data visualization.',
    image: '/placeholder.svg?height=600&width=800',
    tags: [
      { name: 'Vue.js', color: 'bg-gray-700' },
      { name: 'MQTT', color: 'bg-gray-700' },
      { name: 'Chart.js', color: 'bg-gray-700' },
    ],
    links: {
      demo: '#',
      github: '#',
      details: '/projects/smart-home-dashboard',
    },
    featured: false,
  },
  {
    id: 'blockchain-explorer',
    title: 'Blockchain Explorer',
    description:
      'A web application for exploring blockchain transactions, addresses, and smart contracts with real-time data updates.',
    image: '/placeholder.svg?height=600&width=800',
    tags: [
      { name: 'TypeScript', color: 'bg-gray-700' },
      { name: 'Ethereum', color: 'bg-gray-700' },
      { name: 'Web3.js', color: 'bg-gray-700' },
    ],
    links: {
      demo: '#',
      github: '#',
      details: '/projects/blockchain-explorer',
    },
    featured: false,
  },
  {
    id: 'fitness-tracker',
    title: 'Fitness Tracker',
    description:
      'A mobile-first application for tracking workouts, nutrition, and fitness progress with data visualization and goal setting.',
    image: '/placeholder.svg?height=600&width=800',
    tags: [
      { name: 'React Native', color: 'bg-gray-700' },
      { name: 'Firebase', color: 'bg-gray-700' },
      { name: 'D3.js', color: 'bg-gray-700' },
    ],
    links: {
      demo: '#',
      github: '#',
      details: '/projects/fitness-tracker',
    },
    featured: false,
  },
  {
    id: 'collaborative-whiteboard',
    title: 'Collaborative Whiteboard',
    description:
      'A real-time collaborative whiteboard application for remote teams with drawing tools and chat functionality.',
    image: '/placeholder.svg?height=600&width=800',
    tags: [
      { name: 'React', color: 'bg-gray-700' },
      { name: 'Socket.io', color: 'bg-gray-700' },
      { name: 'Canvas API', color: 'bg-gray-700' },
    ],
    links: {
      demo: '#',
      github: '#',
      details: '/projects/collaborative-whiteboard',
    },
    featured: false,
  },
];

export default function ProjectsPage() {
  // Get featured projects
  const featuredProjects = projects.filter((project) => project.featured);
  // Get other projects
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center p-6 md:p-24 bg-zinc-990 text-white pt-24">
        <div className="max-w-6xl w-full space-y-16">
          {/* Page Header */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold text-white">
              All My Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              A collection of my work spanning hardware, software, and design.
              Each project represents a unique challenge and solution.
            </p>
          </div>
          {/* All Projects Grid */}
          <section className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {projects.slice(0, 6).map((project) => (
                <div
                  key={project.id}
                  className="bg-transparent rounded-xl overflow-hidden border border-gray-700 flex flex-col h-full transition-transform hover:translate-y-[-5px] duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm mb-4 flex-grow">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="border-gray-500 text-white"
                        >
                          {tag.name}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <Link
                        href={project.links.details}
                        className="text-blue-400 hover:text-blue-300 inline-flex items-center font-medium"
                      >
                        View project →
                      </Link>
                      <div className="flex space-x-2">
                        {project.links.github && (
                          <Link
                            href={project.links.github}
                            className="text-gray-400 hover:text-white"
                          >
                            <Github className="h-5 w-5" />
                            <span className="sr-only">GitHub</span>
                          </Link>
                        )}
                        {project.links.demo && (
                          <Link
                            href={project.links.demo}
                            className="text-gray-400 hover:text-white"
                          >
                            <ExternalLink className="h-5 w-5" />
                            <span className="sr-only">Live Demo</span>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="w-full mt-8 pt-8">
          <div className="max-w-6xl mx-auto w-full">
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
              </div>

              <p className="text-gray-500 text-sm mt-6 text-center md:text-left">
                Designed and built by Nicholas Chen
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
