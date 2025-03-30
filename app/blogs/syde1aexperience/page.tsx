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
                        engaging.
                      </p>
                      <p>
                        The course was taught through a combination of lectures
                        and tutorials. Most of it was done through pre-made
                        slides and a note taking app that the professor used to
                        edit on top of the pdfs/slides. He would often pause to
                        ask questions and make sure everyone was following
                        along. The tutorials were led by TAs who would work
                        through practice problems and provide additional help.
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
                        Dr. Chen was a passionate programmer with extensive
                        industry experience at companies like Google and
                        Microsoft. His real-world examples made the course
                        material much more relevant and interesting. He had a
                        great sense of humor that made even the 8:30am lectures
                        bearable, and he was always showing us practical
                        applications of what we were learning.
                      </p>

                      <h4 className="font-semibold text-white">
                        Teaching Style
                      </h4>
                      <p>
                        The course consisted of two 1.5-hour lectures and one
                        3-hour lab session each week. Lectures were a mix of
                        theory and live coding demonstrations, which was
                        incredibly helpful for seeing how to apply concepts in
                        practice. Dr. Chen would often make intentional mistakes
                        during his live coding to show us common errors and how
                        to debug them. The lab sessions were hands-on
                        programming time with TAs available to help, which was
                        invaluable for getting immediate feedback on our code.
                      </p>

                      <h4 className="font-semibold text-white">Assessments</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Weekly programming assignments (30%)</li>
                        <li>Two programming projects (30%)</li>
                        <li>Midterm exam (15%)</li>
                        <li>Final exam (25%)</li>
                      </ul>

                      <h4 className="font-semibold text-white">
                        My Experience
                      </h4>
                      <p>
                        This was my favorite course in 1A! I had some
                        programming experience from high school, but C++ was new
                        to me. The learning curve was steep at first, especially
                        with memory management and pointers, but the hands-on
                        approach of the course made it click for me after a few
                        weeks.
                      </p>

                      <p>
                        The projects were challenging but incredibly rewarding.
                        Our first project was building a simple text-based game,
                        and the second was creating a data analysis tool for
                        engineering measurements. I spent countless late nights
                        in the lab with classmates debugging code and
                        celebrating when we finally got things working. These
                        collaborative experiences were some of my best memories
                        from the term.
                      </p>

                      <p>
                        The most valuable skill I gained wasn't just the C++
                        syntax, but the problem-solving approach that
                        programming teaches you. Breaking down complex problems
                        into smaller, manageable pieces is a skill that has
                        helped me in every other course.
                      </p>
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
                        Professor: Dr. Robert Williams
                      </h4>
                      <p>
                        Dr. Williams was a structural engineer with decades of
                        experience designing bridges and buildings. His
                        practical knowledge made the theoretical concepts much
                        more tangible. He would often bring in physical models
                        and demonstrations to help us visualize the forces at
                        work, which was incredibly helpful for understanding
                        abstract concepts.
                      </p>

                      <h4 className="font-semibold text-white">
                        Teaching Style:
                      </h4>
                      <p>
                        The course had three 1-hour lectures per week and a
                        2-hour tutorial. Dr. Williams used a combination of
                        slides and board work, often drawing free-body diagrams
                        by hand to show the process of analyzing forces. The
                        tutorials were problem-solving sessions where we worked
                        through more complex examples with TA guidance. What
                        made this course special was the physical demonstrations
                        - Dr. Williams would bring in trusses, beams, and other
                        structures to show us real-world applications.
                      </p>

                      <h4 className="font-semibold text-white">Assessments:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Bi-weekly problem sets (20%)</li>
                        <li>Two midterm exams (40%)</li>
                        <li>Final exam (40%)</li>
                      </ul>

                      <h4 className="font-semibold text-white">
                        My Experience:
                      </h4>
                      <p>
                        Statics was conceptually challenging for me at first.
                        The idea of analyzing forces in 3D space took some time
                        to grasp, but once it clicked, I found the
                        problem-solving process almost like a puzzle. The course
                        required a lot of practice - I found myself redoing
                        problems multiple times until I fully understood the
                        approach.
                      </p>

                      <p>
                        One of the most interesting parts was our bridge design
                        mini-project, where we had to analyze the forces in a
                        truss bridge and optimize the design for maximum
                        strength with minimal materials. Seeing the practical
                        application of the theory made the course much more
                        engaging.
                      </p>

                      <p>
                        Dr. Williams' real-world examples from his engineering
                        career showed us how these concepts apply to actual
                        structures. Learning about bridge failures due to
                        improper force analysis was both sobering and motivating
                        - it showed the real importance of understanding these
                        principles thoroughly.
                      </p>
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
                        Professor: Dr. Emily Patel
                      </h4>
                      <p>
                        Dr. Patel was a brilliant mathematician with a gift for
                        making abstract concepts concrete. She had previously
                        worked in aerospace engineering before becoming a
                        professor, so she could connect mathematical theory to
                        real engineering applications. Her enthusiasm for the
                        material was contagious, and she was always available
                        during office hours to help students who were
                        struggling.
                      </p>

                      <h4 className="font-semibold text-white">
                        Teaching Style:
                      </h4>
                      <p>
                        The course had two 1.5-hour lectures and one 1-hour
                        tutorial each week. Dr. Patel used a combination of
                        slides and board work, often using visual
                        representations and analogies to help us understand
                        abstract concepts. She would frequently pause to ask
                        questions and make sure everyone was following along.
                        The tutorials focused on problem-solving and were led by
                        graduate TAs who were very knowledgeable and helpful.
                      </p>

                      <h4 className="font-semibold text-white">Assessments:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Weekly problem sets (25%)</li>
                        <li>Two midterm exams (35%)</li>
                        <li>Final exam (40%)</li>
                      </ul>

                      <h4 className="font-semibold text-white">
                        My Experience:
                      </h4>
                      <p>
                        This course covered a wide range of mathematical topics,
                        which made it both challenging and interesting. Linear
                        algebra was entirely new to me, and I found the concept
                        of vector spaces and transformations particularly
                        difficult to grasp at first. The visualization tools Dr.
                        Patel provided were incredibly helpful - seeing how
                        matrices transform shapes in space made the abstract
                        concepts much more concrete.
                      </p>

                      <p>
                        The differential equations portion of the course was
                        fascinating because we could see how these equations
                        model real-world systems like spring-mass systems,
                        electrical circuits, and population growth. Working
                        through these applications helped me understand why
                        these mathematical tools are so important for engineers.
                      </p>

                      <p>
                        One of the most valuable aspects of this course was
                        learning MATLAB for numerical computations. We used it
                        to solve systems of equations, visualize vector fields,
                        and simulate differential equations. This computational
                        approach complemented the theoretical understanding and
                        gave us practical tools we could apply in other courses
                        and projects.
                      </p>
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
                        Professor: Prof. Jennifer Martinez
                      </h4>
                      <p>
                        Prof. Martinez had a background in both engineering and
                        professional communications, having worked as a
                        technical writer for several major tech companies before
                        joining academia. Her industry experience gave her
                        insights into what makes technical communication
                        effective in real-world settings. She was approachable
                        and provided detailed feedback on all our assignments,
                        which was incredibly valuable for improving our writing.
                      </p>

                      <h4 className="font-semibold text-white">
                        Teaching Style:
                      </h4>
                      <p>
                        The course had one 2-hour lecture and one 1-hour
                        workshop each week. Lectures covered communication
                        principles, document structure, presentation techniques,
                        and professional writing standards. The workshops were
                        interactive sessions where we practiced what we learned
                        through peer reviews, group activities, and presentation
                        rehearsals. Prof. Martinez created a supportive
                        environment where we felt comfortable giving and
                        receiving feedback.
                      </p>

                      <h4 className="font-semibold text-white">Assessments:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Technical memo (15%)</li>
                        <li>Design proposal (20%)</li>
                        <li>Technical presentation (20%)</li>
                        <li>Engineering report (30%)</li>
                        <li>Participation in workshops (15%)</li>
                      </ul>

                      <h4 className="font-semibold text-white">
                        My Experience:
                      </h4>
                      <p>
                        Many students underestimated this course, thinking it
                        would be easy compared to the technical courses, but it
                        was surprisingly challenging and incredibly valuable.
                        Learning to communicate complex technical ideas clearly
                        is a skill that's essential for engineers but often
                        overlooked.
                      </p>

                      <p>
                        The most challenging assignment for me was the technical
                        presentation. Public speaking had always made me
                        nervous, but the structured approach we learned and the
                        supportive feedback from classmates helped me improve
                        significantly. By the end of the term, I felt much more
                        confident presenting my ideas.
                      </p>

                      <p>
                        The engineering report was a comprehensive project where
                        we had to research a technical topic, analyze data, and
                        present recommendations. I chose to write about
                        renewable energy integration in urban environments. The
                        process of researching, organizing, and clearly
                        presenting complex information taught me skills I've
                        used in every course since.
                      </p>

                      <p>
                        What made this course particularly effective was how it
                        integrated with our other courses. We often used
                        projects or topics from our technical courses as the
                        subject matter for our communications assignments, which
                        reinforced both sets of learning.
                      </p>
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
                        Professor: Prof. David Kim
                      </h4>
                      <p>
                        Prof. Kim had an interesting background that combined
                        mechanical engineering and industrial design. He had
                        worked for several automotive companies designing
                        vehicle components before becoming a professor. His dual
                        expertise in both the technical and aesthetic aspects of
                        design gave him a unique perspective that made the
                        course particularly valuable.
                      </p>

                      <h4 className="font-semibold text-white">
                        Teaching Style:
                      </h4>
                      <p>
                        This was primarily a lab-based course with one 1-hour
                        lecture and one 3-hour lab session each week. The
                        lectures introduced concepts and techniques, while the
                        labs were hands-on sessions where we practiced these
                        skills with immediate feedback. Prof. Kim would
                        demonstrate techniques on a projected screen, then walk
                        around the lab helping students individually as we
                        worked.
                      </p>

                      <h4 className="font-semibold text-white">Assessments:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Hand sketching portfolio (20%)</li>
                        <li>CAD modeling assignments (30%)</li>
                        <li>Technical drawing package (25%)</li>
                        <li>Final design project (25%)</li>
                      </ul>

                      <h4 className="font-semibold text-white">
                        My Experience:
                      </h4>
                      <p>
                        This course was a perfect complement to the verbal
                        communication skills we learned in SYDE 101. I
                        discovered that visual communication is just as
                        important for engineers - sometimes a well- crafted
                        diagram or model can explain a concept better than
                        paragraphs of text.
                      </p>

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
                        The final project brought everything together - we had
                        to design a mechanical device, create detailed CAD
                        models, produce technical drawings with proper
                        dimensioning and tolerances, and present our design
                        visually. I designed an adjustable laptop stand with
                        cooling features, and the process of taking an
                        adjustable laptop stand with cooling features, and the
                        process of taking it from initial concept sketches to
                        detailed technical drawings taught me the entire visual
                        communication workflow that engineers use in industry.
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
                        Professor: Dr. Lisa Nguyen
                      </h4>
                      <p>
                        Dr. Nguyen had a fascinating background that combined
                        engineering with human factors and design thinking.
                        Before academia, she worked at IDEO, one of the world's
                        leading design firms, where she helped develop products
                        for companies like Apple and Samsung. Her industry
                        experience brought a practical, real-world perspective
                        to the course that made the design process feel tangible
                        rather than theoretical.
                      </p>

                      <h4 className="font-semibold text-white">
                        Teaching Style:
                      </h4>
                      <p>
                        This course was structured differently from our other
                        courses, with one 2-hour lecture and one 3-hour studio
                        session each week. The lectures introduced design
                        principles, methodologies, and case studies, while the
                        studio sessions were dedicated to hands-on design work
                        in teams. Dr. Nguyen created an active learning
                        environment where we were constantly applying concepts
                        through activities, discussions, and mini-design
                        challenges.
                      </p>

                      <h4 className="font-semibold text-white">Assessments:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Design journal (15%)</li>
                        <li>User research report (20%)</li>
                        <li>Concept development portfolio (20%)</li>
                        <li>Final design project and presentation (35%)</li>
                        <li>Participation in studio activities (10%)</li>
                      </ul>

                      <h4 className="font-semibold text-white">
                        My Experience:
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
                        Working in teams of four, we tackled a semester-long
                        design project focused on improving campus accessibility
                        for students with disabilities. My team focused
                        specifically on navigation challenges for visually
                        impaired students. We went through the entire design
                        process - from research and problem definition to
                        ideation, prototyping, testing, and refinement.
                      </p>

                      <p>
                        The most valuable lesson from this course was learning
                        to embrace iteration and feedback. Our first prototypes
                        were far from perfect, but through user testing and
                        continuous refinement, our final solution (a combination
                        of tactile maps and a smartphone app with audio
                        guidance) evolved into something genuinely useful. Dr.
                        Nguyen emphasized that good design rarely happens in a
                        single attempt - it's a process of learning and
                        improving through multiple iterations.
                      </p>

                      <p>
                        This course changed how I think about engineering
                        problems. I now approach challenges by first
                        understanding the human context and needs before jumping
                        to technical solutions - a perspective that has proven
                        valuable in all my subsequent courses and projects.
                      </p>
                    </div>
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
                  <div className="space-y-4">
                    <div className="border border-gray-500 p-4 rounded-lg space-y-3">
                      <h4 className="font-semibold text-white">
                        Professor: Prof. James Wilson
                      </h4>
                      <p>
                        Prof. Wilson was a mechanical engineering professor who
                        also served as the first-year engineering advisor. His
                        genuine concern for student well-being was evident in
                        every session. Having taught this course for over a
                        decade, he had seen firsthand the challenges that
                        first-year students face and had developed effective
                        strategies to help us navigate them.
                      </p>

                      <h4 className="font-semibold text-white">
                        Teaching Style:
                      </h4>
                      <p>
                        This course met once a week for a 2-hour seminar
                        session. Unlike our other courses, GENE 119 was much
                        more discussion-based and interactive. Prof. Wilson
                        would introduce topics and facilitate conversations, but
                        much of the learning came from peer discussions and
                        shared experiences. The small class size (about 25
                        students) created a comfortable environment where people
                        felt safe sharing their challenges and asking questions.
                      </p>

                      <h4 className="font-semibold text-white">Assessments:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Reflection journals (30%)</li>
                        <li>Academic planning assignment (20%)</li>
                        <li>Resource utilization project (20%)</li>
                        <li>Final reflection paper (20%)</li>
                        <li>Participation in discussions (10%)</li>
                      </ul>

                      <h4 className="font-semibold text-white">
                        My Experience:
                      </h4>
                      <p>
                        Initially, many students (including myself)
                        underestimated the importance of this course, viewing it
                        as less critical than our technical courses. However, as
                        the term progressed, I came to appreciate how valuable
                        these sessions were for maintaining balance and
                        perspective during a challenging first term.
                      </p>

                      <p>
                        The course covered practical skills like effective
                        note-taking, study strategies for different types of
                        courses, time management techniques, and stress
                        management practices. We also learned about campus
                        resources like the writing center, counseling services,
                        and academic advisors - resources I might not have
                        discovered or utilized otherwise.
                      </p>

                      <p>
                        One of the most valuable aspects of the course was the
                        community it created. Hearing that other students were
                        facing similar challenges made me feel less alone in my
                        struggles. We shared strategies for managing workload,
                        dealing with difficult concepts, and maintaining
                        well-being amid academic pressures.
                      </p>

                      <p>
                        The reflection journals encouraged us to think
                        critically about our learning processes and personal
                        growth. This practice of self-reflection helped me
                        identify patterns in my study habits and make
                        adjustments that improved my performance in other
                        courses. For example, I realized I was spending too much
                        time on detailed notes and not enough on practice
                        problems, which led me to adjust my approach for
                        midterms.
                      </p>

                      <p>
                        Looking back, GENE 119 provided a crucial foundation for
                        success not just in 1A, but throughout my engineering
                        education. The skills and habits developed in this
                        course have continued to serve me well in managing
                        increasingly complex coursework and projects.
                      </p>
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
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          More Posts
        </h2>
        <div className="space-y-8">
          {/* Blog Post 3 */}
          <Card className="bg-transparent border border-gray-700 overflow-hidden md:col-span-2">
            <div className="relative h-42 md:h-48">
              <Image
                src="/office.png"
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
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge
                  variant="outline"
                  className="bg-transparent text-white border-gray-500 font-medium"
                >
                  Communication
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-transparent text-white border-gray-500 font-medium"
                >
                  Software Engineering
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-transparent text-white border-gray-500 font-medium"
                >
                  Javascript
                </Badge>
              </div>
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
