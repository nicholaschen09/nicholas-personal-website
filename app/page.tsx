import Link from 'next/link';
import Footer from '@/components/Footer';

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
};

function TextLink({ href, children, external = false }: TextLinkProps) {
  const className =
    'font-medium transition-colors hover:text-stone-100';

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

const navItems = [
  { href: '/writing', label: 'Writing' },
  { href: '/projects', label: 'Projects' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] px-6 py-10 text-stone-300 md:px-12 md:py-12">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-[30rem] flex-col">
        <header className="flex items-center justify-between gap-4 text-xs font-normal leading-none md:text-sm">
          <h1 className="text-xs font-normal leading-none text-stone-50 md:text-sm">
            Nicholas Chen
          </h1>

          <nav
            aria-label="Primary navigation"
            className="flex flex-wrap gap-x-6 gap-y-2 md:gap-x-8"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-normal leading-none text-stone-400 transition-colors hover:text-stone-100 md:text-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        <section className="mt-8 space-y-8 text-xs leading-relaxed text-stone-300 md:text-sm">
          <p className="font-normal">
            I currently study Systems Design Engineering at{' '}
            <TextLink href="https://uwaterloo.ca/systems-design-engineering/" external>
              University of Waterloo
            </TextLink>
            . I&apos;ve previously worked on software at{' '}
            <TextLink href="https://melius.com/" external>
              Melius
            </TextLink>
            ,{' '}
            <TextLink href="https://textql.com/" external>
              TextQL
            </TextLink>
            ,{' '}
            <TextLink href="https://www.ownr.co/" external>
              Ownr
            </TextLink>
            , and{' '}
            <TextLink href="https://www.rbc.com/" external>
              RBC
            </TextLink>
            {' '}and enjoy product engineering.
          </p>

          <p className="font-normal">
            In my free time, I enjoy writing blogs like{' '}
            <TextLink href="/blogs/ontology-text-to-sql">Why Ontology for Text-to-SQL?</TextLink>{' '}
            and building cool things such as{' '}
            <TextLink href="https://github.com/nicholaschen09/metallic-blob" external>
              Metallic Blob
            </TextLink>
            {' '}and{' '}
            <TextLink href="https://tiktokviewpredictor.vercel.app/" external>
              TikTok View Predictor
            </TextLink>
            .
          </p>
          <p className="font-normal">
            Before I decided to go into engineering, I made lots of <TextLink href="/art">art</TextLink>.
          </p>
        </section>

        <Footer className="mt-8" />
      </div>
    </main>
  );
}
