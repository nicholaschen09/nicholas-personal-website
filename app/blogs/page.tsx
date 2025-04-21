import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import Footer from '@/components/footer/footer';

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
    date: 'April 10, 2025',
    readTime: '10 min read',
    slug: 'ownr',
    image: '/ownr.png',
  },
];
const regularPosts = blogPosts;

export default function BlogsPage() {
  return (
    <div className="container mx-auto py-16 px-4 md:px-0 max-w-6xl mb-20">
      <div className="mb-16">
        <h1 className="text-4xl font-bold mb-6 mt-20">Blogs</h1>
        <p className="text-lg text-zinc-400 max-w-3xl">
          Thoughts, ideas, and reflections on technology, software development,
          and my personal journey in the tech industry.
        </p>
      </div>
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
                    className="inline-flex items-center gap-1 text-white hover:text-zinc-300 transition-colors"
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
      <div className="mt-40">
        <Footer />
      </div>
    </div>
  );
}
