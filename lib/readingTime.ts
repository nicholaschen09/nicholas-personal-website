/** Rough adult reading speed for blog prose. */
const WORDS_PER_MINUTE = 200;

/**
 * Estimate reading time from markdown/MDX body text.
 * Strips code fences and common markdown noise so fences don't inflate the count.
 */
export function getReadingMinutes(content: string): number {
  const withoutCode = content.replace(/```[\s\S]*?```/g, ' ');
  const plain = withoutCode
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/[#>*_`~\-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const words = plain ? plain.split(' ').length : 0;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}
