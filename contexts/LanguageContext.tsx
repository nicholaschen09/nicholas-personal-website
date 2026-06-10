'use client';

import { createContext, useContext, ReactNode } from 'react';

type Language = 'en';

interface LanguageContextType {
  language: Language;
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
  const language: Language = 'en';

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return <LanguageContext.Provider value={{ language, t }}>{children}</LanguageContext.Provider>;
};

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Hero section
    'hero.greeting': "Hey, I'm ",
    'hero.name.full': 'Amaan!',
    'hero.name.short': 'Amaan!',
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
    'nav.projects': 'projects',
    'nav.projects.title': 'Check out my projects!',
    'nav.blogs': 'blogs',
    'nav.oss': 'oss',
    'nav.resume': 'resume',
    'nav.draw.title': 'Draw something!',
    'nav.blogs.title': 'Read my writing!',
    'nav.contact': 'Contact',
    'nav.linkedin': 'LinkedIn',
    'nav.github': 'GitHub',
    'nav.twitter': 'Twitter',

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
    // Blog template content
    'blog.template.title': 'Your blog title',
    'blog.template.date': 'your name - month day, year - X min read',
    'blog.template.coverAlt': 'Cover image placeholder',
    'blog.template.section1.title': 'Section 1 title',
    'blog.template.section1.p1': 'Write your opening paragraph here.',
    'blog.template.section1.p2': 'Add a second paragraph to set context or tell a short story.',
    'blog.template.section1.imageAlt': 'Section 1 image alt text',
    'blog.template.section1.imageCaption': 'Section 1 image caption',
    'blog.template.section1.p3': 'Add a final paragraph to wrap up this section.',
    'blog.template.section1.subsection.title': 'Subsection title',
    'blog.template.section1.subsection.p1': 'Write a short subsection paragraph here.',
    'blog.template.section2.title': 'Section 2 title',
    'blog.template.section2.p1': 'Introduce the main point for this section.',
    'blog.template.section2.p2': 'Expand with a supporting detail or example.',
    'blog.template.section2.listItem1': 'List item one',
    'blog.template.section2.listItem2': 'List item two',
    'blog.template.section2.listItem3': 'List item three',
    'blog.template.section2.listItem4': 'List item four',
    'blog.template.section2.imageAlt': 'Section 2 image alt text',
    'blog.template.section2.imageCaption': 'Section 2 image caption',
    'blog.template.section2.p3': 'Add a paragraph to explain the list or image above.',
    'blog.template.section2.p4': 'Close the section with a takeaway.',
    'blog.template.section3.title': 'Section 3 title',
    'blog.template.section3.p1': 'Open this section with a key idea.',
    'blog.template.section3.image1Alt': 'Section 3 image alt text',
    'blog.template.section3.image1Caption': 'Section 3 image caption',
    'blog.template.section3.p2': 'Add a supporting paragraph.',
    'blog.template.section3.p3': 'Add another supporting paragraph.',
    'blog.template.section3.p4': 'Share a detail, insight, or lesson learned.',
    'blog.template.section3.p5': 'Optional extra context or example.',
    'blog.template.section3.p6': 'Wrap this part up before the next image.',
    'blog.template.section3.image2Alt': 'Section 3 image alt text',
    'blog.template.section3.image2Caption': 'Section 3 image caption',
    'blog.template.section3.subsection.title': 'Subsection title',
    'blog.template.section3.subsection.p1': 'Write a short paragraph for this subsection.',
    'blog.template.section3.subsection.p2': 'Add a second paragraph to round it out.',
    'blog.template.section3.subsection.listItem1': 'Checklist item one',
    'blog.template.section3.subsection.listItem2': 'Checklist item two',
    'blog.template.section3.subsection.listItem3': 'Checklist item three',
    'blog.template.section3.subsection.listItem4': 'Checklist item four',
    'blog.template.section4.title': 'Section 4 title',
    'blog.template.section4.p1': 'Introduce the section topic.',
    'blog.template.section4.p2': 'Add a supporting detail.',
    'blog.template.section4.p3': 'Add another supporting detail.',
    'blog.template.section4.p4': 'Add a practical example or result.',
    'blog.template.section4.p5': 'Close with a short summary sentence.',
    'blog.template.section4.imageAlt': 'Section 4 image alt text',
    'blog.template.section4.imageCaption': 'Section 4 image caption',
    'blog.template.section5.title': 'Subsection title',
    'blog.template.section5.p1': 'Add a short paragraph for this subsection.',
    'blog.template.section5.p2': 'Add a second short paragraph to finish.',
    'blog.template.section6.title': 'Section 5 title',
    'blog.template.section6.item1.title': 'Comparison item 1:',
    'blog.template.section6.item1.text': 'Explain the first comparison item in 1-2 sentences.',
    'blog.template.section6.item2.title': 'Comparison item 2:',
    'blog.template.section6.item2.text': 'Explain the second comparison item in 1-2 sentences.',
    'blog.template.section6.item3.title': 'Comparison item 3:',
    'blog.template.section6.item3.text': 'Explain the third comparison item in 1-2 sentences.',
    'blog.template.section6.imageAlt': 'Section 5 image alt text',
    'blog.template.section6.imageCaption': 'Section 5 image caption',
    'blog.template.section7.title': 'Section 6 title',
    'blog.template.section7.p1': 'Summarize the future or next steps.',
    'blog.template.section7.p2': 'Add a second paragraph with more detail.',
    'blog.template.section7.p3': 'Close with a final thought.',
    'blog.template.referencesTitle': 'references',
    'blog.template.references.item1': 'https://example.com/source-1',
    'blog.template.references.item2': 'https://example.com/source-2',
    'blog.template.references.item3': 'https://example.com/source-3',
    'blog.template.references.item4': 'https://example.com/source-4',
    'blog.template.note': 'note: list your image sources or attributions at',
    'blog.template.noteLinkLabel': 'your-source-site',
    'blog.template.noteLinkUrl': 'https://example.com',

    // thoughts on schools blog
    'blog.thoughts-about-schools.title': 'The Paradox of Indian Schools: High Talent, Broken Infrastructure',
    'blog.thoughts-about-schools.date': 'Amaan Bilwar - June 10, 2026 - 4 min read',
    'blog.thoughts-about-schools.coverAlt': '',
    'blog.thoughts-about-schools.section1.title': 'The Paradox',
    'blog.thoughts-about-schools.section1.p1':
      'The paradox of Indian schools: high talent, broken infrastructure. India produces some of the world\'s sharpest minds. Yet walk into most of our 1.5M+ schools and you\'ll find:',
    'blog.thoughts-about-schools.section1.p2':
      "We have incredible talent density but the operational infrastructure inside schools hasn't caught up. Not because schools don't want better tools. But because the \"solution\" has always been a monolithic ERP that promises everything and delivers nothing useful. Schools end up with expensive software that doesn't fit their actual workflows, so they default back to spreadsheets and WhatsApp groups (yes, they basically give is what we've understood from all these customer discovery calls)",
    'blog.thoughts-about-schools.section1.imageAlt': '',
    'blog.thoughts-about-schools.section1.imageCaption': '',
    'blog.thoughts-about-schools.section1.p3':
      "The problem isn't adoption. It's architecture. You can't build one platform that works for 1.5M schools -- each has its own way of working, its own constraints, its own combination of broken workflows.",
    'blog.thoughts-about-schools.section2.listItem1':
      'Fees tracked in Excel sheets (reconciled manually)',
    'blog.thoughts-about-schools.section2.listItem2':
      'Parent communication via WhatsApp groups (notifications buried in 200+ messages)',
    'blog.thoughts-about-schools.section2.listItem3':
      'Timetables that collapse the moment one teacher is absent',
    'blog.thoughts-about-schools.section2.listItem4':
      'Report cards rushed every term with copy-pasted comments',
    'blog.thoughts-about-schools.section3.title': 'A Different Approach',
    'blog.thoughts-about-schools.section3.p1':
      "So we're building CampusOS differently. Most software companies show up with a product and ask you to change how you work. We don't. We show up and ask:",
    'blog.thoughts-about-schools.section3.p2':
      "Tell us the one thing that hurts the most. Then we build just that. Not a 200-feature platform you'll never use. Not a system that requires you to change everything overnight. Just the piece of broken infrastructure you operate with every day -- fixed, installed at your school, your staff trained on it.",
    'blog.thoughts-about-schools.section3.subsection.listItem1':
      "what's actually broken?",
    'blog.thoughts-about-schools.section3.subsection.listItem2':
      'Fees taking too long to reconcile?',
    'blog.thoughts-about-schools.section3.subsection.listItem3':
      'Parents missing notices on WhatsApp?',
    'blog.thoughts-about-schools.section3.subsection.listItem4':
      'Timetables falling apart every month?',
    'blog.thoughts-about-schools.section4.title': 'The Mission',
    'blog.thoughts-about-schools.section4.p1':
      "India's talent deserves infrastructure that doesn't hold it back. We're starting with schools, one workflow at a time. Especially when the youth of this country wants to take a stand for the betterment of the education system as a whole.",
    'blog.thoughts-about-schools.section4.p2':
      'If this resonates \u2014 or you know a school drowning in spreadsheets \u2014 I\'d love to talk.',
    'blog.thoughts-about-schools.referencesTitle': '',
    'blog.thoughts-about-schools.references.item1': '',
    'blog.thoughts-about-schools.references.item2': '',
    'blog.thoughts-about-schools.references.item3': '',
    'blog.thoughts-about-schools.references.item4': '',
    'blog.thoughts-about-schools.note': '',
    'blog.thoughts-about-schools.noteLinkLabel': '',
    'blog.thoughts-about-schools.noteLinkUrl': '',


    // scene ai when blog
    'blog.scene-ai-when.title': 'Scene AI When',
    'blog.scene-ai-when.date': 'your name - month day, year - X min read',
    'blog.scene-ai-when.coverAlt': 'Cover image placeholder',
    'blog.scene-ai-when.section1.title': 'Introduction',
    'blog.scene-ai-when.section1.p1': `I know you all have heard it by now, but if you haven't here I am to introduce you to Scene AI. Scene AI started as this side project of mine to merge my love for video editing and computer software.`,
    'blog.scene-ai-when.section1.p2':
      'Add a second paragraph to set context or tell a short story.',
    'blog.scene-ai-when.section1.imageAlt': 'Section 1 image alt text',
    'blog.scene-ai-when.section1.imageCaption': 'Section 1 image caption',
    'blog.scene-ai-when.section1.p3': 'Add a final paragraph to wrap up this section.',
    'blog.scene-ai-when.section1.subsection.title': 'Subsection title',
    'blog.scene-ai-when.section1.subsection.p1': 'Write a short subsection paragraph here.',
    'blog.scene-ai-when.section2.title': 'Where it all began',
    'blog.scene-ai-when.section2.p1':
      'It was really bizzare how it became a thing, if you know how I started.',
    'blog.scene-ai-when.section2.p2': `
    I was watching a video while eating, like any other human, and thought, “I know how to edit videos like this. Neat trick. I should get back into it.” Then I did what any other human does: moved on.


    `,
    'blog.scene-ai-when.section2.p3': `But the thought stuck. Finals ended. April 2025. I’m sitting in my room thinking, “Hmmm, now what?” I’m someone who likes being busy; having nothing to do is rare for me (ask my friends). That itch to make something turned into, “Okay, let’s actually do this.”
`,
    'blog.scene-ai-when.section2.p4': `
    Video editing is fun. Programming’s grown on me thanks to two internships and building the DAQ(Data Acquisition System) for my school’s formula electric racecar team - Bearcats Electric Racing(BER). So why not combine the two? Big undertaking, sure. But at the start I was thinking small: a CLI tool just for me. No grand plan.. Also, I was already making social posts for BER, so the use case was real.`,
    'blog.scene-ai-when.section2.p5': `
    The idea was simple: take a video, pass flags like --trim, and get clean results. Easy, right? That’s what they all say.

    I started researching. If you’re editing programmatically, there’s the undisputed GOAT: Ffmpeg. But I didn’t want to learn this ffmpeg syntax of DOOM and DESPAIR. I wanted something you could use without squinting at docs.

    `,
    'blog.scene-ai-when.section2.p6': `Python was the obvious starting point, familiar, fast to iterate, lots of libraries. CLI tools aren’t difficult* in any language if you know what you’re building.`,
    'blog.scene-ai-when.section2.p7': `Three days in, maybe 30–45 minutes a day, I had a working prototype. No Adobe Premiere Pro crashes, no sluggish timelines, just code doing what I asked. I felt like Frankenstein watching his monster take a step.`,
    'blog.scene-ai-when.section2.p8': `
        Of course, I immediately wanted more features. That’s just how this goes. And soon “my little CLI” wasn’t little anymore: I built a backend, roped in a childhood friend as co-founder, put a frontend on top, and founded The Timeline Company. Scene AI was born (formerly Reduct), and the side-quest became a real thing`,
    'blog.scene-ai-when.section3.title': 'Where it is now',
    'blog.scene-ai-when.section3.p1': `I'm rebuilding the rough prototype into a codebase that is fast, stable, and easier to maintain. Parts that need raw performance live in Rust. The rest stay in Python for flexibility. The refactor is a steep curve, but worth it.`,
    'blog.scene-ai-when.section3.image1Alt': 'Section 3 image alt text',
    'blog.scene-ai-when.section3.image1Caption': 'Section 3 image caption',
    'blog.scene-ai-when.section3.p2': 'Add a supporting paragraph.',
    'blog.scene-ai-when.section3.p3':
      'We’re narrowing focus. Instead of chasing pros, we’re helping beginners, clubs, friends, and anyone who wants to post without wrestling timelines. Simple templates, smart assistants, and clean exports that get you to publish.',
    'blog.scene-ai-when.section3.p4':
      'Scene AI is in alpha with a growing waitlist. It’s stable enough to use, and we’re shipping improvements steadily. Expect more in 2026.',

    'blog.scene-ai-when.section3.subsection.listItem4': 'Checklist item four',
    'blog.scene-ai-when.section4.title': 'Final Thoughts',
    'blog.scene-ai-when.section4.p1': `let's write wrap it up, shall we?`,
    'blog.scene-ai-when.section4.p2':
      'Scene AI started as me scratching an itch: I like editing, I like building, so why not build the thing I wanted when I was editing? It’s not a moonshot manifesto, it’s a friendly, fast tool that helps you hit publish without spending your entire evening wrangling timelines.',
    'blog.scene-ai-when.section4.p3': `I care about three things: speed, simplicity, and kindness.`,
    'blog.scene-ai-when.section4.listItem1': `Speed, because waiting on a render bar is soul-sucking.`,
    'blog.scene-ai-when.section4.listItem2': `Simplicity, because most people don’t want to learn a new cockpit to post a 30-second clip.`,
    'blog.scene-ai-when.section4.listItem3': `Kindness, because guardrails, privacy, and a nudge of confidence matter when you’re putting yourself out there.`,
    'blog.scene-ai-when.section4.p4':
      'If any of this resonates - if you’ve got a club recap, a hackathon demo, a meme that deserves life outside your camera roll, come along. Join the waitlist, DM me ideas, send me weird edge cases.',
    'blog.scene-ai-when.section4.p5': 'I won’t overpromise; I’ll ship, listen, and iterate.',
    'blog.scene-ai-when.referencesTitle': 'notes',
    'blog.scene-ai-when.references.item1': `Difficult is subjective. I can't write assembly, Ruby, Zig or Haskell so don't take my word for it`,

    // jia blog
    'blog.introducing-jia.title': 'Introducing Jia — the Search Engine for Everything',
    'blog.introducing-jia.date': 'Amaan Bilwar - December 23, 2025 - 6 min read',
    'blog.introducing-jia.coverAlt': 'Cover image placeholder',
    'blog.introducing-jia.section1.title': 'What is Jia?',
    'blog.introducing-jia.section1.p1': `Imagine this, you upload something to Google Drive, and think to yourself "thank God for cloud storage, I can view this from anywhere I need". A few days later, you need that file (it could be an image, video, or a PDF) again but cannot remember the name of the file for the life of you. Now what? Sort by date? Probably. You're stressed and miss it even after a few scrolls up and down the page. Now what? Did you actually think you'd remember the name of the file with random characters at the end combined with your incredibly abysmal way of naming things, especially if they're important?.`,
    'blog.introducing-jia.section1.p2': `Silly enough, you find that file a couple of days later and in shock you say "Of course I named it that ughh"`,
    'blog.introducing-jia.section1.imageAlt': 'Section 1 image alt text',
    'blog.introducing-jia.section1.imageCaption': 'Section 1 image caption',
    'blog.introducing-jia.section2.title': 'How does Jia help?',
    'blog.introducing-jia.section2.p1': `We don't just store and host your files for you, we understand what your file is about, despite the format. If it's a video.`,
    'blog.introducing-jia.section2.p2': 'We also:',
    'blog.introducing-jia.section2.listItem1': `who's in the video`,
    'blog.introducing-jia.section2.listItem2': 'where is it taking place',
    'blog.introducing-jia.section2.listItem3': `what objects are in the video`,
    'blog.introducing-jia.section2.listItem4': 'the VIBES',
    'blog.introducing-jia.section2.imageAlt': 'Section 2 image alt text',
    'blog.introducing-jia.section2.imageCaption': 'Section 2 image caption',
    'blog.introducing-jia.section2.p3': `You get the point.`,
    'blog.introducing-jia.section2.p4': `Similarly, if it's a PDF, for example, we extract the content to process it. On top of this, you can attach your own tags to the file you're uploading. Like "homework", "college", "trip to hawaii" etc.`,
    'blog.introducing-jia.section2.p5': `In this way, if you remember anything in or about the file, we can find it for you.`,
    'blog.introducing-jia.section3.title': 'Why Jia?',
    'blog.introducing-jia.section3.p1': `Google Drive is ass, don't even get me started on the search functionality.`,
    'blog.introducing-jia.section3.image1Alt': 'Section 3 image alt text',
    'blog.introducing-jia.section3.image1Caption': 'Section 3 image caption',

    'blog.introducing-jia.section3.subsection.title': 'How do I achieve this?',
    'blog.introducing-jia.section3.subsection.p1': `Currently, the functionality is limited to videos, which might seem crazy because videos are the most difficult file type to index because they're dynamic and multimodal. I am very close with getting the video search tool working decently, which means images, files like pdfs and word docs should be way easier to preprocess.`,
    'blog.introducing-jia.section3.subsection.p2': `Let's talk about how I do this with videos, because the rest would just be a subset of that.`,
    'blog.introducing-jia.section3.subsection.p3': `With our preprocessing pipeline, I first chunk the videos, meaning they're split into smaller 30-second chunks. Then multiple threads are spawned for a multi-process pipeline that I call "INDEXING". It has:`,

    'blog.introducing-jia.section3.subsection.listItem1': `Transcription pipeline - extracts audio from the chunk, passes that to an LLM for transcription, and writes to JSON the transcript. It's important to keep in mind I do word-level transcription because video editing needs very precise control.`,
    'blog.introducing-jia.section3.subsection.listItem2': `Scene / environment detection - for each chunk made for the video, we take three screenshots: one at the start, one in the middle, and the very last frame of that chunk. We then pass these images to an LLM to get a general idea of what the video is about in terms of objects and environment. The JSON written by the LLM is very detailed, containing objects found, scene/environment, number of people, etc.`,
    'blog.introducing-jia.section3.subsection.listItem3': `REDACTED - YOU DIDN'T THINK I WAS GONNA TELL YOU EVERYTHING, RIGHT?`,
    'blog.introducing-jia.section3.subsection.p4': `Currently in the process of fine-tuning a model for various video editing use cases.`,

    'blog.introducing-jia.section4.title': `But I don't want you to have my data`,
    'blog.introducing-jia.section4.p1': `No worries, I have no interest in your data either. I'm committed to building software that's private, efficient, and treats users with respect. I always prioritize people first and follow strict standards. There's absolutely no hidden agenda.`,
    'blog.introducing-jia.section4.p2': 'No data retention by default, not as a hidden option.',
    'blog.introducing-jia.section4.p3': `I'm designing this in a way where I cannot read or access any information about the user or their files unless I have a confirmation, which will be asked for when or if a user reports a bug that requires me to look at their data.`,

    // Blog template content
    'blog.git101.title': 'Saving you from your Git troubles',
    'blog.git101.date': 'Amaan Bilwar - February 25, 2026',
    'blog.git101.coverAlt': 'Cover image placeholder',
    'blog.git101.section1.title': 'Well Well Well',
    'blog.git101.section1.p1':
      "We've all been there. Learning how to program, learn about git & github, save code for free. Everything's so much fun at the start. and then BOOM. Its all over.",
    'blog.git101.section1.p2':
      'Let me save you this trouble of experiencing this downfall. So what do you actually need to know to save yourself from what I\'m going to call in this blog, "Your Git Troubles"?',
    'blog.git101.section1.imageAlt': 'Explosion meme',
    'blog.git101.section1.imageCaption': 'When you realize Git is not just "git add ."',
    'blog.git101.section1.p3':
      "P.S. the things Im going to be talking about are helpful but I wouldn't have felt that they were useful if it weren't for the tools I was using when going through these \"phases\". LazyGit is gonna be life saver for you lot, it does look intimidating at first but trust me it'll change your life.",
    'blog.git101.section1.subsection.title': '',
    'blog.git101.section1.subsection.p1': '',
    'blog.git101.section2.title': 'Merge Conflicts',
    'blog.git101.section2.p1': "Let's address the elephant in the room! (elephant sound effect!)",
    'blog.git101.section2.p2':
      "If you were expecting some magical way of resolving merge conflicts using agentic coding, vibe-coding or LLMs, let me break it to you, it's not as easy as it sounds. I know this because me and friends were trying to solve the same problem, resolving merge conflicts with soarailabs.",
    'blog.git101.section2.listItem1':
      'AI tools struggle with understanding context of the conflict',
    'blog.git101.section2.listItem2': 'Manual resolution often faster for complex conflicts',
    'blog.git101.section2.listItem3': 'Understand the codebase before using AI assistance',
    'blog.git101.section2.listItem4': 'Communicate with teammates about conflicting changes',
    'blog.git101.section2.imageAlt': '',
    'blog.git101.section2.imageCaption': '',
    'blog.git101.section2.p3':
      "If you're interested in learning how we tried to tackle this, let me know.",
    'blog.git101.section2.p4': '',
    'blog.git101.section3.title': 'Rebasing',
    'blog.git101.section3.p1':
      'If you want the short version: rebasing is a cleaner, better way to merge. But if you want to understand why, keep reading.',
    'blog.git101.section3.image1Alt': 'Rebase illustration',
    'blog.git101.section3.image1Caption': 'Rebasing replays your commits on top of current main',
    'blog.git101.section3.p2':
      "Imagine you're working on a feature branch called 'feat-login'. Meanwhile, 'main' has moved forward with commits from other teammates. Instead of merging 'main' into your branch (which creates a messy merge commit), rebasing essentially replays your commits on top of the current 'main'.",
    'blog.git101.section3.p3':
      'Merge puts your changes off to the side with a note. Rebase moves them straight on top. Same result, cleaner history.',
    'blog.git101.section3.p4': '',
    'blog.git101.section3.p5': '',
    'blog.git101.section3.p6': '',
    'blog.git101.section3.image2Alt': '',
    'blog.git101.section3.imageCaption': '',
    'blog.git101.section3.subsection.title': "Why It's Important to Rebase",
    'blog.git101.section3.subsection.p1':
      "Cleaner Commit History: When you merge, you get those ugly \"Merge branch 'feat-login' into 'main'\" commits cluttering your history. With rebasing, your commits stack linearly on top of 'main'.",
    'blog.git101.section3.subsection.p2':
      "Fewer Merge Conflicts: When you regularly rebase onto 'main', you're constantly resolving conflicts in small doses. If you wait until the end and merge, you might have to untangle conflicts from weeks of divergent work all at once.",
    'blog.git101.section3.subsection.listItem1': 'Cleaner commit history',
    'blog.git101.section3.subsection.listItem2': 'Fewer merge conflicts',
    'blog.git101.section3.subsection.listItem3': 'Instant feedback on breaking changes',
    'blog.git101.section3.subsection.listItem4': '',
    'blog.git101.section4.title': 'Cherry picking',
    'blog.git101.section4.p1':
      'Let me tell you when i first realized how powerful git rebase was. I was aware about this feature way before but never understood where I would personally use.',
    'blog.git101.section4.p2':
      'let me use the example that happened to me some time ago, which made me realize how good git cherry picking actually is. I was working on HelixDB, a graph database written in rust. I wanted to combine vector search and keyword search using their RRF reranker.',
    'blog.git101.section4.p3':
      "I was also writing another feature for helixdb - passing multiple params in their 'Embed' function. I wrote the Embed feature but decided it would probably be something only I use so there's no point in making a PR.",
    'blog.git101.section4.p4':
      'Accidentally, i checked out from the feat/embed branch to work on the RRF feature. My RRF feature relies on a lot of changes made during Embed feature work, and if thats not a feature thats going to be merged my RRF stuff wont work.',
    'blog.git101.section4.p5':
      "That's when I remembered git cherry picking - Apply the changes introduced by some existing commits. I basically yoinked commits from on top of the other feature branch, checked out a new branch from main and slapped those commits on to the new feature branch.",
    'blog.git101.section4.imageAlt': '',
    'blog.git101.section4.imageCaption': '',
    'blog.git101.section5.title': 'Digestive Commits',
    'blog.git101.section5.p1':
      "Small, focused commits are the difference between a git history you can read and one that makes you want to rip your hair out. Think of commits like saving a document. You wouldn't write 5000 words, save once, then call it a day.",
    'blog.git101.section5.p2':
      "If your commit message has 'and' in it, it should probably be two commits. 'Added login form and validation' = two commits. 'Fixed bug in auth middleware' = one commit, good.",
    'blog.git101.section6.title': 'Sane & Non AI PRs',
    'blog.git101.section6.item1.title': 'Why it matters:',
    'blog.git101.section6.item1.text':
      'OSS can be incredible—open-sourcing the Linux kernel helped put Linux everywhere. Yet open source feels harder now: AI-assisted coding has led to repo standards being ignored.',
    'blog.git101.section6.item2.title': 'Small PRs:',
    'blog.git101.section6.item2.text':
      "Your PR should be small and digestable. Maintainers shouldn't push it to the side because you remove 3k lines and added 7k lines. PRs with smaller changes are easier to review.",
    'blog.git101.section6.item3.title': 'Respect the maintainers:',
    'blog.git101.section6.item3.text':
      "Stop using AI to make PRs (I recommend learning about the codebase with AI and being comfortable in navigating where different parts of the project live first). That's the least you can do to respect the project you want to contribute to.",
    'blog.git101.section6.imageAlt': '',
    'blog.git101.section6.imageCaption': '',
    'blog.git101.section7.title': '',
    'blog.git101.section7.p1': 'If I can tell that a PR is AI SLOP, trust me they can fs.',
    'blog.git101.section7.p2': '',
    'blog.git101.section7.p3': '',
    'blog.git101.referencesTitle': 'references',
    'blog.git101.references.item1': 'https://github.com/ghostty-org/ghostty',
    'blog.git101.references.item2': 'https://github.com/mitchellh/vouch',
    'blog.git101.references.item3': 'https://github.com/zed-industries/zed/',
    'blog.git101.references.item4': 'https://zed.dev/community/zed-guild',
    'blog.git101.note': '',
    'blog.git101.noteLinkLabel': '',
    'blog.git101.noteLinkUrl': '',

    // tmux-clone blog
    'blog.tmux-clone.title': 'Building a tmux Clone for Windows in Rust',
    'blog.tmux-clone.date': 'Amaan Bilwar - April 14, 2026',
    // 'blog.tmux-clone.coverAlt': 'Terminal multiplexer screenshot',
    'blog.tmux-clone.section1.title': 'What I Built',
    'blog.tmux-clone.section1.p1':
      'A more detailed version of this blog is already in the works with screenshots & code snippets. I built a Windows terminal multiplexer from scratch. Think tmux, but for Windows, written in Rust.',
    'blog.tmux-clone.section1.p2':
      'Started as a learning project to understand how terminal multiplexers work under the hood. Wanted to know how tmux actually manages multiple terminals in one window.',
    'blog.tmux-clone.section1.p3':
      ' This blog documents what I learned building it, the challenges I faced, and why keyboard input on Windows is surprisingly difficult.',
    // 'blog.tmux-clone.section1.imageAlt': 'Project structure',
    'blog.tmux-clone.section1.imageCaption': 'The core components I built',
    'blog.tmux-clone.section2.title': 'Why Windows is Different',
    'blog.tmux-clone.section2.p1':
      'On Unix, PTYs (pseudo-terminals) are straightforward. On Windows, you need ConPTY - the Console Pseudo Terminal.',
    'blog.tmux-clone.section2.p2':
      'ConPTY is Microsoft solution for terminal emulation. It handles the complexity of translating between Windows console API and modern terminal expectations.',
    'blog.tmux-clone.section2.listItem1': 'CreatePseudoConsole() creates the PTY',
    'blog.tmux-clone.section2.listItem2':
      'Two pipes: input (write to shell) and output (read from shell)',
    'blog.tmux-clone.section2.listItem3':
      'CreateProcessW with STARTF_USESTDHANDLES spawns the shell',
    // 'blog.tmux-clone.section2.listItem4': 'Much more complex than Unix ptys',
    // 'blog.tmux-clone.section2.imageAlt': 'ConPTY architecture diagram',
    'blog.tmux-clone.section2.imageCaption': 'How ConPTY connects your app to the shell',
    'blog.tmux-clone.section2.p3':
      'The key insight: Windows terminal apps need to create a pseudo console, then spawn a process where stdin/stdout connect to that console.',
    'blog.tmux-clone.section2.p4':
      'On Unix its just open(/dev/pts/X). On Windows its... significantly more.',

    'blog.tmux-clone.section3.title': 'The Core Architecture',
    'blog.tmux-clone.section3.p1': 'Heres how the multiplexer works:',
    // 'blog.tmux-clone.section3.image1Alt': 'Architecture diagram',
    'blog.tmux-clone.section3.image1Caption': 'Data flow through the multiplexer',
    'blog.tmux-clone.section3.p2':
      'tty.rs wraps the ConPTY API. Creates the pseudo console and handles spawning cmd.exe or PowerShell.',
    'blog.tmux-clone.section3.p3':
      'pane.rs represents one terminal. Holds the TTY, title, and state for a single shell session.',
    'blog.tmux-clone.section3.p4':
      'window.rs manages multiple panes. Tracks layout and which pane is active.',
    'blog.tmux-clone.section3.p5':
      'ui.rs renders everything to the terminal. Draws borders, status bar, and terminal output.',
    'blog.tmux-clone.section3.p6': 'main.rs ties it all together with the event loop.',
    // 'blog.tmux-clone.section3.image2Alt': 'Code snippet',
    'blog.tmux-clone.section3.image2Caption': 'Creating a new pane',

    'blog.tmux-clone.section3.subsection.title': 'Key Challenges',
    'blog.tmux-clone.section3.subsection.p1':
      'Building this taught me several things about Windows terminal programming:',
    'blog.tmux-clone.section3.subsection.p2': 'Add a second paragraph to round it out.',
    'blog.tmux-clone.section3.subsection.listItem1':
      'ConPTY API is well-documented but tricky to use correctly',
    'blog.tmux-clone.section3.subsection.listItem2': 'Rust windows crate is excellent but verbose',
    'blog.tmux-clone.section3.subsection.listItem3':
      'Terminal rendering is complex (ANSI escape codes, cursor positioning)',
    'blog.tmux-clone.section3.subsection.listItem4':
      'Input handling is the hardest part on Windows',

    'blog.tmux-clone.section4.title': 'The Keyboard Input Problem',
    'blog.tmux-clone.section4.p1': 'The biggest challenge: getting keyboard input to work.',
    'blog.tmux-clone.section4.p2': 'I tried multiple approaches:',
    'blog.tmux-clone.section4.p3': '1. crossterm event reading - events never came through',
    'blog.tmux-clone.section4.p4':
      '2. Direct stdin read - characters went to the shell instead of my code',
    'blog.tmux-clone.section4.p5': '3. Windows Console API - had various API issues',
    // 'blog.tmux-clone.section4.imageAlt': 'Debug output showing the problem',
    // 'blog.tmux-clone.section4.imageCaption': 'What I saw when keys were pressed - nothing!',

    'blog.tmux-clone.section5.title': 'Why This Happens',
    'blog.tmux-clone.section5.p1':
      'The fundamental issue is that terminal input is designed to go to the shell, not to your application.',
    'blog.tmux-clone.section5.p2':
      'Without raw mode interception at the right level, keys either go to cmd.exe or get lost in the ConPTY layer.',

    'blog.tmux-clone.section6.title': 'Alternatives',
    'blog.tmux-clone.section6.item1.title': 'Windows Terminal:',
    'blog.tmux-clone.section6.item1.text':
      'Microsofts official solution. Works great, has tabs and split panes.',
    'blog.tmux-clone.section6.item2.title': 'WezTerm:',
    'blog.tmux-clone.section6.item2.text':
      'Fast, cross-platform terminal with built-in multiplexing.',
    'blog.tmux-clone.section6.item3.title': 'Tabby:',
    'blog.tmux-clone.section6.item3.text': 'Electron-based with GUI, easier to extend.',
    // 'blog.tmux-clone.section6.imageAlt': 'Alternatives comparison',
    'blog.tmux-clone.section6.imageCaption':
      'If you need a working solution today, use these instead',

    'blog.tmux-clone.section7.title': 'What I Learned',
    'blog.tmux-clone.section7.p1':
      'Even though its not finished, this project taught me a ton about systems programming on Windows.',
    'blog.tmux-clone.section7.p2':
      'The core terminal functionality works - spawning shells, reading output, rendering to screen. Its just the key input that blockers completion.',
    'blog.tmux-clone.section7.p3':
      'Sometimes the most valuable outcome is understanding WHY something is hard, not finishing it.',

    'blog.tmux-clone.referencesTitle': 'references',
    'blog.tmux-clone.references.item1':
      'https://devblogs.microsoft.com/commandline/windows-command-line-introducing-the-windows-pseudo-console-conpty/',
    'blog.tmux-clone.references.item2': 'https://github.com/microsoft/terminal',
    'blog.tmux-clone.references.item3': 'https://crates.io/crates/windows',
    'blog.tmux-clone.references.item4': 'https://docs.rs/crossterm/latest/crossterm/',
    'blog.tmux-clone.note':
      'Note: If you want to build this, Id recommend using a different approach like leveraging existing terminal emulation crates or building in a language with better Windows terminal support.',
    'blog.tmux-clone.noteLinkLabel': 'portable-pty crate',
    'blog.tmux-clone.noteLinkUrl': 'https://crates.io/crates/portable-pty',
    // oss section
    'oss.title': 'oss',
    'oss.zed': 'Zed IDE',
    'oss.geminicli': 'Gemini CLI',
    'oss.helixdb': 'HelixDB',
    // Projects section
    'projects.title': 'projects',
    'projects.theSearchThing': 'semantic search engine for your OS',
    'projects.sqlParser': 'parser that can query flat JSON objects',
    'projects.pi-openresolve': 'merge conflict resolver for pi',
    'projects.bettervscode': 'private, fast, debloated vscode',
    'projects.zedZsh': 'extension for zsh for the Zed IDE',
    'projects.hqlNvim': 'neovim plugin for HQL highlighting',
    'projects.helixdbIndexer': 'codebase indexer for agents',
    'projects.vimBrowser': 'vim keybindings for your browser',

    // Projects list labels (home page)
    'projects.label.theSearchThing': 'the-search-thing',
    'projects.label.pi-openresolve': 'pi-openresolve',
    'projects.label.bettervscode': 'better-vscode',
    'projects.label.hql-nvim': 'hql nvim plugin',
    'projects.label.zed-zsh': 'zed zsh extension',
    'projects.label.helixdb-indexer': 'helixdb codebase indexer',
    'projects.label.vim': 'vim for the browser',

    // Home hero title
    'home.title': 'hi im amaan',

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
    'previously.item1': 'Story',
    'previously.item2': 'Honeywell',
    'previously.item3': 'Honeywell',

    // Current roles (compact labels)
    'current.role1': 'engineering',
    'current.role2': 'engineering',

    // Footer
    'footer.copyright': '© 2026 AMAAN BILWAR',
    'footer.by': 'BY AMAAN®',

    // Additional info
    'info.favouriteShow': '> favourite show -> one punch man',
  },
};
