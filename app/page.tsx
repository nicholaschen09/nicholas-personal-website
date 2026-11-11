import Link from 'next/link';
import Footer from '@/components/Footer';

type TextLinkProps = {
  href: string;
  children: React.ReactNode;
  external?: boolean;
};

function TextLink({ href, children, external = false }: TextLinkProps) {
  const className =
    'box-decoration-clone rounded-[1px] bg-stone-500/30 px-0.5 font-medium text-stone-100 transition-colors hover:bg-stone-500/50';

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
  { href: '/art', label: 'Art' },
  { href: '/writing', label: 'Writing' },
  { href: '/projects', label: 'Projects' },
];

export default function Home() {
  return (
    <main className="homepage min-h-screen bg-[#1a1a1a] px-6 py-10 text-stone-300 md:px-12 md:py-12">
      <div className="mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-[30rem] flex-col">
        <header className="flex items-center justify-between gap-4 text-xs font-normal leading-none md:text-sm">
          <h1 className="text-xs font-normal leading-none tracking-normal text-stone-50 md:text-sm">
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

        <section className="page-content-after-header space-y-8 text-xs leading-relaxed text-stone-300 md:text-sm">
          <p className="font-normal">
            I study Systems Design Engineering at the{' '}
            <TextLink href="https://uwaterloo.ca/systems-design-engineering/" external>
              University of Waterloo
            </TextLink>, and I&apos;m interested in product engineering.
          </p>
          <p className="font-normal">
            Previously, I took the Playground feature from 0 to 1 at{' '}
            <TextLink href="https://melius.com/" external>
              Melius
            </TextLink>
            , worked on data analysis agents and the ontology at{' '}
            <TextLink href="https://textql.com/" external>
              TextQL
            </TextLink>
            , built internal tools at{' '}
            <TextLink href="https://www.ownr.co/" external>
              Ownr
            </TextLink>
            , and implemented ML models at{' '}
            <TextLink href="https://www.rbc.com/" external>
              RBC
            </TextLink>
            .
          </p>
        </section>

        <Footer className="mt-8" />
      </div>
    </main>
  );
}
