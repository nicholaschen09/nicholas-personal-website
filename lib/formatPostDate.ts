import { format, parseISO } from 'date-fns';

export function formatPostDate(date: string, author?: string): string {
  const formatted = format(parseISO(date), 'MMMM d, yyyy');
  if (author) {
    return `${author} - ${formatted}`;
  }
  return formatted;
}
