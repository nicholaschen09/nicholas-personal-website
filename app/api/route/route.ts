import { NextResponse } from 'next/server';
import { searchItems } from '@/app/data/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const queryParam = searchParams.get('query');
  if (!queryParam) {
    return NextResponse.json({ results: [] }, { status: 400 });
  }
  const searchQuery = queryParam.trim().toLowerCase();

  let results;
  // If the query exactly matches a category like "blogs" or "projects",
  // return all items for that category.
  if (searchQuery === 'blogs' || searchQuery === 'projects') {
    results = searchItems.filter(
      (item) => item.category.toLowerCase() === searchQuery
    );
  } else {
    // Otherwise, search by title or description.
    results = searchItems.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery) ||
        item.description.toLowerCase().includes(searchQuery)
    );
  }

  return NextResponse.json({ results });
}
