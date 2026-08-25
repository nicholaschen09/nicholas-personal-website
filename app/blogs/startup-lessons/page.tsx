'use client';

import { useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';
import TableOfContents, { TOCSection } from '@/components/TableOfContents';

export default function StartupLessonsBlog() {
  const sections: TOCSection[] = useMemo(
    () => [
      { id: 'thoughtful-work', title: 'Be thoughtful and prioritize high-value work' },
      { id: 'data-decisions', title: 'Make data-driven product decisions' },
      { id: 'do-not-change', title: "If no one complains, don't change it" },
      { id: 'customers', title: 'Your customers are always number one' },
      { id: 'marketing', title: 'Marketing is an engineering skill too' },
      { id: 'reference-products', title: 'Study and reference your favorite products' },
      { id: 'chaos', title: "Don't let the chaos get to you" },
      { id: 'communication', title: 'Thoughtful communication is key' },
      { id: 'primitives', title: 'Start with primitives first' },
      { id: 'culture', title: 'Being a culture fit is important' },
    ],
    [],
  );

  useEffect(() => {
    document.title = '10 Lessons from Working at Startups';
  }, []);

  return (
    <main className="min-h-screen bg-[#1a1a1a] px-6 pb-12 pt-10 text-stone-300 md:px-12 md:pt-12">
      <div className="max-w-6xl mx-auto lg:grid lg:grid-cols-[1fr_minmax(0,32rem)_1fr] lg:gap-8 lg:items-start">
        <TableOfContents sections={sections} title="" className="lg:mt-14" />
        <article className="w-full lg:max-w-lg lg:mx-auto">
          <header className="mb-6 text-xs font-normal leading-none md:text-sm">
            <Link
              href="/"
              className="text-xs font-normal leading-none text-stone-50 transition-colors hover:text-stone-300 md:text-sm"
            >
              Nicholas Chen
            </Link>
            <span className="text-stone-500"> / </span>
            <Link href="/writing" className="text-stone-400 transition-colors hover:text-stone-200">
              Writing
            </Link>
            <span className="text-stone-500"> / </span>
            <span className="text-stone-400">Startup Lessons</span>
          </header>

          <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">
            10 Lessons from Working at Startups
          </h1>
          <p className="text-stone-500 text-sm mb-6">Nicholas Chen · June 2026</p>

          <figure className="mb-6">
            <Image
              src="/blogs/startup-lessons/cover.png"
              alt="Hand-drawn circles labeled PM, engineering, docs, UX, and marketing"
              width={1200}
              height={480}
              priority
              className="w-full object-cover"
            />
          </figure>

          <div className="space-y-8 text-xs md:text-sm leading-relaxed" style={{ fontWeight: 400 }}>
            <section>
              <p>
                Since working at startups, I&apos;ve been given more opportunities to build
                user-facing features that are core to the products I&apos;ve worked on. Throughout
                these experiences, I&apos;ve been fortunate enough to learn many valuable insights
                and have applied them throughout the past year.
              </p>
              <p className="mt-4">
                I wanted to put all of this into writing because it has helped me a lot these past
                few months, and I hope it does the same for others. I&apos;ve compiled my notes,
                along with my current knowledge, to give you 10 lessons I&apos;ve learned from my
                past and current experiences. I hope you enjoy!
              </p>
            </section>

            <section>
              <h2
                id="thoughtful-work"
                className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
              >
                1. Be incredibly thoughtful and prioritize high-value work
              </h2>
              <p>
                If there&apos;s one thing I&apos;ve learned, it&apos;s that being thoughtful about
                everything you do and making sure the work actually provides value is extremely
                important at startups. There is always infinitely more work to be done, and bug
                fixes and feature requests are endless.
              </p>
              <p className="mt-4">
                Prioritizing your time and ensuring that the work that gets done is high-value will
                be 100x more worth it for the product in the long run. A good example is the dark
                vs. light mode feature many apps have. It seems like a trivial task to implement,
                but making this change forces everyone to test the product twice, once for each
                version. This creates more friction in the future, and if you really think about it,
                this feature doesn&apos;t provide much value to most customers.
              </p>
              <p className="mt-4">
                These are exactly the types of decisions that cause a company to slow down and lose
                momentum, which is why being thoughtful is so important, especially at earlier-stage
                companies.
              </p>
            </section>

            <section>
              <h2
                id="data-decisions"
                className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
              >
                2. Make data-driven product decisions
              </h2>
              <p>
                Everything you do, whether it&apos;s related to the product, marketing, or growth,
                should always be driven by some sort of data metric. This is actually a bit ironic
                since I previously worked at a company that built AI agents for data analytics, but
                it took me a while to apply this mindset to the product engineering I was doing.
              </p>
              <p className="mt-4">
                The habit of asking &quot;what does the data say?&quot; before making a call is one
                of the most valuable ones you can build. For example, if you&apos;re adding
                generative AI models to your product and the data shows that a certain line of
                models is consistently being added but rarely used, that&apos;s a signal to cut it
                rather than expand it. Let the data make the decision for you.
              </p>
            </section>

            <section>
              <h2
                id="do-not-change"
                className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
              >
                3. If no one complains about something, don&apos;t change it
              </h2>
              <p>
                As an engineer, I sometimes get the urge to revamp an entire feature or overhaul the
                UX for a specific part of the product, but this isn&apos;t always the best idea. If
                users aren&apos;t complaining about something, it&apos;s likely working well enough.
                Change introduces risk, and unnecessary change introduces unnecessary risk.
              </p>
              <p className="mt-4">
                Save your energy for the things that actually hurt or annoy users, not the things
                that just feel like they could be cleaner.
              </p>
            </section>

            <section>
              <h2
                id="customers"
                className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
              >
                4. Your customers are always number one
              </h2>
              <p>
                When working at smaller companies, you deal with far fewer but far more important
                customers. These customers are taking a bet on your product and your team. They
                trust that you&apos;ll deliver. You should always be there for them, address
                concerns right away, and make them feel like they matter.
              </p>
              <p className="mt-4">
                Losing an early customer at a startup can hurt a lot more than people realize. At an
                early stage, every customer represents a much larger share of your revenue and
                credibility. They&apos;re often your most honest source of feedback, and treating
                them as partners rather than just users goes a long way. A customer who feels heard
                will stick around and advocate for you. One who feels ignored will churn and tell
                people about it.
              </p>
            </section>

            <section>
              <h2
                id="marketing"
                className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
              >
                5. Marketing is an engineering skill too
              </h2>
              <p>
                Marketing has always been important for both individuals and organizations. Many
                products actually win on distribution over quality. As an engineer, learning to
                communicate what you build through writing, social media, or just clear storytelling
                is a skill that compounds over time.
              </p>
              <p className="mt-4">
                At startups, everyone wears many hats. You&apos;re not just writing code,
                you&apos;re also contributing to the product, the marketing, and sometimes even the
                content. You might find yourself editing demo videos, writing posts for the
                company&apos;s social media, or helping craft the messaging around a new feature
                launch. These skills translate more than you&apos;d expect, and being able to do
                them well makes you a much more valuable person to have on a small team.
              </p>
            </section>

            <section>
              <h2
                id="reference-products"
                className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
              >
                6. Study and reference your favorite products
              </h2>
              <p>
                When working on features, it&apos;s a good idea to look at existing apps you enjoy
                and see how they handle similar problems. That said, there&apos;s an important
                caveat: just because a successful app does something a certain way doesn&apos;t mean
                it&apos;s the right way, or the right way for your product.
              </p>
              <p className="mt-4">
                A funny example of this is GitHub&apos;s home page. For most developers, it&apos;s
                almost entirely useless. It&apos;s cluttered with suggested repositories, activity
                feeds, and content that nobody really asked for. Yet GitHub is one of the most
                successful developer tools ever built. It&apos;s always a good idea to think
                holistically and do your research before jumping to solutions, even when the problem
                seems trivial.
              </p>
            </section>

            <section>
              <h2
                id="chaos"
                className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
              >
                7. Don&apos;t let the chaos get to you
              </h2>
              <p>
                Startups are fast-paced, and things will go wrong. Deadlines shift, you might break
                production once or many times, and priorities can change overnight. Learning to
                manage stress effectively, staying calm under pressure, and not letting the chaos
                affect the quality of your work is one of the most underrated skills you can develop
                in my opinion.
              </p>
              <p className="mt-4">
                It&apos;s not just good for your output; it&apos;s good for the people around you.
                Stress is inevitable at a startup, but how you handle it is a choice.
              </p>
            </section>

            <section>
              <h2
                id="communication"
                className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
              >
                8. Thoughtful communication is key
              </h2>
              <p>
                This is an extremely important concept I&apos;ve learned most recently: communicate
                effectively, but only when it&apos;s beneficial to the team. I&apos;ve learned that
                it&apos;s so important to be clear, concise, and intentional with communication.
              </p>
              <p className="mt-4">
                At a startup, everyone is busy and juggling multiple things at once. It&apos;s easy
                for context to get lost, decisions to go undocumented, and people to fall out of
                sync. Over-communicating can create noise, and under-communicating creates
                confusion. The goal is signal, not volume. Whether it&apos;s a Slack message, a PR
                description, or a product update, everything should count.
              </p>
            </section>

            <section>
              <h2
                id="primitives"
                className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
              >
                9. Start with primitives first, then add complexity
              </h2>
              <p>
                I learned this the hard way, but when building features or writing code, start as
                simple as possible. Resist the urge to over-engineer from the start. Get the core
                thing working, validate that it&apos;s right, and then add in more complexity if
                needed.
              </p>
              <p className="mt-4">
                Premature complexity is one of the fastest ways to accumulate technical debt and
                slow the team down.
              </p>
            </section>

            <section>
              <h2
                id="culture"
                className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
              >
                10. Being a culture fit is important
              </h2>
              <p>
                Technical skills can get you in the door, but culture fit is becoming more and more
                important, and it&apos;s also what makes the day-to-day actually enjoyable. There
                were times where I felt like I didn&apos;t quite fit in and assumed it would come
                naturally over time. But it doesn&apos;t just happen on its own. You have to be
                intentional about it, put in the time, and make the effort to get to know the people
                around you.
              </p>
              <p className="mt-4">
                Small things like grabbing lunch with a teammate or jumping into a conversation
                you&apos;d normally stay quiet in go a long way. It also goes both ways: finding a
                team whose values resonate with you will make you a better engineer, a better
                collaborator, and honestly, a happier person.
              </p>
            </section>
          </div>

          <Footer className="mt-10" />
        </article>
        <div className="hidden lg:block" />
      </div>
    </main>
  );
}
