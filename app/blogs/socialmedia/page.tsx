'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import CarouselContainer from '@/components/carousel/CarouselContainer';

export default function BlogPost() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <article className="max-w-4xl w-full space-y-8 pt-24 md:pt-16">
        <Link
          href="/blogs"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to blogs
        </Link>

        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            How Social Media Changed My Life
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-gray-400">
              March 24, 2025{' '}
              <span className="text-pink-500">// 10 min read</span>
            </span>
            <span className="text-gray-400 ml-auto">Nicholas Chen</span>
          </div>
        </div>

        <p>
          Social media has fundamentally transformed how we communicate, consume
          information, and interact with the world around us. From Facebook and
          Instagram to TikTok and Twitter (X), these platforms have become
          integral parts of our daily lives. In this article, I explore how
          posting on social media and creating a platform changed my life by
          opening up new opportunities, finding friends that share my interests,
          and making money through brand deals and sponosorships.
        </p>

        <div className="my-8 relative aspect-[16/10] w-full overflow-hidden rounded-lg">
          <Image
            src="/insta.jpg"
            alt="Social media platforms displayed on various devices"
            fill
            className="object-cover object-top"
          />
        </div>
        <p className="text-normal text-gray-500 mt-1 text-center italic">
          My instagram account since I started doing social media in 2022
        </p>

        <h2 className="mt-8 text-3xl font-bold">
          Discovering the Social Media Internet World
        </h2>
        <p>
          When I first joined social media, I was curious about what everyone
          was talking about. I started small, posting pictures and thoughts
          about everyday moments. When I hit 1k followers, I decided to start
          posting content that I believed would help people. I began posting
          notes, tips for school and basically anything that was related to
          academia. I would have never imagined that these simple posts would
          evolve into a digital diary that not only reflected who I was but also
          attracted people who shared similar interests.
        </p>

        <div className="my-8 relative w-full overflow-hidden rounded-lg">
          <CarouselContainer />
          <p className="text-normal text-gray-500 mt-4 text-center italic">
            The first TikTok post that went viral and changed my life
          </p>
        </div>

        <h2 className="mt-8 text-3xl font-bold">Building My Platform</h2>
        <p>
          Creating and maintaining a social media presence isn’t just about
          posting content—it’s about building a platform that represents your
          voice. I began experimenting with different formats: videos, photos,
          and live sessions. I quickly learned that authenticity and consistency
          are the keys to connecting with an audience.
        </p>

        <h3>Tips I Learned Along the Way</h3>
        <ul>
          <li>
            <strong>Be Authentic:</strong> People can tell when you’re genuine.
            Sharing your true self—your struggles and successes—helps build
            trust and fosters a loyal following.
          </li>
          <li>
            <strong>Engage With Your Audience:</strong> Respond to comments, ask
            questions, and create content that invites conversation. This not
            only grows your audience but also creates a supportive community.
          </li>
          <li>
            <strong>Stay Consistent:</strong> Regular posting and interaction
            keep your platform alive. Over time, you develop a recognizable
            style and voice that people come back for.
          </li>
          <li>
            <strong>Embrace Change:</strong> Social media is ever-evolving.
            Adapting to new trends and platforms, like TikTok’s rapid rise,
            allowed me to reach new audiences and stay relevant.
          </li>
        </ul>
        <h2 className="mt-8 text-3xl font-bold">Opening New Opportunities</h2>
        <p>
          One of the most exciting aspects of my social media journey has been
          the opportunities that have come my way. Here are some of the ways it
          has opened doors for me:
        </p>

        <div className="my-8 relative aspect-[16/10] w-full overflow-hidden rounded-lg">
          <Image
            src="/insta.jpg"
            alt="Social media platforms displayed on various devices"
            fill
            className="object-cover object-top"
          />
        </div>
        <p className="text-normal text-gray-500 mt-1 text-center italic">
          My instagram account since I started doing social media in 2022
        </p>

        <h3>Personal Growth and New Friendships</h3>
        <p>
          Social media isn’t just about numbers—it’s about the people you meet.
          Through my posts, I connected with individuals who shared my interests
          and values. These relationships have grown from online interactions
          into lasting friendships and collaborations.
        </p>

        <h3>Professional Breakthroughs</h3>
        <p>
          Before social media, I never imagined that I could build a career from
          sharing my passion online. Today, I receive invitations to speak at
          events, collaborate with influencers, and even work with brands on
          exciting projects. These opportunities have allowed me to grow both
          personally and professionally.
        </p>

        <h3>Financial Rewards</h3>
        <p>
          As my following grew, so did the interest from brands looking for
          authentic connections with consumers. Through sponsorships and brand
          deals, I turned my passion into a viable source of income. Here are a
          few insights:
        </p>
        <ul>
          <li>
            <strong>Brand Collaborations:</strong> Working with brands taught me
            how to create content that aligns with both my personal style and
            the brand’s message. This balance is crucial for maintaining
            authenticity while providing value to sponsors.
          </li>
          <li>
            <strong>Monetization Strategies:</strong> I experimented with
            affiliate marketing, sponsored posts, and merchandise. Learning what
            worked for my audience was key to turning my platform into a revenue
            stream.
          </li>
        </ul>

        <div className="my-8 relative aspect-[16/10] w-full overflow-hidden rounded-lg">
          <Image
            src="/insta.jpg"
            alt="Social media platforms displayed on various devices"
            fill
            className="object-cover object-top"
          />
        </div>
        <p className="text-normal text-gray-500 mt-1 text-center italic">
          My instagram account since I started doing social media in 2022
        </p>

        <h2 className="mt-8">Reflecting on the Journey</h2>
        <p>
          Looking back, I see how social media has not only redefined how I
          communicate but also how I see the world. It has given me the tools to
          express myself, share my passions, and create a community that
          supports me every day. The journey hasn’t been without
          challenges—navigating online criticism, staying true to my voice, and
          managing the pressure to constantly create new content. However, these
          experiences have made me more resilient and resourceful.
        </p>

        <h3>What I Would Tell My Younger Self</h3>
        <p>
          If I could go back in time, I’d tell myself to embrace every moment of
          the journey. Social media isn’t just about the destination; it’s about
          the process of learning, growing, and connecting with others along the
          way.
        </p>

        <div className="my-8 relative aspect-[16/10] w-full overflow-hidden rounded-lg">
          <Image
            src="/insta.jpg"
            alt="Social media platforms displayed on various devices"
            fill
            className="object-cover object-top"
          />
        </div>
        <p className="text-normal text-gray-500 mt-1 text-center italic">
          My instagram account since I started doing social media in 2022
        </p>

        <h2 className="mt-8">Final Thoughts</h2>
        <p>
          Social media has transformed my life in unimaginable ways. It has
          allowed me to express myself creatively, connect with people from all
          over the world, and even turn my passion into a career. While the
          digital landscape continues to evolve, one thing remains constant: the
          power of authentic connection. As I continue this journey, I look
          forward to the new opportunities and experiences that lie ahead.
        </p>
        <p>
          Thank you for joining me on this adventure. I hope my story inspires
          you to take a leap of faith in your own digital journey—because you
          never know where it might lead.
        </p>
      </article>
      {/* Footer */}
      <footer className="w-full mt-8 pt-8">
        <div className="max-w-4xl mx-auto w-full">
          <hr className="border-t border-gray-700 mb-8" />
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
        </div>
      </footer>
    </main>
  );
}
