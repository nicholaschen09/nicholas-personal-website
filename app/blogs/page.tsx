import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

// Mock blog data - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    id: '1',
    title: 'The Future of Web Development',
    excerpt:
      'Exploring the latest trends and technologies shaping the future of web development in 2025 and beyond.',
    date: 'March 12, 2025',
    readTime: '8 min read',
    category: 'Technology',
    slug: 'future-of-web-development',
    image:
      'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop',
    featured: true,
  },
  {
    id: '2',
    title: 'My Journey as a Software Engineer',
    excerpt:
      'Personal reflections on my path through the tech industry, lessons learned, and advice for newcomers.',
    date: 'February 28, 2025',
    readTime: '12 min read',
    category: 'Career',
    slug: 'journey-as-software-engineer',
    image:
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Understanding Modern JavaScript Frameworks',
    excerpt:
      'A deep dive into React, Vue, and Angular - comparing their strengths, weaknesses, and ideal use cases.',
    date: 'February 15, 2025',
    readTime: '10 min read',
    category: 'Programming',
    slug: 'modern-javascript-frameworks',
    image:
      'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '4',
    title: 'Building Accessible Web Applications',
    excerpt:
      'Best practices and techniques for ensuring your web applications are accessible to all users.',
    date: 'January 30, 2025',
    readTime: '9 min read',
    category: 'Accessibility',
    slug: 'building-accessible-web-apps',
    image:
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop',
  },
  {
    id: '5',
    title: 'The Role of AI in Modern Software Development',
    excerpt:
      'How artificial intelligence is transforming the way we write, test, and deploy software.',
    date: 'January 15, 2025',
    readTime: '11 min read',
    category: 'AI',
    slug: 'ai-in-software-development',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop',
  },
];

// Separate featured post from regular posts
const featuredPost = blogPosts.find((post) => post.featured);
const regularPosts = blogPosts.filter((post) => !post.featured);

export default function BlogsPage() {
  return (
    <div className="container mx-auto py-16 px-4 mb-50 md:px-0">
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
                  <span>//</span>
                  <span className="px-2 py-1 rounded-full bg-zinc-800/50 text-zinc-300">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold mb-4 group-hover:text-zinc-300 transition-colors">
                  {post.title}
                </h2>
                <p className="text-zinc-400 mb-5 md:text-lg">{post.excerpt}</p>
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
    </div>
  );
}
