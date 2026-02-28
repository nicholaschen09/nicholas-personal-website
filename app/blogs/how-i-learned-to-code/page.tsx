'use client';

import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';
import TableOfContents, { TOCSection } from '@/components/TableOfContents';

export default function SoftwareEngineeringLearningBlog() {
  const { language, setLanguage, t } = useLanguage();

  const sections: TOCSection[] = useMemo(
    () => [
      { id: 'year-2023', title: t('blog.coding.year2023') },
      { id: 'year-2024', title: t('blog.coding.year2024') },
      { id: 'year-2025', title: t('blog.coding.year2025') },
      { id: 'year-2026', title: t('blog.coding.year2026') },
    ],
    [t],
  );

  useEffect(() => {
    // Update document title for client-side
    document.title = t('blog.coding.title');
  }, [t, language]);

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-stone-300 pb-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto pt-12 flex gap-8 items-start justify-center">
        <TableOfContents sections={sections} title={t('blog.contents')} />
        <ImageLightbox>
          <article className="w-full lg:max-w-lg">
            {/* Back link */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-stone-500 hover:text-stone-100 hover:bg-stone-800/80 transition-colors mb-4 text-sm px-2 py-1 -ml-2 rounded-md"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M10 12L6 8L10 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {t('blog.back')}
            </Link>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">
              {t('blog.coding.title')}
            </h1>
            <p className="text-stone-500 text-sm mb-6">{t('blog.coding.date')}</p>

            {/* Cover image */}
            <img
              src="/blogs/code/iterm2.png"
              alt={t('blog.coding.title')}
              className="w-full mb-6"
            />
            <hr className="border-stone-700 mb-8" />

            {/* Content */}
            <div
              className="space-y-8 text-xs md:text-sm leading-relaxed"
              style={{ fontWeight: 400 }}
            >
              {/* 2023 Section */}
              <section>
                <h2
                  id="year-2023"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 scroll-mt-8"
                >
                  {t('blog.coding.year2023')}
                </h2>
                <ul className="space-y-3 text-stone-300">
                  <li>
                    {t('blog.coding.item1').includes('hangman game') ? (
                      <>
                        {t('blog.coding.item1').split('hangman game')[0]}
                        <a
                          href="https://github.com/nicholaschen09/HangmanGame"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh' ? '猜词游戏' : 'hangman game'}
                        </a>
                        {t('blog.coding.item1').split('hangman game')[1]}
                      </>
                    ) : (
                      t('blog.coding.item1')
                    )}
                  </li>
                  <li>{t('blog.coding.item2')}</li>
                  <li>{t('blog.coding.item3')}</li>
                  <li>
                    {t('blog.coding.item4').includes('ccc') ? (
                      <>
                        {t('blog.coding.item4').split('ccc')[0]}
                        <a
                          href="https://cemc.uwaterloo.ca/contests/ccc"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          ccc
                        </a>
                        {t('blog.coding.item4').split('ccc')[1]}
                      </>
                    ) : (
                      t('blog.coding.item4')
                    )}
                  </li>
                  <li>
                    {t('blog.coding.item5').includes('voluntrack') ? (
                      <>
                        {t('blog.coding.item5').split('voluntrack')[0]}
                        <a
                          href="https://github.com/VolunTrack"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          voluntrack
                        </a>
                        {t('blog.coding.item5').split('voluntrack')[1]}
                      </>
                    ) : (
                      t('blog.coding.item5')
                    )}
                  </li>
                </ul>
              </section>

              {/* 2024 Section */}
              <section>
                <h2
                  id="year-2024"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  {t('blog.coding.year2024')}
                </h2>
                <ul className="space-y-3 text-stone-300">
                  <li>
                    {t('blog.coding.item6').includes('gpt wrapper') ? (
                      <>
                        {t('blog.coding.item6').split('gpt wrapper')[0]}
                        <a
                          href="https://github.com/nicholaschen09/PsychAI-main-2"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh' ? 'gpt wrapper' : 'gpt wrapper'}
                        </a>
                        {t('blog.coding.item6').split('gpt wrapper')[1]}
                      </>
                    ) : (
                      t('blog.coding.item6')
                    )}
                  </li>
                  <li>
                    {t('blog.coding.item7').includes('student registration') ||
                    t('blog.coding.item7').includes('移动计算器') ? (
                      <>
                        {
                          t('blog.coding.item7').split(
                            /student registration|学生注册|移动计算器/,
                          )[0]
                        }
                        <a
                          href="https://github.com/nicholaschen09/StudentRegistration"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh' ? '学生注册' : 'student registration'}
                        </a>
                        {t('blog.coding.item7').includes('and') ||
                        t('blog.coding.item7').includes('和') ? (
                          <>
                            {language === 'zh' ? ' 和 ' : ' and '}
                            <a
                              href="https://github.com/nicholaschen09/MobileCalculatorApp"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-stone-200 transition-colors underline"
                            >
                              {language === 'zh' ? '移动计算器应用' : 'mobile calculator app'}
                            </a>
                            {
                              t('blog.coding.item7').split(
                                /mobile calculator app|移动计算器应用/,
                              )[1]
                            }
                          </>
                        ) : (
                          t('blog.coding.item7').split(/student registration|学生注册/)[1]
                        )}
                      </>
                    ) : (
                      t('blog.coding.item7')
                    )}
                  </li>
                  <li>
                    {t('blog.coding.item8').includes('RBC') ? (
                      <>
                        {t('blog.coding.item8').split('RBC')[0]}
                        <a
                          href="https://www.rbc.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          RBC
                        </a>
                        {t('blog.coding.item8').split('RBC')[1]}
                      </>
                    ) : (
                      t('blog.coding.item8')
                    )}
                  </li>
                  <li>
                    {t('blog.coding.item9').includes("valentine's day website") ||
                    t('blog.coding.item9').includes('情人节网站') ? (
                      <>
                        {t('blog.coding.item9').split(/valentine's day website|情人节网站/)[0]}
                        <a
                          href="https://github.com/nicholaschen09/valentine"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh' ? '情人节网站' : "valentine's day website"}
                        </a>
                        {t('blog.coding.item9').split(/valentine's day website|情人节网站/)[1]}
                      </>
                    ) : (
                      t('blog.coding.item9')
                    )}
                  </li>
                  <li>{t('blog.coding.item10')}</li>
                  <li>
                    {t('blog.coding.item11').includes('geeks for geeks') ||
                    t('blog.coding.item11').includes('w3schools') ? (
                      <>
                        {t('blog.coding.item11').split(/geeks for geeks|w3schools/)[0]}
                        <a
                          href="https://www.geeksforgeeks.org/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh' ? 'geeks for geeks' : 'geeks for geeks'}
                        </a>
                        {t('blog.coding.item11').includes('and') ||
                        t('blog.coding.item11').includes('和') ? (
                          <>
                            {language === 'zh' ? ' 和 ' : ' and '}
                            <a
                              href="https://www.w3schools.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-stone-200 transition-colors underline"
                            >
                              w3schools
                            </a>
                            {t('blog.coding.item11').split(/w3schools/)[1]}
                          </>
                        ) : (
                          t('blog.coding.item11').split(/geeks for geeks/)[1]
                        )}
                      </>
                    ) : (
                      t('blog.coding.item11')
                    )}
                  </li>
                  <li>{t('blog.coding.item12')}</li>
                  <li>{t('blog.coding.item13')}</li>
                  <li>{t('blog.coding.item14')}</li>
                </ul>
              </section>

              {/* 2025 Section */}
              <section>
                <h2
                  id="year-2025"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  {t('blog.coding.year2025')}
                </h2>
                <ul className="space-y-3 text-stone-300">
                  <li>{t('blog.coding.item15')}</li>
                  <li>
                    {t('blog.coding.item16').includes('personal website') ||
                    t('blog.coding.item16').includes('个人网站') ? (
                      <>
                        {t('blog.coding.item16').split(/personal website|个人网站/)[0]}
                        <a
                          href="https://github.com/nicholaschen09/personalWebsite"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh' ? '个人网站' : 'personal website'}
                        </a>
                        {t('blog.coding.item16').split(/personal website|个人网站/)[1]}
                      </>
                    ) : (
                      t('blog.coding.item16')
                    )}
                  </li>
                  <li>
                    {t('blog.coding.item17').includes('university of waterloo') ||
                    t('blog.coding.item17').includes('滑铁卢大学') ? (
                      <>
                        {t('blog.coding.item17').split(/university of waterloo|滑铁卢大学/)[0]}
                        <a
                          href="https://uwaterloo.ca/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh' ? '滑铁卢大学' : 'university of waterloo'}
                        </a>
                        {t('blog.coding.item17').split(/university of waterloo|滑铁卢大学/)[1]}
                      </>
                    ) : (
                      t('blog.coding.item17')
                    )}
                  </li>
                  <li>{t('blog.coding.item18')}</li>
                  <li>{t('blog.coding.item19')}</li>
                  <li>{t('blog.coding.item20')}</li>
                  <li>{t('blog.coding.item21')}</li>
                  <li>
                    {t('blog.coding.item22').includes('ownr') ? (
                      <>
                        {t('blog.coding.item22').split('ownr')[0]}
                        <a
                          href="https://www.ownr.co/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          ownr
                        </a>
                        {t('blog.coding.item22').split('ownr')[1]}
                      </>
                    ) : (
                      t('blog.coding.item22')
                    )}
                  </li>
                  <li>{t('blog.coding.item23')}</li>
                  <li>{t('blog.coding.item24')}</li>
                  <li>
                    {t('blog.coding.item25').includes('dependabot') ? (
                      <>
                        {t('blog.coding.item25').split('dependabot')[0]}
                        <a
                          href="https://github.com/qimcis/dependabot"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          dependabot
                        </a>
                        {t('blog.coding.item25').split('dependabot')[1]}
                      </>
                    ) : (
                      t('blog.coding.item25')
                    )}
                  </li>
                  <li>
                    {t('blog.coding.item26').includes('trash sorter') ||
                    t('blog.coding.item26').includes('垃圾分拣器') ? (
                      <>
                        {t('blog.coding.item26').split(/trash sorter|垃圾分拣器/)[0]}
                        <a
                          href="https://github.com/DerrickHa/ht6"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh' ? '垃圾分拣器' : 'trash sorter'}
                        </a>
                        {t('blog.coding.item26').split(/trash sorter|垃圾分拣器/)[1]}
                      </>
                    ) : (
                      t('blog.coding.item26')
                    )}
                  </li>
                  <li>{t('blog.coding.item27')}</li>
                  <li>{t('blog.coding.item28')}</li>
                  <li>{t('blog.coding.item29')}</li>
                  <li>{t('blog.coding.item30')}</li>
                  <li>
                    {t('blog.coding.item31').includes('posture checking robot') ||
                    t('blog.coding.item31').includes('姿势检查机器人') ? (
                      <>
                        {t('blog.coding.item31').split(/posture checking robot|姿势检查机器人/)[0]}
                        <a
                          href="https://github.com/enxilium/posture-checker-robot"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh' ? '姿势检查机器人' : 'posture checking robot'}
                        </a>
                        {t('blog.coding.item31').split(/posture checking robot|姿势检查机器人/)[1]}
                      </>
                    ) : (
                      t('blog.coding.item31')
                    )}
                  </li>
                  <li>{t('blog.coding.item32')}</li>
                  <li>
                    {t('blog.coding.item33').includes('twitter') ||
                    t('blog.coding.item33').includes('twitter') ? (
                      <>
                        {t('blog.coding.item33').split(/twitter/)[0]}
                        <a
                          href="https://twitter.com/nicholaschen09"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          twitter
                        </a>
                        {t('blog.coding.item33').split(/twitter/)[1]}
                      </>
                    ) : (
                      t('blog.coding.item33')
                    )}
                  </li>
                  <li>{t('blog.coding.item34')}</li>
                  <li>
                    {t('blog.coding.item35').includes('etl pipeline') ||
                    t('blog.coding.item35').includes('etl 流水线') ? (
                      <>
                        {t('blog.coding.item35').split(/etl pipeline|etl 流水线/)[0]}
                        <a
                          href="https://github.com/nicholaschen09/customer-feedback-etl-pipeline"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh' ? 'etl 流水线' : 'etl pipeline'}
                        </a>
                        {t('blog.coding.item35').split(/etl pipeline|etl 流水线/)[1]}
                      </>
                    ) : (
                      t('blog.coding.item35')
                    )}
                  </li>
                  <li>
                    {t('blog.coding.item36').includes('discord summarizer bot') ||
                    t('blog.coding.item36').includes('discord 摘要机器人') ? (
                      <>
                        {
                          t('blog.coding.item36').split(
                            /discord summarizer bot|discord 摘要机器人/,
                          )[0]
                        }
                        <a
                          href="https://github.com/nicholaschen09/summary-discord-bot"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh' ? 'discord 摘要机器人' : 'discord summarizer bot'}
                        </a>
                        {
                          t('blog.coding.item36').split(
                            /discord summarizer bot|discord 摘要机器人/,
                          )[1]
                        }
                      </>
                    ) : (
                      t('blog.coding.item36')
                    )}
                  </li>
                  <li>
                    {t('blog.coding.item37').includes('image processor') ||
                    t('blog.coding.item37').includes('图像处理器') ? (
                      <>
                        {t('blog.coding.item37').split(/image processor|图像处理器/)[0]}
                        <a
                          href="https://github.com/nicholaschen09/image-processor"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh' ? '图像处理器' : 'image processor'}
                        </a>
                        {t('blog.coding.item37').split(/image processor|图像处理器/)[1]}
                      </>
                    ) : (
                      t('blog.coding.item37')
                    )}
                  </li>
                  <li>
                    {t('blog.coding.item38').includes('facial recognition') ||
                    t('blog.coding.item38').includes('面部识别') ? (
                      <>
                        {t('blog.coding.item38').split(/facial recognition|面部识别/)[0]}
                        <a
                          href="https://facial-recognition-neural-network.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh' ? '面部识别' : 'facial recognition'}
                        </a>
                        {t('blog.coding.item38').split(/facial recognition|面部识别/)[1]}
                      </>
                    ) : (
                      t('blog.coding.item38')
                    )}
                  </li>
                  <li>{t('blog.coding.item39')}</li>
                  <li>
                    {t('blog.coding.item40').includes('sql query parser') ||
                    t('blog.coding.item40').includes('sql 查询解析器') ? (
                      <>
                        {t('blog.coding.item40').split(/sql query parser|sql 查询解析器/)[0]}
                        <a
                          href="https://github.com/nicholaschen09/sql-query-parser"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh' ? 'sql 查询解析器' : 'sql query parser'}
                        </a>
                        {t('blog.coding.item40').split(/sql query parser|sql 查询解析器/)[1]}
                      </>
                    ) : (
                      t('blog.coding.item40')
                    )}
                  </li>
                  <li>
                    {t('blog.coding.item42').includes('textql') ? (
                      <>
                        {t('blog.coding.item42').split('textql')[0]}
                        <a
                          href="https://textql.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          textql
                        </a>
                        {t('blog.coding.item42').split('textql')[1]}
                      </>
                    ) : (
                      t('blog.coding.item42')
                    )}
                  </li>
                  <li>{t('blog.coding.item43')}</li>
                  <li>
                    {t('blog.coding.item44').includes('url shortener') ||
                    t('blog.coding.item44').includes('url 缩短器') ? (
                      <>
                        {t('blog.coding.item44').split(/url shortener|url 缩短器/)[0]}
                        <a
                          href="https://github.com/nicholaschen09/url-shortener"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh' ? 'url 缩短器' : 'url shortener'}
                        </a>
                        {t('blog.coding.item44').split(/url shortener|url 缩短器/)[1]}
                      </>
                    ) : (
                      t('blog.coding.item44')
                    )}
                  </li>
                  <li>
                    {t('blog.coding.item45').includes('figma') ? (
                      <>
                        {t('blog.coding.item45').split('figma')[0]}
                        <a
                          href="https://github.com/nicholaschen09/whiteboard"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh' ? 'figma' : 'figma'}
                        </a>
                        {t('blog.coding.item45').split('figma')[1]}
                      </>
                    ) : (
                      t('blog.coding.item45')
                    )}
                  </li>
                  <li>{t('blog.coding.item46')}</li>
                  <li>
                    {t('blog.coding.item47').includes('personal website') ||
                    t('blog.coding.item47').includes('个人网站') ? (
                      <>
                        {t('blog.coding.item47').split(/personal website|个人网站/)[0]}
                        <a
                          href="https://nicholaschen.me/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh' ? '个人网站' : 'personal website'}
                        </a>
                        {t('blog.coding.item47').split(/personal website|个人网站/)[1]}
                      </>
                    ) : (
                      t('blog.coding.item47')
                    )}
                  </li>
                  <li>{t('blog.coding.item48')}</li>
                  <li>{t('blog.coding.item49')}</li>
                  <li>
                    {t('blog.coding.item50').includes('textql healthcare') ||
                    t('blog.coding.item50').includes('textql 医疗保健') ? (
                      <>
                        {t('blog.coding.item50').split(/textql healthcare|textql 医疗保健/)[0]}
                        <a
                          href="https://textql.com/healthcare"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh'
                            ? 'textql 医疗保健登录页面'
                            : 'textql healthcare landing page'}
                        </a>
                        {t('blog.coding.item50').split(/textql healthcare|textql 医疗保健/)[1]}
                      </>
                    ) : (
                      t('blog.coding.item50')
                    )}
                  </li>
                  <li>{t('blog.coding.item51')}</li>
                  <li>{t('blog.coding.item52')}</li>
                  <li>
                    {t('blog.coding.item53').includes('ontology') ||
                    t('blog.coding.item53').includes('本体') ? (
                      <>
                        {t('blog.coding.item53').split(/ontology|本体/)[0]}
                        <a
                          href="https://app.textql.com/ontology"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh' ? '本体' : 'ontology'}
                        </a>
                        {t('blog.coding.item53').split(/ontology|本体/)[1]}
                      </>
                    ) : (
                      t('blog.coding.item53')
                    )}
                  </li>
                  <li>{t('blog.coding.item54')}</li>
                  <li>{t('blog.coding.item55')}</li>
                  <li>{t('blog.coding.item56')}</li>
                  <li>
                    {t('blog.coding.item57').includes('random things') ||
                    t('blog.coding.item57').includes('随机东西') ? (
                      <>
                        {t('blog.coding.item57').split(/random things|随机东西/)[0]}
                        <a
                          href="https://github.com/tinytinyexperiments/visuals"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh' ? '随机东西' : 'random things'}
                        </a>
                        {t('blog.coding.item57').split(/random things|随机东西/)[1]}
                      </>
                    ) : (
                      t('blog.coding.item57')
                    )}
                  </li>
                  <li>
                    {t('blog.coding.item58').includes('mercor ML model') ||
                    t('blog.coding.item58').includes('mercor ML 模型') ? (
                      <>
                        {t('blog.coding.item58').split(/mercor ML model|mercor ML 模型/)[0]}
                        <a
                          href="https://github.com/nicholaschen09/mercor-challenge"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh' ? 'mercor ML 模型' : 'mercor ML model'}
                        </a>
                        {t('blog.coding.item58').split(/mercor ML model|mercor ML 模型/)[1]}
                      </>
                    ) : (
                      t('blog.coding.item58')
                    )}
                  </li>
                  <li>
                    {t('blog.coding.item59').includes('benchmarking') ||
                    t('blog.coding.item59').includes('基准测试') ? (
                      <>
                        {t('blog.coding.item59').split(/benchmarking|基准测试/)[0]}
                        <a
                          href="https://github.com/nicholaschen09/llm-benchmarking"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh' ? '基准测试' : 'benchmarking'}
                        </a>
                        {t('blog.coding.item59').split(/benchmarking|基准测试/)[1]}
                      </>
                    ) : (
                      t('blog.coding.item59')
                    )}
                  </li>
                  <li>
                    {t('blog.coding.item60').includes('link route checker script') ||
                    t('blog.coding.item60').includes('链接路由检查脚本') ? (
                      <>
                        {
                          t('blog.coding.item60').split(
                            /link route checker script|链接路由检查脚本/,
                          )[0]
                        }
                        <a
                          href="http://github.com/nicholaschen09/link-health-scanner"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh' ? '链接路由检查脚本' : 'link route checker script'}
                        </a>
                        {
                          t('blog.coding.item60').split(
                            /link route checker script|链接路由检查脚本/,
                          )[1]
                        }
                      </>
                    ) : (
                      t('blog.coding.item60')
                    )}
                  </li>
                </ul>
              </section>

              {/* 2026 Section */}
              <section className="border-b border-stone-700 pb-6 mb-8">
                <h2
                  id="year-2026"
                  className="text-xl md:text-2xl font-semibold text-white mb-4 mt-8 scroll-mt-8"
                >
                  {t('blog.coding.year2026')}
                </h2>
                <ul className="space-y-3 text-stone-300">
                  <li>
                    {t('blog.coding.item61').includes('system design') ||
                    t('blog.coding.item61').includes('系统设计') ? (
                      <>
                        {t('blog.coding.item61').split(/system design|系统设计/)[0]}
                        <a
                          href="https://www.karanpratapsingh.com/courses/system-design"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh' ? '系统设计' : 'system design'}
                        </a>
                        {t('blog.coding.item61').split(/system design|系统设计/)[1]}
                      </>
                    ) : (
                      t('blog.coding.item61')
                    )}
                  </li>
                  <li>
                    {t('blog.coding.item62').includes('blog') ||
                    t('blog.coding.item62').includes('博客') ? (
                      <>
                        {t('blog.coding.item62').split(/blog|博客/)[0]}
                        <Link
                          href="/blogs/grpc"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh' ? '博客' : 'blog'}
                        </Link>
                        {t('blog.coding.item62').split(/blog|博客/)[1] || ''}
                      </>
                    ) : (
                      t('blog.coding.item62')
                    )}
                  </li>
                  <li>
                    {t('blog.coding.item63').includes('insforge') ||
                    t('blog.coding.item63').includes('InsForge') ? (
                      <>
                        {t('blog.coding.item63').split(/insforge|InsForge/)[0]}
                        <a
                          href="https://github.com/InsForge/InsForge"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh' ? 'insforge' : 'insforge'}
                        </a>
                        {t('blog.coding.item63').split(/insforge|InsForge/)[1] || ''}
                      </>
                    ) : (
                      t('blog.coding.item63')
                    )}
                  </li>
                  <li>
                    {t('blog.coding.item64').includes('uoftatlas.com') &&
                    t('blog.coding.item64').includes('waterlooatlas') ? (
                      <>
                        {t('blog.coding.item64').split('uoftatlas.com')[0]}
                        <a
                          href="https://www.uoftatlas.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          uoftatlas.com
                        </a>
                        {
                          t('blog.coding.item64')
                            .split('uoftatlas.com')[1]
                            .split('waterlooatlas')[0]
                        }
                        <a
                          href="https://waterlooatlas.vercel.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          waterlooatlas
                        </a>
                        {t('blog.coding.item64').split('waterlooatlas')[1] || ''}
                      </>
                    ) : (
                      t('blog.coding.item64')
                    )}
                  </li>
                  <li>
                    {t('blog.coding.item65').includes('blog') ||
                    t('blog.coding.item65').includes('博客') ? (
                      <>
                        {t('blog.coding.item65').split(/blog|博客/)[0]}
                        <Link
                          href="/blogs/first-internship"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh' ? '博客' : 'blog'}
                        </Link>
                        {t('blog.coding.item65').split(/blog|博客/)[1] || ''}
                      </>
                    ) : (
                      t('blog.coding.item65')
                    )}
                  </li>
                  <li>
                    {t('blog.coding.item66').includes('sql query parser') ||
                    t('blog.coding.item66').includes('sql 查询解析器') ? (
                      <>
                        {t('blog.coding.item66').split(/sql query parser|sql 查询解析器/)[0]}
                        <a
                          href="https://sql-query-parser.vercel.app/blog"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          {language === 'zh' ? 'sql 查询解析器' : 'sql query parser'}
                        </a>
                        {t('blog.coding.item66').split(/sql query parser|sql 查询解析器/)[1]}
                      </>
                    ) : (
                      t('blog.coding.item66')
                    )}
                  </li>
                  <li>{t('blog.coding.item68')}</li>
                  <li>
                    {t('blog.coding.item69').includes('kubernetes') ? (
                      <>
                        {t('blog.coding.item69').split('kubernetes')[0]}
                        <a
                          href="https://kylejeong.com/blog/what-is-kubernetes"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-stone-200 transition-colors underline"
                        >
                          kubernetes
                        </a>
                        {t('blog.coding.item69').split('kubernetes')[1]}
                      </>
                    ) : (
                      t('blog.coding.item69')
                    )}
                  </li>
                  <li>{t('blog.coding.item70')}</li>
                </ul>
              </section>
            </div>

            <Footer className="mt-10" />
          </article>
        </ImageLightbox>
      </div>
    </main>
  );
}
