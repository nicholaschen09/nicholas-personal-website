import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function BlogPost() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24 bg-zinc-950 text-white">
      <article className="max-w-4xl w-full space-y-8 pt-24 md:pt-16">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to homepage
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            My SYDE 1A Experience
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-gray-400">
              March 13, 2025{' '}
              <span className="text-pink-500">// 10 min read</span>
            </span>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="bg-transparent text-white border-gray-500 font-medium"
              >
                University
              </Badge>
              <Badge
                variant="outline"
                className="bg-transparent text-white border-gray-500 font-medium"
              >
                Engineering
              </Badge>
              <Badge
                variant="outline"
                className="bg-transparent text-white border-gray-500 font-medium"
              >
                Waterloo
              </Badge>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden">
          <Image
            src="/syde.png"
            alt="SYDE 1A Experience"
            width={1200}
            height={800}
            className="object-cover"
          />
        </div>
        <p className="text-gray-400 italic text-center mt-2">
          here's a photo of the entire class after the SYDE 121 final exam in E7
        </p>

        <div className="prose prose-invert max-w-none">
          <p className="text-normal leading-relaxed">
            My first term (1A) in Systems Design Engineering (SYDE) at the
            University of Waterloo was extermely exciting and challenging. This
            term was full of unqiue experiences and it feels like just
            yesterday. I made a lot of new friends and learned a lot about
            myself and just how rigorous this waterloo engineering thing was
            going to be for the next 5 years of my life.
          </p>

          {/* Waterloo Engineering in General */}
          <h2 className="text-2xl font-bold mt-8 mb-4">
            Waterloo Engineering in General
          </h2>
          <p>
            Waterloo Engineering is known for its rigorous curriculum and co-op
            program. The faculty emphasizes a strong foundation in engineering
            principles, hands-on learning, and real-world problem-solving. The
            co-op program allows students to gain valuable work experience and
            apply their knowledge in industry settings. The community is
            supportive and collaborative, with numerous clubs, design teams, and
            events that foster innovation and teamwork.
          </p>
          <div className="relative w-full overflow-hidden mt-4 mb-6">
            <Image
              src="/e7.png"
              alt="E7 University of Waterloo"
              width={900}
              height={300}
              className="object-cover rounded-xl"
            />
            <p className="text-gray-400 italic text-center mt-8">
              E7, The Engineering Building at the University of Waterloo
            </p>
          </div>

          {/* Orientation Week */}
          <h2 className="text-2xl font-bold mt-8 mb-4">Orientation Week</h2>
          <p>
            Orientation Week at the University of Waterloo was an unforgettable
            experience. It was a week filled with activities, events, and
            opportunities to meet fellow students and faculty members. From
            team-building exercises to campus tours and social events,
            Orientation Week helped me feel welcomed and prepared for the
            journey ahead. It was a great way to start my university life and
            make lasting connections.
          </p>

          <div className="relative w-full overflow-hidden mt-4 mb-6">
            <Image
              src="/orientation.png"
              alt="Orientation Week at the University of Waterloo"
              width={1200}
              height={500}
              className="object-cover rounded-xl"
            />
            <p className="text-gray-400 italic text-center mt-8">
              Orientation Week at the University of Waterloo
            </p>
          </div>

          {/* Transition from High School */}
          <h2 className="text-2xl font-bold mt-2 mb-4">
            The Transition from High School
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p>
                The jump from high school to university engineering was
                significant. The pace is faster, the material more complex, and
                the expectations much higher. In high school, I was used to
                being guided through most learning processes, but university
                demanded more independence and self-directed study.
              </p>
              <p>
                Time management became crucial as I juggled multiple deadlines,
                readings, and projects simultaneously. The freedom was both
                liberating and challenging – no one was checking if I attended
                lectures or completed readings, but the consequences of falling
                behind were entirely on me.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/term.png"
                  alt="High school to university transition"
                  width={450}
                  height={550}
                  className="object-cover rounded-xl"
                />
              </div>
              <p className="text-gray-400 italic mt-8 text-center mr-15">
                My SYDE 1A schedule. Everyone, including me hated 8:30am classes
              </p>
            </div>
          </div>

          {/* Courses Section */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Courses</h2>
          <p>
            The SYDE curriculum is designed to build a strong foundation in
            engineering principles while introducing the systems thinking
            approach that makes this program super unique. Here were the courses
            I had to take in 1A:
          </p>

          {/* Courses as accordion items in full-width rows */}
          <div className="my-6">
            <Accordion type="single" collapsible className="w-full space-y-4">
              <AccordionItem value="syde-111" className="accordion-item">
                <AccordionTrigger className="accordion-trigger">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <span className="font-bold text-lg">SYDE 111</span>
                      <span className="ml-4 text-gray-400">Calculus 1</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="accordion-content">
                  <p>
                    Differential and integral calculus with engineering
                    applications. This course covers limits, derivatives,
                    applications of derivatives, integrals, and applications of
                    integrals. The material is presented with an emphasis on
                    engineering problems and applications.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-gray-700">
                      Calculus
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-700">
                      Mathematics
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-700">
                      Engineering Applications
                    </Badge>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="syde-121" className="accordion-item">
                <AccordionTrigger className="accordion-trigger">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <span className="font-bold text-lg">SYDE 121</span>
                      <span className="ml-4 text-gray-400">
                        Digital Computation
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="accordion-content">
                  <p>
                    Learning programming fundamentals using C++, with
                    applications in engineering and problem-solving. The course
                    covers basic programming concepts, data types, control
                    structures, functions, arrays, and an introduction to
                    object-oriented programming.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-gray-700">
                      C++
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-700">
                      Programming
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-700">
                      Problem Solving
                    </Badge>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="syde-181" className="accordion-item">
                <AccordionTrigger className="accordion-trigger">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <span className="font-bold text-lg">SYDE 181</span>
                      <span className="ml-4 text-gray-400">
                        Physics: Statics
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="accordion-content">
                  <p>
                    Covering the principles of mechanics, including forces,
                    moments, and equilibrium, with an engineering perspective.
                    The course teaches how to analyze stationary systems,
                    calculate moments of force, and determine conditions for
                    equilibrium in various mechanical systems.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-gray-700">
                      Mechanics
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-700">
                      Forces
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-700">
                      Equilibrium
                    </Badge>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="syde-113" className="accordion-item">
                <AccordionTrigger className="accordion-trigger">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <span className="font-bold text-lg">SYDE 113</span>
                      <span className="ml-4 text-gray-400">
                        Elementary Engineering Math
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="accordion-content">
                  <p>
                    Essential mathematical concepts that form the backbone of
                    many engineering applications. This course covers linear
                    algebra, matrices, vectors, complex numbers, and
                    differential equations with a focus on their applications in
                    engineering problems.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-gray-700">
                      Linear Algebra
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-700">
                      Matrices
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-700">
                      Differential Equations
                    </Badge>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="syde-101" className="accordion-item">
                <AccordionTrigger className="accordion-trigger">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <span className="font-bold text-lg">SYDE 101</span>
                      <span className="ml-4 text-gray-400">Communications</span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="accordion-content">
                  <p>
                    Developing effective communication skills for engineers,
                    including technical writing and presentations. The course
                    focuses on creating clear, concise, and effective technical
                    documents and delivering compelling presentations on
                    engineering topics.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-gray-700">
                      Technical Writing
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-700">
                      Presentations
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-700">
                      Professional Communication
                    </Badge>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="syde-101l" className="accordion-item">
                <AccordionTrigger className="accordion-trigger">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <span className="font-bold text-lg">SYDE 101L</span>
                      <span className="ml-4 text-gray-400">
                        Visual Communications
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="accordion-content">
                  <p>
                    Developing skills in visual communication, including
                    technical drawing and graphical representation. Students
                    learn to create and interpret engineering drawings, use CAD
                    software, and effectively communicate design concepts
                    through visual means.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-gray-700">
                      Technical Drawing
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-700">
                      CAD
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-700">
                      Visual Design
                    </Badge>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="syde-161" className="accordion-item">
                <AccordionTrigger className="accordion-trigger">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <span className="font-bold text-lg">SYDE 161</span>
                      <span className="ml-4 text-gray-400">
                        Introduction to Design
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="accordion-content">
                  <p>
                    An introduction to the engineering design process, including
                    problem identification, brainstorming, and prototyping. This
                    course teaches systematic approaches to design,
                    user-centered design principles, and methods for evaluating
                    and iterating on design solutions.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-gray-700">
                      Design Process
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-700">
                      Prototyping
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-700">
                      User-Centered Design
                    </Badge>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="gene-119" className="accordion-item">
                <AccordionTrigger className="accordion-trigger">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <span className="font-bold text-lg">GENE 119</span>
                      <span className="ml-4 text-gray-400">
                        Problems Seminar
                      </span>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="accordion-content">
                  <p>
                    A seminar course focused on preparing students academically
                    and personally for their first year in engineering. The
                    course addresses study skills, time management, stress
                    management, and introduces students to resources available
                    on campus to support their academic success.
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-gray-700">
                      Academic Skills
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-700">
                      Time Management
                    </Badge>
                    <Badge variant="secondary" className="bg-gray-700">
                      Student Support
                    </Badge>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Schedule Section */}
          <h2 className="text-2xl font-bold mt-10 mb-4">My Weekly Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Weekly schedule"
                width={500}
                height={300}
                className="object-cover"
              />
            </div>
            <div>
              <p>
                A typical week in SYDE 1A was packed with activities from
                morning to evening. My schedule included:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>25-30 hours of lectures and labs</li>
                <li>10-15 hours of homework and assignments</li>
                <li>5-8 hours of group project work</li>
                <li>Study sessions and office hours</li>
                <li>Club meetings and social events</li>
              </ul>
              <p className="mt-2">
                Finding balance was challenging but essential for maintaining
                both academic performance and mental health.
              </p>
            </div>
          </div>

          {/* CMH (Conrad Muller Hall) Section */}
          <h2 className="text-2xl font-bold mt-10 mb-4">
            Living in Claudette Millar Hall (CMH)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p>
                Living at Conrad Muller Hall was a significant part of my
                first-year experience. The residence provided a supportive
                community of fellow engineering students facing similar
                challenges.
              </p>
              <p>
                The suite-style rooms offered a good balance of privacy and
                social interaction. Late-night study sessions in common areas,
                impromptu pizza parties, and the convenience of being close to
                classes made CMH an ideal home during my first year.
              </p>
              <p>
                The residence advisors organized regular events that helped
                break the monotony of academic life and fostered connections
                among residents.
              </p>
            </div>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Conrad Muller Hall"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>

          {/* Friends Section */}
          <h2 className="text-2xl font-bold mt-10 mb-4">
            Building Friendships
          </h2>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Friends in SYDE"
              width={800}
              height={400}
              className="object-cover"
            />
          </div>
          <p>
            The cohort-based structure of SYDE meant I spent most of my time
            with the same group of about 100 students. This created an
            environment where deep friendships formed naturally. Study groups
            evolved into friend groups, and collaborative projects led to
            lasting connections.
          </p>
          <p>
            These friendships were crucial for navigating the challenges of
            first year. We supported each other through difficult assignments,
            celebrated successes together, and provided emotional support during
            stressful periods like midterms and finals.
          </p>

          {/* Design Teams Section */}
          <h2 className="text-2xl font-bold mt-10 mb-4">
            Design Teams and Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Design team project"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
            <div>
              <p>
                One of the highlights of SYDE 1A was participating in design
                projects that applied theoretical knowledge to practical
                problems. These projects included:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Designing and building a small-scale autonomous vehicle</li>
                <li>
                  Creating user interfaces for specific accessibility needs
                </li>
                <li>Developing solutions for community-identified problems</li>
              </ul>
              <p className="mt-2">
                These projects provided valuable experience in teamwork, project
                management, and the engineering design process. They also
                offered a refreshing break from theoretical coursework.
              </p>
            </div>
          </div>

          {/* Campus Section */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Exploring Campus</h2>
          <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="University of Waterloo campus"
              width={800}
              height={400}
              className="object-cover"
            />
          </div>
          <p>
            The University of Waterloo campus became my second home during 1A.
            Beyond the Engineering buildings where most of my classes took
            place, I discovered many favorite spots:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>
              The Davis Centre Library - perfect for focused study sessions
            </li>
            <li>
              The Student Life Centre - a hub for socializing and club
              activities
            </li>
            <li>
              The Engineering C&D - where I fueled late-night study sessions
              with coffee
            </li>
            <li>
              The paths around Laurel Creek - ideal for clearing my mind between
              classes
            </li>
          </ul>

          {/* Co-op Section */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Preparing for Co-op</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p>
                Even in 1A, co-op preparation was a significant focus. The
                Waterloo co-op program is renowned for providing valuable work
                experience, and preparation began early:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Resume workshops and critiques</li>
                <li>Mock interviews and feedback sessions</li>
                <li>Co-op information sessions with upper-year students</li>
                <li>
                  Building relevant skills through coursework and projects
                </li>
              </ul>
              <p className="mt-2">
                While the first co-op term was still months away, the groundwork
                laid in 1A was essential for future success in the job search
                process.
              </p>
            </div>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Co-op preparation"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>

          {/* Key Takeaways */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Key Takeaways</h2>
          <p>
            Looking back on my 1A term, I learned so much and I couldn't ask for
            a better start to my university career.
          </p>
        </div>
      </article>
      {/* More Posts Section */}
      <section className="max-w-4xl w-full mt-16 pt-8 border-t border-gray-700">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          More Posts
        </h2>
        <div className="space-y-4">
          <article className="p-4 bg-transparent border border-gray-700 rounded-lg hover:bg-gray-800/10 transition-colors">
            <h3 className="text-2xl font-semibold">
              <Link href="/blogs/ownr">
                What I Loved About Being A Software Engineering Intern at Ownr
              </Link>
            </h3>
            <p className="text-gray-400 mt-2">
              In this article, I share my experiences during my first co-op term
              at Ownr, an RBCx company. I discuss the projects I worked on, the
              skills I developed, and the challenges I faced. This term provided
              me with valuable insights into full-stack web development and the
              importance of teamwork in a professional setting.
            </p>
          </article>
          {/* You can add more articles similarly */}
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-4xl mt-16 pt-8 border-t border-gray-700">
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
          </div>

          <p className="text-gray-500 text-sm mt-6 text-center md:text-left">
            Designed and built by Nicholas Chen
          </p>
        </div>
      </footer>
    </main>
  );
}
