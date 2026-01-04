import { getPostBySlug, getAllPostSlugs } from '@/lib/mdx';
import BlogPost from '@/components/BlogPost';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

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

  return <BlogPost en={post.en} zh={post.zh} />;
}
