'use client';

import { useEffect, useMemo } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import ImageLightbox from '@/components/ImageLightbox';
import TableOfContents, { TOCSection } from '@/components/TableOfContents';

export default function OntologyTextToSqlBlog() {
  const sections: TOCSection[] = useMemo(
    () => [
      { id: 'what-is', title: 'what is an ontology?' },
      { id: 'why-matter', title: 'why does it matter?' },
      { id: 'building', title: 'building the ontology' },
      { id: 'how-engines', title: 'how engines use it' },
      { id: 'how-used', title: 'how it is used' },
      { id: 'in-code', title: 'representing it in code' },
      { id: 'vs-other', title: 'vs. other models' },
      { id: 'future', title: 'the future of ontologies' },
    ],
    [],
  );

  useEffect(() => {
    document.title = 'why ontology for text-to-sql?';
  }, []);

  return (
    <main className="min-h-screen bg-[#1a1a1a] text-stone-300 pb-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto pt-12 lg:grid lg:grid-cols-[1fr_minmax(0,32rem)_1fr] lg:gap-8 lg:items-start">
        <TableOfContents sections={sections} title="contents" />
        <ImageLightbox>
          <article className="w-full lg:max-w-lg lg:mx-auto">
            <header className="mb-6 text-xs font-normal leading-none md:text-sm">
              <Link
                href="/"
                className="text-xs font-normal leading-none text-stone-50 transition-colors hover:text-stone-300 md:text-sm"
              >
                Nicholas Chen
              </Link>
              <span className="text-stone-500"> / </span>
              <Link
                href="/writing"
                className="text-stone-400 transition-colors hover:text-stone-200"
              >
                writing
              </Link>
            </header>

            {/* Title */}
            <h1 className="text-2xl md:text-3xl font-medium text-white mb-2">
              why ontology for text-to-sql?
            </h1>
            <p className="text-stone-500 text-sm mb-6">
              nicholas chen · november 15, 2025 · 6 min read
            </p>

            {/* Cover image */}
            <img
              src="/blogs/ontology/ontology.png"
              alt="TextQL Ontology Interface"
              className="w-full mb-6"
            />
            <hr className="border-stone-700 mb-8" />

            {/* Content */}
            <div
              className="space-y-8 text-xs md:text-sm leading-relaxed"
              style={{ fontWeight: 400 }}
            >
              <section>
                <h2
                  id="what-is"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  what is an ontology?
                </h2>
                <p>
                  an ontology is a formal way to represent a set of concepts and categories in a
                  subject area or domain, and the relationships between them. in the context of data
                  engineering and software development, an ontology defines the objects, properties,
                  and relationships that exist within a specific data domain.
                </p>
                <p className="mt-4">
                  think of it as a blueprint that tells the computer exactly what kind of
                  information is available and how different pieces of information connect to each
                  other. it's the bridge between raw, unstructured data and a clear, usable
                  understanding of that data.
                </p>
                <figure className="mt-6">
                  <img
                    src="/blogs/ontology/map.jpeg"
                    alt="Map of data concepts and their connections"
                    className="w-full"
                  />
                  <figcaption className="text-stone-500 text-xs mt-2 italic">
                    Map of data concepts and their connections
                  </figcaption>
                </figure>
                <p className="mt-4">
                  without an ontology, a computer sees data as just numbers and strings. with an
                  ontology, it understands that those numbers represent "revenue," and that
                  "revenue" is linked to a "customer" through an "order."
                </p>
              </section>

              <section>
                <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">
                  a simple example
                </h3>
                <p>
                  imagine a retail company's database. the ontology would define "customer,"
                  "product," and "order." it would also specify that a "customer" places an "order,"
                  and an "order" contains one or more "products." this simple map allows anyone (or
                  any machine) to ask questions like "which customers bought this specific product?"
                  and get a correct answer based on the underlying data relationships.
                </p>
              </section>

              <section>
                <h2
                  id="why-matter"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  why does it matter?
                </h2>
                <p>
                  for ai-driven systems like text-to-sql, an ontology is absolutely critical. it
                  provides the necessary context for large language models (llms) to translate
                  natural language questions into accurate sql queries. without a clear ontology,
                  the llm has to guess which tables and columns correspond to the user's request,
                  which often leads to "hallucinations" or incorrect queries.
                </p>
                <p className="mt-4">an ontology helps in several ways:</p>
                <ul className="mt-3 ml-4 space-y-1 text-stone-300">
                  <li>• disambiguation: clearly defines what each term means within the domain.</li>
                  <li>
                    • context: provides the llm with a map of how data is structured and related.
                  </li>
                  <li>
                    • accuracy: significantly reduces the chance of generating incorrect sql by
                    providing a clear schema.
                  </li>
                  <li>
                    • efficiency: makes it easier and faster to build and maintain data-driven
                    applications.
                  </li>
                </ul>
                <figure className="mt-6">
                  <img
                    src="/blogs/ontology/graphs.jpeg"
                    alt="Visualization of complex data relationships"
                    className="w-full"
                  />
                  <figcaption className="text-stone-500 text-xs mt-2 italic">
                    Visualization of complex data relationships
                  </figcaption>
                </figure>
                <p className="mt-4">
                  in short, an ontology transforms a database from a pile of tables into a coherent
                  world that an ai can understand and reason about. it moves the complexity of data
                  modeling from the user's head into a formal system that the machine can leverage.
                </p>
                <p className="mt-4">
                  when an llm can see exactly how "gross margin" is calculated and which tables are
                  involved, it can generate the correct query every time, even for highly complex
                  requests. it's the difference between a system that works 60% of the time and one
                  that works 99% of the time.
                </p>
              </section>

              <section>
                <h2
                  id="building"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  building the ontology
                </h2>
                <p>
                  at textql, we've developed a robust process for building and managing ontologies
                  at scale. it starts with deep domain expertise and a thorough understanding of the
                  underlying data sources. we work closely with data teams to identify the core
                  objects, their attributes, and how they relate to one another.
                </p>
                <figure className="mt-6">
                  <img
                    src="/blogs/ontology/adding-objects.jpeg"
                    alt="Interface for defining new entities in the ontology"
                    className="w-full"
                  />
                  <figcaption className="text-stone-500 text-xs mt-2 italic">
                    Interface for defining new entities in the ontology
                  </figcaption>
                </figure>
                <p className="mt-4">the process involves several steps:</p>
                <p className="mt-4">
                  1. identifying entities: we start by defining the primary "nouns" of the
                  business—customers, orders, subscriptions, products, etc. each entity corresponds
                  to a clear concept that people across the organization understand.
                </p>
                <p className="mt-4">
                  2. defining attributes: for each entity, we identify the relevant fields or
                  columns that describe it. for a customer, this might include their name, email,
                  signup date, and segment.
                </p>
                <p className="mt-4">
                  3. establishing relationships: this is where the map comes together. we define how
                  entities connect. for example, "orders" belong to "customers," and "subscriptions"
                  are linked to both "customers" and "plans."
                </p>
                <p className="mt-4">
                  4. mapping to data sources: once the conceptual model is ready, we map each piece
                  of the ontology to the actual tables and columns in the data warehouse. this
                  creates the bridge between the business logic and the raw data.
                </p>
                <p className="mt-4">
                  5. continuous refinement: an ontology is never truly finished. as the business
                  evolves and new data sources are added, the ontology needs to be updated and
                  refined. we provide tools that make this ongoing maintenance easy and efficient.
                </p>
                <figure className="mt-6">
                  <img
                    src="/blogs/ontology/attrs.jpeg"
                    alt="Mapping ontology attributes to physical database columns"
                    className="w-full"
                  />
                  <figcaption className="text-stone-500 text-xs mt-2 italic">
                    Mapping ontology attributes to physical database columns
                  </figcaption>
                </figure>
              </section>

              <section>
                <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">
                  is it "good enough"?
                </h3>
                <p>
                  building an ontology can feel overwhelming, but it's important to start small. you
                  don't need to model every single column in your database from day one. instead,
                  focus on the 20% of your data that answers 80% of the business questions.
                </p>
                <p className="mt-4">here's what a "good enough" starting point looks like:</p>
                <ul className="mt-3 ml-4 space-y-1 text-stone-300">
                  <li>• the 5-10 most important business entities are defined.</li>
                  <li>• key relationships between these entities are clearly mapped.</li>
                  <li>
                    • core metrics (like revenue or churn) are formally defined within the ontology.
                  </li>
                  <li>• the model covers the most common questions people ask about the data.</li>
                </ul>
              </section>

              <section>
                <h2
                  id="how-engines"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  how engines use it
                </h2>
                <p>
                  once an ontology is in place, the text-to-sql engine uses it as its primary source
                  of truth. when a user asks a question, the engine doesn't just look at the raw
                  schema; it looks at the ontology to understand the user's intent within the
                  specific business context.
                </p>
                <p className="mt-4">the engine follows a structured process:</p>
                <p className="mt-4">
                  1. intent parsing: the llm analyzes the user's question to identify which ontology
                  objects and attributes are being referenced.
                </p>
                <p className="mt-4">
                  2. schema retrieval: based on the identified objects, the engine pulls the
                  relevant parts of the ontology—including table names, column mappings, and join
                  conditions.
                </p>
                <p className="mt-4">
                  3. context injection: the engine provides the llm with a curated set of context
                  from the ontology, ensuring it has all the information needed to generate an
                  accurate query without being overwhelmed by irrelevant data.
                </p>
                <p className="mt-4">
                  4. query generation: finally, the llm generates the sql query, using the
                  ontology's formal definitions to ensure the syntax and logic are correct.
                </p>
                <p className="mt-4">
                  this approach significantly improves both the reliability and the performance of
                  text-to-sql systems. it allows the engine to handle complex joins, aggregate
                  calculations, and domain-specific logic with ease.
                </p>
                <figure className="mt-6">
                  <img
                    src="/blogs/ontology/chat.png"
                    alt="The ontology providing context for an AI chat interaction"
                    className="w-full"
                  />
                  <figcaption className="text-stone-500 text-xs mt-2 italic">
                    The ontology providing context for an AI chat interaction
                  </figcaption>
                </figure>
              </section>

              <section>
                <h2
                  id="how-used"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  how it is used
                </h2>
                <p>
                  beyond text-to-sql, an ontology serves as a central registry for all business
                  logic and data knowledge. it becomes the "single source of truth" for the entire
                  organization, ensuring that everyone is using the same definitions and that data
                  is interpreted consistently across different tools and departments.
                </p>
              </section>

              <section>
                <h2
                  id="in-code"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  representing it in code
                </h2>
                <p>
                  we represent our ontologies using a structured format, typically json or yaml,
                  which makes them easy to version control and integrate into automated workflows.
                  this allows teams to manage their data definitions just like they manage their
                  software code.
                </p>
                <pre className="mt-6 p-4 bg-stone-900 border border-stone-700 rounded-md overflow-x-auto text-[11px] md:text-xs text-stone-300 font-mono">
                  {`{
  "entities": [
    {
      "id": "customers",
      "table": "public.customers",
      "primaryKey": "customer_id",
      "attributes": [
        { "id": "customer_id", "column": "customer_id" },
        { "id": "segment", "column": "segment" }
      ]
    },
    {
      "id": "orders",
      "table": "public.orders",
      "primaryKey": "order_id",
      "attributes": [
        { "id": "order_id", "column": "order_id" },
        { "id": "total_amount", "column": "total_amount" },
        { "id": "status", "column": "status" }
      ]
    }
  ],
  "relationships": [
    {
      "from": "orders",
      "to": "customers",
      "type": "many-to-one",
      "join": "orders.customer_id = customers.customer_id"
    }
  ],
  "metrics": [
    {
      "id": "revenue",
      "label": "revenue",
      "expression": "SUM(orders.total_amount)",
      "entity": "orders",
      "filter": "orders.status = 'completed'"
    }
  ]
}`}
                </pre>
                <figcaption className="text-stone-500 text-xs mt-2 italic">
                  A simplified example of an ontology represented in JSON
                </figcaption>
              </section>

              <section>
                <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">
                  the problem of ambiguity
                </h3>
                <p>
                  one of the biggest challenges in data is ambiguity. what does "customer" mean? is
                  it anyone who ever visited the site, or someone who made a purchase? the ontology
                  forces teams to answer these questions once and for all, eliminating confusion and
                  ensuring that data is always used correctly.
                </p>
                <p className="mt-4">
                  by formalizing these definitions in code, we create a system that can
                  automatically resolve these ambiguities during the query generation process,
                  leading to much more reliable and trustworthy results.
                </p>
              </section>

              <section>
                <h2
                  id="vs-other"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  vs. other models
                </h2>
                <p>
                  <span className="text-stone-100 font-medium">dbt (semantic layer):</span> while
                  dbt is great for data transformation, it often lacks the rich,
                  relationship-focused mapping needed for complex ai reasoning. ontologies build
                  upon dbt by adding a more flexible and comprehensive layer of context.
                </p>
                <p className="mt-4">
                  <span className="text-stone-100 font-medium">traditional bi models:</span>{' '}
                  traditional bi tools like looker or tableau have their own internal models, but
                  these are often locked within the tool itself. an ontology is tool-agnostic,
                  providing a single source of truth that can be used by any application.
                </p>
                <p className="mt-4">
                  <span className="text-stone-100 font-medium">database views:</span> views can help
                  simplify a complex schema, but they don't provide the semantic context or
                  relationship mapping that an ontology does. views are a structural solution,
                  whereas ontologies are a semantic one.
                </p>
                <figure className="mt-6">
                  <img
                    src="/blogs/ontology/sources.png"
                    alt="Comparing different data modeling approaches"
                    className="w-full"
                  />
                  <figcaption className="text-stone-500 text-xs mt-2 italic">
                    Comparing different data modeling approaches
                  </figcaption>
                </figure>
              </section>

              <section>
                <h2
                  id="future"
                  className="text-lg md:text-xl font-semibold text-stone-100 mb-3 scroll-mt-8"
                >
                  the future of ontologies
                </h2>
                <p>
                  as the data landscape continues to evolve, we believe that ontologies will become
                  the cornerstone of every modern data stack. the ability to formally represent and
                  share business knowledge is essential for building intelligent, data-driven
                  systems that can truly understand and reason about the world.
                </p>
                <p className="mt-4">
                  we're excited to be at the forefront of this movement, building the tools and
                  technologies that make it possible for every organization to leverage the power of
                  ontologies. the future of data isn't just about collecting more information—it's
                  about understanding what that information actually means.
                </p>
                <p className="mt-4">
                  by creating a shared language for data, we can unlock entirely new levels of
                  productivity and insight, moving beyond simple dashboards to truly intelligent
                  systems that can answer any question, any time.
                </p>
              </section>

              <section className="border-t border-stone-700 pt-6 mt-8">
                <h3 className="text-sm md:text-base font-semibold text-stone-200 mb-3">
                  references
                </h3>
                <ul className="space-y-2 text-stone-400 text-xs md:text-sm">
                  <li>
                    <a
                      href="https://builtin.com/data-science/ontology"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-700/40 hover:text-stone-200 underline"
                    >
                      builtin.com/data-science/ontology
                    </a>
                  </li>
                  <li>
                    <a
                      href="http://blog.palantir.com/ontology-finding-meaning-in-data-palantir-rfx-blog-series-1-399bd1a5971b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-700/40 hover:text-stone-200 underline"
                    >
                      blog.palantir.com - ontology finding meaning in data
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.palantir.com/docs/foundry/ontology/overview"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-700/40 hover:text-stone-200 underline"
                    >
                      palantir.com/docs/foundry/ontology/overview
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://docs.textql.com/core/how-it-works/ontology/overview"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-700/40 hover:text-stone-200 underline"
                    >
                      docs.textql.com - ontology overview
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://app.textql.com/ontology"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-700/40 hover:text-stone-200 underline"
                    >
                      app.textql.com/ontology
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://textql.com/blog/sql-process"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-700/40 hover:text-stone-200 underline"
                    >
                      textql.com/blog/sql-process
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://textql.com/blog/why-ontology"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-700/40 hover:text-stone-200 underline"
                    >
                      textql.com/blog/why-ontology
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://textql.com/blog/haskell-in-production"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block -mx-2 px-2 py-1 rounded-md transition-colors hover:bg-stone-700/40 hover:text-stone-200 underline"
                    >
                      textql.com/blog/haskell-in-production
                    </a>
                  </li>
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
