import type { Metadata } from "next";
import { CaseStudyHeader, Section, Shot } from "../case-study";

export const metadata: Metadata = {
  title: "Notion Project & Task Template | Michelle Handoko",
  description:
    "A connected two-database Notion template designed and demoed at a campus workshop to teach students how relational databases work.",
};

export default function NotionTemplateCaseStudy() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
      <CaseStudyHeader
        title="Notion Project & Task Template"
        tagline="A connected two-database template I designed and demoed at a campus workshop, built to teach students how relational databases work in Notion."
        meta={[
          {
            label: "Context",
            value:
              "Designed for a Notion Campus Leader workshop — ~40–50 undergraduate design and engineering students, fall 2024",
          },
          {
            label: "My role",
            value:
              "Ideated and designed the template; co-built it with other campus leaders; presented and live-demoed it, then supported students hands-on",
          },
          {
            label: "Built with",
            value:
              "Notion — relations, a rollup, a formula, filtered and grouped views, charts, and database templates",
          },
          {
            label: "Status",
            value: "Distributed to workshop attendees; extended afterward",
          },
        ]}
        links={[]}
      />

      <Section title="The idea">
        <p>
          As a Notion Campus Leader — a role you apply for, with a small cohort
          per campus — I helped run events to get students using Notion. For a
          fall 2024 workshop with ~40–50 design and engineering undergrads, I
          designed a template to teach one specific idea: how{" "}
          <em>relational databases</em> work.
        </p>
        <p>
          A project-and-task tracker was the vehicle — familiar enough that
          students immediately got the point, and a natural way to show two
          databases linked together rather than one long list.
        </p>
      </Section>

      <Section title="What it is">
        <p>Two connected databases:</p>
        <ul className="flex list-disc flex-col gap-2 pl-5">
          <li>
            <strong>Projects</strong> — one row per initiative, with status,
            priority, a date range, and a <strong>rollup</strong> showing what
            percentage of its tasks are done.
          </li>
          <li>
            <strong>Tasks</strong> — one row per task, each linked to a project
            through a <strong>relation</strong>, with due dates, priority, and
            tags.
          </li>
        </ul>
        <p>
          The teaching moment is the link: change a task&apos;s status and the
          project&apos;s completion bar moves on its own. Grouped and filtered
          views show the same records organized different ways — by project, or
          on a single project&apos;s page — without duplicating anything.
        </p>
        <Shot
          src="/projects/notion-tasks-by-project.png"
          alt="Notion Tasks database grouped by project, each group showing a complete/total count"
          width={1546}
          height={1630}
          caption="Tasks grouped by project — the relation drives the grouping and the per-group completion count."
        />
        <Shot
          src="/projects/notion-project-page.png"
          alt="A single Notion project page showing its linked tasks and an automatically calculated completion percentage"
          width={948}
          height={1072}
          caption="A project page — its linked tasks, an auto-calculated Completion rollup, and a Blocked By dependency."
        />
      </Section>

      <Section title="Kept it a wireframe">
        <p>
          Students got a deliberately minimal version — two databases, the
          relation, a rollup, and a few views. Automations were left in the
          template but switched off, so anyone could turn one on and extend it
          rather than reverse-engineer it. The point was for the database concept
          to stick, not to show off every property Notion offers.
        </p>
      </Section>

      <Section title="How I extended it">
        <p>
          Afterward I built my own copy out further, to see how far the pattern
          goes:
        </p>
        <ul className="flex list-disc flex-col gap-2 pl-5">
          <li>
            A <strong>Delay</strong> formula (<code>dateBetween</code> on the due
            and completed dates) flagging how late each task ran.
          </li>
          <li>
            <strong>Project-to-project dependencies</strong> (Blocked By / Is
            Blocking), shown on a timeline.
          </li>
          <li>
            <strong>Charts</strong> — a status breakdown, and weekly throughput
            of completed tasks.
          </li>
        </ul>
        <Shot
          src="/projects/notion-status-breakdown.png"
          alt="Notion donut chart breaking projects down by status"
          width={1490}
          height={778}
          caption="Status breakdown across projects."
        />
        <Shot
          src="/projects/notion-timeline.png"
          alt="Notion timeline view of projects grouped by status, with a dependency arrow between two projects"
          width={1384}
          height={770}
          caption="Timeline view — projects grouped by status group, with the dependency drawn between them."
        />
        <Shot
          src="/projects/notion-throughput.png"
          alt="Notion line chart showing the number of tasks completed each week"
          width={1366}
          height={760}
          caption="Weekly throughput — tasks completed per week."
        />
      </Section>

      <Section title="What I'd do differently">
        <p>
          Simpler categorization. Multiple task lists per project got noisy fast
          — a project needs one clear list, not five.
        </p>
        <p>
          And I&apos;d orient it around individual progress. The template leans on
          an assignee / team model, but in my own use I was the assignee on
          nearly everything. It was really a personal task board, and it
          would&apos;ve been more useful built that way from the start.
        </p>
      </Section>

      <Section title="What I took from it">
        <p>
          Designing something for beginners forces you to be clear about what
          actually matters — the relation and the rollup, not the fifteen
          properties you <em>could</em> add.
        </p>
        <p>
          And there&apos;s a real skill in sizing a task: a line item that&apos;s
          genuinely trackable versus one so granular it&apos;s just noise.
        </p>
      </Section>
    </main>
  );
}
