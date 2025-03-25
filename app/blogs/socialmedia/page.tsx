import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function BlogPost() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24">
      <article className="max-w-4xl w-full space-y-8 pt-24 md:pt-16">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to homepage
        </Link>

        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            The Impact of Social Media on Modern Society
          </h1>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-gray-400">
              March 24, 2025{' '}
              <span className="text-pink-500">// 10 min read</span>
            </span>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="bg-transparent text-white border-gray-500 font-medium"
              >
                Social Media
              </Badge>
              <Badge
                variant="outline"
                className="bg-transparent text-white border-gray-500 font-medium"
              >
                Technology
              </Badge>
              <Badge
                variant="outline"
                className="bg-transparent text-white border-gray-500 font-medium"
              >
                Digital Culture
              </Badge>
            </div>
          </div>
        </div>

        <div className="prose prose-invert max-w-none">
          <p>
            Social media has fundamentally transformed how we communicate,
            consume information, and interact with the world around us. From
            Facebook and Instagram to TikTok and Twitter, these platforms have
            become integral parts of our daily lives. In this article, I'll
            explore the multifaceted impact of social media on modern society,
            examining both its benefits and challenges.
          </p>

          <div className="my-8 relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="Social media platforms displayed on various devices"
              fill
              className="object-cover"
            />
            <p className="text-sm text-gray-400 mt-2 text-center">
              Social media has become an integral part of our daily digital
              experience
            </p>
          </div>

          <h2>The Evolution of Social Media</h2>
          <p>
            The journey of social media began in the early 2000s with platforms
            like Friendster and MySpace, which allowed users to create profiles
            and connect with friends. The landscape dramatically changed with
            the launch of Facebook in 2004, which eventually grew to become the
            largest social network in the world. Since then, we've witnessed the
            rise of numerous platforms, each with its unique features and target
            audiences:
          </p>

          <ul>
            <li>
              <strong>Instagram (2010)</strong> - Focused on photo and video
              sharing
            </li>
            <li>
              <strong>Twitter (2006)</strong> - Pioneered short-form content and
              real-time updates
            </li>
            <li>
              <strong>LinkedIn (2003)</strong> - Specialized in professional
              networking
            </li>
            <li>
              <strong>TikTok (2016)</strong> - Revolutionized short-form video
              content
            </li>
            <li>
              <strong>Snapchat (2011)</strong> - Introduced ephemeral content
            </li>
          </ul>

          <p>
            Each platform has contributed to reshaping how we communicate and
            share information, creating a complex digital ecosystem that
            billions of people navigate daily.
          </p>

          <h2>The Positive Impact of Social Media</h2>

          <h3>1. Global Connectivity</h3>
          <p>
            Perhaps the most significant benefit of social media is its ability
            to connect people across geographical boundaries. Families separated
            by oceans can share moments in real-time, and individuals with niche
            interests can find communities that share their passions. This
            global connectivity has created a more interconnected world where
            ideas and information flow freely.
          </p>

          <h3>2. Information Access and Democratization</h3>
          <p>
            Social media has democratized information access, allowing anyone
            with an internet connection to both consume and create content. News
            no longer comes exclusively from traditional media outlets; citizen
            journalists can document events as they unfold, providing
            perspectives that might otherwise go unheard.
          </p>

          <h3>3. Business Opportunities</h3>
          <p>
            For entrepreneurs and businesses, social media has opened up
            unprecedented marketing opportunities. Small businesses can reach
            global audiences without massive advertising budgets, and
            individuals can build personal brands that translate into career
            opportunities. The rise of influencer marketing has created entirely
            new career paths that didn't exist a decade ago.
          </p>

          <h3>4. Social Movements and Awareness</h3>
          <p>
            From #MeToo to #BlackLivesMatter, social media has amplified social
            movements and raised awareness about important issues. Hashtags can
            unite millions around a cause, creating pressure for institutional
            change and giving voice to marginalized communities.
          </p>

          <div className="my-8 relative aspect-video w-full overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              alt="People using social media on mobile devices"
              fill
              className="object-cover"
            />
            <p className="text-sm text-gray-400 mt-2 text-center">
              Social media has become a powerful tool for social movements and
              activism
            </p>
          </div>

          <h2>The Challenges of Social Media</h2>

          <h3>1. Mental Health Concerns</h3>
          <p>
            Research has increasingly linked social media use to mental health
            issues, particularly among young people. The constant comparison to
            curated versions of others' lives can lead to feelings of inadequacy
            and FOMO (fear of missing out). Additionally, the dopamine-driven
            feedback loops created by likes and comments can lead to addictive
            behaviors.
          </p>

          <h3>2. Misinformation and Echo Chambers</h3>
          <p>
            While social media has democratized information, it has also created
            fertile ground for misinformation to spread. The algorithmic nature
            of content delivery tends to show users information that aligns with
            their existing beliefs, creating echo chambers that reinforce biases
            and polarize public discourse.
          </p>

          <h3>3. Privacy Concerns</h3>
          <p>
            The business model of most social media platforms relies on
            collecting vast amounts of user data to deliver targeted
            advertising. This has raised significant privacy concerns,
            especially as users become more aware of how their personal
            information is being used and monetized.
          </p>

          <h3>4. Cyberbullying and Online Harassment</h3>
          <p>
            The anonymity and distance provided by screens can bring out the
            worst in human behavior. Cyberbullying and online harassment have
            become serious issues, particularly for teenagers and public figures
            who may face relentless criticism and abuse.
          </p>

          <h2>Finding Balance in the Digital Age</h2>
          <p>
            As social media continues to evolve, both individuals and society
            must find ways to maximize its benefits while mitigating its
            negative impacts. Here are some strategies for healthier social
            media use:
          </p>

          <ol>
            <li>
              <strong>Digital Wellness Practices</strong> - Setting time limits,
              taking regular breaks, and being mindful of how different
              platforms affect your mood
            </li>
            <li>
              <strong>Critical Media Literacy</strong> - Developing skills to
              evaluate information sources and recognize misinformation
            </li>
            <li>
              <strong>Curating Your Feed</strong> - Actively shaping your social
              media experience by following accounts that inspire and inform
              rather than those that trigger negative emotions
            </li>
            <li>
              <strong>Privacy Management</strong> - Regularly reviewing privacy
              settings and being intentional about what information you share
            </li>
          </ol>

          <h2>The Future of Social Media</h2>
          <p>
            Looking ahead, several trends are likely to shape the future of
            social media:
          </p>

          <h3>1. Augmented and Virtual Reality</h3>
          <p>
            Platforms like Meta (formerly Facebook) are investing heavily in
            creating immersive social experiences through AR and VR
            technologies. These developments could fundamentally change how we
            interact in digital spaces, creating more engaging and lifelike
            virtual environments.
          </p>

          <h3>2. Decentralized Social Networks</h3>
          <p>
            In response to concerns about data privacy and platform control,
            we're seeing the emergence of decentralized social networks that
            give users more ownership over their data and content. These
            platforms aim to create more equitable digital spaces where users
            have greater agency.
          </p>

          <h3>3. Regulation and Accountability</h3>
          <p>
            As the societal impact of social media becomes clearer, governments
            worldwide are implementing regulations to address issues like data
            privacy, content moderation, and algorithmic transparency. This
            regulatory landscape will likely continue to evolve as we better
            understand the long-term effects of these technologies.
          </p>

          <h3>4. AI and Content Moderation</h3>
          <p>
            Artificial intelligence will play an increasingly important role in
            content moderation, helping platforms identify and remove harmful
            content more efficiently. However, this raises questions about free
            speech and the potential for algorithmic bias.
          </p>

          <h2>Conclusion</h2>
          <p>
            Social media has irrevocably changed our world, creating new
            opportunities for connection, expression, and information sharing.
            Yet, these benefits come with significant challenges that require
            thoughtful navigation at both individual and societal levels.
          </p>

          <p>
            As we continue to integrate these technologies into our lives, the
            most important question isn't whether social media is "good" or
            "bad," but rather how we can harness its potential while minimizing
            its harms. By approaching social media with intention and awareness,
            we can work toward a digital landscape that enhances human
            connection rather than diminishing it.
          </p>

          <p>
            The future of social media will be shaped not just by the companies
            that create these platforms, but by how we as users choose to engage
            with them. By demanding more ethical design, supporting platforms
            that prioritize user wellbeing, and being mindful of our own digital
            habits, we can help create a healthier relationship with social
            media for generations to come.
          </p>
        </div>
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
                    className="max-w-full max-h-full object-contain translate-y-1"
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
