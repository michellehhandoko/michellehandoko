import Link from "next/link";

type Project = {
  name: string;
  description: string;
  tags: string[];
  slug?: string;
  repo?: string;
  demo?: string;
  status?: string;
};

const aiProducts: Project[] = [
  {
    name: "Atlas",
    description:
      "Tell it where you're going, your dates, your budget, and what you're into — Atlas comes back with a day-by-day itinerary, mapped stops, hotel picks, and a full budget breakdown. Don't like an activity? Swap it and regenerate.",
    tags: ["OpenAI", "Google Maps", "Node.js", "PostgreSQL"],
    slug: "atlas",
    repo: "https://github.com/michellehhandoko/Atlas",
  },
  {
    name: "PersonalLib",
    description:
      "Upload your Goodreads history and PersonalLib builds a taste profile from the books you rated highly, then recommends new titles — flagging whether each is a standalone or part of a series, and whether your library has it right now.",
    tags: ["Python", "Streamlit", "Recommendation Engine"],
    slug: "personallib",
    repo: "https://github.com/michellehhandoko/PersonalLib",
    demo: "https://personallib.streamlit.app/",
  },
  {
    name: "AI Operations Agent",
    description:
      "An agent that reads SOPs, works through incoming operational cases, handles the routine ones itself, and escalates the calls that should belong to a human. The independent project I'm building next.",
    tags: ["Structured Outputs", "Tool Calling", "Human-in-the-loop", "Evals"],
    status: "In Progress",
  },
];

const strategyOps: Project[] = [
  {
    name: "Edge AI Commercialization Strategy",
    description:
      "A 20-week MBA consulting capstone with a five-person team: market and customer research to inform how an early-stage tech company should bring an on-device AI product to market.",
    tags: ["Market Research", "Segmentation", "GTM Strategy"],
    slug: "edge-ai-strategy",
  },
  {
    name: "Notion Project & Task Template",
    description:
      "A connected two-database template I designed and demoed at a campus workshop for ~40–50 students — built to teach how relational databases work in Notion.",
    tags: ["Notion", "Relational Databases", "Systems Design"],
    slug: "notion-project-template",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-lg border border-border bg-card p-6">
      <div className="flex items-baseline justify-between gap-4">
        <h4 className="text-lg font-semibold tracking-tight">
          {project.slug ? (
            <Link
              href={`/projects/${project.slug}`}
              className="hover:opacity-70"
            >
              {project.name}
            </Link>
          ) : (
            project.name
          )}
        </h4>
        {project.status && (
          <span className="shrink-0 rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-muted">
            {project.status}
          </span>
        )}
      </div>
      <p className="mt-2 text-foreground/90">{project.description}</p>
      <p className="mt-4 text-sm text-muted">{project.tags.join(" • ")}</p>
      {(project.slug || project.repo || project.demo) && (
        <div className="mt-4 flex flex-wrap gap-5 text-sm font-medium">
          {project.slug && (
            <Link
              href={`/projects/${project.slug}`}
              className="underline underline-offset-4 hover:opacity-70"
            >
              Read case study →
            </Link>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="text-muted underline underline-offset-4 hover:text-foreground"
            >
              Live demo ↗
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="text-muted underline underline-offset-4 hover:text-foreground"
            >
              GitHub ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-20 sm:py-28">
      {/* Hero */}
      <section className="flex flex-col gap-5">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Michelle Handoko
        </h1>
        <p className="text-lg font-medium text-muted">AI + Operations</p>
        <p className="max-w-xl text-lg leading-relaxed text-foreground/90">
          I build AI-powered tools and the operational systems that make them
          work. My background spans tech, healthcare, go-to-market, and
          operations.
        </p>
        <div className="mt-2">
          <a
            href="#work"
            className="inline-block rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            View work
          </a>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mt-20 scroll-mt-20 sm:mt-28">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">
          Work
        </h2>

        <div className="mt-10">
          <h3 className="text-xl font-semibold tracking-tight">AI Products</h3>
          <p className="mt-1 text-sm text-muted">
            Prototypes and tools I&apos;ve designed and built.
          </p>
          <div className="mt-6 flex flex-col gap-4">
            {aiProducts.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold tracking-tight">
            Strategy &amp; Operations
          </h3>
          <p className="mt-1 text-sm text-muted">
            Research, strategy, and operational systems work.
          </p>
          <div className="mt-6 flex flex-col gap-4">
            {strategyOps.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="mt-20 scroll-mt-20 sm:mt-28">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">
          About
        </h2>
        <div className="mt-6 flex max-w-xl flex-col gap-4 text-lg leading-relaxed text-foreground/90">
          <p>
            I&apos;m an operations and program management professional with an MBA
            from UCLA Anderson, working at the intersection of AI, technology, and
            business operations. My experience spans cloud infrastructure,
            healthcare operations, process improvement, and AI-powered product
            development.
          </p>
          <p>
            What I enjoy most is turning complex or manual workflows into clearer,
            more scalable systems — whether that&apos;s redesigning an operational
            process, rolling out new technology, or prototyping an AI tool.
            I&apos;ve built everything from an AI-powered travel planning app to a
            book recommendation system, and I&apos;m still exploring how agents
            and automation can support real operational work. I&apos;m at my best
            translating between technical and non-technical teams and turning
            messy problems into structured workflows.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mt-20 scroll-mt-20 sm:mt-28">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">
          Contact
        </h2>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-foreground/90">
          The best way to reach me is email —{" "}
          <a
            href="mailto:michelle.handoko@gmail.com"
            className="underline underline-offset-4 hover:opacity-70"
          >
            michelle.handoko@gmail.com
          </a>
          . I&apos;m also on{" "}
          <a
            href="https://www.linkedin.com/in/michellehandoko/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:opacity-70"
          >
            LinkedIn
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/michellehhandoko"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:opacity-70"
          >
            GitHub
          </a>
          .
        </p>
      </section>
    </main>
  );
}
