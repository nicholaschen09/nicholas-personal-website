import Link from 'next/link';

interface ListingItemTitleProps {
  href: string;
  title: string;
}

export default function ListingItemTitle({ href, title }: ListingItemTitleProps) {
  const className = 'listing-item-title';

  if (href.startsWith('http')) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {title}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {title}
    </Link>
  );
}
