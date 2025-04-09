import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';

export default function BlogPost() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <article className="max-w-4xl w-full space-y-8 pt-24 md:pt-16">
        <Link
          href="/blogs"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to blogs
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            What I Loved About Being A Software Engineering Intern at Ownr
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-gray-400">
              April 10, 2025
              <span className="text-pink-500"> // 8 min read</span>
            </span>
            <span className="text-gray-400 ml-auto">Nicholas Chen</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-[16/8] rounded-xl overflow-hidden border border-gray-700">
          <Image
            src="/software engineering.png"
            alt="Co-op Experience"
            width={1300}
            height={900}
            className="object-cover"
          />
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-xl leading-relaxed">
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
                MongoDB.
              </p>
              <p>
                One of my major projects involved redesigning the document
                generation system, which improved processing speed by 40% and
                enhanced the user experience for thousands of customers. I also
                contributed to the implementation of a new payment gateway that
                increased transaction success rates by 15%.
              </p>
            </div>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-gray-700">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Ownr Co-op"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>

          <h3 className="text-xl font-bold mt-8 mb-3">Day-to-Day at Ownr</h3>
          <p>
            A typical day at Ownr started with a team stand-up meeting where we
            discussed our progress, plans, and any blockers. This was followed
            by focused development time, where I would work on assigned tickets
            from our sprint backlog. The agile methodology practiced at Ownr
            taught me the importance of iterative development and continuous
            feedback.
          </p>
          <p>
            One aspect I particularly appreciated was the bi-weekly code review
            sessions. Senior developers would provide detailed feedback on my
            code, highlighting areas for improvement and best practices. These
            sessions significantly accelerated my growth as a developer and
            taught me how to write maintainable, efficient code.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">
            Technical Skills Gained
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
            <div className="border border-gray-600 p-3 rounded-lg text-center">
              <p className="font-medium">React.js</p>
            </div>
            <div className="border border-gray-600 p-3 rounded-lg text-center">
              <p className="font-medium">Node.js</p>
            </div>
            <div className="border border-gray-600 p-3 rounded-lg text-center">
              <p className="font-medium">MongoDB</p>
            </div>
            <div className="border border-gray-600 p-3 rounded-lg text-center">
              <p className="font-medium">GraphQL</p>
            </div>
            <div className="border border-gray-600 p-3 rounded-lg text-center">
              <p className="font-medium">Jest</p>
            </div>
            <div className="border border-gray-600 p-3 rounded-lg text-center">
              <p className="font-medium">CI/CD</p>
            </div>
            <div className="border border-gray-600 p-3 rounded-lg text-center">
              <p className="font-medium">AWS</p>
            </div>
            <div className="border border-gray-600 p-3 rounded-lg text-center">
              <p className="font-medium">Docker</p>
            </div>
          </div>

          {/* RBC Experience */}
          <h2 className="text-2xl font-bold mt-10 mb-4">RBC Co-op Term</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p>
                During my co-op term at RBC, I worked as an innovation developer
                intern within the Digital Banking division. My primary project
                involved developing a machine learning model to predict monthly
                sign-in volumes, which significantly improved resource
                allocation within the support team and reduced response times by
                23%.
              </p>
              <p>
                This experience honed my skills in data analysis, machine
                learning, and Python programming. I also learned the importance
                of effective communication and collaboration in a large
                organization with complex approval processes and security
                protocols.
              </p>
              <p>
                I had the opportunity to participate in RBC's annual hackathon,
                where my team developed a financial literacy app targeting young
                adults. Our project won the "Innovation Excellence" award and
                parts of our solution were considered for implementation in the
                bank's mobile application.
              </p>
            </div>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden border border-gray-700">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="RBC Co-op"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
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
          <p>
            The mentorship program at RBC paired me with a senior data scientist
            who guided me through the complexities of working with sensitive
            financial data and helped me optimize my machine learning models.
            This mentorship was invaluable in developing my technical skills and
            understanding the business implications of our technology decisions.
          </p>

          <h3 className="text-xl font-bold mt-8 mb-3">
            Technical Skills Gained
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-6">
            <div className="border border-gray-600 p-3 rounded-lg text-center">
              <p className="font-medium">Python</p>
            </div>
            <div className="border border-gray-600 p-3 rounded-lg text-center">
              <p className="font-medium">TensorFlow</p>
            </div>
            <div className="border border-gray-600 p-3 rounded-lg text-center">
              <p className="font-medium">Pandas</p>
            </div>
            <div className="border border-gray-600 p-3 rounded-lg text-center">
              <p className="font-medium">SQL</p>
            </div>
            <div className="border border-gray-600 p-3 rounded-lg text-center">
              <p className="font-medium">Tableau</p>
            </div>
            <div className="border border-gray-600 p-3 rounded-lg text-center">
              <p className="font-medium">Jenkins</p>
            </div>
            <div className="border border-gray-600 p-3 rounded-lg text-center">
              <p className="font-medium">Jira</p>
            </div>
            <div className="border border-gray-600 p-3 rounded-lg text-center">
              <p className="font-medium">Azure ML</p>
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

          <div className="border-2 border-gray-600 p-6 rounded-lg my-8">
            <h3 className="font-bold text-xl mb-3 text-pink-400">
              Advice for Future Interns
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-medium">Document your achievements:</span>{' '}
                Keep a detailed log of your projects, challenges overcome, and
                skills acquired. This will be invaluable for future job
                applications and performance reviews.
              </li>
              <li>
                <span className="font-medium">Build relationships:</span>{' '}
                Connect with colleagues across different teams and departments.
                These relationships can provide support during your internship
                and potentially lead to future opportunities.
              </li>
              <li>
                <span className="font-medium">Ask specific questions:</span>{' '}
                When seeking help, ask specific, well-researched questions
                rather than general ones. This demonstrates your effort and
                makes it easier for others to assist you.
              </li>
              <li>
                <span className="font-medium">Embrace feedback:</span> Actively
                seek feedback on your work and approach it with an open mind.
                Constructive criticism is a valuable tool for growth.
              </li>
            </ul>
          </div>

          {/* Key Takeaways */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Key Takeaways</h2>
          <p>
            Reflecting on my co-op terms, here are the most important lessons I
            learned:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="border-2 border-gray-600 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Embrace the challenge</h3>
              <p className="text-sm">
                The workload is intense, but it's designed to build your
                resilience and problem-solving abilities. The most valuable
                growth comes from tackling difficult problems that push your
                limits.
              </p>
            </div>
            <div className="border-2 border-gray-600 p-4 rounded-lg">
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
            <div className="border-2 border-gray-600 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Seek help early</h3>
              <p className="text-sm">
                Don't wait until you're struggling to ask for assistance from
                mentors, colleagues, or supervisors. Proactively seeking
                guidance is a sign of maturity, not weakness, and can save hours
                of frustration.
              </p>
            </div>
            <div className="border-2 border-gray-600 p-4 rounded-lg">
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
          <p className="text-xl leading-relaxed">
            My internships at Ownr and RBC were pivotal experiences that bridged
            the gap between academic learning and professional practice. The
            contrast between a startup environment and a large enterprise gave
            me a comprehensive understanding of different organizational
            cultures and development methodologies.
          </p>
          <p className="text-xl leading-relaxed mt-4">
            If you're considering a co-op term at Ownr or RBC, I hope this gives
            you a helpful glimpse into what to expect. Both experiences were
            challenging but incredibly rewarding, providing me with skills and
            knowledge that will benefit my future career. The technical
            expertise, professional networks, and confidence I gained have been
            instrumental in shaping my career trajectory and clarifying my
            professional aspirations.
          </p>

          {/* Comments Section */}
          <h2 className="text-2xl font-bold mt-12 mb-6">Comments</h2>
          <div className="space-y-6">
            <div className="border border-gray-600 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center mr-3">
                  <span className="font-bold text-sm">JL</span>
                </div>
                <div>
                  <p className="font-medium">Jessica Lee</p>
                  <p className="text-gray-400 text-sm">April 12, 2025</p>
                </div>
              </div>
              <p className="text-gray-300">
                Thanks for sharing your experience! I'm about to start my co-op
                at RBC and this was really helpful. Did you find the transition
                from academic projects to enterprise development difficult?
              </p>
              <button className="text-gray-400 text-sm mt-2 hover:text-white">
                Reply
              </button>
            </div>

            <div className="border border-gray-600 p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <div className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center mr-3">
                  <span className="font-bold text-sm">MP</span>
                </div>
                <div>
                  <p className="font-medium">Michael Patel</p>
                  <p className="text-gray-400 text-sm">April 11, 2025</p>
                </div>
              </div>
              <p className="text-gray-300">
                Great article Nicholas! I've been considering applying to Ownr
                for my next co-op term. Would you say the tech stack they use is
                good for someone who's more focused on front-end development?
              </p>
              <button className="text-gray-400 text-sm mt-2 hover:text-white">
                Reply
              </button>
            </div>
          </div>

          {/* Comment Form */}
          <div className="mt-8">
            <h3 className="font-bold text-xl mb-4">Leave a Comment</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-transparent border border-gray-700 rounded-lg p-2 text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full bg-transparent border border-gray-700 rounded-lg p-2 text-white"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium text-gray-400 mb-1"
                >
                  Comment
                </label>
                <textarea
                  id="comment"
                  rows={4}
                  className="w-full bg-transparent border border-gray-700 rounded-lg p-2 text-white"
                  placeholder="Share your thoughts..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="border-2 border-pink-600 hover:border-pink-700 text-pink-500 hover:text-pink-400 font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Post Comment
              </button>
            </form>
          </div>
        </div>
      </article>
      {/* Footer */}
      <footer className="w-full mt-8 pt-8">
        <div className="max-w-4xl mx-auto w-full">
          <hr className="border-t border-gray-700 mb-8" />
          <div className="flex flex-col items-center md:items-start">
            <p className="text-gray-400 mb-4">
              © 2025 Nicholas Chen. All rights reserved.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-8 pt-4 justify-center sm:justify-start">
              <Link
                href="https://www.linkedin.com/in/nicholas-chen-85886726a/"
                className="text-white hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
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
                className="text-white hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src="/github.png"
                    alt="GitHub"
                    className="w-7 h-7 md:w-8 md:h-8"
                  />
                </div>
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="mailto:nicholas.chen243@gmail.com"
                className="text-white hover:text-gray-300 transition-colors"
              >
                <div className="w-10 h-10 flex items-center justify-center">
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
                className="text-white hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-7 h-8 flex items-center justify-center relative">
                  <img
                    src="/twitter.png"
                    alt="Twitter"
                    className="max-w-full max-h-full object-contain translate-y-1 translate-x-1"
                  />
                </div>
                <span className="sr-only">Twitter</span>
              </Link>
            </div>

            <p className="text-gray-500 text-sm mt-6 text-center md:text-left">
              Designed and built by Nicholas Chen
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
