import type { Metadata } from "next";
import { notFound } from "next/navigation";
import BlogPostView from "@/components/BlogPostView";
import { getSiteContent } from "@/lib/content";
import { extractHeadings } from "@/lib/extractHeadings";
import markdownToHtml from "@/lib/markdownToHtml";
import { mdxToReact } from "@/lib/mdxToReact";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

type Params = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const title = `${post.title} | Amaan`;

  return {
    title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: post.coverImage ? [post.coverImage] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Params) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  const contentHtml = post.extension === "md" ? await markdownToHtml(post.content) : undefined;
  const content = post.extension === "mdx" ? await mdxToReact(post.content) : undefined;
  const sections = extractHeadings(post.content);
  const { ui } = getSiteContent();

  return (
    <BlogPostView
      title={post.title}
      date={post.date}
      author={post.author}
      readingMinutes={post.readingMinutes}
      coverImage={post.coverImage}
      coverAlt={post.coverAlt}
      contentHtml={contentHtml}
      sections={sections}
      backLabel={ui.blogBack}
      contentsLabel={ui.blogContents}
    >
      {content}
    </BlogPostView>
  );
}
