export type PostCategory = 'tech' | 'life';

export type Post = {
  slug: string;
  extension: 'md' | 'mdx';
  title: string;
  /** Short lowercase title for the home page list. Falls back to `title`. */
  listTitle: string;
  category: PostCategory;
  date: string;
  author?: string;
  excerpt?: string;
  coverImage?: string;
  coverAlt?: string;
  published?: boolean;
  readingMinutes: number;
  content: string;
};
