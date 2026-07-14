import { format, parseISO } from 'date-fns';

export function formatPostDate(date: string, author?: string, readingMinutes?: number): string {
  const formatted = format(parseISO(date), 'MMMM d, yyyy');
  const parts = [author, formatted, readingMinutes != null ? `${readingMinutes} min read` : null].filter(
    Boolean,
  );
  return parts.join(' · ');
}
