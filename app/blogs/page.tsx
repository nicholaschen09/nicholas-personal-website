import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const blogPosts = [
  {
    id: '1',
    title: 'My SYDE 1A Experience',
    excerpt:
      'Reflecting on my first semester in the Systems Design Engineering program at the University of Waterloo, discussing challenges, projects, and lessons learned.',
    date: 'March 12, 2025',
    readTime: '10 min read',
    slug: 'syde1aexperience',
    image: '/syde.png',
  },
  {
    id: '2',
    title: 'How Social Media Changed My Life',
    excerpt:
      'The positive and negative impacts of social media on my life, from connecting with friends to dealing with distractions.',
    date: 'March 28, 2025',
    readTime: '7 min read',
    slug: 'socialmedia',
    image: '/socialmedia.jpeg',
  },
  {
    id: '3',
    title: 'What I Loved About Being A Software Engineer Intern at Ownr',
    excerpt:
      'My first co-op term at Ownr, including the projects I worked on, skills I developed, and challenges I faced, highlighting insights into full-stack web development and teamwork.',
    date: 'April 20, 2025',
    readTime: '10 min read',
    slug: 'ownr',
    image: '/ownr.png',
  },
];
const regularPosts = blogPosts;

export default function BlogsPage() {
  return (
    <div className="container mx-auto py-16 px-4 mb-50 md:px-0 max-w-6xl">
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-6 mt-20">Blogs</h1>
        <p className="text-lg text-zinc-400 max-w-3xl">
          Thoughts, ideas, and reflections on technology, software development,
          and my personal journey in the tech industry.
        </p>
      </div>
      <div className="mb-12"></div>

      <div className="grid gap-16">
        {regularPosts.map((post) => (
          <article
            key={post.id}
            className="border-t border-zinc-800 pt-10 group"
          >
            <div className="flex flex-col md:flex-row items-start justify-between gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 text-sm text-zinc-500 mb-3">
                  <span>{post.date}</span>
                  <span>//</span>
                  <span className="text-pink-500">{post.readTime}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 group-hover:text-zinc-300 transition-colors">
                  {post.title}
                </h2>
                <p className="text-zinc-400 mb-5 md:text-normal">
                  {post.excerpt}
                </p>
                <div className="flex items-center">
                  <Link
                    href={`/blogs/${post.slug}`}
                    className="inline-flex items-center gap-1 text-white hover:text-zinc-300 transition-colors pl-0"
                  >
                    Read more
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </Link>
                </div>
              </div>
              <div className="w-full md:w-[280px] h-[180px] relative rounded-lg overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 280px"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
      {/* Footer */}
      <footer className="w-full mt-8 pt-8">
        <div className="max-w-8xl mx-auto w-full">
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
    </div>
  );
}
