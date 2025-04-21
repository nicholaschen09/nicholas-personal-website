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
              <span className="text-pink-500">// 7 min read</span>
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
          posting content, it’s about building a platform that represents your
          voice. I began experimenting with different formats: videos, photos,
          and live sessions. I quickly learned that authenticity and consistency
          are the keys to connecting with an audience.
        </p>

        <h3 className="mt-8 text-2xl font-bold">
          Tips that I Learned Along the Way
        </h3>
        <ol className="list-decimal list-inside space-y-4">
          <li>
            Being authentic goes a long way. People can tell when you’re
            genuine. Sharing your true self, your struggles and successes help
            build trust and create a loyal following. Nobody wants to follow
            someone who just posts about their successes and never their
            failures. The same goes for someone who just speaks about things
            that everyone agrees with. If you don't have haters you're doing
            something wrong. You should never try to please anyone online.
          </li>
          <li>
            Engage With Your Audience. Respond to comments, ask questions, and
            create content that invites conversation. This not only grows your
            audience but also creates a supportive community. It also allows you
            to build a closer connection between people who follow you which
            keeps them coming back for more.
          </li>
          <li>
            Stay Consistent. Regular posting and interaction keep your platform
            alive. Over time, you develop a recognizable style and voice that
            people come back for. This is one of the biggest factors to whether
            or not a content creator stays viral or not in the long run. All the
            famous people you see on social media have thousands of posts up on
            all different platforms with their account.
          </li>
          <li>
            Embrace Change. Social media is ever-evolving. Adapting to new
            trends and platforms, like TikTok’s rapid rise, allowed me to reach
            new audiences and stay relevant. You should always be looking for
            new ways to change up your content and try new things. If you're not
            growing you're dying.
          </li>
        </ol>
        <h2 className="mt-8 text-3xl font-bold">Opening New Opportunities</h2>
        <p>
          One of the most exciting aspects of my social media journey has been
          the opportunities that have come my way. I've been able to connect
          with other bigger content creators in engineering and cs which was
          pretty cool because I used to look up to those people when I was
          younger. To be able to call them a friend was pretty cool to say. I
          also leveraged social media to help me land internships at places like
          Meta Hash Capital and RBC due to it being a unique trait of mine that
          usually no other candidate had. If you're wondering, yes I did put
          this on my AIF when I applied to UWaterloo and I am certain it helped
          me get into the program.
        </p>

        <div className="my-8 relative aspect-[3/3] w-full overflow-hidden rounded-lg">
          <Image
            src="/uweng.png"
            alt="Social media platforms displayed on various devices"
            fill
            className="object-cover object-top"
          />
        </div>
        <p className="text-normal text-gray-500 mt-1 text-center italic">
          Here's a picture of what I first saw when exploring the syde floor in
          e7 at uwaterloo for the first time
        </p>

        <h3 className="mt-8 text-3xl font-bold">
          Personal Growth and New Friendships
        </h3>
        <p>
          Social media isn’t just about numbers—it’s about the people you meet.
          Through my posts, I connected with individuals who shared my interests
          and values. These relationships have grown from online interactions
          into lasting friendships and collaborations.
        </p>

        <div className="my-8 relative aspect-[16/10] w-full overflow-hidden rounded-lg">
          <Image
            src="/ian.jpg"
            alt="Social media platforms displayed on various devices"
            fill
            className="object-cover object-bottom"
          />
        </div>
        <p className="text-normal text-gray-500 mt-1 text-center italic">
          Pic of Ian I took when he visited the RBC office lol
        </p>

        <h3 className="mt-8 text-3xl font-bold">Professional Breakthroughs</h3>
        <p>
          Before social media, I never imagined that I could build a career from
          sharing my passion online. Today, I receive invitations to speak or
          judge at events, collaborate with influencers, and even work with
          brands on exciting projects. These opportunities have allowed me to
          grow both personally and professionally.
        </p>

        <h3 className="mt-8 text-3xl font-bold">Financial Rewards</h3>
        <p>
          As my following grew, so did the interest from brands looking for
          authentic connections with consumers. Through sponsorships and brand
          deals, I turned my passion into a viable source of income.
        </p>
        <ul>
          <li>
            Working with brands taught me how to create content that aligns with
            both my personal style and the brand’s message. This balance is
            crucial for maintaining authenticity while providing value to
            sponsors. I experimented with affiliate marketing and sponsored
            posts. Learning what worked for my audience was key to turning my
            platform into a revenue stream.
          </li>
        </ul>

        <div className="my-8 relative aspect-[16/3] w-full overflow-hidden rounded-lg">
          <Image
            src="/money.png"
            alt="Social media platforms displayed on various devices"
            fill
            className="object-cover object-top"
          />
        </div>
        <p className="text-normal text-gray-500 mt-1 text-center italic">
          The first brand deal that actually paid some decent money for my video
        </p>

        <h2 className="mt-8 text-3xl font-bold">Final Thoughts</h2>
        <p>
          Social media has transformed my life in unimaginable ways. It has
          allowed me to express myself creatively, connect with people from all
          over the world, and even turn my passion into a career. While the
          digital landscape continues to evolve, one thing remains constant: the
          power of authentic connection. As I continue this journey, I look
          forward to the new opportunities and experiences that lie ahead.
        </p>
      </article>
      {/* Footer */}
      <footer className="w-full mt-8 pt-8">
        <div className="max-w-4xl mx-auto w-full">
          <hr className="border-t border-gray-700 mb-8" />
          <div className="flex flex-col items-center md:items-start">
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
              <Link
                href="https://linktr.ee/nicholas.chen__"
                className="text-white hover:text-gray-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-8 h-8 flex items-center justify-center mt-0.5 ml-1">
                  <img
                    src="/linktree.png"
                    alt="Linktree"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="sr-only">Linktree</span>
              </Link>
            </div>
          </div>
          <p className="text-gray-400 mt-10 mb-4">© 2025 Nicholas Chen.</p>
        </div>
      </footer>
    </main>
  );
}
