import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function BlogPost() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <article className="max-w-4xl w-full space-y-8 pt-24 md:pt-16">
        <Link href="/blog" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-6">
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to all posts
        </Link>

        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">My SYDE 1A Experience</h1>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-gray-400">March 13, 2025</span>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-transparent text-white border-gray-500 font-medium">
                React
              </Badge>
              <Badge variant="outline" className="bg-transparent text-white border-gray-500 font-medium">
                Architecture
              </Badge>
              <Badge variant="outline" className="bg-transparent text-white border-gray-500 font-medium">
                Best Practices
              </Badge>
            </div>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <p>
            Starting my journey in Systems Design Engineering at the University of Waterloo was both exciting and
            challenging. The first academic term, known as 1A, was a whirlwind of new experiences, rigorous coursework,
            and valuable lessons.
          </p>

          <h2>The Curriculum</h2>
          <p>
            The SYDE 1A curriculum is designed to build a strong foundation in engineering principles while introducing
            the systems thinking approach that makes this program unique. Here's a breakdown of the core courses:
          </p>

          <ul>
            <li>
              <strong>SYDE 111: Fundamental Engineering Concepts</strong> - An introduction to the engineering design
              process and problem-solving methodologies.
            </li>
            <li>
              <strong>SYDE 121: Digital Computation</strong> - Learning programming fundamentals using Python, with
              applications in engineering problem-solving.
            </li>
            <li>
              <strong>SYDE 181: Physics 1</strong> - Covering mechanics, waves, and thermodynamics with an engineering
              perspective.
            </li>
            <li>
              <strong>MATH 115: Linear Algebra</strong> - Essential mathematical concepts that form the backbone of many
              engineering applications.
            </li>
            <li>
              <strong>MATH 116: Calculus 1</strong> - Differential and integral calculus with engineering applications.
            </li>
          </ul>

          <h2>The Workload</h2>
          <p>
            One of the biggest adjustments was managing the workload. SYDE is known for its intensive schedule, and 1A
            certainly lived up to that reputation. A typical week included:
          </p>

          <ul>
            <li>25-30 hours of lectures and labs</li>
            <li>Multiple assignments due each week</li>
            <li>Regular quizzes and midterms</li>
            <li>Team projects that required coordination outside of class hours</li>
          </ul>

          <p>
            The key to success was developing effective time management skills early on. I found that creating a weekly
            schedule and sticking to it helped me stay on top of assignments while still having time for extracurricular
            activities and social events.
          </p>

          <h2>The Community</h2>
          <p>
            Perhaps the most valuable aspect of SYDE is the tight-knit community. With a cohort of around 100 students,
            you quickly get to know everyone in your class. This creates a supportive environment where:
          </p>

          <ul>
            <li>Study groups form naturally and help everyone succeed</li>
            <li>Upper-year students are eager to provide guidance and share resources</li>
            <li>Professors and TAs are accessible and genuinely interested in student success</li>
            <li>Class events and traditions build camaraderie and help manage stress</li>
          </ul>

          <h2>Key Takeaways</h2>
          <p>Looking back on my 1A term, these are the most important lessons I learned:</p>

          <ol>
            <li>
              <strong>Embrace the challenge.</strong> The workload is intense, but it's designed to build your
              resilience and problem-solving abilities.
            </li>
            <li>
              <strong>Collaborate effectively.</strong> Learning to work in teams is essential, as many courses involve
              group projects.
            </li>
            <li>
              <strong>Seek help early.</strong> Don't wait until you're struggling to ask for assistance from
              professors, TAs, or classmates.
            </li>
            <li>
              <strong>Balance is key.</strong> Make time for activities outside of academics to maintain your
              well-being.
            </li>
            <li>
              <strong>Systems thinking is powerful.</strong> The interdisciplinary approach of SYDE provides a unique
              perspective that will serve you well in any engineering field.
            </li>
          </ol>

          <p>
            If you're considering SYDE or about to start your 1A term, I hope this gives you a helpful glimpse into what
            to expect. The program is challenging, but the skills you'll develop and the community you'll join make it
            an incredibly rewarding experience.
          </p>
        </div>
      </article>
    </main>
  )
}

