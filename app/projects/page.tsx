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
    image: '/placeholder.svg?height=600&width=800',
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
    id: 'ai-content-generator',
    title: 'AI Content Generator',
    description:
      'An application that leverages AI to generate blog posts, social media content, and marketing copy for content creators.',
    image: '/placeholder.svg?height=600&width=800',
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl">
              A collection of my work spanning hardware, software, and design.
              Each project represents a unique challenge and solution.
            </p>
          </div>

          {/* Featured Projects Section */}
          {featuredProjects.length > 0 && (
            <section className="space-y-8">
              <h2 className="text-3xl font-bold">Featured Projects</h2>
              <div className="grid grid-cols-1 gap-12">
                {featuredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="flex flex-col md:flex-row gap-8 bg-transparent rounded-xl p-6 border border-gray-700"
                  >
                    <div className="md:w-1/2">
                      <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
                        <Image
                          src={project.image || '/placeholder.svg'}
                          alt={project.title}
                          fill
                          className="object-cover transition-transform hover:scale-105 duration-500"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2 flex flex-col justify-between space-y-4">
                      <div className="space-y-4">
                        <h3 className="text-2xl font-bold">{project.title}</h3>
                        <p className="text-gray-300">{project.description}</p>
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.tags.map((tag, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="border-gray-500 text-white px-3 py-1 text-sm"
                            >
                              {tag.name}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-3 pt-4">
                        <Button
                          asChild
                          variant="outline"
                          className="border-white text-white hover:bg-gray-800"
                        >
                          <Link href={project.links.details}>View Details</Link>
                        </Button>
                        {project.links.github && (
                          <Button
                            asChild
                            variant="outline"
                            className="border-white text-white hover:bg-gray-800"
                          >
                            <Link href={project.links.github}>
                              <Github className="mr-2 h-4 w-4" /> Code
                            </Link>
                          </Button>
                        )}
                        {project.links.demo && (
                          <Button
                            asChild
                            variant="outline"
                            className="border-white text-white hover:bg-gray-800"
                          >
                            <Link href={project.links.demo}>
                              <ExternalLink className="mr-2 h-4 w-4" /> Demo
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* All Projects Grid */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold">All Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
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

          {/* Contact Section */}
          <section className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl p-8 text-center space-y-4">
            <h2 className="text-2xl font-bold">
              Interested in working together?
            </h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <Button
              asChild
              className="bg-white text-black hover:bg-gray-200 mt-4"
            >
              <Link href="mailto:nicholas.chen243@gmail.com">Get In Touch</Link>
            </Button>
          </section>
        </div>

        {/* Footer */}
        <footer className="w-full max-w-6xl mt-16 pt-8 border-t border-gray-800">
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
    </>
  );
}
