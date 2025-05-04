import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export default function TikTokProject() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24 text-white">
      <div className="max-w-5xl w-full space-y-12">
        {/* Navigation */}
        <Link
          href="/projects"
          className="inline-flex items-center text-stone-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to projects
        </Link>

        {/* Hero Section */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
            <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-white">
              TikTok View Predictor
            </h1>
          </div>

          <p className="text-xl text-stone-300">
            A machine learning-powered model that predicts the number of views a
            TikTok video will receive using linear regression and data
            analytics.
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-[16/8] rounded-xl overflow-hidden border border-stone-800">
          <Image
            src="/pandas.png"
            alt="TikTok View Predictor"
            width={1200}
            height={800}
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://youtu.be/your-demo-video-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="text-white bg-transparent hover:text-stone-400 transition-colors">
              <ExternalLink className="mr-2 h-4 w-4" /> Demo
            </Button>
          </a>
          <a
            href="https://github.com/nicholaschen09/tiktok-view-predictor"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="text-white bg-transparent hover:text-stone-400 transition-colors">
              <Image
                src="/github1.png"
                alt="GitHub Logo"
                width={24}
                height={24}
                className="mr-2"
              />
              Code
            </Button>
          </a>
        </div>

        {/* Overview Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Overview</h2>
          <p className="text-stone-300 text-lg leading-relaxed">
            TikTok View Predictor is an innovative machine learning project that
            forecasts the number of views a TikTok video can receive. By
            leveraging linear regression models and data processing techniques,
            the pipeline ingests historical video data, cleans and analyzes it,
            and finally predicts future view counts. This insight-driven
            approach assists content creators and marketers in optimizing their
            strategies.
          </p>
        </section>

        {/* Key Features */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Key Features</h2>
          <div className="grid grid-cols-1 gap-8">
            <Card className="bg-[hsl(var(--background))] shadow-xl rounded-lg p-6 border border-white">
              <CardContent className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-xl font-bold text-white">
                  Predictive Analytics
                </h3>
                <p className="text-white">
                  Uses linear regression and statistical analysis to accurately
                  forecast TikTok video views.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[hsl(var(--background))] shadow-xl rounded-lg p-6 border border-white">
              <CardContent className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-xl font-bold text-white">
                  Data Pipeline Integration
                </h3>
                <p className="text-white">
                  Automates data extraction from TikTok APIs and CSV datasets,
                  transforming raw data into actionable insights.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[hsl(var(--background))] shadow-xl rounded-lg p-6 border border-white">
              <CardContent className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-xl font-bold text-white">
                  Interactive Dashboard
                </h3>
                <p className="text-white">
                  Visualizes predictions and performance metrics, enabling users
                  to explore trends and refine content strategies.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <div className="relative w-full aspect-[4/4] rounded-xl overflow-hidden border border-stone-800">
          <Image
            src="/seasonal.png"
            alt="TikTok View Predictor Dashboard"
            width={1100}
            height={400}
            className="object-cover"
          />
        </div>

        {/* Technical Stack */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Technical Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">
                Data Sources & Extraction
              </h3>
              <ul className="list-disc pl-5 space-y-2 text-stone-300">
                <li>API integration with TikTok data endpoints</li>
                <li>CSV ingestion for historical video performance data</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Software Stack</h3>
              <ul className="list-disc pl-5 space-y-2 text-stone-300">
                <li>Python for data processing & model building</li>
                <li>Flask for serving APIs and web integration</li>
                <li>Scikit-learn for regression modeling</li>
                <li>Jupyter Notebook for data exploration & analysis</li>
                <li>Numpy and Pandas for data manipulation</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="relative w-full aspect-[4/2.5] rounded-xl overflow-hidden border border-stone-800">
          <Image
            src="/tiktokgraph.png"
            alt="TikTok View Predictor Dashboard"
            width={1100}
            height={400}
            className="object-cover"
          />
        </div>
        <p className="text-center text-stone-400 italic mt-1">
          this is the predicted graph for future tiktok views
        </p>

        {/* Challenges */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Challenges I Encountered</h2>
          <p className="text-stone-300 text-lg leading-relaxed">
            One major challenge was cleaning diverse data formats from multiple
            sources and ensuring the regression model was robust against
            outliers. We overcame these challenges by employing advanced data
            preprocessing techniques and continuous model evaluation.
          </p>
        </section>

        {/* Accomplishments */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Accomplishments</h2>
          <p className="text-stone-300 text-lg leading-relaxed">
            The TikTok View Predictor achieved strong forecasting performance,
            providing content creators with reliable estimates for video views.
            The end-to-end pipeline streamlined data collection, analysis, and
            visualization, enhancing decision-making and content optimization
            strategies.
          </p>
        </section>

        {/* What's Next */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">
            What's Next for TikTok View Predictor
          </h2>
          <p className="text-stone-300 text-lg leading-relaxed">
            Future improvements include incorporating more advanced machine
            learning models, expanding data source integration, and developing
            automated reporting capabilities to further empower content strategy
            optimizations.
          </p>
        </section>

        {/* More Projects */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white">More Projects</h2>
            <Link href="/projects" className="text-stone-400 hover:text-white">
              View all Projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-transparent border border-stone-700 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/customerfeedback.png"
                  alt="Customer Feedback ETL Pipeline"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4 space-y-3">
                <h3 className="text-xl font-bold text-white">
                  Customer Feedback ETL Pipeline
                </h3>
                <p className="text-stone-300 text-sm">
                  An end-to-end data pipeline that processes customer feedback
                  using ETL techniques and machine learning analysis.
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row gap-3 sm:justify-between">
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/nicholaschen09/customer-feedback-etl-pipeline"
                    className="text-stone-300 hover:text-white flex items-center gap-1 text-sm"
                  >
                    <div className="w-6 h-6 flex items-center justify-center mr-2">
                      <img
                        src="/github1.png"
                        alt="GitHub"
                        className="w-6 h-6"
                      />
                    </div>
                    Code
                  </Link>
                  <Link
                    href="#"
                    className="text-stone-300 hover:text-white flex items-center gap-1 text-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Link>
                </div>
                <Link
                  href="/projects/customerfeedback"
                  className="text-stone-300 hover:text-white flex items-center gap-1 text-sm"
                >
                  Read more <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-transparent border border-stone-700 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/fernando.png"
                  alt="Fernando"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4 space-y-3">
                <h3 className="text-xl font-bold text-white">Fernando</h3>
                <p className="text-stone-300 text-sm">
                  A posture correcting robot that helps you maintain a healthy
                  posture while working at your desk by slapping you when you
                  slouch.
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row gap-3 sm:justify-between">
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/enxilium/posture-checker-robot"
                    className="text-stone-300 hover:text-white flex items-center gap-1 text-sm"
                  >
                    <div className="w-6 h-6 flex items-center justify-center mr-2">
                      <img
                        src="/github1.png"
                        alt="GitHub"
                        className="w-6 h-6"
                      />
                    </div>
                    Code
                  </Link>
                  <Link
                    href="https://youtu.be/EBsmGGOubCk?si=1_ksNQak9YQNffQ6"
                    className="text-stone-300 hover:text-white flex items-center gap-1 text-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Link>
                </div>
                <Link
                  href="/projects/fernando"
                  className="text-stone-300 hover:text-white flex items-center gap-1 text-sm"
                >
                  Read more <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="w-full mt-8 pt-8">
        <div className="max-w-5xl mx-auto w-full">
          <hr className="border-t border-stone-700 mb-8" />
          <div className="flex flex-col items-center md:items-start">
            {/* Social Media Links */}
            <div className="flex space-x-8 pt-4 justify-center sm:justify-start">
              <Link
                href="https://www.linkedin.com/in/nicholas-chen-85886726a/"
                className="text-white hover:text-stone-300 transition-colors"
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
                className="text-white hover:text-stone-300 transition-colors"
              >
                <div className="w-12 h-8 flex items-center justify-center mt-1">
                  <img
                    src="/github1.png"
                    alt="GitHub"
                    className="w-10 h-10 md:w-12 md:h-12"
                  />
                </div>
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="mailto:nicholas.chen243@gmail.com"
                className="text-white hover:text-stone-300 transition-colors"
              >
                <div className="w-11 h-12 flex items-center justify-center relative -top-1">
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
                className="text-white hover:text-stone-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-11 h-8 flex items-center justify-center relative">
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
                className="text-white hover:text-stone-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-8 h-8 flex items-center justify-center mt-0.5">
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
          <p className="text-stone-400 mt-10 mb-4">© 2025 Nicholas Chen.</p>
        </div>
      </footer>
    </main>
  );
}