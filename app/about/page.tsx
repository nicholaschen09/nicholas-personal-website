import Image from "next/image"
import Link from "next/link"

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 sm:p-8 md:p-24 pt-40 md:pt-52">
      <div className="max-w-6xl w-full space-y-10 md:space-y-16 pt-16 md:pt-20">
        {/* Two-column layout: About text and Image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4 order-2 md:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 md:mb-10">Hey I'm Nicholas!</h1>
            <div className="text-base sm:text-lg text-gray-300 space-y-3 md:space-y-4">
              <p>
                Hello! I'm a Systems Design Engineering student at the University of Waterloo. I'm currently working as a software engineering intern at Ownr, where I'm developing full-stack web
                applications and gaining valuable industry experience. In the past, I've worked at companies like RBC and Meta Hash Capital where
                I made some pretty cool things.
              </p>
            </div>

          {/* Social Media Links */}
            <div className="flex space-x-8 pt-4 justify-center sm:justify-start">
              <Link href="https://www.linkedin.com/in/nicholas-chen-85886726a/" className="text-white hover:text-gray-300 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img src="/linkedin.png" alt="LinkedIn" className="max-w-full max-h-full object-contain" />
                </div>
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://github.com/nicholaschen09" className="text-white hover:text-gray-300 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img src="/github.png" alt="GitHub" className="w-7 h-7 md:w-8 md:h-8" />
                </div>
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="mailto:nicholas.chen243@gmail.com" className="text-white hover:text-gray-300 transition-colors">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img src="/email.png" alt="Email" className="max-w-full max-h-full object-contain" />
                </div>
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center order-1 md:order-2 mb-4 md:mb-0">
            <div className="relative w-full max-w-[250px] md:max-w-md aspect-square overflow-hidden rounded-lg">
              <Image
                src="/me.png"
                alt="Nicholas Chen"
                width={400}
                height={400}
                className="object-cover rounded-lg"
              />
            </div>
            <p className="text-gray-400 mt-1 text-center italic text-sm sm:text-base">
              Throwback to a picture of me in grade twelve reminiscing <br /> about
              everything on the last day of high school
            </p>
          </div>
        </div>

        {/* Experience, Education, Community, Awards Section */}
        <div className="space-y-8 md:space-y-12">
          <h2 className="text-5xl sm:text-4xl font-bold text-white border-b border-gray-700 pb-2">
            Some of the Cool Things I've Done
          </h2>

          {/* Work Experience */}
          <section>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 md:mb-4">Work Experience</h3>
            <div className="space-y-5 md:space-y-6">
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h4 className="text-lg sm:text-xl font-semibold text-white">Software Engineer Intern</h4>
                  <span className="text-gray-400 text-sm sm:text-base">Jan 2025 - Present</span>
                </div>
                <p className="text-gray-300 font-medium">Ownr</p>
                <p className="text-gray-400 text-sm sm:text-base">
                  Working on full-stack web development, implementing new features, and improving existing
                  functionality. Collaborating with cross-functional teams to deliver high-quality software solutions.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h4 className="text-lg sm:text-xl font-semibold text-white">Innovation Developer Intern</h4>
                  <span className="text-gray-400 text-sm sm:text-base">Jul 2024 - Aug 2024</span>
                </div>
                <p className="text-gray-300 font-medium">RBC</p>
                <p className="text-gray-400 text-sm sm:text-base">
                  Developed a machine learning model using python to predict monthly sign-in volumes, improving resource allocation and reducing
                  support team work times. 
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h4 className="text-lg sm:text-xl font-semibold text-white">UX Design Intern</h4>
                  <span className="text-gray-400 text-sm sm:text-base">Mar 2023 - Aug 2023</span>
                </div>
                <p className="text-gray-300 font-medium">Meta Hash Capital</p>
                <p className="text-gray-400 text-sm sm:text-base">
                  Worked on blockchain and cryptocurrency projects, developing solutions through designing
                  wireframes, prototypes, and high-fidelity mockups using Figma and Adobe Creative Suite.
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
                <span className="text-gray-400 text-sm sm:text-base">2024 - 2029</span>
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
                <h4 className="text-xl font-semibold text-white">University of Waterloo Alternative Fuels Team</h4>
                <p className="text-gray-300 font-medium">Electrical and Mechanical Engineer</p>
                <p className="text-gray-400">
                  Worked on designing and implementing electrical and mechanical systems for our alternative fuel vehicle. 
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
                  <h4 className="text-xl font-semibold text-white">Second Place - UTRA Hacks</h4>
                  <span className="text-gray-400">2025</span>
                </div>
                <p className="text-gray-300 font-medium">University of Toronto</p>
                <p className="text-gray-400">
                  Placed second with a team of four people to develop an innovative solution for helping people with bad posture.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-baseline">
                  <h4 className="text-xl font-semibold text-white">Engineering Entrance Scholarship</h4>
                  <span className="text-gray-400">2024</span>
                </div>
                <p className="text-gray-300 font-medium">University of Waterloo</p>
                <p className="text-gray-400">
                  Awarded a $5000 merit-based scholarship for academic achievement and leadership potential.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}

