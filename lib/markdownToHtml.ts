import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import rehypePrettyCode from "rehype-pretty-code";
import { Effect } from "effect";
// import { codeHighlightingOptions } from '@/lib/codeHighlighting';

export class MarkdownToHtmlError extends Error {
  readonly _tag = "MarkdownToHtmlError";

  constructor(readonly cause: unknown) {
    super("Failed to render markdown to HTML");
    this.name = "MarkdownToHtmlError";
  }
}

export const markdownToHtmlEffect = (markdown: string) =>
  Effect.tryPromise({
    try: () =>
      remark()
        .use(remarkRehype)
        .use(rehypeSlug)
        // .use(rehypePrettyCode, codeHighlightingOptions)
        .use(rehypeStringify)
        .process(markdown),
    catch: (cause) => new MarkdownToHtmlError(cause),
  }).pipe(Effect.map((result) => result.toString()));

export default function markdownToHtml(markdown: string): Promise<string> {
  return Effect.runPromise(markdownToHtmlEffect(markdown));
}
