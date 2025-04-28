import { NextResponse } from 'next/server';
import { searchItems } from '@/app/data/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');

  if (!query) {
    return NextResponse.json({ results: [] }, { status: 400 });
  }

  const searchQuery = query.toLowerCase();

  const results = searchItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery) ||
      item.description.toLowerCase().includes(searchQuery)
  );

  return NextResponse.json({ results });
}
