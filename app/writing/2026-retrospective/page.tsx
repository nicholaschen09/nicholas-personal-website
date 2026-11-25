import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/Footer';
import BlogViewCount from '@/components/BlogViewCount';
import EmbeddedTweet from '@/components/EmbeddedTweet';
import ImageLightbox from '@/components/ImageLightbox';
import TableOfContents, { type TOCSection } from '@/components/TableOfContents';

const sections: TOCSection[] = [
  { id: 'recruiting', title: 'Tech Recruiting During School' },
  { id: 'summer-in-new-york', title: 'Summer in New York City' },
  { id: 'second-year', title: 'The End of Second Year' },
  { id: 'next', title: 'What’s Next and Goals for 2027' },
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
                  Tech Recruiting During School
                </h2>
                <p>
                  Living in New York for a semester made it awful to come back to Waterloo for the
                  winter term, but it was the start of 2A, my first semester as a second year here.
                  I had lots of fun during co-op and learned a lot of new technical skills and
                  startup lessons from{' '}
                  <a
                    href="https://textql.com"
                    className="transition-colors hover:text-pink-300 focus-visible:text-pink-300"
                  >
                    TextQL
                  </a>
                  {'. '}This eventually helped out a lot when I was recruiting again for summer 2026
                  internships.
                </p>
                <p className="mt-4">
                  This term, I was living in Society, one of the buildings near campus that many
                  students sublet or lease during study terms.
                </p>
                <figure className="mt-6">
                  <Image
                    src="/writing/2026-retrospective/society-apartment.webp"
                    alt="Kitchen and living area of my apartment at Society in Waterloo"
                    width={1200}
                    height={1258}
                    sizes="(max-width: 768px) calc(100vw - 48px), 480px"
                    className="w-full"
                  />
                  <figcaption className="mt-2 text-xs italic text-stone-500">
                    My apartment at Society
                  </figcaption>
                </figure>
                <p className="mt-4">
                  The winter was brutal, with lots of snow, wet slush, and crazy wind. In my
                  opinion, Waterloo winters are worse than Toronto winters. School was getting
                  harder this term. I had courses like Calculus 3, Materials Chemistry, and
                  Dynamics, all of which I was not a huge fan of. We also had a circuits lab this
                  term which, looking back, was easier than the one I had in 2B, but still
                  challenging and time-consuming.
                </p>
                <p className="mt-4">
                  Going into recruiting, I had set a goal of joining a startup similar in size to
                  TextQL. Many people around me thought I should aim for a bigger company, but I
                  believed another startup was best for my career. When I feel like the odd one out,
                  I seek advice from more experienced engineers. I had heard similar advice before,
                  and, funny enough, my future manager at Melius, Young Kim, actually writes about
                  this in his{' '}
                  <a
                    href="https://www.youngkim.co/writing/early-career-advice"
                    className={linkClass}
                  >
                    early career advice
                  </a>
                  {' for ambitious engineers.'}
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
                <p className="mt-4">
                  He argues that demanding opportunities others overlook, like Facebook’s Ads team
                  with its longer hours, can offer more room to make an impact and grow.
                </p>
                <p className="mt-4">Either way, I was set on joining another startup.</p>
                <p className="mt-4">
                  This recruiting cycle had technically begun in the summer of 2025 (if you’re
                  familiar with tech recruiting schedules). Throughout university, I’ve regularly
                  checked{' '}
                  <a
                    href="https://github.com/SimplifyJobs/Summer2027-Internships"
                    className={linkClass}
                  >
                    this GitHub internship list
                  </a>{' '}
                  for opportunities. At Waterloo, co-op terms generally alternate with school terms,
                  so you’re often looking for your next job while studying or interning. For me,
                  that meant applying to around 100 external jobs online, messaging as many founders
                  and founding engineers as I could on X and LinkedIn, and getting a few lucky
                  inbound messages. When the winter term came around, I applied to at least 100 more
                  jobs through WaterlooWorks, the school’s internal co-op job board. Altogether, I
                  tracked roughly 350 applications and outreach attempts.
                </p>
                <figure className="mt-6">
                  <Image
                    src="/writing/2026-retrospective/recruiting-sankey.png"
                    alt="Recruiting flow from 350 applications to 40 interviews and 2 offers"
                    width={999}
                    height={582}
                    sizes="(max-width: 768px) calc(100vw - 48px), 480px"
                    className="w-full"
                  />
                  <figcaption className="mt-2 text-xs italic text-stone-500">
                    My recruiting funnel: 350 applications, 40 interviews, and 2 offers
                  </figcaption>
                </figure>
                <p className="mt-4">
                  I also applied to many larger companies with more recognizable names this time,
                  despite being more interested in startups. Most of those companies rejected me.
                </p>
                <p className="mt-4">
                  My previous startup experience seemed to give me a better chance of getting
                  interviews with other startups. Still, those interviews were far from
                  conventional. They ranged from two to five rounds: some focused on behavioral
                  questions, others went deep into debugging or system design, and a few included
                  on-site work trials. LeetCode practice did little to prepare me because most of
                  the startup teams I spoke with disliked that kind of evaluation. I often went in
                  with little preparation, and the preparation I did rarely matched what came up.
                  Around that time, I had also written a{' '}
                  <Link href="/writing/ontology-text-to-sql" className={linkClass}>
                    blog post about ontologies and text-to-SQL
                  </Link>{' '}
                  during my time at TextQL. It went semi-viral and, luckily, brought in more
                  opportunities, giving me some much-needed hope for the rest of recruiting.
                </p>
                <EmbeddedTweet url="https://x.com/nicholaschen__/status/2000752780152119501" />
                <p className="mt-4">
                  My first open source contributions to{' '}
                  <Link href="/insforge" className={linkClass}>
                    InsForge
                  </Link>{' '}
                  also helped me get more interviews. I even got the chance to fly to San Francisco
                  for an onsite interview and New York for a work trial. Both taught me a lot, even
                  though neither went the way I hoped.
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
                  In general, I found summer internship recruiting the toughest. The competition
                  felt especially intense among engineering and computer science students because it
                  wasn’t just Waterloo students looking for work. Students across North America were
                  searching at the same time.
                </p>
                <p className="mt-4">
                  Outside recruiting, I tried the comma.ai video challenge after seeing it on
                  Twitter. It was my first experience with machine learning, and I wrote about{' '}
                  <Link href="/writing/neural-video-compression" className={linkClass}>
                    how I approached the problem
                  </Link>
                  .
                </p>
                <p className="mt-4">
                  Overall, I spent much of that school term indoors because of the cold, hanging out
                  with friends and eating out a lot. Many of my friends were dropping out of school
                  to work full time, so this was the last term I would see many of them regularly in
                  Waterloo.
                </p>
              </section>

              <section>
                <h2 id="summer-in-new-york" className={headingClass}>
                  Summer in New York City
                </h2>
                <p>
                  After a brutal three-month job search, I got an offer to join{' '}
                  <a
                    href="https://melius.com"
                    className="transition-colors hover:text-pink-300 focus-visible:text-pink-300"
                  >
                    Melius
                  </a>
                  , an early-stage startup, for summer 2026. Melius was building a new AI platform
                  that helped businesses create marketing content, designs, and campaign assets. I
                  was excited to join the team.
                </p>
                <p className="mt-4">
                  Working at a startup meant taking a product from zero to one, learning to love the
                  work, and getting to make decisions across engineering, design, and product. If
                  you’re curious about my experience, the product, and the people, I wrote a blog
                  post about my time interning there:{' '}
                  <Link href="/writing/melius-summer-internship" className={linkClass}>
                    my Melius internship post
                  </Link>
                  .
                </p>
                <p className="mt-4">
                  Just before I left, Melius raised{' '}
                  <a
                    href="https://x.com/n0w00j/status/2107480018473357779?s=12"
                    className={linkClass}
                  >
                    $25 million
                  </a>
                  . I’ve never been more bullish on the team, and I’m excited to see what they
                  accomplish next. Also, shoutout to{' '}
                  <a
                    href="https://x.com/alexch3n"
                    className="transition-colors hover:text-pink-300 focus-visible:text-pink-300"
                  >
                    Alex
                  </a>
                  , one of the funniest coworkers I’ve ever had, who taught me a lot both on and off
                  the job.
                </p>
                <figure className="mt-6">
                  <Image
                    src="/writing/2026-retrospective/melius-nasdaq.webp"
                    alt="The Melius team beneath a Nasdaq billboard celebrating its fundraise"
                    width={1202}
                    height={2342}
                    sizes="(max-width: 768px) calc(100vw - 48px), 480px"
                    className="w-full object-cover"
                  />
                  <figcaption className="mt-2 text-xs italic text-stone-500">
                    Joowon’s Instagram story of Melius on the Nasdaq billboard in Times Square
                  </figcaption>
                </figure>
                <p className="mt-4">
                  If you’re wondering why I’m not in the photo, it was taken a month or two after my
                  internship ended.
                </p>
                <p className="mt-4">
                  Outside of work, I lived in Chinatown, Manhattan, and spent the summer sleeping on
                  a couch. The building had no elevator, everything looked like it might fall apart,
                  and it smelled awful. The good part about this location was that it made it easy
                  to walk around the city and find places to eat nearby.
                </p>
                <p className="mt-4">I also ordered way too much Uber Eats.</p>
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
                <p className="mt-4">
                  On the weekends, I kept going back to Yunnan Noodles, a restaurant similar to
                  Yunshang in Waterloo, because I lived so close. I usually ordered the noodle dish
                  in the photo below. This place would stay open until 3 a.m., which made late-night
                  meals easy, and a bowl cost only around $14.
                </p>
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
                    One of many visits to Yunnan Noodles in Chinatown
                  </figcaption>
                </figure>
                <p className="mt-4">
                  I also tried to get outside more. I bought a pair of Hokas, went to the gym, ran,
                  and took lots of walks, especially around Battery Park and Little Island. I
                  averaged around 20,000 steps a day while I was there. That’s just one of the
                  reasons I prefer New York over other cities. Every walk gives you something
                  different to take in. Little Island, the waterfront, and the neighborhoods each
                  have their own feel, and there’s always more to see and do.
                </p>
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
                <p className="mt-4">
                  Another crazy thing was being in New York on June 13 when the Knicks won their{' '}
                  <a
                    href="https://www.nba.com/news/live-updates-2026-nba-finals-game-5-knicks-seek-first-title-since-1973"
                    className={linkClass}
                  >
                    first NBA championship in 53 years
                  </a>
                  . I don’t really watch basketball, so it felt like a lucky coincidence. The
                  streets were pretty wild that night as people came out to celebrate. I’d never
                  seen so many New Yorkers this happy at once.
                </p>
                <figure className="mt-6">
                  <Image
                    src="/writing/2026-retrospective/knicks-championship-night.webp"
                    alt="A New York street at night after the Knicks won the 2026 NBA championship"
                    width={1206}
                    height={976}
                    sizes="(max-width: 768px) calc(100vw - 48px), 480px"
                    className="w-full object-cover"
                  />
                  <figcaption className="mt-2 text-xs italic text-stone-500">
                    New York on the night the Knicks won the championship
                  </figcaption>
                </figure>
                <p className="mt-4">
                  Many of my friends were also interning in New York or came to visit that summer,
                  so we hung out often. It isn’t every day that you get to see your friends so
                  regularly while being in another country. I found that during my co-op terms, I
                  talked less often with friends back home or from school because everyone had their
                  own schedules, often working nine to five or later. Working was fun, but I
                  realized that staying social during an internship took more effort than it did
                  when we were all studying together.
                </p>
                <p className="mt-4">
                  Toward the end of my internship, I invited my brother, one of my friends, and his
                  younger brother to visit. We went bowling, rode bikes, ate lots of good food, and
                  shopped at places like Kith and Stüssy. For once, I gave myself time to enjoy life
                  and just have fun. Having fun in New York wasn’t cheap, though. I spent around
                  $2,000 in that short stretch.
                </p>
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
                <p className="mt-4">
                  I felt like I had packed a lot into one summer. I learned a lot at Melius and made
                  memories exploring New York with my brother and friends. It made me want to come
                  back.
                </p>
              </section>

              <section>
                <h2 id="second-year" className={headingClass}>
                  The End of Second Year
                </h2>
                <p>
                  This was the last term of my second year, 2B, and the course load was much harder
                  than in 2A. Alongside school, I was recruiting again for an internship the
                  following winter. I lived in ICON this term, the building beside Society. The
                  three-bedroom, two-bathroom apartment had more space and a larger kitchen, and I
                  liked it much more than where I lived the previous term. I came into 2B feeling
                  good about recruiting. Now with two startup experiences, I felt more confident in
                  my work and technical skills.
                </p>
                <p className="mt-4">
                  In hindsight, recruiting for winter was much harder than it had been for the
                  previous term. Fewer opportunities were posted online, and fewer startups were
                  hiring for the start of the year. Some encouraged me to reach out again closer to
                  summer. My external search involved around 50 applications, outreach messages, and
                  inbound conversations. That led to 10 interviews, only one of which resulted in an
                  offer, which I eventually declined. Once school began, I bet on myself and focused
                  on WaterlooWorks for my fourth co-op. I got three interviews there, including two
                  opportunities in New York that I was especially excited about. An offer from one
                  of those companies in the first WaterlooWorks recruiting cycle ended my search for
                  winter 2027.
                </p>
                <p className="mt-4">
                  This was my first fall term back at school, and outside of classes, I decided to
                  apply to Hack the North again despite being rejected so many times before. This
                  time, I got in. There was so much cool merch, and I met a lot of new people. One
                  thing I really liked was the badge they designed for us and gave to each hacker at
                  check-in on the first day.
                </p>
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
                  I started taking the gym seriously again at ICON and made cardio a bigger part of
                  my routine. I tried to run every day or every other day and tracked my runs so I
                  could see my progress.
                </p>
                <figure className="mt-6">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src="/writing/2026-retrospective/icon-gym.webp"
                      alt="The sunlit gym at ICON in Waterloo"
                      fill
                      sizes="(max-width: 768px) calc(100vw - 48px), 480px"
                      className="object-cover object-top"
                    />
                  </div>
                  <figcaption className="mt-2 text-xs italic text-stone-500">
                    The ICON gym in Waterloo, where I got back into working out regularly
                  </figcaption>
                </figure>
                <p className="mt-4">
                  I also decided to take my diet and weight loss seriously, with a calorie goal I
                  could stick to. Starting in October, I aimed for around 1,800 to 2,200 calories a
                  day and used{' '}
                  <a
                    href="https://www.tomo.ai/"
                    className="transition-colors hover:text-pink-300 focus-visible:text-pink-300"
                  >
                    Tomo
                  </a>{' '}
                  to track my meals every day for most of the term. I ate out less and cooked most
                  of my meals at home. With help from my roommate Jordan, I learned to cook chicken
                  thighs and breasts, and I made plenty of eggs too. I ate a lot of salmon,
                  tomatoes, cucumbers, and fruit so I could eat healthy while losing weight.
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
                <p className="mt-4">
                  Another super random, fun side quest was trying HEYTEA when it opened near campus.
                  Of course I had to go, like every other Asian student at Waterloo.
                </p>
                <p className="mt-4">
                  I’d give it around a 6/10. I think I got an oolong tea, though I can’t remember
                  exactly which one. I didn’t add much sugar, so it mostly tasted like regular tea
                  with ice. I waited at least 20 minutes in line and paid around $10 for that small
                  cup. I’m not sure it was worth the wait.
                </p>
                <figure className="mt-6">
                  <Image
                    src="/writing/2026-retrospective/heytea-waterloo.webp"
                    alt="A hand holding a HEYTEA drink near campus in Waterloo"
                    width={1200}
                    height={1600}
                    sizes="(max-width: 768px) calc(100vw - 48px), 480px"
                    className="w-full object-cover"
                  />
                  <figcaption className="mt-2 text-xs italic text-stone-500">
                    Trying HEYTEA near Waterloo campus
                  </figcaption>
                </figure>
                <p className="mt-4">
                  To wrap up, I think I mentioned this earlier, but school itself was definitely
                  much harder this term. More of my courses required me to study seriously and,
                  funny as it sounds, actually use my brain. Our circuits course and the circuits
                  lab were brutal. My grades were probably the lowest they had been in any term. A
                  lot of my friends had wanted to go on exchange coming into university, though I
                  had never planned to myself. Looking back, it was kind of funny how that hope
                  faded by the start of the term as our grades started slipping throughout second
                  year. Honestly, I couldn’t wait for the term to end. I’ve never been a big fan of
                  school, and I was excited to work again.
                </p>
                <p className="mt-4">
                  I also spent time trying different AI tools this year. These were some of my
                  favorites:
                </p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Muse</li>
                  <li>Grok</li>
                  <li>Tomo</li>
                  <li>Codex</li>
                  <li>Claude</li>
                  <li>Gemini</li>
                  <li>Wispr Flow</li>
                </ul>
              </section>

              <section>
                <h2 id="next" className={headingClass}>
                  What’s Next and Goals for 2027
                </h2>
                <p>
                  Well, I’m going back to New York next winter for another internship, so I’m
                  excited to see{' '}
                  <a
                    href="https://x.com/992rodney"
                    className="transition-colors hover:text-pink-300 focus-visible:text-pink-300"
                  >
                    Rodney
                  </a>
                  ,{' '}
                  <a
                    href="https://x.com/aaronbiscotti"
                    className="transition-colors hover:text-pink-300 focus-visible:text-pink-300"
                  >
                    Aaron
                  </a>
                  , and{' '}
                  <a
                    href="https://x.com/alexch3n"
                    className="transition-colors hover:text-pink-300 focus-visible:text-pink-300"
                  >
                    Alex
                  </a>{' '}
                  again.
                </p>
                <p className="mt-4">
                  As for my goals, I’m still figuring out what I truly want to do in tech. This year
                  gave me a range of experiences that helped me think more about choosing between
                  startups and big tech, and about the kind of work I enjoy. As the year comes to an
                  end, I’m getting closer to graduating. I have about two years left, and I want to
                  make the most of this stage of my career while I’m still young and have plenty of
                  energy.
                </p>
                <p className="mt-4">
                  Regarding my career, Young puts into words something I already tell myself in his{' '}
                  <a
                    href="https://www.youngkim.co/writing/early-career-advice"
                    className={linkClass}
                  >
                    early career advice
                  </a>
                  : find the smallest company you have real confidence in. A smaller company brings
                  more uncertainty, but also more opportunity to learn, take responsibility, and
                  shape what it becomes. I want to grow as an engineer so I can put myself in a
                  position to take those opportunities. I want to keep following this principle
                  throughout my career in tech.
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
                <p className="mt-4">
                  In 2027, I want to become extremely technical and go deep on something that
                  interests me. I want to go on more runs outside. I also want to make more time to
                  have fun. The past few years have felt like a constant grind, and I haven’t given
                  myself much time to enjoy the moment.
                </p>
                <figure className="mt-6">
                  <Image
                    src="/writing/2026-retrospective/2026-friend.webp"
                    alt="A candid photo of someone smiling in a room"
                    width={1600}
                    height={902}
                    sizes="(max-width: 768px) calc(100vw - 48px), 480px"
                    className="w-full"
                  />
                  <figcaption className="mt-2 text-xs italic text-stone-500">
                    Moving in for fall 2026, shot by my roommate on a DJI Osmo Action
                  </figcaption>
                </figure>
                <p className="mt-4">
                  I’m extremely grateful for everyone who helped me out, made memories with me, and
                  was part of my 2026. I hope to make more friends and try new things next year!
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
