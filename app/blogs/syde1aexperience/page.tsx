import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function BlogPost() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24 bg-zinc-990 text-white bg-dotted-pattern">
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
            My SYDE 1A Experience
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-gray-400">
              March 13, 2025{' '}
              <span className="text-pink-500">// 10 min read</span>
            </span>
            <span className="text-gray-400 ml-auto">Nicholas Chen</span>
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

        <div className="text-gray-300 space-y-6 w-full">
          <p className="text-normal leading-relaxed">
            My first term (1A) in Systems Design Engineering (SYDE) at the
            University of Waterloo was extremely exciting and challenging. This
            term was full of unique experiences and it feels like just
            yesterday. I made a lot of new friends and learned a lot about
            myself and just how rigorous this waterloo engineering thing was
            going to be for the next 5 years of my life.
          </p>

          {/* Waterloo Engineering in General */}
          <h2 className="text-2xl font-bold mt-8 mb-4">Waterloo Engineering</h2>
          <p>
            Waterloo Engineering is known for its challenging curriculum and
            fantastic co-op program. The professors focus on building strong
            fundamentals through hands-on learning and solving real-world
            problems, and the co-op lets you gain actual industry experience.
            Plus, the community is really supportive, with plenty of clubs and
            design teams to get involved with.
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
              Orientation Week activities at the University of Waterloo
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
                demanded more independence and self-directed study. Time
                management became crucial as I juggled multiple deadlines,
                readings, and projects simultaneously. The freedom was both
                liberating and challenging since no one was checking if I
                attended lectures or completed readings, but the consequences of
                falling behind were entirely on me. I had to quickly adapt to
                this new environment, learning to prioritize tasks and manage my
                time effectively. It was a steep learning curve, but it taught
                me valuable skills in self-discipline and responsibility that I
                know will benefit me throughout my career.
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
              <p className="text-gray-400 italic mt-2 text-center w-full">
                My SYDE 1A schedule. Everyone, including me hated 8:30am classes
              </p>
            </div>
          </div>

          {/* Courses Section */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Courses</h2>
          <p>
            The SYDE curriculum very specific and unique. Every single course we
            take is SYDE specific, meaning only people in Systems Design will
            take these courses. You will notice that all the course codes start
            with SYDE whereas other engineering majors will have some that start
            with MATH or ECE. Overall, Systems Design Engineering is designed to
            build a strong foundation in engineering principles while
            introducing the systems thinking approach that makes this program
            super unique. Here were the courses I had to take in 1A:
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
                  <div className="space-y-4">
                    <div className="border border-gray-500 p-4 rounded-lg space-y-3">
                      <h4 className="font-semibold text-white">
                        About the Course
                      </h4>
                      <p>
                        So, usually most engineering students have to take a
                        Calculus I class that prepares you for the more advanced
                        material that comes later. For us, our SYDE 111 course
                        was a bit different. This course covered Calculus I and
                        a bit of proofs and some of the Calculus II curriculum.
                        Our cohort was taught by Sean Speziale who ended up
                        being a great professor who made calculus surprisingly
                        engaging. The course was taught through a combination of
                        lectures and tutorials. Most of it was done through
                        pre-made slides and a note taking app that the professor
                        used to edit on top of the pdfs/slides. He would often
                        pause to ask questions and make sure everyone was
                        following along. The tutorials were led by TAs who would
                        work through practice problems and provide additional
                        help.
                      </p>
                      <h4 className="font-semibold text-white">Assessments</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Weekly problem sets</li>
                        <li>Weekly quizzes</li>
                        <li>One midterm exam </li>
                        <li>A Final exam </li>
                      </ul>
                      <h4 className="font-semibold text-white">
                        My Experience
                      </h4>
                      <p>
                        This was one of the more challenging courses for me in
                        1A. The pace was much faster than high school calculus,
                        and we covered a lot more material. I found myself
                        spending about 6-8 hours per week on the problem sets.
                        We covered epsilon delta proofs, all of what you learn
                        in AP Calculus AB and went into series and integrals
                        with trigonometry. These were challenging but really
                        helped solidify my understanding. While the midterm was
                        challenging but fair, the final exam for this course was
                        so much more harder and a lot of the students in my
                        class got 60s and 70s.
                      </p>
                      <p className="mb-4">
                        We also took this course alongside the BMEs so I made
                        some friends in that program too. I also met some of my
                        closest friends in this class and we would often study
                        together in the E7 study rooms.
                      </p>
                      <div className="my-8 relative aspect-[15/16] w-full overflow-hidden rounded-lg">
                        <Image
                          src="/calculus.png"
                          alt="SYDE"
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-4 text-center italic">
                        This was the hardest integral I had to ever solve in my
                        life
                      </p>
                      <div className="mt-4">
                        <a
                          href="https://uwflow.com/course/syde111"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-500 hover:underline mt-4 font-bold"
                        >
                          SYDE 111
                        </a>
                      </div>
                    </div>
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
                  <div className="space-y-4">
                    <div className="border border-gray-500 p-4 rounded-lg space-y-3">
                      <h4 className="font-semibold text-white">
                        About the Course
                      </h4>
                      <p>
                        This course was generally just a introduction to
                        programming in C++ and if you already took computer
                        science in highschool, the course was pretty chill. Our
                        professor (Mehrnaz Fani) was pretty good and she taught
                        well. I just wish her lectures weren't at 8:30am when no
                        one would wake up. I'm pretty sure no one went to her
                        lectures after midterms. This course was pretty fun if
                        you enjoy coding though. The course consisted of two
                        lectures and labs each week where we were tasked to
                        continue pre-built projects the professor gave us. The
                        lab sessions were hands-on programming time with TAs
                        available to help, which was invaluable for getting
                        immediate feedback on our code.
                      </p>

                      <h4 className="font-semibold text-white">Assessments</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Weekly programming assignments/labs</li>
                        <li>3 programming projects </li>
                        <li>Weekly online quizzes </li>
                        <li>Midterm exam </li>
                        <li>Final exam </li>
                      </ul>

                      <h4 className="font-semibold text-white">
                        My Experience
                      </h4>
                      <p>
                        This was my favorite course in 1A. I had some
                        programming experience from high school, but we learned
                        a lot more here. We learned about memory management and
                        pointers as well as a lot of new syntax that I haven't
                        seen before, but the hands-on approach of the course
                        made it click for me after a few weeks.
                      </p>

                      <p>
                        The projects turned out to be pretty straightforward and
                        incredibly rewarding. Our first project was building a
                        simple soccer game, and the second was creating a data
                        management tool. The last project was a library system.
                        These collaborative experiences were some of my best
                        memories from the term.
                      </p>

                      <p>
                        The most valuable skill I gained wasn't just the C++
                        syntax, but the problem-solving approach that
                        programming teaches you. Breaking down complex problems
                        into smaller, manageable pieces is a skill that has
                        helped me in every other course.
                      </p>
                      <div className="my-8 relative aspect-[16/13] w-full overflow-hidden rounded-lg">
                        <Image
                          src="/syde121.png"
                          alt="SYDE"
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-4 text-center italic">
                        our final cs project that I worked on with my partner
                      </p>
                      <div className="mt-4">
                        <a
                          href="https://uwflow.com/course/syde121"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-500 hover:underline mt-4 font-bold"
                        >
                          SYDE 121
                        </a>
                      </div>
                    </div>
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
                  <div className="space-y-4">
                    <div className="border border-gray-500 p-4 rounded-lg space-y-3">
                      <h4 className="font-semibold text-white">
                        About the Course
                      </h4>
                      <p>
                        Professor Willet was the one who taught the BMEs and the
                        SYDEs this term. His practical knowledge made the
                        theoretical concepts much more tangible. Statics is a
                        branch of physics where the sum of all the forces is
                        equal to zero. He would often demonstrate his examples
                        to help us visualize the forces at work, which was
                        incredibly helpful for understanding abstract concepts
                        and very funny. The course had many 1-hour lectures per
                        week and a tutorial per week. The professor used a
                        combination of slides and board work, often drawing
                        free-body diagrams by hand to show the process of
                        analyzing forces. The tutorials were problem-solving
                        sessions where we had a question to solve within the
                        time limit and were allowed to work together that would
                        be marked by the TAs and counted for your final grade at
                        the end of the term.
                      </p>

                      <h4 className="font-semibold text-white">Assessments</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>4 Tests</li>
                        <li>Weekly Tutorials</li>
                        <li>Midterm Exam</li>
                        <li>Final exam</li>
                      </ul>

                      <h4 className="font-semibold text-white">
                        My Experience
                      </h4>
                      <p>
                        Statics was conceptually challenging for me at first.
                        The idea of analyzing forces in 3D space took some time
                        to grasp, but once it clicked, I found the
                        problem-solving process almost like a puzzle of pattern
                        recognition. The course required a lot of practice. I
                        found myself redoing problems multiple times until I
                        fully understood the approach.
                      </p>

                      <p>
                        We learned about 2D and 3D equilibrium, beams, trusses
                        and centroids. The most challenging part of the course
                        was the centroids and 3D equilibrium just because there
                        were so many calculations and if you missed one or
                        messed up one, your entire answer would be wrong. The
                        marking scheme was also very strict and you got part
                        marks for your explanation, answer and shown work.
                        Overall, this course is pretty applicable to real-life
                        and was genuinely interesting to me.
                      </p>
                      <div className="my-8 relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                        <Image
                          src="/statics.jpg"
                          alt="SYDE"
                          fill
                          className="object-cover object-bottom"
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-4 text-center italic">
                        my first 100 percent in university on a test/quiz/exam
                      </p>
                      <div className="mt-4">
                        <a
                          href="https://uwflow.com/course/syde181"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-500 hover:underline mt-4 font-bold"
                        >
                          SYDE 181
                        </a>
                      </div>
                    </div>
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
                  <div className="space-y-4">
                    <div className="border border-gray-500 p-4 rounded-lg space-y-3">
                      <h4 className="font-semibold text-white">
                        About the Course
                      </h4>
                      <p>
                        This course was similar to our calculus course, but
                        there was a bit of proofs mixed in and some digital
                        computation and linear algebra. The course was kind of
                        similar to the questions you would do on the waterloo
                        euclid math contest. Our professor was a bit too smart
                        for us. We had Nehaniv and every lecture with him was a
                        whirlwind of information. He spoke extremely fast with
                        no slideshow and notes that he would write on the board
                        that were not readable. The content was pretty difficult
                        because most of the students including me haven't seen
                        this type of math before. The course had two 2.5-hour
                        lectures at 8:30am and one 1-hour tutorial each week.
                        The tutorials focused on problem-solving and were led by
                        graduate TAs who were very knowledgeable and sometimes
                        helpful.
                      </p>

                      <h4 className="font-semibold text-white">Assessments</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>3 Quizzes</li>
                        <li>3 Tutorial Assignments</li>
                        <li>2 Matlab Assignments</li>
                        <li>Bonus Assignments</li>
                        <li>Final exam </li>
                      </ul>

                      <h4 className="font-semibold text-white">
                        My Experience
                      </h4>
                      <p>
                        This course covered a wide range of mathematical topics,
                        which made it both challenging and interesting. Linear
                        algebra was entirely new to me, and I found the concept
                        of vector spaces and transformations particularly
                        difficult to grasp at first.
                      </p>

                      <p>
                        The computational and engineering math was pretty useful
                        when working through problem sets and quizzes because it
                        helped me understand why these mathematical tools are so
                        important for engineers and how they are applied to real
                        world scenarios.
                      </p>

                      <p>
                        One of the most valuable aspects of this course was
                        learning MATLAB for numerical computations. We used it
                        to solve systems of equations, visualize graphs, and
                        simulate different scenarios/outcomes. This
                        computational approach complemented the theoretical
                        understanding and gave us practical tools we could apply
                        in other courses and projects.
                      </p>
                      <div className="my-8 relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                        <Image
                          src="/113.jpg"
                          alt="SYDE"
                          fill
                          className="object-cover object-bottom"
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-4 text-center italic">
                        my cheatsheet for the first quiz we had in this course
                        (I used up all the space)
                      </p>
                      <div className="mt-4">
                        <a
                          href="https://uwflow.com/course/syde113"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-500 hover:underline mt-4 font-bold"
                        >
                          SYDE 113
                        </a>
                      </div>
                    </div>
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
                  <div className="space-y-4">
                    <div className="border border-gray-500 p-4 rounded-lg space-y-3">
                      <h4 className="font-semibold text-white">
                        About the Course
                      </h4>
                      <p>
                        This course is similar to any English course you take in
                        highschool except it is engineering based. We were
                        taught by Professor Atkins. The course had one 2-hour
                        lecture and one 1-hour tutorial each week where we would
                        present an idea on something engineering related.
                        Lectures covered communication principles, document
                        structure, presentation techniques, and professional
                        writing standards. I definitely learned alot during
                        these interactive sessions where we practiced what we
                        learned through peer reviews, group activities, and
                        presentation rehearsals. It was actually pretty chill
                        and everyone felt comfortable giving and receiving
                        feedback.
                      </p>

                      <h4 className="font-semibold text-white">Assessments</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Weekly Assignments</li>
                        <li>Ethics Quiz</li>
                        <li>Technical presentation </li>
                        <li>Weekly Tutorial Presentations </li>
                      </ul>

                      <h4 className="font-semibold text-white">
                        My Experience
                      </h4>
                      <p>
                        A lot of us estimated that this course would be easy
                        compared to the technical courses and it was relatively
                        easy, but it was surprisingly a lot of work and
                        incredibly valuable. Learning to communicate complex
                        technical ideas clearly was something that was crucial
                        in engineering.
                      </p>
                      <p>
                        What made this course particularly effective was how it
                        integrated with our other courses. We often used
                        projects or topics from our technical courses as the
                        subject matter for our communications assignments, which
                        reinforced both sets of learning.
                      </p>
                      <div className="my-8 relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                        <Image
                          src="/101.png"
                          alt="SYDE"
                          fill
                          className="object-cover object-center"
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-4 text-center italic">
                        the bear my group and I made for our final project that
                        we presented to the class at the end of the term
                      </p>
                      <div className="mt-4">
                        <a
                          href="https://uwflow.com/course/syde101"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-500 hover:underline mt-4 font-bold"
                        >
                          SYDE 101
                        </a>
                      </div>
                    </div>
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
                  <div className="space-y-4">
                    <div className="border border-gray-500 p-4 rounded-lg space-y-3">
                      <h4 className="font-semibold text-white">
                        About the Course
                      </h4>
                      <p>
                        The professor for this course, Prof. Hunter, taught us
                        how to effectively communicate through visual means.
                        This was primarily a lab-based course with two 1-hour
                        lecture and one 2-hour lab session each week. The
                        lectures introduced concepts and techniques, while the
                        labs were hands-on sessions where we practiced these
                        skills with immediate feedback. Prof. Hunter would
                        demonstrate techniques on a projected screen, then walk
                        around the lab helping students individually as we
                        worked.
                      </p>

                      <h4 className="font-semibold text-white">Assessments</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Hand sketching portfolio </li>
                        <li>SOLIDWORKS modeling assignments </li>
                        <li>Technical drawing package </li>
                        <li>Final design project </li>
                      </ul>

                      <h4 className="font-semibold text-white">
                        My Experience
                      </h4>

                      <p>
                        The course started with hand sketching, which was
                        challenging for someone like me with limited artistic
                        ability. We learned techniques for perspective drawing,
                        isometric sketching, and rapid visualization. These
                        skills were surprisingly useful for quickly
                        communicating ideas during team meetings and design
                        sessions.
                      </p>

                      <p>
                        The CAD portion of the course introduced us to
                        SolidWorks, which was both challenging and rewarding.
                        Learning to create precise 3D models took practice, but
                        seeing my designs come to life on screen was incredibly
                        satisfying. We progressed from modeling simple objects
                        to creating complex assemblies with moving parts.
                      </p>

                      <p>
                        What I appreciated most about this course was how
                        practical and applicable the skills were. In our other
                        engineering courses, we could immediately apply these
                        visual communication techniques to present our work more
                        effectively. These skills have continued to be valuable
                        in team projects, where clear visual communication is
                        essential for collaboration.
                      </p>
                      <div className="my-8 relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                        <Image
                          src="/101L.png"
                          alt="SYDE"
                          fill
                          className="object-cover object-bottom"
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-4 text-center italic">
                        a SOLIDWORKS 3D model of a car that I made for one of
                        our last projects (I got a 95%)
                      </p>
                      <div className="mt-4">
                        <a
                          href="https://uwflow.com/course/syde101L"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-500 hover:underline mt-4 font-bold"
                        >
                          SYDE 101L
                        </a>
                      </div>
                    </div>
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
                  <div className="space-y-4">
                    <div className="border border-gray-500 p-4 rounded-lg space-y-3">
                      <h4 className="font-semibold text-white">
                        About the Course
                      </h4>
                      <p>
                        Professor Kerr had a fascinating background that
                        combined engineering with human factors and design
                        thinking. This course was structured differently from
                        our other courses, with two 1-hour lecture and two
                        2-hour studio session each week. The lectures introduced
                        design principles, methodologies, and case studies,
                        while the studio sessions were dedicated to hands-on
                        design work in teams. Prof. Kerr created an active
                        learning environment where we were constantly applying
                        concepts through activities, discussions, and
                        mini-design challenges.
                      </p>

                      <h4 className="font-semibold text-white">Assessments</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Design journal</li>
                        <li>Weekly Group Assignments </li>
                        <li>Final Project</li>
                      </ul>

                      <h4 className="font-semibold text-white">
                        My Experience
                      </h4>
                      <p>
                        SYDE 161 was the course that most embodied what makes
                        Systems Design Engineering unique. While other
                        engineering disciplines might focus primarily on
                        technical solutions, this course taught us to start with
                        understanding human needs and designing holistic
                        solutions that consider the entire system.
                      </p>

                      <p>
                        The course began with learning design research methods -
                        we conducted user interviews, observations, and created
                        empathy maps to understand the people we were designing
                        for. This human-centered approach was eye-opening for
                        me, as I had previously thought of engineering primarily
                        in technical terms.
                      </p>

                      <p>
                        The most valuable lesson from this course was learning
                        to embrace iteration and feedback. Our first prototypes
                        were far from perfect, but through user testing and
                        continuous refinement, our final solution (a combination
                        of tactile maps and a smartphone app with audio
                        guidance) evolved into something genuinely useful. Prof.
                        Kerr emphasized that good design rarely happens in a
                        single attempt, it's usually a process of learning and
                        improving through multiple iterations.
                      </p>

                      <p>
                        This course changed how I think about engineering
                        problems. I now approach challenges by first
                        understanding the human context and needs before jumping
                        to technical solutions.
                      </p>
                      <div className="my-8 relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                        <Image
                          src="/systemmap.jpg"
                          alt="SYDE"
                          fill
                          className="object-cover object-bottom"
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-4 text-center italic">
                        a systems map we made for a project
                      </p>
                      <div className="mt-4">
                        <a
                          href="https://uwflow.com/course/syde161"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-pink-500 hover:underline mt-4 font-bold"
                        >
                          SYDE 161
                        </a>
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Schedule Section */}
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-6">
            <div>
              <p>
                A typical week in SYDE 1A was packed with activities from
                morning to evening. Finding balance was challenging but
                essential for maintaining both academic performance and mental
                health.
              </p>
              <p className="mt-2"></p>
            </div>
          </div>

          {/* CMH Section */}
          <h2 className="text-2xl font-bold mt-10 mb-4">
            Living in Claudette Millar Hall (CMH)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p>
                Living in CMH was a huge part of my first-year experience. The
                residence was usually filled with stream 4 engineering students
                because of the fact that we would have to come back in the
                summer and needed cooling. There were single and double rooms
                where there wasn't really a wall between you are your roommate
                so it was very different going from your own room to having
                basically no privacy. I spent many late nights in the study
                rooms or the areas between the rooms with tables doing homework
                or catching up on assignments whenever it was too cold to go
                outside. Being so close to classes was another blessing. This
                meant I could easily swing by for a quick review or a
                much-needed break. Overall, CMH wasn't just a building—it was a
                vibrant community that made my first year both memorable and
                supportive.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                <Image
                  src="/cmh.png"
                  alt="Conrad Muller Hall"
                  width={450}
                  height={400}
                  className="object-cover rounded xl"
                />
              </div>
              <p className="text-gray-400 italic text-center mt-4 w-full">
                A picture of CMH at night
              </p>
            </div>
          </div>

          {/* Friends Section */}
          <h2 className="text-2xl font-bold mt-10 mb-4">
            Making Friends in SYDE
          </h2>
          <div className="mb-6">
            <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-6">
              <Image
                src="/friends.jpeg"
                alt="Friends in SYDE"
                width={900}
                height={500}
                className="object-cover"
              />
            </div>
            <p className="mb-4">
              The cohort-based structure of SYDE meant I spent most of my time
              with the same group of about 100 students. This created an
              environment where deep friendships formed naturally. Study groups
              evolved into friend groups, and collaborative projects led to
              lasting connections.
            </p>
            <p>
              These friendships were crucial for navigating the challenges of
              first year. We supported each other through difficult assignments,
              celebrated successes together, and provided emotional support
              during stressful periods like midterms and finals.
            </p>
          </div>

          {/* Co-op Section */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Preparing for Co-op</h2>
          <div className="mb-6">
            <p>
              Even in 1A, co-op preparation was a significant focus. The
              Waterloo co-op program is renowned for providing valuable work and
              work on projects that challenged me to grow even further.
              experience, and preparation began early. After applying to 500
              jobs, I realized that each rejection was a stepping stone toward
              growth and refinement. The experience was grueling, but it pushed
              me to continuously improve my resume, hone my technical skills,
              and perfect my interview techniques—skills that I had already
              started developing during co-op preparation through resume
              workshops, mock interviews, and project work. Ultimately, that
              persistence paid off. I returned to rbcx to work for ownr as a SWE
              intern. This role was the culmination of everything I had learned:
              the resilience from facing countless rejections, the practical
              skills from co-op preparation, and the drive to excel in a
              competitive field. At ownr, I was able to contribute meaningfully
              as a software engineer, collaborate with talented professionals,
              and work on projects that challenged me to grow even further.
              While the first co-op term was still months away, the groundwork
              laid in 1A was essential for future success in the job search
              process.
            </p>
          </div>

          {/* Key Takeaways */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Final Thoughts</h2>
          <p>
            Looking back on my 1A term, I learned so much and I couldn't ask for
            a better start to my university career.
          </p>
        </div>
      </article>
      {/* More Posts Section */}
      <section className="max-w-4xl w-full mt-16 pt-8 border-t border-gray-700">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          More Posts
        </h2>
        <div className="space-y-8">
          {/* Blog Post 3 */}
          <Card className="bg-transparent border border-gray-700 overflow-hidden md:col-span-2">
            <div className="relative h-32 md:h-36">
              <Image
                src="/ownr.png"
                alt="Software Engineering Intern at Ownr"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4 space-y-3">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">
                  What I Loved About Being A Software Engineering Intern at Ownr
                </h3>
                <span className="text-gray-400 text-sm mt-1 md:mt-0">
                  April 20, 2025
                </span>
              </div>
              <p className="text-gray-300 text-sm">
                In this article, I share my experiences during my first co-op
                term at Ownr, an RBCx company. I discuss the projects I worked
                on, the skills I developed, and the challenges I faced. This
                term provided me with valuable insights into full-stack web
                development and the importance of teamwork in a professional
                setting.
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Link
                href="/blogs/ownr"
                className="inline-flex items-center text-white hover:text-gray-300 transition-colors"
              >
                Read more <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </CardFooter>
          </Card>
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
      </footer>
    </main>
  );
}
