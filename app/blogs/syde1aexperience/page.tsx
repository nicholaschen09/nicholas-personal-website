import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function BlogPost() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <article className="max-w-4xl w-full space-y-8 pt-24 md:pt-16">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-6">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to homepage
        </Link>

        {/* Header */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">My SYDE 1A Experience</h1>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-gray-400">March 13, 2025</span>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-transparent text-white border-gray-500 font-medium">
                University
              </Badge>
              <Badge variant="outline" className="bg-transparent text-white border-gray-500 font-medium">
                Engineering
              </Badge>
              <Badge variant="outline" className="bg-transparent text-white border-gray-500 font-medium">
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

        <div className="prose prose-invert max-w-none">
          <p className="text-xl leading-relaxed">
            Starting my journey in Systems Design Engineering at the University of Waterloo was both exciting and
            challenging. The first academic term, known as 1A, was a whirlwind of new experiences, rigorous coursework,
            and valuable lessons.
          </p>

          {/* Transition from High School */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Transition from High School</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p>
                The jump from high school to university engineering was significant. The pace is faster, the material
                more complex, and the expectations much higher. In high school, I was used to being guided through most
                learning processes, but university demanded more independence and self-directed study.
              </p>
              <p>
                Time management became crucial as I juggled multiple deadlines, readings, and projects simultaneously.
                The freedom was both liberating and challenging – no one was checking if I attended lectures or
                completed readings, but the consequences of falling behind were entirely on me.
              </p>
            </div>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="High school to university transition"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
          </div>

          {/* Courses Section */}
          <h2 className="text-2xl font-bold mt-10 mb-4">The Curriculum</h2>
          <p>
            The SYDE 1A curriculum is designed to build a strong foundation in engineering principles while introducing
            the systems thinking approach that makes this program unique. Here's a breakdown of the core courses:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">SYDE 111</h3>
              <p className="text-sm">
                Fundamental Engineering Concepts - An introduction to the engineering design process and problem-solving
                methodologies.
              </p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">SYDE 121</h3>
              <p className="text-sm">
                Digital Computation - Learning programming fundamentals using Python, with applications in engineering
                problem-solving.
              </p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">SYDE 181</h3>
              <p className="text-sm">
                Physics 1 - Covering mechanics, waves, and thermodynamics with an engineering perspective.
              </p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">MATH 115</h3>
              <p className="text-sm">
                Linear Algebra - Essential mathematical concepts that form the backbone of many engineering
                applications.
              </p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">MATH 116</h3>
              <p className="text-sm">Calculus 1 - Differential and integral calculus with engineering applications.</p>
            </div>
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
              <p>A typical week in SYDE 1A was packed with activities from morning to evening. My schedule included:</p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>25-30 hours of lectures and labs</li>
                <li>10-15 hours of homework and assignments</li>
                <li>5-8 hours of group project work</li>
                <li>Study sessions and office hours</li>
                <li>Club meetings and social events</li>
              </ul>
              <p className="mt-2">
                Finding balance was challenging but essential for maintaining both academic performance and mental
                health.
              </p>
            </div>
          </div>

          {/* CMH (Conrad Muller Hall) Section */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Life at CMH</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p>
                Living at Conrad Muller Hall was a significant part of my first-year experience. The residence provided
                a supportive community of fellow engineering students facing similar challenges.
              </p>
              <p>
                The suite-style rooms offered a good balance of privacy and social interaction. Late-night study
                sessions in common areas, impromptu pizza parties, and the convenience of being close to classes made
                CMH an ideal home during my first year.
              </p>
              <p>
                The residence advisors organized regular events that helped break the monotony of academic life and
                fostered connections among residents.
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
          <h2 className="text-2xl font-bold mt-10 mb-4">Building Friendships</h2>
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
            The cohort-based structure of SYDE meant I spent most of my time with the same group of about 100 students.
            This created an environment where deep friendships formed naturally. Study groups evolved into friend
            groups, and collaborative projects led to lasting connections.
          </p>
          <p>
            These friendships were crucial for navigating the challenges of first year. We supported each other through
            difficult assignments, celebrated successes together, and provided emotional support during stressful
            periods like midterms and finals.
          </p>

          {/* Design Teams Section */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Design Teams and Projects</h2>
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
                One of the highlights of SYDE 1A was participating in design projects that applied theoretical knowledge
                to practical problems. These projects included:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Designing and building a small-scale autonomous vehicle</li>
                <li>Creating user interfaces for specific accessibility needs</li>
                <li>Developing solutions for community-identified problems</li>
              </ul>
              <p className="mt-2">
                These projects provided valuable experience in teamwork, project management, and the engineering design
                process. They also offered a refreshing break from theoretical coursework.
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
            The University of Waterloo campus became my second home during 1A. Beyond the Engineering buildings where
            most of my classes took place, I discovered many favorite spots:
          </p>
          <ul className="list-disc pl-5 space-y-1 mt-2">
            <li>The Davis Centre Library - perfect for focused study sessions</li>
            <li>The Student Life Centre - a hub for socializing and club activities</li>
            <li>The Engineering C&D - where I fueled late-night study sessions with coffee</li>
            <li>The paths around Laurel Creek - ideal for clearing my mind between classes</li>
          </ul>

          {/* Co-op Section */}
          <h2 className="text-2xl font-bold mt-10 mb-4">Preparing for Co-op</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <p>
                Even in 1A, co-op preparation was a significant focus. The Waterloo co-op program is renowned for
                providing valuable work experience, and preparation began early:
              </p>
              <ul className="list-disc pl-5 space-y-1 mt-2">
                <li>Resume workshops and critiques</li>
                <li>Mock interviews and feedback sessions</li>
                <li>Co-op information sessions with upper-year students</li>
                <li>Building relevant skills through coursework and projects</li>
              </ul>
              <p className="mt-2">
                While the first co-op term was still months away, the groundwork laid in 1A was essential for future
                success in the job search process.
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
          <p>Looking back on my 1A term, these are the most important lessons I learned:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Embrace the challenge</h3>
              <p className="text-sm">
                The workload is intense, but it's designed to build your resilience and problem-solving abilities.
              </p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Collaborate effectively</h3>
              <p className="text-sm">Learning to work in teams is essential, as many courses involve group projects.</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Seek help early</h3>
              <p className="text-sm">
                Don't wait until you're struggling to ask for assistance from professors, TAs, or classmates.
              </p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Balance is key</h3>
              <p className="text-sm">Make time for activities outside of academics to maintain your well-being.</p>
            </div>
          </div>

          <p className="text-xl leading-relaxed mt-8">
            If you're considering SYDE or about to start your 1A term, I hope this gives you a helpful glimpse into what
            to expect. The program is challenging, but the skills you'll develop and the community you'll join make it
            an incredibly rewarding experience.
          </p>

          {/* Author Bio */}
          <div className="flex items-center gap-4 mt-12 p-6 bg-gray-800/30 rounded-xl">
            <div className="relative w-16 h-16 rounded-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=64&width=64"
                alt="Author"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-bold">Nicholas Chen</h3>
              <p className="text-sm text-gray-400">
                Systems Design Engineering student at the University of Waterloo. Passionate about technology, design,
                and creating meaningful solutions.
              </p>
            </div>
          </div>
        </div>
      </article>
    </main>
  )
}

