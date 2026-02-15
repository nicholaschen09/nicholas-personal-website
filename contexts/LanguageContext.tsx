'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Default to English during SSR to avoid hydration mismatch; load saved preference after mount.
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = window.localStorage.getItem('language');
        if ((saved === 'en' || saved === 'zh') && saved !== language) {
          setLanguage(saved);
        }
      } catch {
        // ignore storage read errors and fall back to default
      }
    }
    // run once on mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem('language', language);
      } catch {
        // ignore storage write errors to avoid crashing the UI
      }
    }
  }, [language]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Hero section
    'hero.greeting': "Hey, I'm ",
    'hero.name.full': 'Nicholas!',
    'hero.name.short': 'Nic!',
    'hero.location': '',
    'hero.building': '',
    'hero.achievements': 'A few of my achievements...',
    'hero.achievement1':
      '30k followers on social media (x, instagram, tiktok, youtube) and over 10m views',
    'hero.achievement2': 'won 2nd place at UTRA Hacks, the largest robotics hackathon in canada',
    'hero.achievement3': 'designed award winning book covers for authors',
    'hero.currently': 'currently',
    'hero.current1': '> studying syde (engineering) at the university of waterloo',
    'hero.current2':
      'working at textql as a software engineer intern in nyc building ai agents for data',
    'hero.current3': 'building projects to help others create and invent new things',
    'hero.current4': 'sharing my journey in tech and creativity online with everyone to see',
    'hero.excited': "I'm excited about...",
    'hero.excited1': 'building ai agents that surprise and delight people everywhere',
    'hero.excited2': 'turning data into tools, visuals, and magic for everyone',
    'hero.excited3':
      'chasing creative art sparks, sketching doodles, and imagining new designs everyday',
    'hero.excited4': 'engineering projects that make me say, "whoa, that\'s so cool!"',
    'hero.previously': 'Previously I...',
    'hero.prev1':
      'was a software engineer intern at ownr, building tools for entrepreneurs worldwide',
    'hero.prev2': 'was a software engineer intern at rbc, working on machine learning models',
    'hero.prev3':
      'was a ux design intern at meta hash capital, focusing on user experience in fintech',

    // Sections
    'section.howIStarted': 'How I Started',
    'section.howIStarted.text1':
      'i started coding the summer after 8th grade mostly out of curiosity. i wanted to understand how the apps i used every day actually worked, so i started building my own.',
    'section.howIStarted.text2':
      "early on, i built a simple app to help my immigrant parents convert their chinese money to canadian dollars. it wasn't fancy, but it solved a real problem and that's when it clicked for me, i could use tech to actually help people.",
    'section.howIStarted.text3':
      "i've always been the kind of person who wants to build things. as a kid, it was lego and cardboard contraptions. now it's robots, web apps, and tools that help others learn, create, or solve problems.",
    'section.howIStarted.text4':
      "since then, i've done freelance work, internships, launched side projects, and shared everything i've learned online. i've always wanted to build and create things that matter.",

    'section.unconventional': 'The Unconventional Ways I Get Things Done',
    'section.unconventional.text1':
      "i've always approached things unconventionally, and this mindset has consistently led me to many unique opportunities. growing up, i was an art kid at heart, but i found myself equally drawn to coding and engineering—blending creativity with technology in everything i do.",
    'section.unconventional.text2':
      'i started by intentionally building my presence on social media platforms, sharing my projects and insights publicly rather than relying on traditional networking. this unconventional approach directly led to my first internships, secured by leveraging platforms like x (twitter) to showcase my work and connect with industry professionals.',
    'section.unconventional.text3':
      "beyond internships, i love experimenting with new ways to reach people, whether that's through viral posts, creative side projects, or simply being open about my process and failures. ",
    'section.unconventional.text4':
      'i believe that being visible, authentic, and a little bit bold online can open doors that traditional paths might never reveal.',

    // Actions
    'action.open': 'OPEN',
    'action.close': 'CLOSE',
    'action.download': 'Download',
    'action.stop': 'Stop',

    'phrases.phrase1': 'i like to just ⌘ + C and ⌘ + V things',

    // Search
    'search.title': 'What else do you want to know about me?',
    'search.placeholder': 'Ask me anything',
    'search.thinking': 'Thinking',
    'search.responding': 'Responding',
    'search.shortcuts': 'Type "?" for shortcuts',

    // Draw page
    'draw.title': 'Draw Anything!',
    'draw.pageTitle': 'Draw',
    'draw.portfolioLink': 'View my art portfolio here',
    'draw.funFact': 'Fun fact:',
    'draw.funFactText':
      "I originally planned to pursue visual arts, but in grade 10, I realized it wasn't the right fit. That's when I discovered my passion and talent for programming.",
    'draw.story1':
      'Ever since I was a kid, drawing and making art has been a huge part of my life.',
    'draw.story2': "For over 13 years, it's been a constant source of inspiration and expression.",
    'draw.story3':
      'This blend of creativity and problem-solving is actually why Systems Design Engineering really appealed to me.',
    'draw.story4':
      "Even though I'm not in an art program anymore like I was in high school, I still love to make YouTube videos and create art.",
    'draw.story5': 'Because, in a way, engineering involves art every single day.',
    'draw.story6':
      "It's about elegantly solving problems and designing intuitive, functional, and aesthetically pleasing solutions.",
    'draw.story7':
      "It's always sparking new ideas and helping me to see the world from different perspectives.",
    'draw.story8':
      "That deep connection to creativity is why I've included this little canvas here.",
    'draw.story9':
      "It's a piece of my journey, inviting you to doodle, design, and create something alongside me!",

    // Contact
    'contact.title': 'A few ways to connect...',
    'contact.text':
      "> i'd love to hear from you! want to hire me? or simply wanna chat? feel free to reach out by email, or connect with me on linkedin. also check out my github!",

    // Links
    'links.blogPrompt': '> want to read my thoughts ->',
    'links.blogLink': 'writing',
    'links.artPrompt': '> interested in my creative work ->',
    'links.artLink': 'art',

    // Navigation
    'nav.home': 'Home',
    'nav.draw': 'Draw',
    'nav.blogs': 'writing',
    'nav.draw.title': 'Draw something!',
    'nav.blogs.title': 'Read my writing!',
    'nav.contact': 'Contact',
    'nav.linkedin': 'LinkedIn',
    'nav.github': 'GitHub',
    'nav.twitter': 'Twitter',

    // Language
    'language.label': 'Language:',

    // Blogs page
    'blogs.pageTitle': 'Writing',
    'blogs.description':
      'A collection of my thoughts, experiences, and reflections on life, growth, and learning.',
    'blogs.note': 'Note:',
    'blogs.noteText':
      'These articles were originally published on Medium and reflect my personal thoughts and experiences.',

    // Blog navigation
    'blog.back': 'back',
    'blog.contents': 'contents',
    'blog.git.title': 'git commands',
    'blog.git.date': 'nicholas chen · december 21, 2025 · 4 min read',
    'blog.coding.title': 'how i learned to code',
    'blog.coding.date': 'nicholas chen · december 26, 2025 · 5 min read',
    'blog.coding.intro': 'small learnings that taught me to code from start (top) to end (bottom)',
    'blog.coding.year2023': '2023',
    'blog.coding.year2024': '2024',
    'blog.coding.year2025': '2025',
    'blog.coding.year2026': '2026',
    'blog.coding.item1': '• built a hangman game in java',
    'blog.coding.item2':
      '• learned the basics of c++ from my computer science teacher in high school',
    'blog.coding.item3':
      "• joined my school's programming club and learned from better programmers",
    'blog.coding.item4': '• tried out competitive programming and did the ccc twice in c++',
    'blog.coding.item5': '• joined a group of other students and learned a lot building voluntrack',
    'blog.coding.item6': '• built my first gpt wrapper during an online hackathon with friends',
    'blog.coding.item7': '• made a student registration and mobile calculator app using kotlin',
    'blog.coding.item8': '• landed first software engineering internship at RBC in summer 2024',
    'blog.coding.item10': '• built an ML model on jupyter notebook using python, numpy and pandas',
    'blog.coding.item11': '• learned a lot of what i needed from geeks for geeks and w3schools',
    'blog.coding.item12':
      '• built some random projects with javascript, html and css for the first time',
    'blog.coding.item13': '• built another gpt wrapper at jamhacks',
    'blog.coding.item14': '• built a study buddy tool with friends at hack the valley',
    'blog.coding.item15': '• built a music boombox thing at uoft hacks',
    'blog.coding.item16': '• built the first version of my personal website',
    'blog.coding.item17': '• went to the university of waterloo for systems design engineering',
    'blog.coding.item18': '• learned intro to programming in c++ and built projects for school',
    'blog.coding.item19': '• built my resume in latex on overleaf',
    'blog.coding.item20': '• started to solve leetcode problems on a more regular basis',
    'blog.coding.item21': '• joined engineering design teams to learn how to code in organizations',
    'blog.coding.item22': '• joined ownr as a software engineer intern for the winter',
    'blog.coding.item23': '• learned about unit and integration tests',
    'blog.coding.item24': '• learned a lot of git commands including git cherry-pick',
    'blog.coding.item25': '• built a dependabot clone with a friend during my free time',
    'blog.coding.item26': '• built a trash sorter at hack the 6ix with rbc friends',
    'blog.coding.item27':
      '• worked in a production codebase developing internal tools for the team',
    'blog.coding.item28': '• learned typescript, next.js, vite and react and used postman a lot',
    'blog.coding.item29': '• messed around with postgres, sql and the debugger for the first time',
    'blog.coding.item30':
      '• got more familiar with the terminal and ai and used stack overflow still',
    'blog.coding.item31': '• won 2nd place by building a posture checking robot at utra hacks',
    'blog.coding.item32':
      '• took data structures and algorithms in c++ during second semester of uni',
    'blog.coding.item33':
      '• hopped on twitter where i learned a lot and met other cool cs students',
    'blog.coding.item34':
      '• started to take leetcode more serious and watched a ton of neetcode on yt',
    'blog.coding.item35': '• made an etl pipeline that processed customer feedback',
    'blog.coding.item36': '• built a discord summarizer bot using python for fun at 2am',
    'blog.coding.item37': '• used golang for the first time and built an image processor',
    'blog.coding.item38':
      '• made this facial recognition software for fun in python and typescript',
    'blog.coding.item39': '• tried learning haskell for the first time',
    'blog.coding.item40':
      '• built sql query parser with typescript and svelte for parsing flat json',
    'blog.coding.item42': '• landed a software engineering internship at textql for the fall',
    'blog.coding.item43': '• had to learn matlab for one of my uni courses during school',
    'blog.coding.item44': '• built a url shortener using golang and tailwind css hosted on railway',
    'blog.coding.item45': '• made a mini worse version of figma',
    'blog.coding.item46': '• did many takehomes and coding assignments',
    'blog.coding.item47': '• redesigned my entire personal website twice',
    'blog.coding.item48': '• coworker told me to start using iterm2 and i fell in love',
    'blog.coding.item49': '• used a lot of claude code, codex and cursor when programming',
    'blog.coding.item50': '• worked on the textql healthcare landing page',
    'blog.coding.item51': '• learned how to use the terminal better than before',
    'blog.coding.item52':
      '• worked at a startup and used a lot of go, python, typescript and svelte',
    'blog.coding.item53': '• worked on the ontology a lot at textql',
    'blog.coding.item54': '• did a lot of agentic and applied ai work',
    'blog.coding.item55': '• learned even more git commands including git bisect',
    'blog.coding.item56': '• broke prod at textql 4 times and learned how to debug and fix it',
    'blog.coding.item57': '• learned rust for the first time and built some random things',
    'blog.coding.item58': '• participated in a mercor ML model challenge with friend',
    'blog.coding.item59': '• did some benchmarking with web search apis for the first time',
    'blog.coding.item60': '• made a link route checker script',
    'blog.coding.item61': '• started learning some system design for programming',
    'blog.coding.item62': '• learned about grpc, wrote a blog on it',
    'blog.coding.item63': '• started contributing to open source projects like insforge',
    'blog.coding.item64':
      '• saw a cool website called uoftatlas.com and made a clone waterlooatlas',
    'blog.coding.item65':
      '• wrote a blog on my first engineering internship where i learned docker',
    'blog.coding.item66': '• updated sql query parser and learned about tokenization and AST',
    'blog.coding.item68': '• learned about vector embeddings during an interview',
    'blog.coding.item69': '• learned more about kubernetes from a blog',
    'blog.coding.item70': '• did 8 takehomes and learned a lot about pydantic',
    'blog.coding.item9': "• tried to make an interactive valentine's day website",
    'blog.coding.referencesTitle': 'references',
    'blog.ontology.title': 'why ontology for text-to-sql?',
    'blog.ontology.date': 'nicholas chen · november 21, 2025 · 10 min read',
    'blog.waterlooCoop.title': "my thoughts on waterloo's co-op program",
    'blog.waterlooCoop.date': 'nicholas chen · january 1, 2026 · 7 min read',
    'blog.waterlooCoop.note':
      'note: this is my experience from the engineering faculty co-op so content in this blog may differ from the other faculties including math, science, etc..',
    'blog.waterlooCoop.intro':
      "since studying at the university of waterloo, the most common thing i hear being talked about on campus is the school's co-op program. back in high school when i was still deciding between universities, the only school i really wanted to go to was waterloo for the sole reason that they had their own co-op program. i had heard many great things about the opportunities offered, the different countries you could work in and how all the students in every graduating class would always have jobs lined up because of the 2+ years of work experience that gave them that extra advantage. now after being in the co-op program for a bit longer than a year i want to give my thoughts on it and how it has changed me and helped me at the same time.",
    'blog.waterlooCoop.exploringTitle': 'exploring cities, careers, and chaotic living',
    'blog.waterlooCoop.exploringP1':
      'during your time in waterloo engineering you will experience a ton of things and one of those will be doing 6 co-ops in 5 years every 4 months that get you 2 years of real work experience. this experience is extremely valuable because not a lot of students get to work in real work environments where they are challenged and treated like adults at such a young age. due to the fact that waterloo does a 4 month study term and 4 month co-op term that rotate between the two, it allows you to explore different career paths, live in different cities and also jump between startups and larger companies.',
    'blog.waterlooCoop.exploringImg1Alt': 'New York City',
    'blog.waterlooCoop.exploringImg1Caption': 'the view of upper east side close to sunset time',
    'blog.waterlooCoop.exploringP2':
      "many students i've seen have been able to travel to san francisco, new york, seattle and more. many jobs, especially in tech can be found frequently in those places. landing a co-op job there gives you a chance to leave your hometown to work, eat, sleep and explore a new city on your own for 4 months. you will also go through the thrill of finding housing, trying to make new friends and live frugal but it's all a good learning experience at the end of the day. also from personally having done this for my most recent co-op term, i had a lot of fun, learned a lot and it was definitely a term i won't ever forget.",
    'blog.waterlooCoop.exploringImg2Alt': 'Living space',
    'blog.waterlooCoop.exploringImg2Caption':
      'the house i was living in during my time in new york',
    'blog.waterlooCoop.exploringP3':
      "due to the fact that co-op is every 4 months it's quite often that you see students jump company from company and this is where you learn the most about what you enjoy doing and the type of companies you truly want to work for. a lot of things become more clear the more you work in diverse environments and that eventually helps you choose the perfect place after graduating.",
    'blog.waterlooCoop.learningTitle': 'learning how to get a job',
    'blog.waterlooCoop.learningP1':
      "the nature of waterloo's co-op is already very competitive and when you are surrounded by top talent all fighting for the same few jobs it takes a bit of agency and some hard work to get a good job nowadays.",
    'blog.waterlooCoop.learningP2':
      "one special part about waterloo's co-op program is the network of alumni that give back internship opportunities to new students through the co-op portal. companies like tesla, snowflake, bloomberg and more all post job postings directly through the site. many fast growing startups will also be seen and chances are either the founders or engineers used to study at waterloo.",
    'blog.waterlooCoop.learningP3':
      "recruiting for my very first job back in the fall of 2024 was pretty stressful because although i was able to return back to an old company the feeling of me going back didn't feel good. i ended up applying to every job that i saw externally and through the school's portal. i sent cover letters for every single one and even tried to personalize my resume for each specific job posting. this became very tiring and i eventually stopped doing that. although i landed a few interviews, i wasn't so good at interviewing and my technical skills weren't too strong. i think i ended up with around 14 interviews total by the end of the term but i only had one offer of which i declined. i ended up joining a startup that was acquired by the company i had worked at the summer previously. i didn't get a job i truly wanted, but i learned a lot during the 4 months through job searching, interviewing and learning to stand out.",
    'blog.waterlooCoop.learningImgAlt': 'Recruiting process',
    'blog.waterlooCoop.learningImgCaption':
      'this was my 1a term stats for recruiting fall 2024: 570 applications, 14 interviews, 1 offer',
    'blog.waterlooCoop.learningP4':
      "fast forward to just a year later and i've learned to find jobs through other ways, one of them by posting on twitter and building in public. going on twitter in january of 2025 was the best thing i could've done to prepare me for the next recruiting season. during this time i also tried to do more hackathons, build more side projects and show them on twitter and linkedin. most waterloo students eventually adapt to this and begin finding opportunities on their own. you will see that most hackathons are filled with waterloo students as well as other competitions in general. everyone cold emails founders, posts on twitter and reaches out through linkedin. one thing i have noticed probably due to the co-op program is that waterloo students develop or tend to have high agency because that's the only way one can stand out in a crowd of talent.",
    'blog.waterlooCoop.learningP5':
      "this is also something i've learned throughout being in the program and after interviewing with many companies now in my third co-op search i've gotten much better at interviewing and my technical skills have improved quite a bit since last year.",
    'blog.waterlooCoop.employmentImgAlt': 'Employment statistics',
    'blog.waterlooCoop.employmentImgCaption': 'employment statistics for syde 1b',
    'blog.waterlooCoop.commitmentTitle': 'commitment issues',
    'blog.waterlooCoop.commitmentP1':
      'something i have noticed particularly only in waterloo students is that a lot of them including myself have commitment issues and i believe it stems from always looking for a job.',
    'blog.waterlooCoop.commitmentP2':
      "in engineering (stream 4) you are forced into recruiting within the first week of university so while everyone else at other universities is partying, side questing and making friends, you have to lock in and find a job. now since each term is only 4 months long the recruiting cycle comes back every 4 months and sometimes recruiters will post job postings even up to 10 months in advance so most people are recruiting all year round. even during the current co-op term you are already thinking about the next. this is something i talked to with a friend and he mentioned it as well on how most of us can't stay loyal to a company because of the fact we are constantly thinking about the next thing in our career.",
    'blog.waterlooCoop.commitmentP3':
      "on top of that because there are 6 terms and everyone at school constantly reminds us to try new things it's hard to go back and a lot of people including me all agree on the fact that we would never do a co-op at the same company twice due to lack of gaining more experience.",
    'blog.waterlooCoop.commitmentImgAlt': 'Learning curve over time',
    'blog.waterlooCoop.commitmentImgCaption':
      'graph to show amount of learning happening over time at a company',
    'blog.waterlooCoop.salariesTitle': 'salaries and total compensation',
    'blog.waterlooCoop.salariesP1':
      "money is also a concern for a lot of us because that's why everyone is here. everyone has heard about how the co-op program earnings basically shave off all your tuition money so university is basically free.",
    'blog.waterlooCoop.salariesP2':
      'total compensation (tc) is usually the base pay + housing stipend + relocation. in canada, you\'re looking at anywhere from $25 to $50 cad/hour. big banks and local startups usually sit on the lower end, while companies like shopify or amazon (toronto) pay towards the top. the real jump happens when you "cali or bust," a term coined by waterloo students when someone must go to california for a co-op. us internships pay in usd, and the conversion alone makes you feel rich. big tech in sf or nyc usually pays $50 to $90 usd/hour. once you add a $3k–$5k monthly housing stipend, your effective monthly tc can easily hit $10k–$15k usd. it\'s honestly life-changing money for someone in their twenties.',
    'blog.waterlooCoop.salariesP3':
      'i think this is also something that was developed from my parents and the people around me but making a lot of money seemed to matter and as a result i spent a lot of time on',
    'blog.waterlooCoop.salariesImgAlt': 'levels.fyi salary data',
    'blog.waterlooCoop.salariesImgCaption':
      'levels.fyi salary data for software engineer intern positions at ramp in new york',
    'blog.waterlooCoop.prestigeTitle': 'status symbols and the prestige ladder',
    'blog.waterlooCoop.prestigeP1':
      'the obsession with prestige at waterloo is everywhere and creates a strict ranking where a student\'s value is tied to the company name on their linkedin profile. from the first semester, the "cali or bust" mentality takes over the culture. landing a role at google, meta, or a quant firm like jane street makes a student highly respected, while other jobs are often seen as not as good. on one side of this split is the "comfortable" big tech path, defined by big signing bonuses, nice perks, and a work-life balance that lets you move up in your career because of the company name.',
    'blog.waterlooCoop.prestigeP2':
      'on the other hand, some students go for "more control" within the startup world, often working a 996 schedule from 9am to 9pm six days a week. they focus on quickly building important features over personal time. this split creates an unhealthy environment where everyone compares themselves and students subtly compete by showing off their total compensation and sometimes keep interview materials secret. in the end, the culture often cares more about how a job looks and its benefits than the actual work itself.',
    'blog.waterlooCoop.prestigeImgAlt': 'Tech company logos',
    'blog.waterlooCoop.prestigeImgCaption':
      'major tech companies that waterloo students aspire to work for (MANGO)',
    'blog.waterlooCoop.miscTitle': 'miscellaneous things',
    'blog.waterlooCoop.miscUnemploymentTitle': 'unemployment & alternatives',
    'blog.waterlooCoop.miscUnemployment':
      "not everyone gets a job every term, especially with how the market is right now. if you don't end up getting one, there's we accelerate, which is basically a project-based backup for first years to get some credits and skills so the term isn't a total waste. a lot of people also pour their time into design teams. honestly, spending a term working hard on waterloo rocketry or formula sae can sometimes teach you more than a corporate internship would anyway, and it looks great on a resume.",
    'blog.waterlooCoop.miscEvalsTitle': 'evals & ratings',
    'blog.waterlooCoop.miscEvals':
      "at the end of every term, your boss gives you a rating—anything from satisfactory to outstanding. it's kind of stressful because these ratings stay on your co-op record forever. future employers see them when you apply through waterlooworks, so you're always performing to make sure you don't end up with a \"marginal\" that ruins your next search. also because so many waterloo students are tryhards the average rating is an excellent which is the second highest just under outstanding due to the fact that the employer must write an entire paragraph explaining why the intern should get that rating.",
    'blog.waterlooCoop.miscPDTitle': 'pd courses',
    'blog.waterlooCoop.miscPD':
      'everyone at waterloo hates pd courses. they\'re these mandatory online modules you have to do while you\'re working full-time. it\'s usually stuff like "how to write an email" or "workplace ethics." they feel like a massive chore when you just want to focus on your job, but you have to pass them to get that co-op designation on your degree.',
    'blog.waterlooCoop.miscVisasTitle': 'visas and the border',
    'blog.waterlooCoop.miscVisas':
      "if you land a job in the us, you have to deal with the whole j-1 visa mess or if you're canadian maybe even a TN. it's a lot of paperwork, sevis fees, and waiting for ds-2019 forms to arrive in the mail. you basically become a part-time immigration lawyer for a month. then there's the stress of crossing the border and hoping the officer doesn't have a bad day. it's a lot of \"legal border stuff\" just to go work in the states for four months, but the hassle is definitely worth it for the experience.",
    'blog.waterlooCoop.conclusionTitle': 'conclusion',
    'blog.waterlooCoop.conclusionP1':
      'overall, the waterloo co-op program is a trade-off. you get a massive head start on your career, financial independence, and the chance to live in new cities every four months. it forces you to grow up fast and learn how to work in the professional world before you even graduate.',
    'blog.waterlooCoop.conclusionP2':
      'however, the system also creates a lot of pressure. the constant cycle of recruiting and the obsession with prestige can make it feel like you are always behind. it is easy to focus only on the money and the brand names instead of the actual learning. the program is not perfect, but the experience is unique. even with the constant comparison and the stress of the job search, the technical skills and ability to take action you develop make the process worth it.',

    // First Internship blog content
    'blog.firstInternship.title': 'reflecting on my first engineering internship',
    'blog.firstInternship.date': 'nicholas chen · august 5, 2025 · 5 min read',
    'blog.firstInternship.intro':
      "this winter, i had my very first real co-op experience as a software engineer intern at ownr. i made a lot of mistakes and learned a lot as well. looking back now just a year ago got me thinking about how far i've come so i wanted to write about this experience because it taught me more about software engineering and the corporate life than i ever would've learned.",
    'blog.firstInternship.howGotTitle': 'how i got this internship',
    'blog.firstInternship.howGotText1':
      "last summer, i applied to rbc's summer tech labs program for high schoolers who were interested in engineering and wanted to get ahead and start working before university and had a great time and made many friends. when the recruiting season came around for the first time in the first semester of waterloo, i eventually ended up taking a return offer to work in rbc's ventures sector, where all the startups that they've acquired over the past few years live.",
    'blog.firstInternship.howGotText2':
      'a vivid memory i had from my first day was meeting my manager and the entire team at 9:30am and immediately getting to work. i set up my computer and started diving into the company codebase, feeling both excited and overwhelmed by what was to come.',
    'blog.firstInternship.mistakesTitle': 'mistakes and lessons learned',
    'blog.firstInternship.mistakesIntro':
      'throughout my term i learned a lot from making many mistakes especially since this was my first real internship. here are some of the more important ones:',
    'blog.firstInternship.mistake1': 'asking too many "dumb" questions',
    'blog.firstInternship.mistake2': 'not having high agency',
    'blog.firstInternship.mistake3':
      'not taking time and trying to problem solve alone before asking for help',
    'blog.firstInternship.mistake4': 'not interacting with my other co-workers enough',
    'blog.firstInternship.mistakesLearning':
      'throughout the term, i learned a huge amount just from the mistakes i made, especially since this was my first real internship. one of the biggest hurdles was asking too many "dumb" questions and generally not having enough agency. whenever i hit a wall, my instinct was to immediately ask for help instead of taking the time to really struggle and problem solve alone. i realized later that asking for help too early wasn\'t just distracting for the team, but it was robbing me of the chance to actually figure it out myself.',
    'blog.firstInternship.mistakesCoWorkers':
      'i also really regretted not interacting with my co-workers enough. i was so focused on the work and trying to prove myself that i often isolated myself at my desk. i missed out on the social aspect like grabbing lunch or just chatting in the hallway which i now realize is huge. it made the term feel a lot more isolating than it needed to be, and i missed out on learning from their experiences outside of just the technical stuff.',
    'blog.firstInternship.goodTitle': 'things i believe i did well:',
    'blog.firstInternship.good1': 'connected with my manager and communicated with him frequently',
    'blog.firstInternship.good2': 'learned how to code and debug without ai',
    'blog.firstInternship.aiEmphasis':
      "i want to highlight this specifically because growing up alongside ai tools has changed the way i do many things compared to my older friends and family. they have been a huge part of my workflow since high school, so learning to code and debug without them felt like i was going back in time and relearning everything all over again. i remember reading mdn web docs, stack overflow and even looking at documentation for some programming languages. me right now probably would've laughed because since then ai has become so good most of those websites and resources are considered ancient nowadays.",
    'blog.firstInternship.codingWithoutAiTitle': 'coding and debugging without ai',
    'blog.firstInternship.workExperienceTitle': 'working at ownr',
    'blog.firstInternship.codingWithoutAiText1':
      "due to strict restrictions on my rbc laptop, i wasn't allowed to use external ai tools, youtube, or most documentation sites. the only ai tool available was copilot in vscode, which was far from ideal.",
    'blog.firstInternship.codingWithoutAiText2':
      "debugging with copilot was frustrating. i'd ask it questions about the codebase or request it to index certain files, but it would return fabricated information or make things up entirely. after repeatedly trying to prompt it correctly, i often gave up and debugged manually instead. this forced me to learn new languages, frameworks and work manually which sounds funny because now ai can just do it. i remember console logging everything and using the debugger for the first time.",
    'blog.firstInternship.codingWithoutAiText3':
      "i primarily worked on internal tools for ownr's admin team, using nestjs, typescript, and express.js. i also learned how to work with postgres, redis, and got hands-on experience with docker and ci/cd pipelines.",
    'blog.firstInternship.debuggerTitle': 'the debugger',
    'blog.firstInternship.debuggerText':
      "the debugger was a game-changer. i remember debugging a tricky bug where data was being sent with the wrong type. the debugger allowed me to set breakpoints and step through the code, watching each input and output in the sidebar as i progressed. it was the first time i truly understood how powerful proper debugging tools could be. i found myself constantly on stack overflow trying to sus out which solutions were the correct fix for my specific errors since copilot couldn't help with these issues. i also spent two full weeks fixing and resolving dependencies across multiple repositories. those two weeks felt like an endless chase down stack overflow rabbit holes.",
    'blog.firstInternship.environmentTitle': 'the work environment',
    'blog.firstInternship.environmentText':
      'aside from the work itself, i loved the environment. it had that sort of startup energy—fast-paced and dynamic. most of the team dressed casually, with rarely anyone in suits or formal wear. despite the relaxed dress code, everyone was incredibly professional. the office itself felt like something out of a corporate movie: a 30-floor building with elevators, key card access, meeting rooms everywhere, and large desks with dual monitors.',
    'blog.firstInternship.reflectionsTitle': 'reflections',
    'blog.firstInternship.reflectionsText1':
      "there were many times when i asked questions that i could have answered myself, or when i was so focused on work that i didn't take breaks or eat lunch with my co-workers. this made the term feel slower and less engaging than it could have been.",
    'blog.firstInternship.reflectionsText2':
      "my manager was tough on me and intentionally pushed me to struggle because he knew that's where the real learning happens. looking back, he was one of the main reasons i learned so much, and i'm incredibly grateful. over time, we bonded and talked about internships, finding co-op jobs, and interview prep. leetcode came up often, and he gave me valuable advice. he was one of the best engineers i've ever met, and our whole team respected him.",
    'blog.firstInternship.managerTitle': 'my manager',
    'blog.firstInternship.managerText':
      "my manager was intentionally tough on me. he loved seeing me struggle because he knew that's where the deepest learning happens. he was one of the main reasons i learned so much, and i'm incredibly grateful for his mentorship and his belief in me. a manager can be the reason for a make or break internship so i'm glad i got a good one. over time, we bonded over conversations about internships, finding co-op jobs, and interview prep. he talked to me about leetcode and how it was a frequent topic when he was in university too. he was one of the best engineers i've ever met, and the entire team held him in high regard.",
    'blog.firstInternship.conclusionTitle': 'conclusion',
    'blog.firstInternship.conclusionText':
      "overall, this internship was super fun and i learned a lot during the four months. still, i wish i had done more and pushed myself further. this experience taught me that growth happens when you step outside your comfort zone, and i'm grateful for every mistake and lesson learned.",

    // Git blog content
    'blog.git.intro':
      "through various work experiences and side projects, i've picked up a lot of git commands that have saved my life more than once. i wanted to create a central place to store all these commands for easy reference.",
    'blog.git.mentalModelTitle': 'mental model',
    'blog.git.mentalModelText':
      'git is a distributed version control system (local). github is a hosting platform (online). most of us memorize commands without understanding the graph model underneath.',

    // Ontology blog content
    'blog.ontology.whatIsTitle': 'what is an ontology?',
    'blog.ontology.whatIsP1':
      'you may have heard of the term "ontology" before, either used by palantir folks or others, but it\'s something that among many people are not familiar with and was something i also learned a few months ago when i started working at textql. more recently, i actually had the chance to work on the ontology and explore more about how it works with our product and how to make it easier for customers to use. there are many different types of ontologies but in this article i want to focus on the one that formally defines data and why we use it for text-to-sql queries.',
    'blog.ontology.whatIsP2':
      "the google definition of an ontology is: a set of concepts and categories in a subject area or domain that shows their properties and the relations between them. if that doesn't make sense basically a fancy word for making a map of everything and how they connect to each other.",
    'blog.ontology.mapAlt': 'A map showing how objects connect in an ontology',
    'blog.ontology.whatIsP3':
      'an ontology consists of entities, attributes, relationships, metrics and business rules. each of these are crucial for building a well-structured ontology. an entity is essentially an object that you can think of as a "thing" that your business cares about. while not required, entities often have a primary key that prevents double-counting and enables proper aggregation. each of these objects hold attributes which are like characteristics that describe the object. then there\'s relationships that basically connect each of these objects based on how they are related. these relationships work through joins - when entities share common fields that can be matched together, creating connections like one-to-many or many-to-many. for metrics, these are defined across multiple objects and can be done through a calculation of some sort. lastly, there are business rules that just define how your business operates and the meaning of specific terms or phrases.',
    'blog.ontology.simpleExampleTitle': 'a simple example',
    'blog.ontology.simpleExampleP1':
      'here\'s a simple example using customers. a customer is someone who buys from your business. they have basic information like their name, email, and when they signed up. customers connect to other things in your business through joins: they place orders, contact support, and sometimes refer friends. you can measure things about customers like how much they\'ve spent total or how often they buy. finally, you set rules that define what certain terms mean, like "active customer" means someone who bought something in the last 90 days, or "vip customer" means someone who has spent over $5,000. all these pieces work together to give you a complete picture of what a customer means to your business through an ontology object.',
    'blog.ontology.whyMatterTitle': 'why ontologies matter for text-to-sql',
    'blog.ontology.whyMatterP1':
      "if you're curious as to why this is useful for text-to-sql queries, there are many upsides to having an ontology when queries many databases especially when they are enterprise size.",
    'blog.ontology.whyMatterP2':
      'when data analysts are writing complex queries these queries must be defined through the use of joins and company specific business logic. this wastes a lot of time as a lot of SQL is repeated and overcomplicated. with an ontology layer, you can abstract away this complexity by defining business entities, relationships, and metrics once. instead of every analyst needing to remember that "active customers" means users who made a purchase in the last 90 days and requires joining the users table with the orders table filtered by date, the ontology captures this definition centrally. this means when someone asks "show me revenue by active customer segment," the system already knows important information such as:',
    'blog.ontology.whyMatterLi1': 'which tables to join',
    'blog.ontology.whyMatterLi2': 'what filters to apply',
    'blog.ontology.whyMatterLi3': 'how to calculate the metric correctly',
    'blog.ontology.whyMatterLi4': 'what the proper grain of analysis should be',
    'blog.ontology.graphsAlt':
      'Graphs showing the comparison between ontology vs non-ontology sql queries',
    'blog.ontology.whyMatterP3':
      'this means consistency across the organization, faster query generation, easier maintenance, lower barrier to entry, governance and security. essentially, the ontology becomes a semantic layer that translates between how humans think about the business and how data is actually stored in tables. it captures institutional knowledge about the data that would otherwise live in documentation, tribal knowledge, or the heads of senior analysts.',
    'blog.ontology.whyMatterP4':
      'ontologies can also improve performance. a well-designed ontology might define a metric using a pre-aggregated table instead of scanning raw data. it might know to use an indexed column for joins. it captures optimization knowledge that would otherwise require manual query tuning.',
    'blog.ontology.buildingTitle': 'building an ontology from scratch',
    'blog.ontology.buildingP1':
      'now that you understand the basics of what an ontology is and why large organizations may want to use one, learning how to build an ontology is just as important.',
    'blog.ontology.addingObjectsAlt': 'Creating an object or link in ontology',
    'blog.ontology.buildingP2':
      "when building an ontology, you begin with your core entities - the things your business literally cannot function without. for an e-commerce company, that's customers, orders, and products. for a saas company, it's users, subscriptions, and usage events. identify maybe 3-5 critical entities and define them thoroughly: their attributes, their primary keys, and the most important relationships between them.",
    'blog.ontology.buildingP3':
      "when choosing a primary key, pick a stable identifier that doesn't change over time, usually an id field like customer_id rather than something like email that might change. this determines the grain of your entity and prevents double-counting when you aggregate metrics. without a proper primary key, you risk counting the same customer twice or splitting their history across multiple identities.",
    'blog.ontology.buildingP4':
      'for relationships, focus on connections that represent real business flows and answer common questions. if people frequently ask "show me revenue by customer segment," you need a clear path from orders to customers. start with the relationships that enable your most important analyses rather than trying to map every possible connection upfront.',
    'blog.ontology.buildingP5':
      'then add the metrics that people ask about every single day. "what\'s our revenue?" "how many active users do we have?" "what\'s our conversion rate?" these are the questions that get asked in every morning meeting. define these once in the ontology with the correct business logic, and suddenly dozens of repeated queries become obsolete.',
    'blog.ontology.buildingP6':
      'the key is to prove value quickly. if you spend six months building a comprehensive ontology before anyone can use it, you\'ll lose organizational buy-in. but if you can show that three weeks of work eliminated the confusion around "active customers" and made that metric consistent across all reports, suddenly people want more entities in the ontology.',
    'blog.ontology.attrsAlt': 'Creating attributes and editing object properties',
    'blog.ontology.goodEnoughTitle': 'when is an ontology "good enough"?',
    'blog.ontology.goodEnoughP1':
      "an ontology is never complete. there will always be edge cases, niche metrics, and one-off analyses that don't fit neatly into your defined entities and relationships. the goal isn't perfection - it's coverage of the common cases. if your ontology handles 80% of the questions people ask, that's a massive win. the remaining 20% can still be handled with custom sql or ad-hoc analysis.",
    'blog.ontology.goodEnoughP2': 'you know your ontology is "good enough" when:',
    'blog.ontology.goodEnoughLi1':
      'new analysts can answer common questions without asking for help',
    'blog.ontology.goodEnoughLi2':
      'the same metrics stop appearing with different values in different reports',
    'blog.ontology.goodEnoughLi3':
      'people start asking "is this in the ontology?" before writing custom queries',
    'blog.ontology.goodEnoughLi4': "you're spending more time using the ontology than building it",
    'blog.ontology.howEnginesTitle': 'how text-to-sql engines use ontologies',
    'blog.ontology.howEnginesP1':
      'when you ask "show me revenue by customer segment," the text-to-sql engine goes through several steps using the ontology.',
    'blog.ontology.howEnginesP2':
      'first, it identifies the entities and metrics you\'re asking about. "revenue" maps to a defined metric in the ontology. "customer segment" maps to an attribute of the customer entity.',
    'blog.ontology.howEnginesP3':
      "next, it looks up the metric definition. the ontology says revenue is calculated as sum(orders.total_amount) where orders.status = 'completed'. it also knows that revenue is associated with the orders entity.",
    'blog.ontology.howEnginesP4':
      'then it determines the necessary joins. you asked for revenue by customer segment, so the engine needs to connect orders to customers. the ontology defines this relationship: orders.customer_id = customers.id. it knows this is a many-to-one relationship (many orders per customer).',
    'blog.ontology.howEnginesP5':
      'finally, it applies any business rules. maybe the ontology specifies that revenue calculations should exclude refunds, or that only orders from the last 12 months count. these rules get automatically incorporated into the generated sql. the result is a query that would take a human analyst 10 minutes to write (and possibly get wrong), generated correctly in seconds.',
    'blog.ontology.chatAlt': 'Querying a test database with Ana using the text-to-sql feature',
    'blog.ontology.howUsedTitle': 'how an ontology is used',
    'blog.ontology.howUsedP1':
      'when a data analyst or an ai agent asks something like "show me revenue by customer segment," the system loads the ontology, parses the question into entities and metrics, then looks up the definitions. it finds which tables to join, which columns to use, and what filters or business rules to apply. the agent does not guess—it follows the ontology. that\'s why the same question always yields the same, consistent sql. the ontology is the contract between how humans think about the business and how the database is actually queried.',
    'blog.ontology.inCodeTitle': 'what the ontology looks like in code',
    'blog.ontology.inCodeP1':
      'under the hood, an ontology is usually stored as structured data—often a json file or similar—that defines entities, their attributes, relationships, and metrics. the ui you use to build it (drag-and-drop objects, forms for attributes) is just a layer on top: when you save, the system serializes your graph into something like the snippet below. this file gets versioned, deployed, and loaded at runtime by the text-to-sql engine or any agent that needs to answer questions against your data.',
    'blog.ontology.jsonExampleCaption': 'example ontology structure (simplified json): entities, relationships, and a metric.',
    'blog.ontology.ambiguityTitle': 'handling ambiguity',
    'blog.ontology.ambiguityP1':
      'ambiguous questions are where ontologies really shine. if you ask "show me sales," that could mean the sales team (entity), sales transactions (orders entity), sales revenue (metric), or sales count (different metric). without an ontology, the system has to guess. with an ontology, it can recognize that "sales" is ambiguous, check which interpretation makes sense in context, ask for clarification if needed ("did you mean sales revenue or number of sales?"), and use the most common interpretation based on usage patterns.',
    'blog.ontology.ambiguityP2':
      'the ontology also helps with synonyms. "customers," "clients," "accounts," and "buyers" might all map to the same customer entity.',
    'blog.ontology.vsOtherTitle': 'ontologies vs other approaches',
    'blog.ontology.vsOther.dbtTitle': 'dbt models:',
    'blog.ontology.vsOther.dbtText':
      'dbt models and ontologies solve different problems. dbt transforms raw data into clean tables. an ontology sits on top of those tables and defines what they mean: which table represents customers, how customers relate to orders, and how to optimize queries. you can use both together: dbt produces tables, ontologies produce understanding.',
    'blog.ontology.vsOther.biTitle': 'bi semantic layers:',
    'blog.ontology.vsOther.biText':
      'tools like looker and tableau have their own semantic layers. looker has lookml, tableau has data sources with relationships. these serve similar purposes to ontologies - they define metrics, relationships, and business logic. the difference is scope and flexibility. traditional bi semantic layers are tightly coupled to their visualization tools. the definitions you create in looker only work in looker. if you want to use the same logic in python, or in a different bi tool, or in an automated pipeline, you\'re out of luck. an ontology is tool-agnostic. it\'s a central definition layer that can power text-to-sql queries, bi tools, python analysis, automated reports, and custom applications. you define "active customers" once, and it works everywhere.',
    'blog.ontology.vsOther.viewsTitle': 'views and stored procedures:',
    'blog.ontology.vsOther.viewsText':
      "views and stored procedures can encapsulate business logic, so why do you need an ontology? first, discoverability. if you have 500 views in your database, how do you know which one to use? an ontology provides a structured catalog with relationships and documentation. second, relationships. a view gives you a table, but it doesn't tell you how that table relates to other tables. an ontology explicitly defines these connections, enabling automatic join generation. third, natural language. you can't ask a view \"show me revenue by customer segment\" in plain english. you need to know the view exists, what it's called, and how to query it. an ontology enables natural language interfaces. views are a technical solution for code reuse. ontologies are a semantic solution for shared understanding.",
    'blog.ontology.sourcesAlt': 'Different tools comparing ontologies vs other methods',
    'blog.ontology.futureTitle': 'the future for ontologies',
    'blog.ontology.futureP1':
      'with the rise of llms, ontologies are actually going to be more valuable than ever. ai models are great at understanding natural language but terrible at knowing your specific business logic. gpt-5 doesn\'t know that your company defines "active customers" as 90-day activity, or that revenue should exclude certain transaction types, or that the customer table joins to orders via a specific foreign key. the ontology provides this context. it\'s the bridge between the llm\'s language understanding and your company\'s data reality. the llm handles the "what is the user asking?" part, the ontology handles the "how do we actually calculate that?" part. as llm models get better, ontologies become the key differentiator in how efficient and accurate users can query their large databases.',
    'blog.ontology.futureP2':
      'imagine an ontology that evolves based on how people use it. when analysts repeatedly write similar custom queries, the system suggests adding those patterns to the ontology. when a metric definition gets manually overridden frequently, the system flags it for review. this is already starting to happen. systems can track which entities are queried together frequently and suggest adding explicit relationships. they can identify common calculated fields and propose promoting them to official metrics.',
    'blog.ontology.futureP3':
      "as data landscapes grow more complex - more sources, more tables, more tools, more users - the need for ontologies increases exponentially. without an ontology, complexity scales badly. every new data source requires everyone to learn new table structures. every new analyst needs to be trained on all the business logic. every new tool needs custom integration. with an ontology, complexity scales linearly. new data sources get mapped to existing entities. new analysts learn the ontology once. new tools integrate with the ontology layer. the future of data isn't less complex - it's more complex but better organized. ontologies are how we manage that complexity without drowning in it.",
    'blog.ontology.referencesTitle': 'references',
    'blog.ontology.references.builtin': 'builtin.com/data-science/ontology',
    'blog.ontology.references.palantir': 'blog.palantir.com - ontology finding meaning in data',
    'blog.ontology.references.palantirDocs': 'palantir.com/docs/foundry/ontology/overview',
    'blog.ontology.references.textql': 'docs.textql.com - ontology overview',
    'blog.ontology.note': 'note: all images in the original article were generated or taken from',

    // Sample prompts
    prompt1: 'Tell me about your experience at Ownr',
    prompt2: 'What projects have you worked on?',

    // Money making
    'moneyMaking.text':
      "I've done pretty much everything you can think of that a teenager can do to make money: tutoring, working fast food jobs, selling things, shoveling the snow off neighbour's driveways, internships, freelance work in design and coding as well as brand deals from social media.",

    // Projects section
    'projects.title': 'projects',
    'projects.languagesSectionTitle': "A few programming languages I've worked with...",
    'projects.languagesTitle': "programming languages i've worked with",
    'projects.golang': 'golang',
    'projects.python': 'python',
    'projects.typescript': 'typescript',
    'projects.and': 'and',
    'projects.tiktokPredictor': 'ML model that predicts tiktok view counts',
    'projects.neoDiscordBot': 'discord bot that summarizes messages for you',
    'projects.facialRecognition':
      'deep learning CNN model for face identification and verification',
    'projects.sqlParser': 'parser that can query flat JSON objects',
    'projects.whiteboard': 'app to brainstorm, create and share ideas',
    'projects.dependabot': "app with 200+ users that's easier to use than github's dependabot",
    'projects.fernando': 'posture checker robot that won 2nd place at utra hacks',

    // Projects list labels (home page)
    'projects.label.tiktok': 'tiktok view predictor',
    'projects.label.sqlParser': 'sql query parser',
    'projects.label.fernando': 'fernando',
    'projects.label.facialRecognition': 'facial recognition',
    'projects.label.agentSearchEvals': 'agent search evals',

    // Home hero title
    'home.title': 'hi im nic',

    // Excited section
    'excited.title': "I'm excited about...",
    'excited.item1': 'building ai agents that surprise and delight people everywhere',
    'excited.item2': 'turning data into tools, visuals, and magic for everyone',
    'excited.item3':
      'chasing creative art sparks, sketching doodles, and imagining new designs everyday',
    'excited.item4': 'engineering projects that make me say, "whoa, that\'s so cool!"',

    // Previously section
    'previously.title': 'previously',
    'previously.role1': 'engineering',
    'previously.role2': 'engineering',
    'previously.role3': 'engineering',
    'previously.item1': 'ownr',
    'previously.item2': 'rbc',
    'previously.item3': 'insforge',

    // Current roles (compact labels)
    'current.role1': 'engineering',
    'current.role2': 'engineering',

    // Footer
    'footer.copyright': '© 2025 NICHOLAS CHEN',
    'footer.by': 'BY NICHOLAS®',

    // Additional info
    'info.favouriteShow': '> favourite show -> one punch man',

    // Blog git content
    'blog.git.coreConceptsTitle': 'core concepts',
    'blog.git.coreConcepts.snapshotsTitle': 'snapshots, not diffs',
    'blog.git.coreConcepts.snapshotsText':
      "git stores a full snapshot of your project with every commit, not just the differences. if a file hasn't changed, it stores a pointer to the previous version.",
    'blog.git.coreConcepts.threeTreesTitle': 'the three trees',
    'blog.git.coreConcepts.threeTrees.working': 'working directory: files you see/edit.',
    'blog.git.coreConcepts.threeTrees.staging': 'staging area (index): changes ready for commit.',
    'blog.git.coreConcepts.threeTrees.head': 'HEAD: pointer to the last commit.',
    'blog.git.setupTitle': 'setup & config',
    'blog.git.setup.configUserName': 'set your username for commits.',
    'blog.git.setup.configUserEmail': 'set your email for commits.',
    'blog.git.setup.configColor': 'enable helpful color output.',
    'blog.git.setup.configList': 'show all configuration settings.',
    'blog.git.setup.alias': "create a shortcut: type 'git co' instead of 'git checkout'.",
    'blog.git.setup.editor': 'set vs code as default editor for commit messages.',
    'blog.git.gettingTitle': 'getting & creating projects',
    'blog.git.getting.init': 'initialize a new repo in current directory.',
    'blog.git.getting.clone': 'download a repo and its entire history.',
    'blog.git.getting.cloneDepth': 'shallow clone (latest snapshot only, faster).',
    'blog.git.basicTitle': 'basic snapshotting',
    'blog.git.basic.amendNoEdit': 'add staged changes to last commit without changing message.',
    'blog.git.basic.status': 'show modified, staged, and untracked files.',
    'blog.git.basic.addFile': 'stage a specific file for the next commit.',
    'blog.git.basic.addAll': 'stage all changes in current directory.',
    'blog.git.basic.addPatch': 'interactively choose chunks of code to stage.',
    'blog.git.basic.commitMsg': 'save staged changes as a new snapshot.',
    'blog.git.basic.commitAm': 'stage tracked files and commit in one step.',
    'blog.git.basic.rm': 'remove a file from working tree and index.',
    'blog.git.basic.mv': 'move or rename a file.',
    'blog.git.branchingTitle': 'branching & merging',
    'blog.git.branching.switchDash': 'quickly switch back to the previous branch.',
    'blog.git.branching.merged': 'list branches already merged into current.',
    'blog.git.branching.mergeBase': 'find the common ancestor of two branches.',
    'blog.git.branching.branch': 'list all local branches.',
    'blog.git.branching.branchName': 'create a new branch (pointer).',
    'blog.git.branching.branchD': 'delete a merged branch safely.',
    'blog.git.branching.branchDForce': 'force delete a branch (even if unmerged).',
    'blog.git.branching.switchName': 'switch to a branch.',
    'blog.git.branching.switchC': 'create and switch to a new branch.',
    'blog.git.branching.merge': 'combine history of another branch into current.',
    'blog.git.branching.mergeAbort': 'cancel a merge in progress and return to pre-merge state.',
    'blog.git.branching.tag': 'mark the current commit with a tag.',
    'blog.git.branching.tagA': 'create an annotated tag with metadata.',
    'blog.git.sharingTitle': 'sharing & updating',
    'blog.git.sharing.remoteRename': 'rename a remote connection.',
    'blog.git.sharing.pushDelete': 'delete a remote branch.',
    'blog.git.sharing.remoteV': 'list all remote repositories.',
    'blog.git.sharing.remoteAdd': 'connect local repo to a remote one.',
    'blog.git.sharing.remoteSetUrl': 'change the url of an existing remote.',
    'blog.git.sharing.fetch': "download changes from remote but don't merge.",
    'blog.git.sharing.fetchPrune': 'delete local refs to remote branches that were deleted.',
    'blog.git.sharing.pull': 'fetch + merge (update current branch).',
    'blog.git.sharing.push': 'upload local commits to remote.',
    'blog.git.sharing.pushU': 'push and set upstream tracking.',
    'blog.git.sharing.pushForceLease': 'safer force push; fails if someone else pushed.',
    'blog.git.sharing.pushTags': 'push all local tags to remote.',
    'blog.git.inspectionTitle': 'inspection & comparison',
    'blog.git.inspection.logS': 'search history for the first occurrence of a string.',
    'blog.git.inspection.logAuthor': 'filter commit history by author.',
    'blog.git.inspection.logSince': 'show commits from a specific timeframe.',
    'blog.git.inspection.log': 'show commit history.',
    'blog.git.inspection.logOneline': 'visualize commit history graph compactly.',
    'blog.git.inspection.shortlog': 'show summary of commits by author.',
    'blog.git.inspection.diff': 'show unstaged changes.',
    'blog.git.inspection.diffStaged': 'show staged changes (what will be committed).',
    'blog.git.inspection.diffWord': 'highlight changed words instead of whole lines.',
    'blog.git.inspection.show': 'show changes and metadata for a specific commit.',
    'blog.git.inspection.blame': 'show who modified each line of a file.',
    'blog.git.inspection.blameL': 'blame only lines 10 through 20.',
    'blog.git.inspection.grep': 'search for text inside tracked files.',
    'blog.git.undoTitle': 'undo & fix',
    'blog.git.undo.checkoutHash': 'restore a file to a specific past version.',
    'blog.git.undo.updateRef': 'effectively "un-initialize" the first commit of a repo.',
    'blog.git.undo.resetSoft': 'undo last commit but keep changes staged.',
    'blog.git.undo.resetHard': 'undo last commit and discard all changes (dangerous).',
    'blog.git.undo.revert': 'create new commit that reverses a previous one.',
    'blog.git.undo.restore': 'discard local changes in a file.',
    'blog.git.undo.restoreStaged': 'unstage a file (keep changes in working directory).',
    'blog.git.undo.commitAmend': 'add staged changes to previous commit / edit message.',
    'blog.git.advancedTitle': 'advanced & power tools',
    'blog.git.advanced.rebaseI': 'interactively rewrite history: squash, fixup, reorder, or drop.',
    'blog.git.advanced.rebase': 'reapply commits on top of another base tip.',
    'blog.git.advanced.stash': 'temporarily shelve dirty changes.',
    'blog.git.advanced.stashPop': 'reapply stashed changes and remove from stash list.',
    'blog.git.advanced.stashList': 'list all stashed changesets.',
    'blog.git.advanced.stashU': 'stash including untracked files.',
    'blog.git.advanced.bisectStart':
      'start binary search to find the commit that introduced a bug.',
    'blog.git.advanced.cherryPick': 'apply the changes from a specific commit.',
    'blog.git.advanced.reflog': 'show a log of all reference movements (recover lost commits).',
    'blog.git.advanced.worktreeAdd': 'checkout multiple branches in parallel folders.',
    'blog.git.advanced.submodule': 'fetch and update submodule dependencies.',
    'blog.git.advanced.rerere': 'reuse recorded resolution of conflicted merges.',
    'blog.git.adminTitle': 'administration',
    'blog.git.admin.clean': 'remove all untracked files and directories.',
    'blog.git.admin.gc': 'cleanup unnecessary files and optimize local repo.',
    'blog.git.admin.checkIgnore': 'debug why a file is being ignored.',
    'blog.git.admin.archive': 'export the current branch to a zip file.',
    'blog.git.admin.revParse': 'output the full SHA-1 hash of the current commit.',
    'blog.git.referencesTitle': 'references',
    'blog.git.references.docs': 'official git docs',
    'blog.git.references.dangit': 'dangit, git!',
    'blog.grpc.title': 'grpc',
    'blog.grpc.date': 'nicholas chen · january 11, 2026 · 9 min read',
    'blog.grpc.intro':
      "in modern software architecture, especially with microservices, the way services communicate is crucial. while rest has been the standard for a long time, grpc has emerged as a powerful alternative for many use cases. in this post, i'll explain what grpc is, how it works, and why you might want to use it.",
    'blog.grpc.whatIsTitle': 'what is gRPC?',
    'blog.grpc.whatIsText':
      'grpc (google remote procedure call) is an open-source remote procedure call framework initially developed by google. it allows a client application to directly call a method on a server application on a different machine as if it were a local object, making it easier to create distributed applications and services. unlike rest, which is resource-oriented, grpc is action-oriented.',
    'blog.grpc.howItWorksTitle': 'how it works',
    'blog.grpc.howItWorksText1':
      'this is typically done using protocol buffers (protobuf) in a .proto file. at a high level, gRPC allows you to define a service, specifying the methods that can be called remotely with their parameters and return types. the server implements this interface and runs a gRPC server to handle incoming calls. the client has a stub (referred to as just a client in some languages) that provides the same methods as the server.',
    'blog.grpc.howItWorksText2':
      'by default, gRPC uses protocol buffers (protobuf) as its interface definition language (IDL) and as its underlying message interchange format. in REST, you often use JSON. with protobuf, you define the structure of your data once in a .proto file. then, you use the protoc compiler to generate data access classes in your preferred programming language. this binary format is much lighter and faster to serialize/deserialize than JSON.',
    'blog.grpc.whyGoodTitle': 'why is it good?',
    'blog.grpc.httpVsHttp2Title': 'HTTP/1.1 vs HTTP/2',
    'blog.grpc.rpcVsRestTitle': 'RPC vs REST',
    'blog.grpc.rpcVsRestText':
      'RPC focuses on actions (verbs) like "getUser", while REST focuses on resources (nouns) like "User". this makes gRPC feel more like calling a local function, simplifying distributed development.\n\nREST is great for public APIs where human readability (JSON) and browser support are important. it\'s flexible and widely understood. gRPC, on the other hand, excels in internal microservices communication where low latency and high throughput are critical. it\'s also strongly typed, which helps in maintaining large systems.',
    'blog.grpc.whyGoodText':
      "gRPC leverages HTTP/2's multiplexing, header compression, and binary framing for better efficiency than REST/HTTP/1.1. The .proto contract enables automatic code generation in multiple languages, ensuring type safety. Native streaming support (server, client, or bidirectional) makes it ideal for real-time apps, large file transfers, and long-lived connections.",
    'blog.grpc.httpVsHttp2Text':
      'gRPC uses HTTP/2 as its transport protocol, which provides significant improvements over HTTP/1.1. The following table compares the key features of both protocols.',
    'blog.grpc.architectureCaption': 'gRPC architecture: client stub and server stub interaction',
    'blog.grpc.protoExampleCaption': 'example .proto service definition',
    'blog.grpc.usingApiTitle': 'using the API',
    'blog.grpc.usingApiText':
      'starting from a .proto file, gRPC compiler plugins generate client- and server-side code. the server implements the service methods and runs a gRPC server to handle calls. the client uses a local stub object that implements the same methods, wrapping parameters in protocol buffer messages and sending requests to the server.',
    'blog.grpc.usingApiText2':
      'gRPC APIs support both synchronous (blocking) and asynchronous (non-blocking) calls, useful for different network operation scenarios.',
    'blog.grpc.serviceMethodTypesTitle': 'service method types',
    'blog.grpc.serviceMethodTypesIntro': 'gRPC lets you define four kinds of service methods:',
    'blog.grpc.serviceMethodTypesCaption': 'gRPC service method types',
    'blog.grpc.unaryRPCs': 'unary RPCs',
    'blog.grpc.unaryRPCsDesc': 'single request, single response.',
    'blog.grpc.serverStreamingRPCs': 'server streaming RPCs',
    'blog.grpc.serverStreamingRPCsDesc': 'client sends request, receives stream of messages.',
    'blog.grpc.clientStreamingRPCs': 'client streaming RPCs',
    'blog.grpc.clientStreamingRPCsDesc':
      'client sends stream of messages, receives single response.',
    'blog.grpc.bidirectionalStreamingRPCs': 'bidirectional streaming RPCs',
    'blog.grpc.bidirectionalStreamingRPCsDesc':
      'both sides send streams of messages independently.',
    'blog.grpc.deadlinesTitle': 'deadlines and timeouts',
    'blog.grpc.deadlinesText':
      "clients can specify how long to wait for an RPC before it's terminated with DEADLINE_EXCEEDED. servers can query timeout status and remaining time.",
    'blog.grpc.rpcTerminationTitle': 'RPC termination and cancellation',
    'blog.grpc.rpcTerminationText':
      'client and server make independent determinations of call success, so their conclusions may not match. either side can cancel an RPC at any time, which terminates it immediately. changes made before cancellation are not rolled back.',
    'blog.grpc.metadataTitle': 'metadata',
    'blog.grpc.metadataText':
      'metadata is key-value pairs containing information about an RPC call (e.g., authentication). keys are case-insensitive ASCII strings, must not start with grpc- (reserved), and binary-valued keys end in -bin.',
    'blog.grpc.channelsTitle': 'channels',
    'blog.grpc.channelsText':
      'a gRPC channel provides a connection to a server on a specified host and port, used when creating client stubs. clients can configure channel arguments to modify gRPC behavior (e.g., message compression). channels have state (connected, idle).',
    'blog.grpc.errorHandlingTitle': 'error handling',
    'blog.grpc.errorHandlingText':
      'gRPC uses a standardized error model with status codes. common status codes include OK, INVALID_ARGUMENT, NOT_FOUND, UNAVAILABLE, and DEADLINE_EXCEEDED. errors include both a status code and an optional error message, providing consistent error handling across languages.',
    'blog.grpc.securityTitle': 'security and authentication',
    'blog.grpc.securityText':
      "gRPC supports TLS (transport layer security) for encrypted communication between client and server. mTLS (mutual TLS) provides mutual authentication where both sides verify each other's certificates. authentication credentials can also be passed via metadata, allowing for various authentication mechanisms including OAuth2, JWT tokens, and API keys.",
    'blog.grpc.http2Caption': 'http/1.1 vs http/2 multiplexing',
    'blog.grpc.protobufVsJsonTitle': 'protocol buffers vs JSON',
    'blog.grpc.protobufCaption': 'protocol buffers definition and serialized format (binary)',
    'blog.grpc.jsonCaption': 'JSON format (human-readable text)',
    'blog.grpc.tableFeature': 'feature',
    'blog.grpc.tableMultiplexing': 'multiplexing',
    'blog.grpc.tableHeaderCompression': 'header compression',
    'blog.grpc.tableFraming': 'framing',
    'blog.grpc.tableServerPush': 'server push',
    'blog.grpc.tableRequestPrioritization': 'request prioritization',
    'blog.grpc.tableEfficiency': 'efficiency',
    'blog.grpc.tableMultiplexingNo': 'no (one request per connection)',
    'blog.grpc.tableMultiplexingYes': 'yes (multiple requests over single connection)',
    'blog.grpc.tableHeaderCompressionYes': 'yes (HPACK)',
    'blog.grpc.tableFramingText': 'text-based',
    'blog.grpc.tableFramingBinary': 'binary framing',
    'blog.grpc.tableEfficiencyHttp11': 'higher latency, more bandwidth',
    'blog.grpc.tableEfficiencyHttp2': 'lower latency, reduced bandwidth',
    'blog.grpc.tableTransport': 'transport',
    'blog.grpc.tableDataFormat': 'data format',
    'blog.grpc.tableStreaming': 'streaming',
    'blog.grpc.tableCodeGeneration': 'code generation',
    'blog.grpc.tableTypeSafety': 'type safety',
    'blog.grpc.tablePerformance': 'performance',
    'blog.grpc.tableBrowserSupport': 'browser support',
    'blog.grpc.tableProtobufBinary': 'protocol buffers (binary)',
    'blog.grpc.tableJsonText': 'JSON (text)',
    'blog.grpc.tableStreamingNative': 'native support',
    'blog.grpc.tableStreamingLimited': 'limited (SSE, WebSocket)',
    'blog.grpc.tableCodeGenAuto': 'automatic from .proto',
    'blog.grpc.tableCodeGenManual': 'manual',
    'blog.grpc.tableTypeSafetyEnforced': 'enforced by contract',
    'blog.grpc.tableTypeSafetyRuntime': 'runtime validation',
    'blog.grpc.tablePerformanceHigh': 'high (multiplexing, compression)',
    'blog.grpc.tablePerformanceLower': 'lower latency, more bandwidth',
    'blog.grpc.tableBrowserSupportLimited': 'limited (gRPC-Web required)',
    'blog.grpc.tableBrowserSupportNative': 'native',
    'blog.grpc.grpcWithGoTitle': 'gRPC with go',
    'blog.grpc.grpcWithGoText1':
      "gRPC and go are super compatible with each other. since both originated from google, gRPC support in go is first-class. the go ecosystem embraces gRPC for microservices due to go's concurrency model (goroutines) which handles HTTP/2 multiplexing efficiently.",
    'blog.grpc.grpcWithGoText2':
      'while go has excellent gRPC support, gRPC itself supports many languages including java, python, c++, node.js, rust, ruby, php, and more. code generation ensures consistent behavior across all language implementations.',
    'blog.grpc.grpcWithGoText3':
      'to use gRPC with go, define your service in a .proto file and use the protoc compiler with protoc-gen-go and protoc-gen-go-grpc plugins. this generates message structs and service interfaces. on the server, implement the generated interface and register it with grpc.NewServer(). on the client, use grpc.Dial() to connect and create a client stub. the generated code is idiomatic go.',
    'blog.grpc.goImageCaption': 'the go programming language',
    'blog.grpc.serverExampleCaption': 'example gRPC server implementation in go',
    'blog.grpc.clientExampleCaption': 'example gRPC client implementation in go',
    'blog.grpc.whenToUseTitle': 'when to use gRPC',
    'blog.grpc.whenToUseIntro': 'gRPC is ideal for:',
    'blog.grpc.whenToUse1':
      'microservices architectures where services need efficient, low-latency communication',
    'blog.grpc.whenToUse2':
      'real-time systems like chat applications, gaming backends, and live data feeds',
    'blog.grpc.whenToUse3':
      "mobile APIs that benefit from gRPC's binary format, reducing bandwidth usage and battery consumption",
    'blog.grpc.whenToUse4':
      'streaming use cases such as file transfers, log aggregation, and real-time analytics',
    'blog.grpc.widelyUsedBy': 'gRPC is widely used by:',
    'blog.grpc.widelyUsedBy1':
      'companies like google, netflix, and square for internal microservices communication',
    'blog.grpc.widelyUsedBy2': 'kubernetes for its API',
    'blog.grpc.widelyUsedBy3': 'cloudflare for edge computing',
    'blog.grpc.referencesTitle': 'references',
  },
  zh: {
    // Hero section
    'hero.greeting': '嗨，我是',
    'hero.name.full': 'Nicholas!',
    'hero.name.short': 'Nic!',
    'hero.location': '我活跃于多伦多和纽约市。',
    'hero.building': '我已经构建了3673天。',
    'hero.achievements': '我的一些成就...',
    'hero.achievement1': '在社交媒体上有3万粉丝（x、instagram、tiktok、youtube），超过1千万观看量',
    'hero.achievement2': '在加拿大最大的机器人黑客马拉松UTRA Hacks中获得第二名',
    'hero.achievement3': '为作者设计了获奖书籍封面',
    'hero.currently': '我目前在...',
    'hero.current1': '> 在滑铁卢大学学习系统设计工程',
    'hero.current2': '作为软件工程师实习生加入纽约的textql，构建数据AI代理',
    'hero.current3': '构建项目帮助他人创造和发明新事物',
    'hero.current4': '在网上与大家分享我在技术和创意方面的旅程',
    'hero.excited': '我对以下事情感到兴奋...',
    'hero.excited1': '构建能在各处给人惊喜和快乐的AI代理',
    'hero.excited2': '将数据转化为工具、视觉效果和魔法，为每个人服务',
    'hero.excited3': '追逐创意艺术火花，绘制涂鸦，每天想象新设计',
    'hero.excited4': '进行让我说"哇，太酷了！"的工程项目',
    'hero.previously': '以前我...',
    'hero.prev1': '在ownr担任软件工程师实习生，为全球企业家构建工具',
    'hero.prev2': '在rbc担任软件工程师实习生，从事机器学习模型工作',
    'hero.prev3': '在meta hash capital担任用户体验设计实习生，专注于金融科技的用户体验',

    // Sections
    'section.howIStarted': '我是如何开始的',
    'section.howIStarted.text1':
      '我在八年级的夏天开始编程，主要是出于好奇心。我想了解我每天使用的应用程序是如何工作的，所以我开始构建自己的应用程序。',
    'section.howIStarted.text2':
      '早期，我构建了一个简单的应用程序来帮助我的移民父母将中国钱币转换为加拿大元。它并不花哨，但它解决了一个真正的问题，这时我明白了，我可以用技术真正帮助人们。',
    'section.howIStarted.text3':
      '我一直是那种想要构建东西的人。小时候，是乐高和纸板装置。现在是机器人、网络应用程序和帮助他人学习、创造或解决问题的工具。',
    'section.howIStarted.text4':
      '从那时起，我做过自由职业工作、实习、推出副业项目，并在网上分享我学到的一切。我一直想发明和创造重要的东西。',

    'section.unconventional': '我完成事情的非传统方式',
    'section.unconventional.text1':
      '我总是以非传统的方式处理事情，这种心态一直为我带来许多独特的机会。在成长过程中，我本质上是一个艺术孩子，但我发现自己同样被编程和工程所吸引——在我做的每件事中都融合了创造力和技术。',
    'section.unconventional.text2':
      '我开始有意在社交媒体平台上建立自己的存在感，公开分享我的项目和见解，而不是依赖传统的网络建设。这种非传统的方法直接导致了我的第一次实习，通过利用X（Twitter）等平台展示我的工作并与行业专业人士建立联系。',
    'section.unconventional.text3':
      '除了实习，我喜欢尝试接触人们的新方法，无论是通过病毒式帖子、创意副业项目，还是简单地对我的过程和失败保持开放。',
    'section.unconventional.text4':
      '我相信在网上保持可见、真实和稍微大胆一点可以打开传统路径可能永远不会揭示的大门。',

    // Actions
    'action.open': '打开',
    'action.close': '关闭',
    'action.download': '下载',
    'action.stop': '停止',

    // Phrases
    'phrases.title': '我喜欢的短语',
    'phrases.phrase1': '我只是喜欢 ⌘ + C 和 ⌘ + V 东西',

    // Search
    'search.title': '你还想了解我什么？',
    'search.placeholder': '问我任何问题',
    'search.thinking': '思考中',
    'search.responding': '回应中',
    'search.shortcuts': '输入"？"查看快捷方式',

    // Draw page
    'draw.title': '画任何东西！',
    'draw.pageTitle': '绘画',
    'draw.portfolioLink': '在这里查看我的艺术作品集',
    'draw.funFact': '有趣的事实：',
    'draw.funFactText':
      '我原本计划学习视觉艺术，但在10年级时，我意识到这不适合我。那时我发现了我对编程的热情和天赋。',
    'draw.story1': '从小时候起，绘画和制作艺术就是我生活的重要组成部分。',
    'draw.story2': '13年多来，它一直是我灵感和表达的恒定源泉。',
    'draw.story3': '这种创造力和解决问题的融合实际上是系统设计工程真正吸引我的原因。',
    'draw.story4': '尽管我不再像高中时那样在艺术课程中，但我仍然喜欢制作YouTube视频和创作艺术。',
    'draw.story5': '因为，在某种程度上，工程每天都涉及艺术。',
    'draw.story6': '这是关于优雅地解决问题，设计直观、功能性和美观的解决方案。',
    'draw.story7': '它总是激发新想法，帮助我从不同的角度看世界。',
    'draw.story8': '与创造力的深层联系是我在这里包含这个小画布的原因。',
    'draw.story9': '这是我旅程的一部分，邀请你与我一起涂鸦、设计和创造！',

    // Contact
    'contact.title': '联系方式...',
    'contact.text':
      '我很想听到你的声音！想雇用我？还是只是想聊天？随时通过电子邮件联系我，或在linkedin上与我联系。也可以查看我的github！',

    // Links
    'links.blogPrompt': '想要阅读我的想法 ->',
    'links.blogLink': '写作',
    'links.artPrompt': '对我的创意作品感兴趣 ->',
    'links.artLink': '艺术',

    // Navigation
    'nav.home': '首页',
    'nav.draw': '绘画',
    'nav.blogs': '写作',
    'nav.draw.title': '画点什么！',
    'nav.blogs.title': '阅读我的写作！',
    'nav.contact': '联系',
    'nav.linkedin': 'LinkedIn',
    'nav.github': 'GitHub',
    'nav.twitter': 'Twitter',

    // Language
    'language.label': '语言：',

    // Blogs page
    'blogs.pageTitle': '写作',
    'blogs.description': '我的想法、经历和对生活、成长及学习的反思集合。',
    'blogs.note': '注：',
    'blogs.noteText': '这些文章最初发布在Medium上，反映了我的个人想法和经历。',

    // Blog navigation
    'blog.back': '返回',
    'blog.contents': '目录',
    'blog.git.title': 'git 命令',
    'blog.git.date': 'nicholas chen · 2025年12月21日 · 4分钟阅读',
    'blog.grpc.title': 'grpc',
    'blog.grpc.date': 'nicholas chen · 2026年1月11日 · 9分钟阅读',
    'blog.coding.title': '我是如何学习编程的',
    'blog.coding.date': 'nicholas chen · 2025年12月26日 · 5分钟阅读',
    'blog.ontology.title': '为什么文本到SQL需要本体？',
    'blog.ontology.date': 'nicholas chen · 2025年11月21日 · 10分钟阅读',
    'blog.waterlooCoop.title': '我对滑铁卢合作项目的思考',
    'blog.waterlooCoop.date': 'nicholas chen · 2026年1月1日 · 7分钟阅读',
    'blog.waterlooCoop.note':
      '注意：这是我从工程学院合作项目的经历，因此本博客的内容可能与数学、科学等其他学院不同。',
    'blog.waterlooCoop.intro':
      '自从在滑铁卢大学学习以来，我在校园里听到最多的话题就是学校的合作项目。在高中时，当我还在选择大学时，我唯一真正想去的学校就是滑铁卢，唯一的原因就是他们有自己的合作项目。我听说了很多关于它提供的机会、你可以工作的不同国家，以及每个毕业班的学生总是因为有2年以上的工作经验而获得额外优势而找到工作。现在在合作项目中待了一年多，我想谈谈我的想法，以及它如何改变了我，同时也帮助了我。',
    'blog.waterlooCoop.exploringTitle': '探索城市、职业和混乱的生活',
    'blog.waterlooCoop.exploringP1':
      '在滑铁卢工程学习期间，你会经历很多事情，其中之一就是在5年内每4个月做6次合作，获得2年的实际工作经验。这种经历非常有价值，因为很少有学生能在如此年轻的年龄在真正的工作环境中工作，在那里他们受到挑战并被当作成年人对待。由于滑铁卢采用4个月的学习学期和4个月的合作学期，两者交替进行，这让你可以探索不同的职业道路，在不同的城市生活，也可以在初创公司和大型公司之间跳槽。',
    'blog.waterlooCoop.exploringImg1Alt': '纽约市',
    'blog.waterlooCoop.exploringImg1Caption': '接近日落时分的上东区景色',
    'blog.waterlooCoop.exploringP2':
      '我见过的许多学生都能够前往旧金山、纽约、西雅图等地。许多工作，尤其是科技类工作，在这些地方经常可以找到。在那里找到合作工作让你有机会离开家乡，独自在新城市工作、吃饭、睡觉和探索4个月。你还会经历找房的刺激、尝试交新朋友和节俭生活的过程，但归根结底，这都是很好的学习经历。从我最近一次合作学期的个人经历来看，我玩得很开心，学到了很多东西，这绝对是一个我永远不会忘记的学期。',
    'blog.waterlooCoop.exploringImg2Alt': '生活空间',
    'blog.waterlooCoop.exploringImg2Caption': '我在纽约期间居住的房子',
    'blog.waterlooCoop.exploringP3':
      '由于合作每4个月进行一次，你经常看到学生从一家公司跳到另一家公司，这就是你最能了解自己喜欢做什么以及真正想为哪种类型的公司工作的地方。你在不同环境中工作得越多，很多事情就会变得越清晰，这最终会帮助你在毕业后选择完美的地方。',
    'blog.waterlooCoop.learningTitle': '学习如何找工作',
    'blog.waterlooCoop.learningP1':
      '滑铁卢合作的性质已经非常有竞争力，当你被顶尖人才包围，所有人都在争夺同样的几份工作时，现在需要一些主动性和努力工作才能找到好工作。',
    'blog.waterlooCoop.learningP2':
      '滑铁卢合作项目的一个特殊部分是校友网络，他们通过合作门户网站向新学生提供实习机会。像特斯拉、雪花、彭博等公司都直接通过该网站发布职位。许多快速发展的初创公司也会出现，而且创始人或工程师很可能曾在滑铁卢学习。',
    'blog.waterlooCoop.learningP3':
      '在2024年秋天找我的第一份工作时，招聘过程非常紧张，因为虽然我能够回到一家旧公司，但回去的感觉并不好。我最终申请了我在外部和学校门户网站上看到的每一份工作。我为每一份工作都发送了求职信，甚至尝试为每个特定的职位发布个性化我的简历。这变得非常累人，我最终停止了这样做。虽然我获得了一些面试机会，但我在面试方面不太擅长，我的技术技能也不太强。我想我在学期结束时总共获得了大约14次面试，但我只有一个offer，我拒绝了。我最终加入了一家被我在前一个夏天工作过的公司收购的初创公司。我没有得到我真正想要的工作，但在这4个月里，我通过求职、面试和学习脱颖而出学到了很多东西。',
    'blog.waterlooCoop.learningImgAlt': '招聘过程',
    'blog.waterlooCoop.learningImgCaption':
      '这是我1a学期2024年秋季招聘统计数据：570份申请，14次面试，1个offer',
    'blog.waterlooCoop.learningP4':
      '快进到一年后，我学会了通过其他方式找工作，其中之一就是在推特上发帖和公开建设。在2025年1月上推特是我为下一个招聘季做准备能做的最好的事情。在这段时间里，我还尝试做更多的黑客马拉松，建立更多的副业项目，并在推特和领英上展示它们。大多数滑铁卢学生最终都会适应这一点，并开始自己寻找机会。你会看到大多数黑客马拉松都充满了滑铁卢学生，以及其他一般的比赛。每个人都给创始人发冷邮件，在推特上发帖，并通过领英联系。我注意到的一件事，可能是由于合作项目，滑铁卢学生发展或倾向于具有高度的主动性，因为这是一个人在人才群体中脱颖而出的唯一方式。',
    'blog.waterlooCoop.learningP5':
      '这也是我在整个项目中以及在第三次合作搜索中与许多公司面试后学到的东西，我在面试方面变得好多了，我的技术技能也比去年有了相当大的提高。',
    'blog.waterlooCoop.employmentImgAlt': '就业统计',
    'blog.waterlooCoop.employmentImgCaption': 'syde 1b就业统计',
    'blog.waterlooCoop.commitmentTitle': '承诺问题',
    'blog.waterlooCoop.commitmentP1':
      '我特别注意到，只有滑铁卢学生，包括我自己在内的很多人都有承诺问题，我相信这源于总是在找工作。',
    'blog.waterlooCoop.commitmentP2':
      '在工程（流4）中，你被迫在大学的第一周内开始招聘，所以当其他大学的其他人在聚会、做副业和交朋友时，你必须锁定并找到工作。现在由于每个学期只有4个月，招聘周期每4个月回来一次，有时招聘人员甚至会提前10个月发布职位，所以大多数人全年都在招聘。即使在当前的合作学期，你已经在考虑下一个。这是我和一个朋友谈过的事情，他也提到我们大多数人无法对公司保持忠诚，因为我们不断思考职业生涯中的下一件事。',
    'blog.waterlooCoop.commitmentP3':
      '除此之外，因为有6个学期，学校里的每个人都不断提醒我们尝试新事物，所以很难回去，包括我在内的很多人都同意，我们永远不会在同一家公司做两次合作，因为缺乏获得更多经验。',
    'blog.waterlooCoop.commitmentImgAlt': '随时间的学习曲线',
    'blog.waterlooCoop.commitmentImgCaption': '显示在公司随时间发生的学习量图表',
    'blog.waterlooCoop.salariesTitle': '薪水和总薪酬',
    'blog.waterlooCoop.salariesP1':
      '钱也是我们很多人关心的问题，因为这就是每个人来这里的原因。每个人都听说过合作项目的收入基本上可以抵消你所有的学费，所以大学基本上是免费的。',
    'blog.waterlooCoop.salariesP2':
      '总薪酬（tc）通常是基本工资+住房津贴+搬迁费。在加拿大，你看到的是每小时25到50加元。大银行和本地初创公司通常处于较低端，而像shopify或亚马逊（多伦多）这样的公司则支付较高。真正的跳跃发生在你"加州或破产"时，这是滑铁卢学生创造的一个术语，当某人必须去加州进行合作时。美国实习以美元支付，仅转换就让你感觉富有。旧金山或纽约的大科技公司通常支付每小时50到90美元。一旦你加上每月3k-5k美元的住房津贴，你的有效月tc可以轻松达到10k-15k美元。对于二十多岁的人来说，这确实是改变生活的钱。',
    'blog.waterlooCoop.salariesP3':
      '我认为这也是从我的父母和周围的人发展出来的，但赚很多钱似乎很重要，因此我花了很多时间在',
    'blog.waterlooCoop.salariesImgAlt': 'levels.fyi薪资数据',
    'blog.waterlooCoop.salariesImgCaption': 'levels.fyi纽约ramp软件工程师实习生职位薪资数据',
    'blog.waterlooCoop.prestigeTitle': '地位象征和声望阶梯',
    'blog.waterlooCoop.prestigeP1':
      '在滑铁卢，对声望的痴迷无处不在，并创造了一个严格的排名，学生的价值与他们领英个人资料上的公司名称联系在一起。从第一学期开始，"加州或破产"的心态就主导了文化。在谷歌、Meta或像Jane Street这样的量化公司获得职位让学生受到高度尊重，而其他工作通常被视为不够好。这种分裂的一边是"舒适"的大科技道路，定义为大额签约奖金、不错的福利，以及因为公司名称而让你在职业生涯中晋升的工作与生活平衡。',
    'blog.waterlooCoop.prestigeP2':
      '另一方面，一些学生在初创世界中追求"更多控制权"，通常从早上9点到晚上9点，每周工作6天的996时间表。他们专注于快速构建重要功能，而不是个人时间。这种分裂创造了一个糟糕的环境，每个人都相互比较，学生"悄悄地炫耀"他们的总薪酬，有时会保守面试材料的秘密。最终，文化往往更关心工作看起来如何及其福利，而不是实际工作本身。',
    'blog.waterlooCoop.prestigeImgAlt': '科技公司标志',
    'blog.waterlooCoop.prestigeImgCaption': '滑铁卢学生渴望工作的主要科技公司（MANGO）',
    'blog.waterlooCoop.miscTitle': '杂项',
    'blog.waterlooCoop.miscUnemploymentTitle': '失业和替代方案',
    'blog.waterlooCoop.miscUnemployment':
      '不是每个人每个学期都能找到工作，特别是考虑到现在的市场情况。如果你最终没有找到工作，有WE Accelerate，这基本上是为一年级学生提供的基于项目的备份，以获得一些学分和技能，这样学期就不会完全浪费。很多人也把时间投入到设计团队中。老实说，花一个学期在滑铁卢火箭或Formula SAE上努力工作有时可以教给你比企业实习更多的东西，而且它在简历上看起来很棒。',
    'blog.waterlooCoop.miscEvalsTitle': '评估和评级',
    'blog.waterlooCoop.miscEvals':
      '在每个学期结束时，你的老板会给你一个评级——从满意到优秀。这有点压力，因为这些评级会永远留在你的合作记录上。未来的雇主在通过WaterlooWorks申请时会看到它们，所以你总是表现良好，以确保你不会以"边缘"结束，这会毁掉你的下一次搜索。也因为这么多滑铁卢学生都很努力，平均评级是优秀，这是仅次于优秀的第二高，因为雇主必须写一整段来解释为什么实习生应该获得该评级。',
    'blog.waterlooCoop.miscPDTitle': 'PD课程',
    'blog.waterlooCoop.miscPD':
      '滑铁卢的每个人都讨厌PD课程。它们是这些强制性的在线模块，你必须在全职工作时完成。通常是"如何写电子邮件"或"工作场所道德"之类的东西。当你只想专注于工作时，它们感觉像是一个巨大的负担，但你必须通过它们才能获得学位上的合作称号。',
    'blog.waterlooCoop.miscVisasTitle': '签证和边境',
    'blog.waterlooCoop.miscVisas':
      '如果你在美国找到工作，你必须处理整个J-1签证混乱，或者如果你是加拿大人，甚至可能是TN。这需要大量的文书工作、SEVIS费用，以及等待DS-2019表格通过邮件到达。你基本上会成为一个月的兼职移民律师。然后还有过境的压力，希望官员不会心情不好。为了去美国工作四个月，这需要很多"法律边境事务"，但为了这种经历，麻烦绝对是值得的。',
    'blog.waterlooCoop.conclusionTitle': '结论',
    'blog.waterlooCoop.conclusionP1':
      '总的来说，滑铁卢合作项目是一个权衡。你在职业生涯中获得巨大的先机、财务独立，以及每四个月在新城市生活的机会。它迫使你快速成长，在你甚至毕业之前就学会如何在职业世界中工作。',
    'blog.waterlooCoop.conclusionP2':
      '然而，该系统也产生了很大的压力。不断的招聘周期和对声望的痴迷会让你感觉总是落后。很容易只关注金钱和品牌名称，而不是实际的学习。这个项目并不完美，但经历是独特的。即使有不断的比较和求职的压力，你发展的技术技能和采取行动的能力使这个过程值得。',

    // First Internship blog content (Chinese)
    'blog.firstInternship.title': '反思我的第一次工程实习',
    'blog.firstInternship.date': 'nicholas chen · 2025年8月5日 · 5分钟阅读',
    'blog.firstInternship.intro':
      '今年冬天，我在ownr获得了我的第一个真正的合作实习经验，作为软件工程师实习生，我犯了很多错误，也学到了很多。现在回顾仅仅一年前，让我思考自己走了多远，所以我想写下这段经历，因为它教会了我关于软件工程和企业生活的知识，这些是我永远不会学到的。',
    'blog.firstInternship.howGotTitle': '我是如何获得这次实习的？',
    'blog.firstInternship.howGotText1':
      '去年夏天，我申请了rbc的夏季科技实验室项目，这是一个面向对工程感兴趣并想在大学之前开始工作的高中生的项目，我度过了愉快的时光并交了许多朋友。当滑铁卢第一学期的招聘季节来临时，我最终接受了回到rbc风险投资部门工作的返聘邀请，那里是他们过去几年收购的所有初创公司的所在地。',
    'blog.firstInternship.howGotText2':
      '我第一天的一个生动记忆是在上午9:30见到我的经理和整个团队，然后立即开始工作。我设置了电脑并开始深入研究公司代码库，对即将到来的事情既兴奋又感到不知所措。',
    'blog.firstInternship.mistakesTitle': '错误和经验教训',
    'blog.firstInternship.mistakesIntro':
      '在整个期间，我从犯了很多错误中学到了很多，特别是因为这是我的第一次真正的实习。以下是一些比较重要的错误：',
    'blog.firstInternship.mistake1': '问了太多"愚蠢"的问题',
    'blog.firstInternship.mistake2': '没有足够的主动性',
    'blog.firstInternship.mistake3': '没有花时间独自尝试解决问题，在寻求帮助之前',
    'blog.firstInternship.mistake4': '与其他同事互动不够',
    'blog.firstInternship.mistakesLearning':
      '在整个期间，我从犯的错误中学到了很多，特别是因为这是我的第一次真正的实习。最大的障碍之一是问了太多"愚蠢"的问题，以及总的来说没有足够的主动性。每当我遇到障碍时，我的本能是立即寻求帮助，而不是花时间真正挣扎并独自解决问题。后来我意识到，过早寻求帮助不仅分散了团队的注意力，而且剥夺了我自己找出答案的机会。',
    'blog.firstInternship.mistakesCoWorkers':
      '我也真的很后悔没有与我的同事有足够的互动。我太专注于工作并试图证明自己，以至于我经常独自坐在办公桌前。我错过了社交方面，比如一起午餐或只是在走廊里聊天，我现在意识到这非常重要。这使这段时间感觉比我需要的更加孤立，我错过了从他们的经验中学习，而不仅仅是技术方面的东西。',
    'blog.firstInternship.goodTitle': '我认为我做得好的事情：',
    'blog.firstInternship.good1': '与我的经理联系并与他频繁沟通',
    'blog.firstInternship.good2': '学会了如何在没有ai的情况下编码和调试',
    'blog.firstInternship.aiEmphasis':
      '我想特别强调这一点，因为与ai工具一起成长已经改变了我做很多事情的方式，与我的年长朋友和家人相比。从我高中开始，它们就一直是我工作流程的重要组成部分，所以学习在没有它们的情况下编码和调试感觉就像回到过去，重新学习一切。我记得阅读mdn web文档、stack overflow，甚至查看某些编程语言的文档。现在的我可能会笑，因为从那时起，ai变得如此好，以至于大多数那些网站和资源现在都被认为是古老的。',
    'blog.firstInternship.codingWithoutAiTitle': '在没有ai的情况下编码',
    'blog.firstInternship.workExperienceTitle': '在ownr工作',
    'blog.firstInternship.codingWithoutAiText1':
      '在整个实习期间，由于我的rbc笔记本电脑的严格限制，我不被允许使用任何外部ai工具、youtube或大多数文档，团队唯一允许我们使用的ai工具是vscode中集成的copilot，但它很糟糕。',
    'blog.firstInternship.codingWithoutAiText2':
      '使用copilot调试很令人沮丧。我会问它关于代码库的问题或请求它索引某些文件，但它会返回虚假信息或完全编造内容。在反复尝试正确提示它之后，我经常放弃并手动调试。这迫使我学习新语言、框架并手动工作，这听起来很有趣，因为现在ai可以做到这些。我记得到处使用console.log并第一次使用调试器。',
    'blog.firstInternship.codingWithoutAiText3':
      '我主要在ownr为管理团队开发内部工具，使用的技术栈包括nestjs、typescript和express.js。我还学习了如何使用postgres、redis，并获得了使用docker和ci/cd管道的实践经验。',
    'blog.firstInternship.debuggerTitle': '调试器',
    'blog.firstInternship.debuggerText':
      'vscode调试器是一个改变游戏规则的工具。我记得调试一个棘手的bug，数据以错误的类型发送。调试器允许我设置断点并逐步执行代码，在我前进时在侧边栏中查看每个输入和输出。这是我第一次真正理解了适当的调试工具可以有多么强大。我发现自己经常在stack overflow上试图找出哪些解决方案是对我特定错误的正确修复，因为copilot无法帮助解决这些问题。我还花了两个完整星期修复和解决多个仓库中的依赖关系。那两个星期感觉就像在stack overflow的兔子洞里无休止地追逐。',
    'blog.firstInternship.techStackTitle': '技术栈',
    'blog.firstInternship.techStackText':
      '我主要在ownr为管理团队开发内部工具，使用的技术栈包括nestjs、typescript和express.js。我学习了redis和缓存，并使用docker和k8s工作。',
    'blog.firstInternship.stackOverflowTitle': 'stack overflow地狱',
    'blog.firstInternship.stackOverflowText':
      '我发现自己经常在stack overflow上试图找出哪些解决方案是对我特定错误的正确修复，因为copilot无法帮助解决这些问题。我还花了两个完整星期修复和解决多个仓库中的依赖关系。那两个星期感觉就像在stack overflow的兔子洞里无休止地追逐。',
    'blog.firstInternship.environmentTitle': '工作环境',
    'blog.firstInternship.environmentText':
      '除了工作本身，我喜欢这个环境。它有一种创业的能量——快速而充满活力。团队中的大多数人都穿着随意，很少有人穿西装或正装。尽管着装随意，但每个人都非常专业。办公室本身感觉就像企业电影中的场景：30层楼，有电梯，钥匙卡访问，到处都是会议室，还有带有双显示器的大桌子。',
    'blog.firstInternship.reflectionsTitle': '反思',
    'blog.firstInternship.reflectionsText1':
      '有很多次我提出的问题我自己都没有意识到可以解决，或者当我太专注于工作而没有在午餐时与其他同事交谈或一起吃饭。这使这段时间非常无聊和缓慢。似乎过得很慢。',
    'blog.firstInternship.reflectionsText2':
      '我的经理也对我非常严格，喜欢看到我挣扎，因为他知道那是我学习最多的地方。我觉得他是为什么我学到这么多的主要原因之一，所以我非常感激。在我在那里的整个时间里，我们之间建立了一些联系，谈论了实习和寻找合作工作以及面试准备。leetcode是一个常见的话题，他给了我一些非常有用的建议。他是我见过的最好的工程师之一。我们整个团队都喜欢他。',
    'blog.firstInternship.managerTitle': '我的经理',
    'blog.firstInternship.managerText':
      '我的经理故意对我很严格。他喜欢看到我挣扎，因为他知道那是最深层次学习发生的地方。他是我学到这么多知识的主要原因之一，我非常感谢他的指导和对我的信任。经理可能决定实习的成败，所以我很高兴我遇到了一个好的。随着时间的推移，我们通过谈论实习、寻找合作工作和面试准备而建立了联系。他和我谈论了leetcode，以及这在他上大学时也是一个经常讨论的话题。他是我见过的最好的工程师之一，整个团队都对他非常尊敬。',
    'blog.firstInternship.conclusionTitle': '结论',
    'blog.firstInternship.conclusionText':
      '总的来说，这次实习非常有趣，我在这四个月里学到了很多。尽管如此，我希望我做得更多，并进一步推动自己。这次经历教会我，成长发生在你走出舒适区的时候，我感谢每一个错误和学到的教训。',

    // Git blog content
    'blog.git.intro':
      '通过各种工作经验和副业项目，我学到了很多git命令，这些命令不止一次救了我的命。我想创建一个中心位置来存储所有这些命令以便于参考。',
    'blog.git.mentalModelTitle': '思维模型',
    'blog.git.mentalModelText':
      'git是一个分布式版本控制系统（本地）。github是一个托管平台（在线）。我们大多数人记住命令而不理解底层的图模型。',

    // Ontology blog content (Chinese)
    'blog.ontology.whatIsTitle': '什么是本体？',
    'blog.ontology.whatIsP1':
      '你可能以前听说过"本体"这个词，可能是palantir的人或其他人在使用，但这是很多人不熟悉的东西，也是我几个月前开始在textql工作时学到的东西。最近，我实际上有机会在本体上工作，并探索更多关于它如何与我们的产品配合以及如何让客户更容易使用。本体有很多不同的类型，但在这篇文章中，我想专注于正式定义数据的那个，以及为什么我们将其用于文本到SQL查询。',
    'blog.ontology.whatIsP2':
      '谷歌对本体的定义是：在某个主题领域或领域中显示其属性及其之间关系的概念和类别集合。如果这没有意义，基本上就是制作一切及其如何相互连接的地图的华丽词汇。',
    'blog.ontology.mapAlt': '显示本体中对象如何连接的地图',
    'blog.ontology.whatIsP3':
      '本体由实体、属性、关系、指标和业务规则组成。这些对于构建结构良好的本体都至关重要。实体本质上是一个对象，你可以将其视为你的业务关心的"事物"。虽然不是必需的，但实体通常有一个主键，可以防止重复计算并实现适当的聚合。这些对象中的每一个都包含属性，这些属性就像描述对象的特征。然后有关系基本上根据这些对象如何相关来连接它们。这些关系通过连接工作——当实体共享可以匹配在一起的公共字段时，创建一对多或多对多的连接。对于指标，这些是在多个对象上定义的，可以通过某种计算来完成。最后，有业务规则只是定义你的业务如何运作以及特定术语或短语的含义。',
    'blog.ontology.simpleExampleTitle': '一个简单的例子',
    'blog.ontology.simpleExampleP1':
      '这里有一个使用客户的简单例子。客户是从你的业务购买的人。他们有基本信息，如姓名、电子邮件以及注册时间。客户通过连接连接到你业务中的其他事物：他们下订单、联系支持，有时推荐朋友。你可以测量关于客户的事情，比如他们总共花费了多少或他们购买的频率。最后，你设置规则来定义某些术语的含义，比如"活跃客户"意味着在过去90天内购买了某些东西的人，或者"VIP客户"意味着花费超过5,000美元的人。所有这些部分共同工作，通过本体对象为你提供客户对你的业务意味着什么的完整图景。',
    'blog.ontology.whyMatterTitle': '为什么本体对文本到SQL很重要',
    'blog.ontology.whyMatterP1':
      '如果你好奇为什么这对文本到SQL查询有用，在查询许多数据库时，特别是当它们是企业规模时，拥有本体有很多好处。',
    'blog.ontology.whyMatterP2':
      '当数据分析师编写复杂查询时，这些查询必须通过使用连接和公司特定的业务逻辑来定义。这浪费了大量时间，因为大量SQL被重复和过度复杂化。通过本体层，你可以通过定义业务实体、关系和指标一次来抽象这种复杂性。而不是每个分析师都需要记住"活跃客户"意味着在过去90天内进行购买的用户，并且需要将用户表与按日期过滤的订单表连接，本体集中捕获此定义。这意味着当有人问"按活跃客户细分显示收入"时，系统已经知道重要信息，例如：',
    'blog.ontology.whyMatterLi1': '要连接哪些表',
    'blog.ontology.whyMatterLi2': '要应用哪些过滤器',
    'blog.ontology.whyMatterLi3': '如何正确计算指标',
    'blog.ontology.whyMatterLi4': '适当的分析粒度应该是什么',
    'blog.ontology.graphsAlt': '显示本体与非本体SQL查询之间比较的图表',
    'blog.ontology.whyMatterP3':
      '这意味着整个组织的一致性、更快的查询生成、更容易的维护、更低的进入门槛、治理和安全性。本质上，本体成为在人类如何思考业务和数据实际如何存储在表中之间转换的语义层。它捕获关于数据的机构知识，否则这些知识将存在于文档、部落知识或高级分析师的头脑中。',
    'blog.ontology.whyMatterP4':
      '本体还可以提高性能。设计良好的本体可能使用预聚合表而不是扫描原始数据来定义指标。它可能知道使用索引列进行连接。它捕获了否则需要手动查询调优的优化知识。',
    'blog.ontology.buildingTitle': '从头开始构建本体',
    'blog.ontology.buildingP1':
      '既然你了解了什么是本体的基础知识以及为什么大型组织可能想要使用一个，学习如何构建本体同样重要。',
    'blog.ontology.addingObjectsAlt': '在本体中创建对象或链接',
    'blog.ontology.buildingP2':
      '在构建本体时，你从核心实体开始——你的业务无法没有的事物。对于电子商务公司，这是客户、订单和产品。对于SaaS公司，这是用户、订阅和使用事件。识别大约3-5个关键实体并彻底定义它们：它们的属性、它们的主键以及它们之间最重要的关系。',
    'blog.ontology.buildingP3':
      '在选择主键时，选择一个不会随时间变化的稳定标识符，通常是像customer_id这样的id字段，而不是像可能更改的电子邮件。这决定了你的实体的粒度，并在聚合指标时防止重复计算。没有适当的主键，你可能会将同一客户计算两次或将他们的历史记录分割到多个身份中。',
    'blog.ontology.buildingP4':
      '对于关系，专注于代表真实业务流并回答常见问题的连接。如果人们经常问"按客户细分显示收入"，你需要从订单到客户的清晰路径。从能够实现你最重要分析的关系开始，而不是试图预先映射每个可能的连接。',
    'blog.ontology.buildingP5':
      '然后添加人们每天询问的指标。"我们的收入是多少？""我们有多少活跃用户？""我们的转化率是多少？"这些是在每次晨会上被问到的问题。在本体中用正确的业务逻辑定义这些一次，突然之间，数十个重复的查询变得过时了。',
    'blog.ontology.buildingP6':
      '关键是快速证明价值。如果你在任何人可以使用它之前花费六个月构建一个全面的本体，你将失去组织的支持。但如果你能证明三周的工作消除了围绕"活跃客户"的困惑，并使该指标在所有报告中保持一致，突然之间人们希望在本体中有更多实体。',
    'blog.ontology.attrsAlt': '创建属性和编辑对象属性',
    'blog.ontology.goodEnoughTitle': '本体什么时候"足够好"？',
    'blog.ontology.goodEnoughP1':
      '本体永远不会完成。总会有边缘情况、利基指标和一次性分析，这些不适合你定义的实体和关系。目标不是完美——而是覆盖常见情况。如果你的本体处理人们提出的80%的问题，那就是一个巨大的胜利。剩余的20%仍然可以通过自定义SQL或临时分析来处理。',
    'blog.ontology.goodEnoughP2': '当以下情况时，你知道你的本体"足够好"：',
    'blog.ontology.goodEnoughLi1': '新分析师可以在不寻求帮助的情况下回答常见问题',
    'blog.ontology.goodEnoughLi2': '相同的指标不再在不同报告中以不同值出现',
    'blog.ontology.goodEnoughLi3': '人们在编写自定义查询之前开始问"这在本体中吗？"',
    'blog.ontology.goodEnoughLi4': '你花在使用本体上的时间比构建它的时间更多',
    'blog.ontology.howEnginesTitle': '文本到SQL引擎如何使用本体',
    'blog.ontology.howEnginesP1':
      '当你问"按客户细分显示收入"时，文本到SQL引擎使用本体经过几个步骤。',
    'blog.ontology.howEnginesP2':
      '首先，它识别你询问的实体和指标。"收入"映射到本体中定义的指标。"客户细分"映射到客户实体的属性。',
    'blog.ontology.howEnginesP3':
      "接下来，它查找指标定义。本体说收入计算为sum(orders.total_amount)，其中orders.status = 'completed'。它也知道收入与订单实体相关联。",
    'blog.ontology.howEnginesP4':
      '然后它确定必要的连接。你要求按客户细分的收入，因此引擎需要将订单连接到客户。本体定义了这个关系：orders.customer_id = customers.id。它知道这是一对多关系（每个客户多个订单）。',
    'blog.ontology.howEnginesP5':
      '最后，它应用任何业务规则。也许本体指定收入计算应排除退款，或者只有过去12个月的订单才计算。这些规则会自动合并到生成的SQL中。结果是一个人类分析师需要10分钟才能编写（并且可能出错）的查询，在几秒钟内正确生成。',
    'blog.ontology.chatAlt': '我使用文本到SQL功能查询测试数据库与Ana',
    'blog.ontology.howUsedTitle': '本体如何被使用',
    'blog.ontology.howUsedP1':
      '当数据分析师或 ai 代理问「按客户细分显示收入」之类的问题时，系统会加载本体，将问题解析为实体和指标，然后查找定义。它会确定要连接哪些表、使用哪些列以及应用哪些过滤器或业务规则。代理不会猜测——它遵循本体。这就是为什么同一个问题总是产生一致、相同的 sql。本体是人类对业务的思考方式与数据库实际查询方式之间的契约。',
    'blog.ontology.inCodeTitle': '本体在代码中的样子',
    'blog.ontology.inCodeP1':
      '在底层，本体通常以结构化数据存储——通常是 json 文件或类似格式——用来定义实体、属性、关系和指标。你用来构建它的界面（拖放对象、属性表单）只是其上的一层：保存时，系统会将你的图序列化成类似下面这样的内容。该文件会被版本控制、部署，并在运行时由文本到 sql 引擎或任何需要根据你的数据回答问题的代理加载。',
    'blog.ontology.jsonExampleCaption': '示例本体结构（简化 json）：实体、关系和指标。',
    'blog.ontology.ambiguityTitle': '处理歧义',
    'blog.ontology.ambiguityP1':
      '模糊问题是本体真正发光的地方。如果你问"显示销售"，这可能意味着销售团队（实体）、销售交易（订单实体）、销售收入（指标）或销售数量（不同的指标）。没有本体，系统必须猜测。有了本体，它可以识别"销售"是模糊的，检查哪种解释在上下文中有意义，如果需要，要求澄清（"你是指销售收入还是销售数量？"），并根据使用模式使用最常见的解释。',
    'blog.ontology.ambiguityP2':
      '本体还有助于同义词。"客户"、"客户"、"账户"和"买家"都可能映射到同一个客户实体。',
    'blog.ontology.vsOtherTitle': '本体与其他方法',
    'blog.ontology.vsOther.dbtTitle': 'dbt模型：',
    'blog.ontology.vsOther.dbtText':
      'dbt模型和本体解决不同的问题。dbt将原始数据转换为干净的表。本体位于这些表之上，并定义它们的含义：哪个表代表客户，客户如何与订单相关，以及如何优化查询。你可以同时使用两者：dbt产生表，本体产生理解。',
    'blog.ontology.vsOther.biTitle': 'BI语义层：',
    'blog.ontology.vsOther.biText':
      '像looker和tableau这样的工具有自己的语义层。looker有lookml，tableau有带关系的数据源。这些服务于与本体类似的目的——它们定义指标、关系和业务逻辑。区别在于范围和灵活性。传统的BI语义层与其可视化工具紧密耦合。你在looker中创建的定义只在looker中工作。如果你想在python中使用相同的逻辑，或在不同的BI工具中，或在自动化管道中，你就没有运气了。本体是工具无关的。它是一个中央定义层，可以为文本到SQL查询、BI工具、python分析、自动化报告和自定义应用程序提供支持。你定义"活跃客户"一次，它到处工作。',
    'blog.ontology.vsOther.viewsTitle': '视图和存储过程：',
    'blog.ontology.vsOther.viewsText':
      '视图和存储过程可以封装业务逻辑，那么为什么需要本体？首先，可发现性。如果你的数据库中有500个视图，你怎么知道使用哪一个？本体提供了一个带有关系和文档的结构化目录。第二，关系。视图给你一个表，但它不告诉你该表如何与其他表相关。本体明确地定义这些连接，实现自动连接生成。第三，自然语言。你不能用简单的英语问视图"按客户细分显示收入"。你需要知道视图存在，它叫什么，以及如何查询它。本体启用自然语言接口。视图是代码重用的技术解决方案。本体是共享理解的语义解决方案。',
    'blog.ontology.sourcesAlt': '比较本体与其他方法的不同工具',
    'blog.ontology.futureTitle': '本体的未来',
    'blog.ontology.futureP1':
      '随着LLM的兴起，本体实际上将比以往任何时候都更有价值。AI模型在理解自然语言方面很棒，但在了解你的特定业务逻辑方面却很糟糕。GPT-5不知道你的公司将"活跃客户"定义为90天活动，或者收入应排除某些交易类型，或者客户表通过特定的外键连接到订单。本体提供了这种上下文。它是LLM的语言理解和你公司的数据现实之间的桥梁。LLM处理"用户问什么？"部分，本体处理"我们如何实际计算？"部分。随着LLM模型变得更好，本体成为用户查询大型数据库的效率和准确性的关键差异化因素。',
    'blog.ontology.futureP2':
      '想象一个基于人们如何使用它而发展的本体。当分析师反复编写类似的自定义查询时，系统建议将这些模式添加到本体中。当指标定义经常被手动覆盖时，系统会标记它以供审查。这已经开始发生了。系统可以跟踪哪些实体经常一起查询，并建议添加明确的关系。它们可以识别常见的计算字段，并建议将它们提升为官方指标。',
    'blog.ontology.futureP3':
      '随着数据景观变得更加复杂——更多来源、更多表、更多工具、更多用户——对本体的需求呈指数级增长。没有本体，复杂性扩展得很糟糕。每个新数据源都需要每个人学习新的表结构。每个新分析师都需要接受所有业务逻辑的培训。每个新工具都需要自定义集成。有了本体，复杂性线性扩展。新数据源映射到现有实体。新分析师学习本体一次。新工具与本体层集成。数据的未来不是更不复杂——它更复杂但组织得更好。本体是我们管理这种复杂性而不被淹没的方式。',
    'blog.ontology.referencesTitle': '参考文献',
    'blog.ontology.references.builtin': 'builtin.com/data-science/ontology',
    'blog.ontology.references.palantir': 'blog.palantir.com - 本体在数据中寻找意义',
    'blog.ontology.references.palantirDocs': 'palantir.com/docs/foundry/ontology/overview',
    'blog.ontology.references.textql': 'docs.textql.com - 本体概述',
    'blog.ontology.note': '注：原始文章中的所有图像都是从',

    // Sample prompts
    prompt1: '告诉我你在Ownr的经历',
    prompt2: '你做过什么项目？',

    // Money making
    'moneyMaking.text':
      '我做过几乎所有你能想到的青少年赚钱的事情：辅导、快餐店工作、卖东西、为邻居铲雪道、实习、设计和编程的自由职业工作以及社交媒体的品牌合作。',

    // Projects section
    'projects.title': '我正在进行的几个项目...',
    'projects.languagesSectionTitle': '我使用过的几种编程语言...',
    'projects.languagesTitle': '我使用过的编程语言',
    'projects.golang': 'golang',
    'projects.python': 'python',
    'projects.typescript': 'typescript',
    'projects.and': '和',
    'projects.tiktokPredictor': '预测TikTok观看量的ML模型',
    'projects.neoDiscordBot': 'Discord机器人，为您总结消息',
    'projects.facialRecognition': '用于人脸识别和验证的深度学习CNN模型',
    'projects.sqlParser': '可以查询扁平JSON对象的解析器',
    'projects.whiteboard': '用于头脑风暴、创建和分享想法的应用',
    'projects.dependabot': '拥有200+用户的应用，用于检查和更新存储库中的依赖项',
    'projects.fernando': '在utra黑客马拉松获得第二名的姿势检查机器人',

    // Projects list labels (home page) — keep English names in both languages
    'projects.label.tiktok': 'tiktok view predictor',
    'projects.label.sqlParser': 'sql query parser',
    'projects.label.fernando': 'fernando',
    'projects.label.facialRecognition': 'facial recognition',
    'projects.label.agentSearchEvals': 'agent search evals',

    // Home hero title
    'home.title': '嗨，我是 nic',

    // Excited section
    'excited.title': '我对以下事情感到兴奋...',
    'excited.item1': '构建能在各处给人惊喜和快乐的AI代理',
    'excited.item2': '将数据转化为工具、视觉效果和魔法，为每个人服务',
    'excited.item3': '追逐创意艺术火花，绘制涂鸦，每天想象新设计',
    'excited.item4': '进行让我说"哇，太酷了！"的工程项目',

    // Previously section
    'previously.title': '之前经历...',
    'previously.role1': '工程',
    'previously.role2': '工程',
    'previously.role3': '工程',
    'previously.item1': 'ownr',
    'previously.item2': 'rbc',
    'previously.item3': 'insforge',

    // Current roles (compact labels)
    'current.role1': '工程',
    'current.role2': '工程',

    // Footer
    'footer.copyright': '© 2025 NICHOLAS CHEN',
    'footer.by': '设计：NICHOLAS®',

    // Additional info
    'info.favouriteShow': '> 最喜欢的节目 -> 一拳超人',

    // Blog git content
    'blog.git.coreConceptsTitle': '核心概念',
    'blog.git.coreConcepts.snapshotsTitle': '快照，不是差异',
    'blog.git.coreConcepts.snapshotsText':
      'git 在每次提交时存储项目的完整快照，而不仅仅是差异。如果文件没有更改，它会存储指向前一个版本的指针。',
    'blog.git.coreConcepts.threeTreesTitle': '三棵树',
    'blog.git.coreConcepts.threeTrees.working': '工作目录：您看到/编辑的文件。',
    'blog.git.coreConcepts.threeTrees.staging': '暂存区（索引）：准备提交的更改。',
    'blog.git.coreConcepts.threeTrees.head': 'HEAD：指向最后一次提交的指针。',
    'blog.git.setupTitle': '设置与配置',
    'blog.git.setup.configUserName': '为提交设置您的用户名。',
    'blog.git.setup.configUserEmail': '为提交设置您的电子邮件。',
    'blog.git.setup.configColor': '启用有用的颜色输出。',
    'blog.git.setup.configList': '显示所有配置设置。',
    'blog.git.setup.alias': "创建一个快捷方式：输入 'git co' 而不是 'git checkout'。",
    'blog.git.setup.editor': '将 VS Code 设置为提交消息的默认编辑器。',
    'blog.git.gettingTitle': '获取和创建项目',
    'blog.git.getting.init': '在当前目录中初始化一个新仓库。',
    'blog.git.getting.clone': '下载一个仓库及其整个历史记录。',
    'blog.git.getting.cloneDepth': '浅克隆（仅最新快照，更快）。',
    'blog.git.basicTitle': '基本快照',
    'blog.git.basic.amendNoEdit': '将暂存的更改添加到最后一次提交而不更改消息。',
    'blog.git.basic.status': '显示修改的、暂存的和未跟踪的文件。',
    'blog.git.basic.addFile': '为下一次提交暂存特定文件。',
    'blog.git.basic.addAll': '暂存当前目录中的所有更改。',
    'blog.git.basic.addPatch': '交互式选择要暂存的代码块。',
    'blog.git.basic.commitMsg': '将暂存的更改保存为新快照。',
    'blog.git.basic.commitAm': '一步暂存跟踪文件并提交。',
    'blog.git.basic.rm': '从工作树和索引中移除文件。',
    'blog.git.basic.mv': '移动或重命名文件。',
    'blog.git.branchingTitle': '分支与合并',
    'blog.git.branching.switchDash': '快速切换回上一个分支。',
    'blog.git.branching.merged': '列出已合并到当前分支的分支。',
    'blog.git.branching.mergeBase': '找到两个分支的共同祖先。',
    'blog.git.branching.branch': '列出所有本地分支。',
    'blog.git.branching.branchName': '创建一个新分支（指针）。',
    'blog.git.branching.branchD': '安全删除已合并的分支。',
    'blog.git.branching.branchDForce': '强制删除分支（即使未合并）。',
    'blog.git.branching.switchName': '切换到分支。',
    'blog.git.branching.switchC': '创建并切换到新分支。',
    'blog.git.branching.merge': '将另一个分支的历史记录合并到当前分支。',
    'blog.git.branching.mergeAbort': '取消正在进行的合并并返回到合并前的状态。',
    'blog.git.branching.tag': '用标签标记当前提交。',
    'blog.git.branching.tagA': '创建带元数据的注释标签。',
    'blog.git.sharingTitle': '共享与更新',
    'blog.git.sharing.remoteRename': '重命名远程连接。',
    'blog.git.sharing.pushDelete': '删除远程分支。',
    'blog.git.sharing.remoteV': '列出所有远程仓库。',
    'blog.git.sharing.remoteAdd': '将本地仓库连接到远程仓库。',
    'blog.git.sharing.remoteSetUrl': '更改现有远程的 URL。',
    'blog.git.sharing.fetch': '从远程下载更改但不合并。',
    'blog.git.sharing.fetchPrune': '删除指向已删除远程分支的本地引用。',
    'blog.git.sharing.pull': '获取 + 合并（更新当前分支）。',
    'blog.git.sharing.push': '将本地提交上传到远程。',
    'blog.git.sharing.pushU': '推送并设置上游跟踪。',
    'blog.git.sharing.pushForceLease': '更安全的强制推送；如果其他人推送则失败。',
    'blog.git.sharing.pushTags': '将所有本地标签推送到远程。',
    'blog.git.inspectionTitle': '检查与比较',
    'blog.git.inspection.logS': '搜索历史记录中字符串的首次出现。',
    'blog.git.inspection.logAuthor': '按作者过滤提交历史记录。',
    'blog.git.inspection.logSince': '显示特定时间范围内的提交。',
    'blog.git.inspection.log': '显示提交历史记录。',
    'blog.git.inspection.logOneline': '紧凑地可视化提交历史图。',
    'blog.git.inspection.shortlog': '按作者显示提交摘要。',
    'blog.git.inspection.diff': '显示未暂存的更改。',
    'blog.git.inspection.diffStaged': '显示暂存的更改（将要提交的内容）。',
    'blog.git.inspection.diffWord': '突出显示更改的单词而不是整行。',
    'blog.git.inspection.show': '显示特定提交的更改和元数据。',
    'blog.git.inspection.blame': '显示谁修改了文件的每一行。',
    'blog.git.inspection.blameL': '仅责备 10 到 20 行。',
    'blog.git.inspection.grep': '在跟踪文件中搜索文本。',
    'blog.git.undoTitle': '撤销与修复',
    'blog.git.undo.checkoutHash': '将文件恢复到特定的过去版本。',
    'blog.git.undo.updateRef': '有效地“取消初始化”仓库的第一次提交。',
    'blog.git.undo.resetSoft': '撤销最后一次提交但保持更改暂存。',
    'blog.git.undo.resetHard': '撤销最后一次提交并丢弃所有更改（危险）。',
    'blog.git.undo.revert': '创建新提交来撤销之前的提交。',
    'blog.git.undo.restore': '丢弃文件中的本地更改。',
    'blog.git.undo.restoreStaged': '取消暂存文件（保持工作目录中的更改）。',
    'blog.git.undo.commitAmend': '将暂存的更改添加到之前的提交 / 编辑消息。',
    'blog.git.advancedTitle': '高级与强大工具',
    'blog.git.advanced.rebaseI': '交互式重写历史：压缩、修复、重新排序或删除。',
    'blog.git.advanced.rebase': '在另一个基础顶部重新应用提交。',
    'blog.git.advanced.stash': '临时搁置脏更改。',
    'blog.git.advanced.stashPop': '重新应用隐藏的更改并从隐藏列表中移除。',
    'blog.git.advanced.stashList': '列出所有隐藏的变更集。',
    'blog.git.advanced.stashU': '隐藏包括未跟踪的文件。',
    'blog.git.advanced.bisectStart': '开始二分搜索以找到引入错误的提交。',
    'blog.git.advanced.cherryPick': '应用特定提交的更改。',
    'blog.git.advanced.reflog': '显示所有引用移动的日志（恢复丢失的提交）。',
    'blog.git.advanced.worktreeAdd': '在并行文件夹中检出多个分支。',
    'blog.git.advanced.submodule': '获取并更新子模块依赖项。',
    'blog.git.advanced.rerere': '重用记录的冲突合并解决方案。',
    'blog.git.adminTitle': '管理',
    'blog.git.admin.clean': '移除所有未跟踪的文件和目录。',
    'blog.git.admin.gc': '清理不必要的文件并优化本地仓库。',
    'blog.git.admin.checkIgnore': '调试文件被忽略的原因。',
    'blog.git.admin.archive': '将当前分支导出到 zip 文件。',
    'blog.git.admin.revParse': '输出当前提交的完整 SHA-1 哈希。',
    'blog.git.referencesTitle': '参考',

    // Blog coding content
    'blog.coding.intro': '从小（顶部）到大（底部）教我编程的小学习',
    'blog.coding.year2023': '2023',
    'blog.coding.year2024': '2024',
    'blog.coding.year2025': '2025',
    'blog.coding.year2026': '2026',
    'blog.coding.item1': '• 用 java 构建了一个猜词游戏',
    'blog.coding.item2': '• 从高中计算机科学老师那里学习了 C++ 的基础知识',
    'blog.coding.item3': '• 加入学校的编程俱乐部，从更好的程序员那里学习',
    'blog.coding.item4': '• 尝试了竞技编程，并在 C++ 中做了两次 ccc',
    'blog.coding.item5': '• 加入其他学生的团队，在构建 voluntrack 时学到了很多',
    'blog.coding.item6': '• 与朋友一起在在线黑客马拉松中构建了我的第一个 gpt wrapper',
    'blog.coding.item7': '• 使用 kotlin 制作了学生注册和移动计算器应用',
    'blog.coding.item8': '• 在 2024 年夏天在 RBC 获得了第一个软件工程实习',
    'blog.coding.item10': '• 使用 python、numpy 和 pandas 在 jupyter notebook 上构建了 ML 模型',
    'blog.coding.item11': '• 从 geeks for geeks 和 w3schools 学到了很多我需要的东西',
    'blog.coding.item12': '• 第一次用 javascript、html 和 css 构建了一些随机项目',
    'blog.coding.item13': '• 在 jamhacks 构建了另一个 gpt wrapper',
    'blog.coding.item14': '• 与朋友一起在 hack the valley 构建了一个学习伙伴工具',
    'blog.coding.item15': '• 在 uoft hacks 构建了一个音乐音箱',
    'blog.coding.item16': '• 构建了我的个人网站的第一个版本',
    'blog.coding.item17': '• 去滑铁卢大学学习系统设计工程',
    'blog.coding.item18': '• 在 C++ 中学习编程入门，并为学校构建项目',
    'blog.coding.item19': '• 在 overleaf 上用 latex 构建了我的简历',
    'blog.coding.item20': '• 开始更定期地解决 leetcode 问题',
    'blog.coding.item21': '• 加入工程设计团队，学习如何在组织中编码',
    'blog.coding.item22': '• 在冬天加入 ownr 作为软件工程师实习生',
    'blog.coding.item23': '• 学习了单元测试和集成测试',
    'blog.coding.item24': '• 学到了很多 git 命令，包括 git cherry-pick',
    'blog.coding.item25': '• 在空闲时间与朋友一起构建了一个 dependabot 克隆',
    'blog.coding.item26': '• 与 rbc 朋友一起在 hack the 6ix 构建了一个垃圾分拣器',
    'blog.coding.item27': '• 在生产代码库中工作，为团队开发内部工具',
    'blog.coding.item28': '• 学习了 typescript、next.js、vite 和 react，并大量使用 postman',
    'blog.coding.item29': '• 第一次玩弄 postgres、sql 和调试器',
    'blog.coding.item30': '• 更熟悉终端和 ai，并仍然使用 stack overflow',
    'blog.coding.item31': '• 通过在 utra hacks 构建姿势检查机器人获得第二名',
    'blog.coding.item32': '• 在大学第二学期学习 C++ 中的数据结构和算法',
    'blog.coding.item33': '• 上了 twitter，在那里学到了很多，并遇到了其他酷的 cs 学生',
    'blog.coding.item34': '• 开始更认真地对待 leetcode，并在 yt 上看了很多 neetcode',
    'blog.coding.item35': '• 制作了一个处理客户反馈的 etl 流水线',
    'blog.coding.item36': '• 用 python 构建了一个 discord 摘要机器人，在凌晨 2 点玩耍',
    'blog.coding.item37': '• 第一次使用 golang 并构建了一个图像处理器',
    'blog.coding.item38': '• 用 python 和 typescript 制作了这个面部识别软件',
    'blog.coding.item39': '• 第一次尝试学习 haskell',
    'blog.coding.item40': '• 用 typescript 和 svelte 构建了 sql 查询解析器，用于解析扁平 json',
    'blog.coding.item42': '• 在秋季获得了 textql 的软件工程实习',
    'blog.coding.item43': '• 在学校期间必须为其中一门大学课程学习 matlab',
    'blog.coding.item44': '• 使用 golang 和 tailwind css 构建了一个 url 缩短器，托管在 railway 上',
    'blog.coding.item45': '• 制作了一个 figma 的小型劣质版本',
    'blog.coding.item46': '• 做了很多带回家的作业和编码任务',
    'blog.coding.item47': '• 重新设计了我的整个个人网站两次',
    'blog.coding.item48': '• 同事告诉我开始使用 iterm2，我爱上了它',
    'blog.coding.item49': '• 在编程时大量使用了 claude code、codex 和 cursor',
    'blog.coding.item50': '• 参与了 textql 医疗保健登录页面',
    'blog.coding.item51': '• 学习了如何比以前更好地使用终端',
    'blog.coding.item52': '• 在一家初创公司工作，大量使用 go、python、typescript 和 svelte',
    'blog.coding.item53': '• 在 textql 大量处理本体',
    'blog.coding.item54': '• 做了很多代理和应用 ai 工作',
    'blog.coding.item55': '• 学习了更多 git 命令，包括 git bisect',
    'blog.coding.item56': '• 在 textql 破坏了生产环境 4 次并学会了如何调试和修复',
    'blog.coding.item57': '• 第一次学习 rust 并构建了一些随机东西',
    'blog.coding.item58': '• 与朋友一起参加了 mercor ML 模型挑战',
    'blog.coding.item59': '• 第一次使用网络搜索 api 进行一些基准测试',
    'blog.coding.item60': '• 制作了一个链接路由检查脚本',
    'blog.coding.item61': '• 开始学习一些编程的系统设计',
    'blog.coding.item62': '• 学习了 gRPC，并写了一篇关于它的博客',
    'blog.coding.item63': '• 开始为开源项目做贡献，如 insforge',
    'blog.coding.item64': '• 看到了一个很酷的网站 uoftatlas.com 并制作了一个克隆 waterlooatlas',
    'blog.coding.item65': '• 写了一篇关于我第一次工程实习的博客，在那里我学习了 docker',
    'blog.coding.item66': '• 更新了 sql 查询解析器，学习了标记化和抽象语法树 (AST)',
    'blog.coding.item68': '• 在面试中学习了向量嵌入',
    'blog.coding.item69': '• 从一篇博客中学习了更多关于 kubernetes 的知识',
    'blog.coding.item70': '• 做了 8 个带回家的编程作业，并学习了很多关于 pydantic 的知识',
    'blog.coding.item9': '• 尝试制作一个互动的情人节网站',
    'blog.coding.referencesTitle': '参考文献',

    // Blog ontology content
    'blog.ontology.section1.title': '什么是本体？',
    'blog.ontology.section1.text1':
      '您可能听说过“本体”这个词，由 Palantir 的人使用或其他，但这对很多人来说都是不熟悉的，我在开始在 TextQL 工作时几个月前也学到了这个。最近，我实际上有机会在 TextQL 工作并探索它如何与我们的产品一起工作，以及如何使客户更容易使用。有许多不同类型的本体，但在这篇文章中，我想专注于正式定义数据并为什么我们使用它来进行文本到 SQL 查询。',
    'blog.ontology.section1.text2':
      '谷歌的定义是：主题领域或域的概念和类别的集合，显示它们的属性以及它们之间的关系。如果这没有意义基本上是一个花哨的词来制作一切和它们如何连接的地图。',
    'blog.ontology.section1.text3':
      '本体由实体、属性、关系、指标和业务规则组成。每个对于构建结构良好的本体都是至关重要的。一个实体本质上是一个您可以将其视为“事物”的对象，这是您的业务关心的。如果没有要求，实体通常有主键，以防止双重计数并启用适当的聚合。每个对象持有描述对象的特征的属性。然后有关系，这些基本上根据它们如何相关连接每个对象。这些关系通过连接工作 - 当实体共享共同字段时，可以匹配在一起，创建一对多或多对多的连接。对于指标，这些是在多个对象上定义的，可以通过某种计算完成。最后，有业务规则，这些只是定义您的业务如何运作以及特定术语或短语的含义。',
    'blog.ontology.section2.title': '一个简单的例子',
    'blog.ontology.section2.text':
      '这是一个使用客户的简单例子。客户是有人从您的业务购买。他们有基本信息，如他们的姓名、电子邮件，以及他们注册的时间。客户通过连接到您的业务的其他事物：他们下订单、联系支持，有时推荐朋友。您可以衡量关于客户的事情，如他们总共花费了多少，或他们购买的频率。最后，您设置规则来定义某些术语意味着什么，如“活跃客户”意味着有人在过去 90 天内购买了东西，或“VIP 客户”意味着有人花费超过 5,000 美元。所有这些部分一起工作，为您的客户对您的业务意味着什么提供完整图片，通过对象本体。',
    'blog.ontology.section3.title': '为什么本体对文本到 SQL 很重要',
    'blog.ontology.section3.text1':
      '如果您好奇为什么这对文本到 SQL 查询有用，有许多使用本体查询许多数据库的优势，尤其是当它们是企业规模时。',
    'blog.ontology.section3.text2':
      '当数据分析师编写复杂查询时，这些查询必须通过使用连接和公司特定业务逻辑来定义。这浪费了很多时间，因为很多 SQL 是重复的和过度复杂的。使用本体层，您可以抽象出这种复杂性，通过一次定义业务实体、关系和指标。不是每个分析师都需要记住“活跃客户”意味着用户在过去 90 天内购买，需要加入用户表与订单表按日期过滤，本体捕获这个定义集中。这意味着当有人问“显示活跃客户段的收入，”系统已经知道重要信息如：',
    'blog.ontology.section3.list1': '• 哪些表要加入',
    'blog.ontology.section3.list2': '• 应用哪些过滤器',
    'blog.ontology.section3.list3': '• 如何正确计算指标',
    'blog.ontology.section3.list4': '• 分析的适当粒度应该是什么',
    'blog.ontology.section3.text3':
      '这意味着组织一致性、更快的查询生成、更容易维护、更低的入门门槛、治理和安全。本质上，本体成为一个语义层，将人类如何思考业务翻译成数据如何实际存储在表中。它捕获关于数据的机构知识，否则会生活在文档、部落知识或高级分析师的头脑中。',
    'blog.ontology.section3.text4':
      '本体还可以提高性能。一个设计良好的本体可能会使用预聚合表定义指标而不是扫描原始数据。它可能知道为连接使用索引列。它捕获优化知识，否则需要手动查询调优。',
    'blog.ontology.section4.title': '从头构建本体',
    'blog.ontology.section4.text1':
      '现在您了解本体的基础以及为什么大型组织可能想要使用一个，学习如何构建本体同样重要。',
    'blog.ontology.section4.text2':
      '当构建本体时，您从核心实体开始 - 您的业务无法运作的东西。对于电子商务公司，那是客户、订单和产品。对于 SaaS 公司，那是用户、订阅和使用事件。识别也许 3-5 个关键实体，并彻底定义它们：它们的属性、它们的主键，以及它们之间的最重要的关系。',
    'blog.ontology.section4.text3':
      '当选择主键时，选择一个稳定的标识符，不会随时间改变，通常是一个 id 字段而不是电子邮件那样可能会改变的东西。这确定实体的粒度，并防止在您聚合指标时双重计数。没有适当的主键，您可能会两次计算同一个客户或将他们的历史分散到多个身份中。',
    'blog.ontology.section4.text4':
      '对于关系，专注于代表真实业务流和回答常见问题的连接。如果人们经常问“显示客户段的收入，”您需要从订单到客户的清晰路径。开始与启用您的最重要的分析的关系，而不是试图预先映射每个可能的连接。',
    'blog.ontology.section4.text5':
      '然后添加人们每天问几次的指标。“我们的收入是什么？”“我们有多少活跃用户？”“我们的转换率是什么？”这些是每个早晨会议中问的问题。一次在本体中定义这些与正确的业务逻辑，突然几十个重复查询变得过时。',
    'blog.ontology.section4.text6':
      '关键是快速证明价值。如果您花六个月构建全面的本体然后没有人可以使用它，您会失去组织买-in。但如果您能显示三周的工作消除了“活跃客户”的混乱，并使该指标在所有报告中一致，突然人们想要本体中的更多实体。',
    'blog.ontology.section5.title': '何时本体“足够好”',
    'blog.ontology.section5.text1':
      '本体从不完整。总会有边缘情况、利基指标和一-off 分析不适合您的定义实体和关系。本体的目标不是完美 - 它是常见情况的覆盖。如果您的本体处理人们问的 80% 的问题，那就是巨大的胜利。其余的 20% 仍然可以通过自定义 SQL 或临时分析处理。',
    'blog.ontology.section5.text2': '您知道您的本体是“足够好”当：',
    'blog.ontology.section5.list1': '• 新分析师可以不问帮助回答常见问题',
    'blog.ontology.section5.list2': '• 同一个指标停止在不同报告中以不同值出现',
    'blog.ontology.section5.list3': '• 人们在编写自定义查询之前开始问“这在本体中吗？”',
    'blog.ontology.section5.list4': '• 您在使用本体的时间比构建它更多',
    'blog.ontology.section6.title': '文本到 SQL 引擎如何使用本体',
    'blog.ontology.section6.text1':
      '当您问“显示客户段的收入，”文本到 SQL 引擎使用本体通过几个步骤。',
    'blog.ontology.section6.text2':
      '首先，它识别您在问的实体和指标。“收入”映射到本体中定义的指标。“客户段”映射到客户实体的属性。',
    'blog.ontology.section6.text3':
      "接下来，它查找指标定义。本体说收入计算为 sum(orders.total_amount) where orders.status = 'completed'。它还知道收入与订单实体相关联。",
    'blog.ontology.section6.text4':
      '然后，它确定必要的连接。您问按客户段的收入，所以引擎需要连接订单到客户。本体定义这个关系：orders.customer_id = customers.id。它知道这是一个多对一关系（每个客户多个订单）。',
    'blog.ontology.section6.text5':
      '最后，它应用任何业务规则。也许本体指定收入计算应排除退款，或仅订单从过去 12 个月计数。这些规则自动纳入生成的 SQL。结果是一个查询，需要人类分析师 10 分钟写（并可能出错），在几秒钟内正确生成。',
    'blog.ontology.section7.title': '处理歧义',
    'blog.ontology.section7.text1':
      '歧义问题在哪里本体真正闪耀。如果您问“显示销售，”那可能意味着销售团队（实体）、销售交易（订单实体）、销售收入（指标），或销售计数（不同指标）。没有本体，系统必须猜测。有了本体，它可以识别“销售”歧义，检查上下文中的意义，问澄清如果需要（“您是意味着销售收入还是销售数量？”），并使用基于使用模式的常见解释。',
    'blog.ontology.section7.text2':
      '本体也有助于同义词。“客户”、“客户”、“账户”和“买家”可能都映射到同一个客户实体。',
    'blog.ontology.section8.title': '本体 vs 其他方法',
    'blog.ontology.section8.text1':
      'dbt 模型：dbt 模型和本体解决不同问题。dbt 将原始数据转换为干净表。本体坐在那些表之上，并定义它们意味着什么：哪个表代表客户，如何客户与订单相关，如何优化查询。您可以使用两者一起：dbt 产生表，本体产生理解。',
    'blog.ontology.section8.text2':
      'BI 语义层：如 Looker 和 Tableau 的工具有自己的语义层。Looker 有 LookML，Tableau 有数据源与关系。这些服务类似本体目的 - 它们定义指标、关系和业务逻辑。区别是范围和灵活性。传统 BI 语义层紧密耦合到他们的可视化工具。您在 Looker 中创建的定义只在 Looker 中工作。如果您想在 Python 中使用同样的逻辑，或在不同的 BI 工具中，或在自动化管道中，您就倒霉了。本体是工具不可知的。它是一个中央定义层，可以为文本到 SQL 查询、BI 工具、Python 分析、自动化报告和自定义应用提供动力。您定义“活跃客户”一次，它在任何地方工作。',
    'blog.ontology.section8.text3':
      '视图和存储过程：视图和存储过程可以封装业务逻辑，所以为什么需要本体？首先，可发现性。如果您有 500 个视图在数据库中，如何知道使用哪个？本体提供结构化的目录与关系和文档。第二，关系。一个视图给您一个表，但它不告诉您那个表如何与其他表相关。本体明确定义这些连接，启用自动连接生成。第三，自然语言。您不能用纯英语问视图“显示客户段的收入”。您需要知道视图存在、它叫什么，以及如何查询它。本体启用自然语言接口。视图是代码重用的技术解决方案。本体是共享理解的语义解决方案。',
    'blog.ontology.section9.title': '本体的未来',
    'blog.ontology.section9.text1':
      '随着 LLM 的兴起，本体实际上将比以往更有价值。AI 模型在理解自然语言方面很棒，但在知道您的特定业务逻辑方面很糟糕。GPT-5 不知道您的公司如何定义“活跃客户”，或收入应该排除某些交易类型，或客户表如何通过特定外键连接到订单。本体提供这个上下文。它是 LLM 的语言理解与您的公司数据现实之间的桥梁。LLM 处理“用户在问什么？”部分，本体处理“如何实际计算那个？”部分。随着 LLM 模型变得更好，本体成为高效和准确的用户查询大型数据库的关键区别。',
    'blog.ontology.section9.text2':
      '想象一个本体根据人们如何使用它而演变。当分析师反复写类似的自定义查询时，系统建议将那些模式添加到本体。当指标定义被手动覆盖频繁时，系统标记它审查。这已经在发生了。系统可以跟踪实体被查询一起频繁，并建议添加明确关系。他们可以识别常见计算字段，并提出将其提升为官方指标。',
    'blog.ontology.section9.text3':
      '随着数据景观变得更复杂 - 更多来源、更多表、更多工具、更多用户 - 对本体的需求指数增加。没有本体，复杂性规模不好。每个新数据源需要每个人学习新的表结构。每个新分析师需要被训练所有业务逻辑。每个新工具需要自定义集成。有了本体，复杂性线性规模。新数据源映射到现有实体。新分析师学习本体一次。新工具集成本体层。数据未来不是更复杂 - 它是更复杂但更好组织。本体是如何在不淹没在其中的情况下管理那种复杂性。',

    // Blog gRPC content
    'blog.grpc.intro':
      '在现代软件架构中，特别是微服务，服务之间的通信方式至关重要。虽然 REST 长期以来一直是标准，但 gRPC 已成为许多用例的强大替代方案。在这篇文章中，我将解释什么是 gRPC，它是如何工作的，以及为什么你可能想要使用它。',
    'blog.grpc.whatIsTitle': '什么是 gRPC？',
    'blog.grpc.whatIsText':
      'gRPC（Google 远程过程调用）是 Google 最初开发的开源远程过程调用框架。它允许客户端应用程序直接调用不同机器上的服务器应用程序的方法，就像它是本地对象一样，这使得创建分布式应用程序和服务变得更加容易。与面向资源的 REST 不同，gRPC 是面向动作的。',
    'blog.grpc.howItWorksTitle': '它是如何工作的',
    'blog.grpc.howItWorksText1':
      '这通常是在 .proto 文件中使用协议缓冲区 (Protobuf) 完成的。在高层次上，gRPC 允许你定义服务，指定可以远程调用的方法及其参数 and 返回类型。服务器实现此接口并运行 gRPC 服务器来处理传入的调用。客户端有一个存根（在某些语言中简称为客户端），它提供与服务器相同的方法。',
    'blog.grpc.howItWorksText2':
      '默认情况下，gRPC 使用协议缓冲区（Protobuf）作为其接口定义语言（IDL）和底层消息交换格式。在 REST 中，你通常使用 JSON。使用 Protobuf，你在 .proto 文件中定义一次数据结构。然后，你使用 protoc 编译器在你喜欢的编程语言中生成数据访问类。这种二进制格式比 JSON 更轻便，序列化/反序列化速度更快。',
    'blog.grpc.whyGoodTitle': '为什么它很好？',
    'blog.grpc.httpVsHttp2Title': 'HTTP/1.1 vs HTTP/2',
    'blog.grpc.rpcVsRestTitle': 'RPC vs REST',
    'blog.grpc.rpcVsRestText':
      'RPC 专注于动作（动词），如“getUser”，而 REST 专注于资源（名词），如“User”。这使得 gRPC 感觉更像是调用本地函数，从而简化了分布式开发。\n\nREST 非常适合公共 API，其中人类可读性（JSON）和浏览器支持很重要。它灵活且被广泛理解。另一方面，gRPC 在内部微服务通信中表现出色，其中低延迟和高吞吐量至关重要。它也是强类型的，这有助于维护大型系统。',
    'blog.grpc.whyGoodText':
      'gRPC 利用 HTTP/2 的多路复用、头部压缩和二进制分帧，比 REST/HTTP/1.1 更高效。.proto 契约支持多种语言的自动代码生成，确保类型安全。原生流式支持（服务器、客户端或双向）使其非常适合实时应用、大文件传输和长连接。',
    'blog.grpc.httpVsHttp2Text':
      'gRPC 使用 HTTP/2 作为其传输协议，它提供了比 HTTP/1.1 的显著改进。下表比较了两种协议的关键特性。',
    'blog.grpc.architectureCaption': 'gRPC架构：客户端存根和服务器存根交互',
    'blog.grpc.protoExampleCaption': '示例 .proto 服务定义',
    'blog.grpc.usingApiTitle': '使用API',
    'blog.grpc.usingApiText':
      '从 .proto 文件开始，gRPC 编译器插件生成客户端和服务器端代码。服务器实现服务方法并运行 gRPC 服务器来处理调用。客户端使用一个本地存根对象，该对象实现相同的方法，将参数包装在协议缓冲区消息中并向服务器发送请求。',
    'blog.grpc.usingApiText2':
      'gRPC API 支持同步（阻塞）和异步（非阻塞）调用，适用于不同的网络操作场景。',
    'blog.grpc.serviceMethodTypesTitle': '服务方法类型',
    'blog.grpc.serviceMethodTypesIntro': 'gRPC 允许你定义四种服务方法：',
    'blog.grpc.serviceMethodTypesCaption': 'gRPC 服务方法类型',
    'blog.grpc.unaryRPCs': '一元RPC',
    'blog.grpc.unaryRPCsDesc': '单个请求，单个响应。',
    'blog.grpc.serverStreamingRPCs': '服务器流式RPC',
    'blog.grpc.serverStreamingRPCsDesc': '客户端发送请求，接收消息流。',
    'blog.grpc.clientStreamingRPCs': '客户端流式RPC',
    'blog.grpc.clientStreamingRPCsDesc': '客户端发送消息流，接收单个响应。',
    'blog.grpc.bidirectionalStreamingRPCs': '双向流式RPC',
    'blog.grpc.bidirectionalStreamingRPCsDesc': '双方独立发送消息流。',
    'blog.grpc.deadlinesTitle': '截止时间和超时',
    'blog.grpc.deadlinesText':
      '客户端可以指定在 RPC 被 DEADLINE_EXCEEDED 终止之前等待多长时间。服务器可以查询超时状态和剩余时间。',
    'blog.grpc.rpcTerminationTitle': 'RPC终止和取消',
    'blog.grpc.rpcTerminationText':
      '客户端和服务器对调用成功进行独立判断，因此它们的结论可能不匹配。任何一方都可以随时取消 RPC，这会立即终止它。取消前所做的更改不会回滚。',
    'blog.grpc.metadataTitle': '元数据',
    'blog.grpc.metadataText':
      '元数据是包含有关 RPC 调用信息的键值对（例如，身份验证）。键是大小写不敏感的 ASCII 字符串，不能以 grpc- 开头（保留），二进制值键以 -bin 结尾。',
    'blog.grpc.channelsTitle': '通道',
    'blog.grpc.channelsText':
      'gRPC 通道提供到指定主机和端口上的服务器的连接，在创建客户端存根时使用。客户端可以配置通道参数以修改 gRPC 行为（例如，消息压缩）。通道具有状态（已连接、空闲）。',
    'blog.grpc.errorHandlingTitle': '错误处理',
    'blog.grpc.errorHandlingText':
      'gRPC 使用带有状态代码的标准化错误模型。常见状态代码包括 OK、INVALID_ARGUMENT、NOT_FOUND、UNAVAILABLE 和 DEADLINE_EXCEEDED。错误包括状态代码和可选错误消息，提供跨语言的一致错误处理。',
    'blog.grpc.securityTitle': '安全性和身份验证',
    'blog.grpc.securityText':
      'gRPC 支持 TLS（传输层安全性）以实现客户端和服务器之间的加密通信。mTLS（相互 TLS）提供相互身份验证，双方验证彼此的证书。身份验证凭据也可以通过元数据传递，允许包括 OAuth2、JWT 令牌和 API 密钥在内的各种身份验证机制。',
    'blog.grpc.http2Caption': 'http/1.1 vs http/2 multiplexing',
    'blog.grpc.protobufVsJsonTitle': 'protocol buffers vs JSON',
    'blog.grpc.protobufCaption': 'protocol buffers definition and serialized format (binary)',
    'blog.grpc.jsonCaption': 'JSON format (human-readable text)',
    'blog.grpc.tableFeature': 'feature',
    'blog.grpc.tableMultiplexing': 'multiplexing',
    'blog.grpc.tableHeaderCompression': 'header compression',
    'blog.grpc.tableFraming': 'framing',
    'blog.grpc.tableServerPush': 'server push',
    'blog.grpc.tableRequestPrioritization': 'request prioritization',
    'blog.grpc.tableEfficiency': 'efficiency',
    'blog.grpc.tableMultiplexingNo': 'no (one request per connection)',
    'blog.grpc.tableMultiplexingYes': 'yes (multiple requests over single connection)',
    'blog.grpc.tableHeaderCompressionYes': 'yes (HPACK)',
    'blog.grpc.tableFramingText': 'text-based',
    'blog.grpc.tableFramingBinary': 'binary framing',
    'blog.grpc.tableEfficiencyHttp11': 'higher latency, more bandwidth',
    'blog.grpc.tableEfficiencyHttp2': 'lower latency, reduced bandwidth',
    'blog.grpc.tableTransport': 'transport',
    'blog.grpc.tableDataFormat': 'data format',
    'blog.grpc.tableStreaming': 'streaming',
    'blog.grpc.tableCodeGeneration': 'code generation',
    'blog.grpc.tableTypeSafety': 'type safety',
    'blog.grpc.tablePerformance': 'performance',
    'blog.grpc.tableBrowserSupport': 'browser support',
    'blog.grpc.tableProtobufBinary': 'protocol buffers (binary)',
    'blog.grpc.tableJsonText': 'JSON (text)',
    'blog.grpc.tableStreamingNative': 'native support',
    'blog.grpc.tableStreamingLimited': 'limited (SSE, WebSocket)',
    'blog.grpc.tableCodeGenAuto': 'automatic from .proto',
    'blog.grpc.tableCodeGenManual': 'manual',
    'blog.grpc.tableTypeSafetyEnforced': 'enforced by contract',
    'blog.grpc.tableTypeSafetyRuntime': 'runtime validation',
    'blog.grpc.tablePerformanceHigh': 'high (multiplexing, compression)',
    'blog.grpc.tablePerformanceLower': 'lower latency, more bandwidth',
    'blog.grpc.tableBrowserSupportLimited': 'limited (gRPC-Web required)',
    'blog.grpc.tableBrowserSupportNative': 'native',
    'blog.grpc.grpcWithGoTitle': 'gRPC 与 Go',
    'blog.grpc.grpcWithGoText1':
      'gRPC 和 go 彼此超级兼容。由于两者都源自 google，go 中的 gRPC 支持是一流的。go 生态系统拥抱 gRPC 用于微服务，因为 go 的并发模型（goroutines）能够高效处理 HTTP/2 多路复用。',
    'blog.grpc.grpcWithGoText2':
      '虽然 go 具有出色的 gRPC 支持，但 gRPC 本身支持许多语言，包括 java、python、c++、node.js、rust、ruby、php 等。代码生成确保所有语言实现的行为一致。',
    'blog.grpc.grpcWithGoText3':
      '要在 go 中使用 gRPC，请在 .proto 文件中定义服务，并使用 protoc 编译器配合 protoc-gen-go 和 protoc-gen-go-grpc 插件。这会生成消息结构体和服务接口。在服务器端，实现生成的接口并使用 grpc.NewServer() 注册它。在客户端，使用 grpc.Dial() 连接并创建客户端存根。生成的代码是惯用的 go 代码。',
    'blog.grpc.goImageCaption': 'Go 编程语言',
    'blog.grpc.serverExampleCaption': 'go 中的 gRPC 服务器实现示例',
    'blog.grpc.clientExampleCaption': 'go 中的 gRPC 客户端实现示例',
    'blog.grpc.whenToUseTitle': '何时使用 gRPC',
    'blog.grpc.whenToUseIntro': 'gRPC 非常适合：',
    'blog.grpc.whenToUse1': '需要高效、低延迟通信的微服务架构',
    'blog.grpc.whenToUse2': '实时系统，如聊天应用、游戏后端和实时数据源',
    'blog.grpc.whenToUse3': '受益于 gRPC 二进制格式的移动 API，减少带宽使用和电池消耗',
    'blog.grpc.whenToUse4': '流式用例，如文件传输、日志聚合和实时分析',
    'blog.grpc.widelyUsedBy': 'gRPC 被广泛使用于：',
    'blog.grpc.widelyUsedBy1': 'google、netflix 和 square 等公司用于内部微服务通信',
    'blog.grpc.widelyUsedBy2': 'kubernetes 用于其 API',
    'blog.grpc.widelyUsedBy3': 'cloudflare 用于边缘计算',
    'blog.grpc.referencesTitle': '参考',
  },
};
