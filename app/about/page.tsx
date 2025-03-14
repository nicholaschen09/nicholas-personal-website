import Image from "next/image"

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-24 pt-20 md:pt-24">
      <div className="max-w-6xl w-full space-y-10 md:space-y-16">
        {/* Two-column layout: About text and Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">About Me</h1>
            <div className="text-base sm:text-lg text-gray-300 space-y-3 md:space-y-4">
              <p>
                Hello! I'm Nicholas Chen, a Systems Design Engineering student at the University of Waterloo with a
                passion for building innovative solutions through software engineering.
              </p>
              <p>
                Currently, I'm working as a software engineering intern at Ownr, where I'm developing full-stack web
                applications and gaining valuable industry experience.
              </p>
              <p>
                My journey in tech has taken me through various roles at companies like RBC and Meta Hash Capital, where
                I've contributed to projects that have real-world impact.
              </p>
              <p>
                I believe in the power of technology to solve complex problems and am constantly looking to expand my
                knowledge and skills in this ever-evolving field.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center order-1 md:order-2 mb-4 md:mb-0">
            <div className="relative w-full max-w-[250px] md:max-w-md aspect-square overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Nicholas Chen"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
            <p className="text-gray-400 mt-3 text-center italic text-sm sm:text-base">
              Software Engineering Intern at Ownr
            </p>
          </div>
        </div>

        {/* Experience, Education, Community, Awards Section */}
        <div className="space-y-8 md:space-y-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white border-b border-gray-700 pb-2">
            Experience & Achievements
          </h2>

          {/* Work Experience */}
          <section>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 md:mb-4">Work Experience</h3>
            <div className="space-y-5 md:space-y-6">
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h4 className="text-lg sm:text-xl font-semibold text-white">Software Engineering Intern</h4>
                  <span className="text-gray-400 text-sm sm:text-base">May 2023 - Present</span>
                </div>
                <p className="text-gray-300 font-medium">Ownr</p>
                <p className="text-gray-400 text-sm sm:text-base">
                  Working on full-stack web development, implementing new features, and improving existing
                  functionality. Collaborating with cross-functional teams to deliver high-quality software solutions.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h4 className="text-lg sm:text-xl font-semibold text-white">Software Developer Intern</h4>
                  <span className="text-gray-400 text-sm sm:text-base">Sept 2022 - Dec 2022</span>
                </div>
                <p className="text-gray-300 font-medium">RBC</p>
                <p className="text-gray-400 text-sm sm:text-base">
                  Contributed to the development of banking software solutions, focusing on user experience and
                  security. Participated in agile development processes and collaborated with senior developers.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h4 className="text-lg sm:text-xl font-semibold text-white">Engineering Intern</h4>
                  <span className="text-gray-400 text-sm sm:text-base">Jan 2022 - Apr 2022</span>
                </div>
                <p className="text-gray-300 font-medium">Meta Hash Capital</p>
                <p className="text-gray-400 text-sm sm:text-base">
                  Worked on blockchain and cryptocurrency projects, developing solutions for decentralized applications.
                  Gained experience in emerging technologies and financial technology systems.
                </p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 md:mb-4">Education</h3>
            <div className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <h4 className="text-lg sm:text-xl font-semibold text-white">Systems Design Engineering</h4>
                <span className="text-gray-400 text-sm sm:text-base">2020 - 2025 (Expected)</span>
              </div>
              <p className="text-gray-300 font-medium">University of Waterloo</p>
              <p className="text-gray-400 text-sm sm:text-base">
                Focusing on interdisciplinary engineering with specialization in software systems and human-centered
                design.
              </p>
            </div>
          </section>

          {/* Community Involvement */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4">Community Involvement</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-white">Engineering Student Society</h4>
                <p className="text-gray-300 font-medium">Technical Director</p>
                <p className="text-gray-400">
                  Led technical initiatives for student events and managed web infrastructure for the society.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-semibold text-white">Hackathon Mentor</h4>
                <p className="text-gray-300 font-medium">Waterloo Hacks</p>
                <p className="text-gray-400">
                  Provided technical guidance and mentorship to student teams during 48-hour hackathon events.
                </p>
              </div>
            </div>
          </section>

          {/* Awards */}
          <section>
            <h3 className="text-2xl font-bold text-white mb-4">Awards & Achievements</h3>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-xl font-semibold text-white">Dean's Honours List</h4>
                  <span className="text-gray-400">2021, 2022, 2023</span>
                </div>
                <p className="text-gray-300 font-medium">University of Waterloo</p>
                <p className="text-gray-400">
                  Recognized for academic excellence with a GPA in the top 10% of the engineering faculty.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-xl font-semibold text-white">First Place - Engineering Design Competition</h4>
                  <span className="text-gray-400">2022</span>
                </div>
                <p className="text-gray-300 font-medium">Ontario Engineering Competition</p>
                <p className="text-gray-400">
                  Led a team of four to develop an innovative solution for sustainable urban transportation.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-xl font-semibold text-white">Engineering Entrance Scholarship</h4>
                  <span className="text-gray-400">2020</span>
                </div>
                <p className="text-gray-300 font-medium">University of Waterloo</p>
                <p className="text-gray-400">
                  Awarded a merit-based scholarship for academic achievement and leadership potential.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

