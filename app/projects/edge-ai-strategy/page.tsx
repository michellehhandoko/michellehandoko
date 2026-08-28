import type { Metadata } from "next";
import { CaseStudyHeader, Section } from "../case-study";

export const metadata: Metadata = {
  title: "Edge AI Commercialization Strategy | Michelle Handoko",
  description:
    "A 20-week MBA consulting capstone: market and customer research to inform how an early-stage tech company should commercialize an on-device AI product.",
};

export default function EdgeAiStrategyCaseStudy() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-16 sm:py-20">
      <CaseStudyHeader
        title="Edge AI Commercialization Strategy"
        tagline="Market and customer research to inform how an early-stage tech company should bring an on-device AI product to market."
        meta={[
          {
            label: "Engagement",
            value:
              "20-week MBA consulting capstone — a five-person team engaged with a client in the tech industry",
          },
          {
            label: "My role",
            value:
              "Regulatory and technology-landscape secondary research; a portion of the primary interviews; contributor to thematic analysis and customer segmentation",
          },
          {
            label: "Methods",
            value:
              "Expert interviews · survey research · hierarchical & K-means cluster analysis · opportunity scoring · Van Westendorp price-sensitivity analysis · Porter's Five Forces · SWOT · TAM/SAM/SOM sizing · financial modeling",
          },
          { label: "Status", value: "Delivered to the client" },
        ]}
        links={[]}
      />

      <p className="mt-6 text-sm italic text-muted">
        The client, our findings, and our recommendations are confidential. This
        describes the engagement, the methods, and my role only.
      </p>

      <Section title="The engagement">
        <p>
          An early-stage company in the tech industry had a working technology —
          an on-device (&ldquo;edge&rdquo;) AI agent — and needed to decide how to
          take it commercial: who the target customer is, which capabilities
          matter most, and how to price and go to market. Over two academic
          quarters, our team ran the market and customer research to inform that
          decision.
        </p>
      </Section>

      <Section title="Approach">
        <p>
          A mixed-methods, hypothesis-driven study. The work spanned:
        </p>
        <ul className="flex list-disc flex-col gap-2 pl-5">
          <li>Competitive and market-landscape research.</li>
          <li>
            Around 50 expert interviews across executives, operations and IT
            leaders, and technical staff.
          </li>
          <li>
            Two surveys, analyzed with hierarchical and K-means clustering to
            build behavioral customer segments rather than demographic ones.
          </li>
          <li>
            Opportunity scoring and a Van Westendorp price-sensitivity analysis.
          </li>
          <li>Porter&apos;s Five Forces, SWOT, and TAM/SAM/SOM market sizing.</li>
          <li>A multi-year financial model.</li>
        </ul>
      </Section>

      <Section title="My role">
        <p>
          I led the secondary research on the regulatory and technology
          landscape and ran a portion of the primary interviews, then contributed
          to the thematic analysis and the customer segmentation that came out of
          the survey data.
        </p>
      </Section>

      <Section title="What I took from it">
        <p>
          What a technical team believes makes their product valuable, and what
          the market actually values, can diverge — bridging that gap is much of
          the work.
        </p>
        <p>
          Clustering on attitudes and behavior gives a sharper, more actionable
          target than demographic segmentation.
        </p>
        <p>
          The research has to test the market on its own terms, not the
          client&apos;s. A client&apos;s assumptions about who wants the product
          and why can quietly shape which questions get asked and how the answers
          get read — the study has to be designed to resist that and validate
          demand without the bias.
        </p>
        <p>
          Stating a study&apos;s limitations plainly matters as much as the
          findings themselves.
        </p>
      </Section>
    </main>
  );
}
