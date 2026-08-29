import type { Metadata } from "next";
import { CaseStudyHeader, Section, Shot } from "../case-study";

export const metadata: Metadata = {
  title: "Atlas — AI travel planning application | Michelle Handoko",
  description:
    "A case study on Atlas: an AI-powered application that turns a trip idea into a usable, mapped, day-by-day itinerary, built with OpenAI, Google Maps, and PostgreSQL.",
};

export default function AtlasCaseStudy() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
      <CaseStudyHeader
        title="Atlas"
        tagline="An AI-powered travel planning application that turns a trip idea into a mapped, day-by-day itinerary — not just a text plan."
        meta={[
          {
            label: "Context",
            value:
              "Built for The Science and Strategy of Artificial Intelligence, UCLA Anderson MBA",
          },
          { label: "Role", value: "Solo — product, prompts, backend, frontend" },
          {
            label: "Stack",
            value:
              "Node.js / Express · OpenAI GPT-4o-mini (JSON mode) · Google Maps + Places · PostgreSQL · Claude Code",
          },
          { label: "Status", value: "Prototype — not currently hosted" },
        ]}
        links={[
          { label: "GitHub", href: "https://github.com/michellehhandoko/Atlas" },
        ]}
      />

      <Section title="The problem">
        <p>
          Planning a trip means stitching together dozens of fragmented decisions
          — where to stay, what to do and in what order, how to get between
          things, what it costs, what to book ahead. Maps, blogs, booking sites,
          and calendars each solve one slice, and the traveler is left to
          assemble the whole thing. Atlas does the assembly.
        </p>
      </Section>

      <Section title="What I built">
        <p>
          A web app that takes a destination (or several), dates, group size,
          budget, trip style, and interests, and generates a complete itinerary
          in a couple of minutes: day-by-day activities with timing and travel
          notes, an interactive map, hotel and transport recommendations, a
          budget breakdown, and a pre-trip checklist. Users can swap a single
          activity or regenerate a whole day without starting over, then save,
          share via link, print, or export to calendar.
        </p>
        <Shot
          src="/projects/atlas-form.png"
          alt="Atlas trip form asking where you're going, dates, travelers, budget, and trip style"
          width={1214}
          height={1232}
          caption="Intake — destination legs, dates, group size, budget, and how structured you want the plan."
        />
        <Shot
          src="/projects/atlas-itinerary.png"
          alt="Atlas generated itinerary showing a day-by-day schedule with mapped activities and travel notes"
          width={1226}
          height={1234}
          caption="Output — a day-by-day itinerary with verified places, price badges, travel notes, and per-activity swap controls."
        />
      </Section>

      <Section title="How it works">
        <p>
          <strong>Split generation.</strong> Instead of one large prompt, the
          itinerary is two parallel OpenAI calls in JSON mode — a core call
          (days, activities, coordinates, weather) and an extras call (hotels,
          transport, budget, checklist). The core itinerary renders as soon as it
          returns; extras merge in when ready.
        </p>
        <p>
          <strong>Validate before generating.</strong> Destinations are checked
          against Google Places first. A bare &ldquo;Saratoga&rdquo; prompts the
          user to disambiguate rather than silently planning the wrong city.
        </p>
        <p>
          <strong>Enrich after generating, with guardrails.</strong> Once the
          plan renders, each activity is matched to a real Google Place for
          address, coordinates, rating, map link, and photo. Matches too far from
          the day&apos;s destination are rejected — Atlas would rather show fewer
          pins than a wrong one, and there is no stock-photo fallback.
        </p>
        <p>
          <strong>Targeted edits over open-ended revision.</strong> Swap locks an
          activity&apos;s time and category and passes neighboring context so
          travel notes stay sensible; Regenerate Day locks the date and
          destination. A broad &ldquo;make it less packed&rdquo; revision path
          exists in the backend but is deliberately kept out of the UI because it
          is less reliable than narrow edits.
        </p>
        <p>
          <strong>Persistence without accounts.</strong> An anonymous device ID
          in localStorage owns saved trips; each trip gets a short{" "}
          <code>/share/:id</code> URL that anyone can view but only the owner can
          edit.
        </p>
        <p>
          <strong>Cost and reliability controls.</strong> Per-IP burst and daily
          rate limits, request-size caps, server-side validation of enums, date
          order, and trip length, and request IDs for end-to-end log tracing.
        </p>
      </Section>

      <Section title="What I learned">
        <p>
          Most of what I took away was about product design, not the model. The
          hard part of an LLM product isn&apos;t the generation — it&apos;s
          working out what the user actually needs, then simplifying to that
          instead of adding features because you can.
        </p>
        <p>
          That shaped concrete calls: splitting the backend generation so the
          itinerary appears faster, and leaning on a few reliable edit tools —
          swap an activity, regenerate a day — rather than an open-ended
          &ldquo;change anything&rdquo; flow. The goal was to give a traveler
          exactly what they need, cleanly, not to cram in every possible feature.
        </p>
      </Section>

      <Section title="What I'd improve">
        <p>
          A real mobile polish pass; tighter loading and error handling so the
          full free-text revision flow can return to the UI; saved preferences,
          and eventually inline manual editing (rename, reorder, or retime an
          activity without an AI call); production error tracking; and
          Redis-backed rate limiting if it ever runs on more than one instance.
        </p>
      </Section>

      <Section title="Note on the demo">
        <p>
          The hosted version isn&apos;t currently running. The screenshots above
          are from the deployed app; the code and a full technical overview are
          on{" "}
          <a
            href="https://github.com/michellehhandoko/Atlas"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:opacity-70"
          >
            GitHub
          </a>
          .
        </p>
      </Section>
    </main>
  );
}
