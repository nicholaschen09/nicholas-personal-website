import { remark } from 'remark';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';

export default async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(markdown);

  return result.toString();
}
