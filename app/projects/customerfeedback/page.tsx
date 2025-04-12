import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

export default function ETLProject() {
  return (
    <main className="flex min-h-screen flex-col items-center p-6 md:p-24 bg-black text-white">
      <div className="max-w-5xl w-full space-y-12">
        {/* Navigation */}
        <Link
          href="/projects"
          className="inline-flex items-center text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="mr-2 w-4 h-4" /> Back to projects
        </Link>

        {/* Hero Section */}
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
            <h1 className="text-3xl sm:text-3xl md:text-5xl font-bold text-white">
              Customer Feedback ETL Pipeline
            </h1>
          </div>

          <p className="text-xl text-gray-300">
            An end-to-end pipeline that extracts, transforms, and loads customer
            feedback data into a centralized database to generate actionable
            insights.
          </p>
        </div>

        {/* Featured Image */}
        <div className="relative w-full aspect-[16/5] rounded-xl overflow-hidden border border-gray-800">
          <Image
            src="/customerfeedback.png"
            alt="Customer Feedback ETL Pipeline"
            width={1500}
            height={600}
            className="object-cover"
            priority
          />
        </div>

        {/* Project Links */}
        <div className="flex flex-wrap gap-4">
          <a
            href="https://youtu.be/demo_video_link_here"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="text-white bg-transparent hover:text-gray-400 transition-colors">
              <ExternalLink className="mr-2 h-4 w-4" /> Demo
            </Button>
          </a>
          <a
            href="https://github.com/nicholaschen09/customer-feedback-etl-pipeline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="text-white bg-transparent hover:text-gray-400 transition-colors">
              <Image
                src="/github.png"
                alt="GitHub Logo"
                width={16}
                height={16}
                className="mr-2"
              />
              Code
            </Button>
          </a>
        </div>

        {/* Overview Section */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Overview</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            This project implements a robust ETL pipeline that extracts raw
            customer feedback from CSV files and various APIs, transforms the
            data by cleaning and enriching it with sentiment analysis (achieving
            92% accuracy), and loads the processed data into a centralized
            PostgreSQL database. The resulting insights are visualized via a
            custom dashboard for actionable business intelligence.
          </p>
        </section>

        {/* Key Features */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-white">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black shadow-xl rounded-lg p-6 border border-white">
              <CardContent className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-xl font-bold text-white">
                  Data Extraction
                </h3>
                <p className="text-white">
                  Gathers customer feedback from CSV files and APIs, automating
                  data ingestion.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black shadow-xl rounded-lg p-6 border border-white">
              <CardContent className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-xl font-bold text-white">
                  Data Transformation
                </h3>
                <p className="text-white">
                  Cleans and processes data with Python and Pandas, applying
                  sentiment analysis using TextBlob.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-black shadow-xl rounded-lg p-6 border border-white">
              <CardContent className="flex flex-col items-center text-center space-y-4">
                <h3 className="text-xl font-bold text-white">
                  Data Loading & Visualization
                </h3>
                <p className="text-white">
                  Loads enriched data into PostgreSQL via SQLAlchemy and
                  visualizes results with a custom Streamlit dashboard.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technical Stack */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">Technical Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Data Sources</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>CSV files from customer surveys</li>
                <li>APIs for real-time feedback data</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Software Stack</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                <li>
                  Python with Pandas and TextBlob for ETL and sentiment analysis
                </li>
                <li>Flask for API services</li>
                <li>Supabase and PostgreSQL for data storage</li>
                <li>SQLAlchemy for ORM and database interactions</li>
                <li>Streamlit for dashboard visualizations</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="relative w-full aspect-[4/2] rounded-xl overflow-hidden border border-gray-800">
          <Image
            src="/pipeline.png"
            alt="ETL Pipeline Dashboard"
            width={1100}
            height={400}
            className="object-cover"
          />
        </div>

        {/* What's Next */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold">
            What's Next for the Customer Feedback ETL Pipeline
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I plan to integrate additional data sources, enhance our sentiment
            analysis algorithms, and further optimize our data loading
            processes. Future iterations will include machine learning models
            for predictive analytics and automated reporting.
          </p>
        </section>

        {/* More Projects */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-white">More Projects</h2>
            <Link href="/projects" className="text-gray-400 hover:text-white">
              View all Projects →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-transparent border border-gray-700 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/pandas.png"
                  alt="TikTok View Predictor"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4 space-y-3">
                <h3 className="text-xl font-bold text-white">
                  TikTok View Predictor
                </h3>
                <p className="text-gray-300 text-sm">
                  A machine learning model that predicts TikTok video views
                  using linear regression.
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row gap-3 sm:justify-between">
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/nicholaschen09/tiktok-view-predictor"
                    className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
                  >
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <img src="/github.png" alt="GitHub" className="w-4 h-4" />
                    </div>
                    Code
                  </Link>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Link>
                </div>
                <Link
                  href="/projects/tiktokviewpredictor"
                  className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
                >
                  Read more <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </CardFooter>
            </Card>

            <Card className="bg-transparent border border-gray-700 overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/car.png"
                  alt="Engineering"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-4 space-y-3">
                <h3 className="text-xl font-bold text-white">
                  Engineering Portfolio
                </h3>
                <p className="text-gray-300 text-sm">
                  A showcase of my engineering projects, featuring 3D modeling
                  with SOLIDWORKS, as well as physical and systems design
                  innovations.
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row gap-3 sm:justify-between">
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/nicholaschen09/engineering-portfolio"
                    className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
                  >
                    <div className="w-4 h-4 flex items-center justify-center mr-2">
                      <img src="/github.png" alt="GitHub" className="w-4 h-4" />
                    </div>
                    Code
                  </Link>
                </div>
                <Link
                  href="/projects/fernando"
                  className="text-gray-300 hover:text-white flex items-center gap-1 text-sm"
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
