import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function BlogPost() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <article className="max-w-4xl w-full space-y-8 pt-24 md:pt-16">
        <Link
          href="/blogs"
          className="inline-flex items-center text-stone-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to blogs
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            What I Loved About Being A Software Engineering Intern at Ownr
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-stone-400">
              April 10, 2025
              <span className="text-pink-500"> // 8 min read</span>
            </span>
            <span className="text-stone-400 ml-auto">Nicholas Chen</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-[16/8] rounded-xl overflow-hidden border border-stone-700">
          <Image
            src="/software engineering.png"
            alt="Co-op Experience"
            width={1300}
            height={900}
            className="object-cover"
          />
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-normalleading-relaxed">
            My co-op terms at Ownr and RBC were transformative experiences that
            provided me with invaluable industry knowledge and skills. Here's a
            detailed account of my journey, the challenges I faced, and the
            growth I experienced throughout these internships.
          </p>

          {/* Introduction */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Introduction</h2>
          <p>
            As a Computer Science student at the University of Waterloo,
            securing internships at both Ownr and RBC was both exciting and
            intimidating. The transition from classroom learning to real-world
            application came with its own set of challenges, but it was
            precisely these challenges that accelerated my professional growth.
            Each company offered unique environments, technologies, and learning
            opportunities that complemented my academic knowledge in ways I
            couldn't have anticipated.
          </p>

          {/* Ownr Experience */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Ownr Co-op Term</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p>
                At Ownr, I worked as a software engineering intern focusing on
                full-stack web development. I was involved in developing new
                features and improving existing functionality for their
                platform, which helps entrepreneurs start and manage their
                businesses.
              </p>
              <p>
                The collaborative environment at Ownr allowed me to work closely
                with cross-functional teams, enhancing my communication and
                teamwork skills. I also gained hands-on experience with modern
                web technologies and frameworks including React, Node.js, and
                PostgreSQL.
              </p>
              <p>
                One of my major projects involved building an internal tool for
                the company's system from scratch. I also contributed to the
                implementation of new features in the main app and bug and
                vulnerability fixes. The last month of my internship was
                dedicated towards prod support where I fixed production bugs.
              </p>
            </div>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-stone-700">
              <Image
                src="/ownr2.png"
                alt="Ownr Co-op"
                width={500}
                height={400}
                className="object-cover"
              />
            </div>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-8">Day-to-Day at Ownr</h3>
          <p>
            A typical day at Ownr started with a team stand-up meeting where we
            discussed our progress, plans, and any blockers. This was followed
            by focused development time, where I would work on assigned tickets
            from our sprint backlog. The agile methodology practiced at Ownr
            taught me the importance of iterative development and continuous
            feedback. One aspect I particularly appreciated was the bi-weekly
            demo review sessions. Developers would provide demos or give a brief
            overview of what they worked on over the past two weeks. I also
            received detailed feedback on my code, highlighting areas for
            improvement and best practices. These sessions significantly
            accelerated my growth as a developer and taught me how to learn to
            write maintainable, more efficient code.
          </p>

          <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-stone-700 mt-10">
            <Image
              src="/ownr1.png"
              alt="RBC Co-op"
              width={1100}
              height={100}
              className="object-cover object-top"
            />
          </div>

          <h3 className="text-xl font-bold mt-8 mb-3">
            Enterprise-Scale Development
          </h3>
          <p>
            Working at RBC exposed me to enterprise-scale development practices
            that were quite different from the startup environment at Ownr. I
            learned how to navigate legacy systems, work within strict security
            guidelines, and follow rigorous testing protocols. These constraints
            initially seemed limiting but taught me the value of careful
            planning and thorough documentation.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">
            Technical Skills Gained
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
            <div className="border border-stone-600 p-3 rounded-lg text-center">
              <p className="font-medium">Python</p>
            </div>
            <div className="border border-stone-600 p-3 rounded-lg text-center">
              <p className="font-medium">CI/CD</p>
            </div>
            <div className="border border-stone-600 p-3 rounded-lg text-center">
              <p className="font-medium">NestJS</p>
            </div>
            <div className="border border-stone-600 p-3 rounded-lg text-center">
              <p className="font-medium">SQL</p>
            </div>
            <div className="border border-stone-600 p-3 rounded-lg text-center">
              <p className="font-medium">Typescript</p>
            </div>
            <div className="border border-stone-600 p-3 rounded-lg text-center">
              <p className="font-medium">Git</p>
            </div>
            <div className="border border-stone-600 p-3 rounded-lg text-center">
              <p className="font-medium">Docker</p>
            </div>
            <div className="border border-stone-600 p-3 rounded-lg text-center">
              <p className="font-medium">NodeJS</p>
            </div>
            <div className="border border-stone-600 p-3 rounded-lg text-center">
              <p className="font-medium">AWS</p>
            </div>
            <div className="border border-stone-600 p-3 rounded-lg text-center">
              <p className="font-medium">Jest</p>
            </div>
            <div className="border border-stone-600 p-3 rounded-lg text-center">
              <p className="font-medium">Redis</p>
            </div>
            <div className="border border-stone-600 p-3 rounded-lg text-center">
              <p className="font-medium">Kubernetes</p>
            </div>
          </div>

          {/* Challenges and Growth */}
          <h2 className="text-2xl font-bold mt-10 mb-4">
            Challenges and Personal Growth
          </h2>
          <p>
            Both internships presented unique challenges that pushed me outside
            my comfort zone and accelerated my professional development.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">
            Overcoming Imposter Syndrome
          </h3>
          <p>
            During my first few weeks at Ownr, I struggled with imposter
            syndrome, questioning whether I had the skills to contribute
            meaningfully to the team. The codebase was complex, and I felt
            overwhelmed by the expectations. However, with support from my
            manager and incremental wins on smaller tasks, I gradually built
            confidence in my abilities.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3">
            Balancing Speed and Quality
          </h3>
          <p>
            At RBC, I faced the challenge of balancing speed with quality. The
            pressure to deliver results quickly sometimes conflicted with the
            bank's rigorous quality standards. This tension taught me to
            prioritize effectively, communicate realistic timelines, and develop
            efficient testing strategies to maintain quality without sacrificing
            speed.
          </p>

          {/* Key Takeaways */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Key Takeaways</h2>
          <p>
            Reflecting on my co-op terms, here are the most important lessons I
            learned:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="border-2 border-stone-600 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Embrace the challenge</h3>
              <p className="text-sm">
                The workload is intense, but it's designed to build your
                resilience and problem-solving abilities. The most valuable
                growth comes from tackling difficult problems that push your
                limits.
              </p>
            </div>
            <div className="border-2 border-stone-600 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">
                Collaborate effectively
              </h3>
              <p className="text-sm">
                Learning to work in teams is essential, as many projects involve
                group collaboration. Clear communication, active listening, and
                empathy are as important as technical skills in professional
                environments.
              </p>
            </div>
            <div className="border-2 border-stone-600 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Seek help early</h3>
              <p className="text-sm">
                Don't wait until you're struggling to ask for assistance from
                mentors, colleagues, or supervisors. Proactively seeking
                guidance is a sign of maturity, not weakness, and can save hours
                of frustration.
              </p>
            </div>
            <div className="border-2 border-stone-600 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Balance is key</h3>
              <p className="text-sm">
                Make time for activities outside of work to maintain your
                well-being. Regular exercise, social connections, and hobbies
                helped me stay energized and prevented burnout during intense
                project phases.
              </p>
            </div>
          </div>

          {/* Conclusion */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Conclusion</h2>
          <p className="text-normal leading-relaxed">
            My internships at Ownr and RBC were pivotal experiences that bridged
            the gap between academic learning and professional practice. The
            contrast between a startup environment and a large enterprise gave
            me a comprehensive understanding of different organizational
            cultures and development methodologies.
          </p>
          <p className="text-normal leading-relaxed mt-4">
            If you're considering a co-op term at Ownr or RBC, I hope this gives
            you a helpful glimpse into what to expect. Both experiences were
            challenging but incredibly rewarding, providing me with skills and
            knowledge that will benefit my future career. The technical
            expertise, professional networks, and confidence I gained have been
            instrumental in shaping my career trajectory and clarifying my
            professional aspirations.
          </p>
        </div>
      </article>
      {/* Footer */}
      <footer className="w-full mt-8 pt-8">
        <div className="max-w-4xl mx-auto w-full">
          <hr className="border-t border-stone-700 mb-8" />
          <div className="flex flex-col items-center md:items-start">
            {/* Social Media Links */}
            <div className="flex space-x-8 pt-4 justify-center sm:justify-start">
              <Link
                href="https://www.linkedin.com/in/nicholas-chen-85886726a/"
                className="text-white hover:text-stone-300 transition-colors"
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src="/linkedin.png"
                    alt="LinkedIn"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/nicholaschen09"
                className="text-white hover:text-stone-300 transition-colors"
              >
                <div className="w-12 h-8 flex items-center justify-center mt-1">
                  <img
                    src="/github1.png"
                    alt="GitHub"
                    className="w-10 h-10 md:w-12 md:h-12"
                  />
                </div>
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="mailto:nicholas.chen243@gmail.com"
                className="text-white hover:text-stone-300 transition-colors"
              >
                <div className="w-11 h-12 flex items-center justify-center relative -top-1">
                  <img
                    src="/email.png"
                    alt="Email"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="sr-only">Email</span>
              </Link>
              <Link
                href="https://x.com/nicholaschen__"
                className="text-white hover:text-stone-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-11 h-8 flex items-center justify-center relative">
                  <img
                    src="/twitter.png"
                    alt="Twitter"
                    className="max-w-full max-h-full object-contain translate-y-1 translate-x-1"
                  />
                </div>
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="https://linktr.ee/nicholas.chen__"
                className="text-white hover:text-stone-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-8 h-8 flex items-center justify-center mt-0.5">
                  <img
                    src="/linktree.png"
                    alt="Linktree"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="sr-only">Linktree</span>
              </Link>
            </div>
          </div>
          <p className="text-stone-400 mt-10 mb-4">© 2025 Nicholas Chen</p>
        </div>
      </footer>
    </main>
  );
}
