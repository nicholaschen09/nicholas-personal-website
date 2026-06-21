export type Post = {
  slug: string;
  title: string;
  date: string;
  author?: string;
  excerpt?: string;
  coverImage?: string;
  coverAlt?: string;
  published?: boolean;
  content: string;
};
