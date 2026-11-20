import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import BlogViewCount from '@/components/BlogViewCount';
import EmbeddedTweet from '@/components/EmbeddedTweet';
import ImageLightbox from '@/components/ImageLightbox';
import TableOfContents, { type TOCSection } from '@/components/TableOfContents';

const sections: TOCSection[] = [
  { id: 'recruiting', title: 'School and Tech Recruiting for Summer 2026' },
  { id: 'summer-in-new-york', title: 'Spending a Summer in New York City' },
  { id: 'second-year', title: '2B: The End of Second Year' },
  { id: 'reflection', title: 'A Reflection on My Journey in Tech' },
  { id: 'next', title: 'What’s Next and My Goals for 2027' },
];

const linkClass =
  'underline decoration-stone-500 underline-offset-2 transition-colors hover:text-pink-300 hover:decoration-pink-300';
const headingClass = 'text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8';

export default function RetrospectivePage() {
  return (
    <main className="min-h-screen bg-[#1a1a1a] px-6 pb-12 pt-10 text-stone-300 md:px-12 md:pt-12">
      <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-[minmax(13rem,1fr)_minmax(0,30rem)_minmax(0,1fr)] lg:gap-8 lg:items-start">
        <TableOfContents sections={sections} title="" className="lg:mt-20" />
        <ImageLightbox>
          <article className="w-full max-w-[30rem] mx-auto">
            <header className="sticky top-0 z-40 -mt-4 -mx-6 flex items-center gap-1 bg-[#1a1a1a] px-6 pt-4 pb-4 text-xs font-normal leading-none backdrop-blur md:-mx-12 md:px-12 md:text-sm lg:-mx-0 lg:px-0">
              <Link
                href="/"
                className="text-xs font-normal leading-none text-stone-50 transition-colors hover:text-stone-300 md:text-sm"
              >
                Nicholas Chen
              </Link>
              <span className="text-stone-500"> / </span>
              <Link
                href="/writing"
                className="text-stone-400 transition-colors hover:text-stone-200"
              >
                Writing
              </Link>
              <span className="text-stone-500"> / </span>
              <span className="text-stone-400">2026 Retrospective</span>
            </header>

            <h1 className="mt-2 text-[22px] md:text-[28px] font-medium text-white mb-2">
              A Retrospective on My Year in 2026
            </h1>
            <p className="flex items-baseline justify-between gap-4 text-stone-500 text-sm mb-6">
              <span>Nicholas Chen · December 2026</span>
              <BlogViewCount path="/writing/2026-retrospective" increment />
            </p>

            <figure className="mb-6">
              <Image
                src="/writing/2026-retrospective/cover.png"
                alt="Nighttime city street with 2026 drawn across the scene in red"
                width={650}
                height={412}
                sizes="(max-width: 768px) calc(100vw - 48px), 480px"
                priority
                className="w-full object-cover"
              />
            </figure>

            <div
              className="space-y-8 text-xs md:text-sm leading-relaxed"
              style={{ fontWeight: 400 }}
            >
              <section>
                <p>
                  I’ve never really done a formal year in review. I usually have a good idea of the
                  goals I’ve accomplished and what I want to do differently the following year. This
                  year, I wanted to write it all down so I could look back on this time in my life
                  in the future.
                </p>
              </section>

              <section>
                <h2 id="recruiting" className={headingClass}>
                  School and Tech Recruiting for Summer 2026
                </h2>
                <p>
                  Living in New York for a semester made it awful to come back to Waterloo for the
                  winter term, but it was the start of 2A, my first semester as a second year here.
                  I had lots of fun during co-op and learned a lot of new technical skills and
                  startup lessons at TextQL. This helped when I was recruiting again for summer 2026
                  internships.
                </p>
                <p className="mt-4">
                  I had set a goal of trying for a bigger company this time, since everyone around
                  me said it would help with future job searches. The previous summer, I had applied
                  to so many jobs and heard back from only a few. I failed those interviews, and
                  that stung. I still remember not being able to finish the LeetCode question in my
                  Palantir interview.
                </p>
                <p className="mt-4">
                  This round meant around 200 applications, external reach-outs, and inbound
                  messages, leading to roughly 40 interviews. My{' '}
                  <Link href="/blogs/ontology-text-to-sql" className={linkClass}>
                    blog post about ontologies and text-to-SQL
                  </Link>{' '}
                  brought in some of those conversations. I contributed to open source for the first
                  time through InsForge, including work on MiniMap pan and zoom and a fix for raw
                  SQL execution. I also went to San Francisco for an onsite interview and New York
                  for a work trial. Both taught me a lot, even though neither went the way I hoped.
                </p>
                <figure className="mt-6">
                  <div className="relative aspect-[2/1] w-full overflow-hidden">
                    <Image
                      src="/writing/2026-retrospective/san-francisco-bay-bridge.webp"
                      alt="The Bay Bridge across San Francisco Bay, viewed from the waterfront"
                      fill
                      sizes="(max-width: 768px) calc(100vw - 48px), 480px"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 text-xs italic text-stone-500">
                    The Bay Bridge during my San Francisco on-site interview trip
                  </figcaption>
                </figure>
                <p className="mt-4">
                  The{' '}
                  <Link href="/blogs/neural-video-compression" className={linkClass}>
                    comma.ai video challenge
                  </Link>{' '}
                  was my first real experience learning about machine learning. Somewhere in the
                  middle of all this, a post I made took off on X:
                </p>
                <EmbeddedTweet url="https://x.com/nicholaschen__/status/2000752780152119501" />
                <p className="mt-4">
                  Looking back, Young Kim’s{' '}
                  <a
                    href="https://www.youngkim.co/writing/early-career-advice"
                    className={linkClass}
                  >
                    early career advice
                  </a>{' '}
                  captures why Melius appealed to me. Young later became one of my managers there.
                  He writes that people often pass over demanding jobs, even when those jobs offer a
                  chance to make an impact and build resilience. Melius was pre-Series A when I was
                  recruiting, and I knew it would be a grind. I thought I would learn more by taking
                  on harder problems and real responsibility. I recommend his post to a lot of
                  people, especially anyone deciding where to work early in their career.
                </p>
                <figure className="mt-6">
                  <Image
                    src="/writing/2026-retrospective/young-kim-early-career-advice.png"
                    alt="Excerpt from Young Kim’s early career advice about seeking challenging opportunities"
                    width={821}
                    height={528}
                    sizes="(max-width: 768px) calc(100vw - 48px), 480px"
                    className="w-full"
                  />
                  <figcaption className="mt-2 text-xs italic text-stone-500">
                    An excerpt from Young Kim’s early career advice
                  </figcaption>
                </figure>
              </section>

              <section>
                <h2 id="summer-in-new-york" className={headingClass}>
                  Spending a Summer in New York City
                </h2>
                <p>
                  I ended up at Melius, just a few blocks from where I had done that work trial.
                  Working at a startup meant taking a product from zero to one, learning to love the
                  work, and getting to make decisions across engineering, design, and product. I
                  wrote more about the projects and people in{' '}
                  <Link href="/blogs/melius-summer-internship" className={linkClass}>
                    my Melius internship post
                  </Link>
                  .
                </p>
                <figure className="mt-6">
                  <Image
                    src="/writing/2026-retrospective/melius-nasdaq.webp"
                    alt="The Melius team beneath a Nasdaq billboard celebrating its fundraise"
                    width={920}
                    height={2000}
                    sizes="(max-width: 768px) calc(100vw - 48px), 480px"
                    className="w-full object-cover"
                  />
                  <figcaption className="mt-2 text-xs italic text-stone-500">
                    Melius on the Nasdaq billboard in Times Square
                  </figcaption>
                </figure>
                <p className="mt-4">
                  Outside work, I lived in Chinatown, spent part of the summer sleeping on a couch,
                  ordered a lot of Uber Eats, and kept going back to Yunnan Noodles because it was
                  so close to where I lived. I went to the gym and got out for more runs and walks.
                  I bought a pair of Hokas, too. In my last week there, I spent time with my brother
                  and friends before heading back to Waterloo.
                </p>
                <figure className="mt-6">
                  <Image
                    src="/writing/2026-retrospective/uber-one.png"
                    alt="Uber One summary showing 191 orders and 12 rides"
                    width={1174}
                    height={554}
                    sizes="(max-width: 768px) calc(100vw - 48px), 480px"
                    className="w-full object-cover"
                  />
                  <figcaption className="mt-2 text-xs italic text-stone-500">
                    My Uber One stats
                  </figcaption>
                </figure>
                <figure className="mt-6">
                  <Image
                    src="/writing/2026-retrospective/yunnan-noodles.webp"
                    alt="Bowls of noodle soup at Yunnan Noodles in Chinatown"
                    width={1836}
                    height={2000}
                    sizes="(max-width: 768px) calc(100vw - 48px), 480px"
                    className="w-full object-cover"
                  />
                  <figcaption className="mt-2 text-xs italic text-stone-500">
                    One of many visits to Yunnan Noodles near my place in Chinatown
                  </figcaption>
                </figure>
                <figure className="mt-6">
                  <Image
                    src="/writing/2026-retrospective/nyc-bowling.webp"
                    alt="Friends at a bowling alley in New York"
                    width={2000}
                    height={1500}
                    sizes="(max-width: 768px) calc(100vw - 48px), 480px"
                    className="w-full object-cover"
                  />
                  <figcaption className="mt-2 text-xs italic text-stone-500">
                    Bowling with friends in New York
                  </figcaption>
                </figure>
                <figure className="mt-6">
                  <Image
                    src="/writing/2026-retrospective/nyc-little-island-sunset.webp"
                    alt="Sunset over Little Island and the Hudson River in New York City"
                    width={1500}
                    height={2000}
                    sizes="(max-width: 768px) calc(100vw - 48px), 480px"
                    className="w-full object-cover"
                  />
                  <figcaption className="mt-2 text-xs italic text-stone-500">
                    Sunset at Little Island
                  </figcaption>
                </figure>
              </section>

              <section>
                <h2 id="second-year" className={headingClass}>
                  2B: The End of Second Year
                </h2>
                <p>
                  Back at Waterloo, the 2B course load was harder, and I was trying to manage school
                  alongside recruiting. I lived in Society and ICON, worked through classes and
                  labs, and went to Hack the North. I also tried to get to the ICON gym more often
                  and make working out a regular part of my routine. School did not go as well as I
                  wanted it to.
                </p>
                <figure className="mt-6">
                  <Image
                    src="/writing/2026-retrospective/icon-gym.webp"
                    alt="The sunlit gym at ICON in Waterloo"
                    width={1500}
                    height={2000}
                    sizes="(max-width: 768px) calc(100vw - 48px), 480px"
                    className="w-full object-cover"
                  />
                  <figcaption className="mt-2 text-xs italic text-stone-500">
                    The ICON gym in Waterloo, where I was trying to work out more often
                  </figcaption>
                </figure>
                <figure className="mt-6">
                  <Image
                    src="/writing/2026-retrospective/hack-the-north.webp"
                    alt="Purple Hack the North hardware badge held in a hand"
                    width={1500}
                    height={2000}
                    sizes="(max-width: 768px) calc(100vw - 48px), 480px"
                    className="w-full object-cover"
                  />
                  <figcaption className="mt-2 text-xs italic text-stone-500">
                    My Hack the North 2026 badge
                  </figcaption>
                </figure>
                <p className="mt-4">
                  I started learning to cook food I actually enjoyed, including chicken with help
                  from my roommate Jordan. In October, I started dieting with a goal of eating
                  around 1,800 to 2,200 calories a day. I was also interviewing again for winter
                  roles. I got around a dozen interviews and two offers, including one from an
                  early-stage New York startup that I declined. I accepted a role that will take me
                  back to New York for the winter.
                </p>
                <figure className="mt-6">
                  <Image
                    src="/writing/2026-retrospective/meal-tracking.webp"
                    alt="A photo of chicken and vegetables alongside a logged meal summary"
                    width={920}
                    height={2000}
                    sizes="(max-width: 768px) calc(100vw - 48px), 480px"
                    className="w-full object-cover"
                  />
                  <figcaption className="mt-2 text-xs italic text-stone-500">
                    Using Tomo to track my calories
                  </figcaption>
                </figure>
              </section>

              <section>
                <h2 id="reflection" className={headingClass}>
                  A Reflection on My Journey in Tech
                </h2>
                <p>
                  I’m still figuring out what I truly want to do in tech. This year gave me more to
                  think about when it comes to startups versus bigger companies, the kind of work I
                  enjoy, and how my years making art influence the way I approach engineering. I’ve
                  been redesigning this website as one way to bring those parts of my life together.
                </p>
                <p className="mt-4">
                  Young Kim puts into words something I already tell myself in his{' '}
                  <a
                    href="https://www.youngkim.co/writing/early-career-advice"
                    className={linkClass}
                  >
                    early career advice
                  </a>
                  : find the smallest company you have real confidence in. A smaller company brings
                  more uncertainty, but also more opportunity to learn, take responsibility, and
                  shape what it becomes. I believe in that tradeoff, and I want to keep following
                  this principle throughout my career in tech.
                </p>
                <figure className="mt-6">
                  <Image
                    src="/writing/2026-retrospective/young-kim-where-to-work.png"
                    alt="Excerpt from Young Kim’s advice comparing large and small companies and where to work"
                    width={827}
                    height={261}
                    sizes="(max-width: 768px) calc(100vw - 48px), 480px"
                    className="w-full"
                  />
                  <figcaption className="mt-2 text-xs italic text-stone-500">
                    Another excerpt from Young Kim’s early career advice
                  </figcaption>
                </figure>
              </section>

              <section>
                <h2 id="next" className={headingClass}>
                  What’s Next and My Goals for 2027
                </h2>
                <p>
                  I’m going back to New York for an internship next winter. I want to run more when
                  the weather warms up again, find something in tech I really enjoy and go deep on
                  it, and make more time to have fun.
                </p>
              </section>
            </div>

            <Footer className="mt-10" />
          </article>
        </ImageLightbox>
      </div>
    </main>
  );
}
