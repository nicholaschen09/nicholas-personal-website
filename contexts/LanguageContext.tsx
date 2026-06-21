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

    // Blog navigation (post content lives in _posts/*.md)
    'blog.back': 'back',
    'blog.contents': 'contents',

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
    'previously.role4': 'bashing bugs',
    'previously.item1': 'Story',
    'previously.item2': 'Honeywell',
    'previously.item3': 'Honeywell',
    'previously.item4': 'Zed Guild',


    // Current roles (compact labels)
    'current.role1': 'tinkering',
    'current.role2': 'ceo & co-founder',

    // Footer
    'footer.copyright': '© 2026 AMAAN BILWAR',
    'footer.by': 'BY AMAAN®',

    // Additional info
    'info.favouriteShow': '> favourite show -> one punch man',
  },
};
