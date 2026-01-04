import { getPostBySlug, getAllPostSlugs } from '@/lib/mdx';
import BlogPost from '@/components/BlogPost';
import { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';

interface Props {
  params: Promise<{ slug: string }>;
}

const components = {
  h1: (props: any) => <h1 className="text-2xl md:text-3xl font-medium text-white mb-2" {...props} />,
  h2: (props: any) => <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8" {...props} />,
  h3: (props: any) => <h3 className="text-base md:text-lg font-semibold text-stone-100 mb-2 mt-6" {...props} />,
  p: (props: any) => <p className="mb-4" {...props} />,
  ul: (props: any) => <ul className="space-y-2 list-disc list-inside text-stone-400 mb-4" {...props} />,
  li: (props: any) => <li className="" {...props} />,
  a: (props: any) => <a className="text-stone-200 hover:text-white underline" {...props} />,
  code: (props: any) => <code className="text-stone-200 bg-stone-800/50 px-1 rounded text-xs md:text-sm font-mono" {...props} />,
  pre: (props: any) => <pre className="bg-stone-900 p-4 rounded-lg overflow-x-auto mb-6 text-xs md:text-sm" {...props} />,
  img: (props: any) => (
    <figure className="my-6">
      <img className="w-full rounded-sm" {...props} alt={props.alt || ''} />
      {props.title && <figcaption className="text-stone-500 text-xs mt-2 italic text-center">{props.title}</figcaption>}
    </figure>
  ),
  hr: (props: any) => <hr className="border-stone-700 my-8" {...props} />,
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { en } = await getPostBySlug(slug);

  return {
    title: `${en.frontmatter.title} | Nicholas Chen`,
    description: en.frontmatter.description || `Read ${en.frontmatter.title} on Nicholas Chen's blog.`,
    openGraph: {
      title: en.frontmatter.title,
      description: en.frontmatter.description,
      type: 'article',
      images: en.frontmatter.image ? [`https://nicholaschen.me${en.frontmatter.image}`] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: en.frontmatter.title,
      images: en.frontmatter.image ? [`https://nicholaschen.me${en.frontmatter.image}`] : [],
    },
  };
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  return (
    <BlogPost 
      enContent={<MDXRemote source={post.en.source} components={components} />}
      zhContent={<MDXRemote source={post.zh.source} components={components} />}
      frontmatterEn={post.en.frontmatter}
      frontmatterZh={post.zh.frontmatter}
    />
  );
}