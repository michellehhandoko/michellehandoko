import type { Metadata } from "next";
import { CaseStudyHeader, Section, Shot } from "../case-study";

export const metadata: Metadata = {
  title: "PersonalLib — book recommendations from your reading history | Michelle Handoko",
  description:
    "A case study on PersonalLib: a deterministic recommendation engine that turns your Goodreads history into a taste profile, scores candidate books, and cross-references library availability.",
};

export default function PersonalLibCaseStudy() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
      <CaseStudyHeader
        title="PersonalLib"
        tagline="Your reading history plus your library's catalog — the right book, available right now."
        meta={[
          {
            label: "Context",
            value: "Built for AI Agents, UCLA Anderson MBA",
          },
          { label: "Role", value: "Solo" },
          {
            label: "Stack",
            value:
              "Python 3 (standard library) · Streamlit / Jupyter front ends · Claude Code",
          },
          { label: "Status", value: "Prototype — live demo below" },
        ]}
        links={[
          { label: "Live demo", href: "https://personallib.streamlit.app/" },
          {
            label: "GitHub",
            href: "https://github.com/michellehhandoko/PersonalLib",
          },
        ]}
      />

      <Section title="The problem">
        <p>
          Recommendation lists tell you what&apos;s popular, not what{" "}
          <em>you&apos;ll</em> like — and even when you find something, you
          don&apos;t know whether your library has it or whether you&apos;re
          facing a three-week hold. PersonalLib answers both at once.
        </p>
      </Section>

      <Section title="What I built">
        <p>
          A recommender that reads a Goodreads CSV export, builds a taste profile
          from the books you rated 4–5 stars, and returns a ranked table of new
          titles. Each row has a plain-language reason, a note tying it to your
          history (&ldquo;next in a series you&apos;re reading,&rdquo; &ldquo;you
          rated Book Lovers 5★&rdquo;), whether it&apos;s a standalone or part of
          a series, its Libby availability, and a color-coded action: Borrow now,
          Place hold, or Save for later. It runs as a CLI, a Jupyter notebook, or
          a Streamlit app — the{" "}
          <a
            href="https://personallib.streamlit.app/"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:opacity-70"
          >
            hosted demo
          </a>{" "}
          runs the recommendation engine directly, no setup needed.
        </p>
        <p>
          The screenshot below is a run against the sample reading history:
        </p>
        <Shot
          src="/projects/personallib-recommendations.png"
          alt="Screenshot of the PersonalLib recommendations table with title, author, why, Libby availability, and a borrow-or-hold action per row"
          width={1486}
          height={1166}
          caption="Screenshot — ranked recommendations, each with a reason, library availability, and a Borrow / Hold / Save action."
        />
      </Section>

      <Section title="How it works">
        <p>
          <strong>Taste profile.</strong> CSV rows become structured book
          objects; genres and authors are counted with star ratings as vote
          weights, and series progress is tracked.
        </p>
        <p>
          <strong>The recommendation engine.</strong> Every candidate in a
          curated database is scored on genre fit, author affinity, and series
          progression — with a penalty for a mid-series book whose earlier
          entries you haven&apos;t read, and a bump for a high average rating.
          Already-read titles are filtered out, and the top-scoring results are
          returned. It&apos;s fully deterministic — same input, same output,
          no API key. (The Jupyter notebook also carries an experimental
          GPT-4o-mini variant I built to sanity-check the rule-based scores
          against; the CLI and the hosted demo are the engine only.)
        </p>
        <p>
          <strong>Availability cross-reference.</strong> Each recommendation is
          looked up in a mock Libby dataset (status, wait weeks, library) and
          turned into the Borrow / Hold / Save action.
        </p>
        <p>
          <strong>Evaluation rubric.</strong> Every recommendation is scored on
          four dimensions — taste fit, actionability, accuracy, clarity — each
          0–10, summed to a score out of 40, so runs can be compared.
        </p>
        <p>
          <strong>Iterative user control.</strong> There is no ground-truth
          label set; the user swapping the CSV or adjusting the count is the
          quality signal. A daily background job can fire a macOS notification
          when a watched book becomes available.
        </p>
        <Shot
          src="/projects/personallib-workflow.png"
          alt="PersonalLib system workflow diagram showing inputs, processing, scoring, availability lookup, outputs, and the evaluation rubric"
          width={2106}
          height={2717}
          caption="The full pipeline, as mapped in the notebook version — inputs, scoring, the availability lookup, the scored output, and the evaluation rubric."
        />
      </Section>

      <Section title="What I learned">
        <p>
          This was a chance to design a full workflow from scratch — figuring out
          what data the system needs, where to source it, and how to turn it into
          a recommendation someone can actually act on. The experimenting was the
          fun part: where good data lives, and how to use it well enough to make
          a better call.
        </p>
        <p>
          It was also a useful reality check. As the next section notes, there
          isn&apos;t a real API for live library availability yet, so a
          production version isn&apos;t feasible today — but the pipeline is a
          working blueprint for when that data exists.
        </p>
      </Section>

      <Section title="What I'd improve">
        <p>
          Real Libby / OverDrive availability and a much larger catalog (Open
          Library or Google Books); LLM-based genre inference from descriptions
          instead of relying on shelf tags; collaborative filtering and automatic
          series-chain suggestions; and Goodreads OAuth instead of a manual CSV
          export.
        </p>
      </Section>
    </main>
  );
}
