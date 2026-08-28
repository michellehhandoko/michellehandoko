import Link from "next/link";
import Image from "next/image";
import type { ReactNode } from "react";

type MetaItem = { label: string; value: string };
type CaseLink = { label: string; href: string };

export function CaseStudyHeader({
  title,
  tagline,
  meta,
  links,
}: {
  title: string;
  tagline: string;
  meta: MetaItem[];
  links: CaseLink[];
}) {
  return (
    <header className="flex flex-col gap-6">
      <Link
        href="/#work"
        className="text-sm text-muted underline underline-offset-4 hover:text-foreground"
      >
        ← Back to work
      </Link>
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-muted">{tagline}</p>
      </div>

      <dl className="grid gap-x-8 gap-y-3 border-t border-border pt-6 sm:grid-cols-2">
        {meta.map((item) => (
          <div key={item.label} className="flex flex-col gap-0.5">
            <dt className="text-xs font-semibold uppercase tracking-widest text-muted">
              {item.label}
            </dt>
            <dd className="text-sm text-foreground/90">{item.value}</dd>
          </div>
        ))}
      </dl>

      {links.length > 0 && (
        <div className="flex flex-wrap gap-5 text-sm font-medium">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:opacity-70"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-14 flex flex-col gap-4">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-muted">
        {title}
      </h2>
      <div className="flex flex-col gap-4 leading-relaxed text-foreground/90">
        {children}
      </div>
    </section>
  );
}

export function Shot({
  src,
  alt,
  width,
  height,
  caption,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
}) {
  return (
    <figure className="mt-2 flex flex-col gap-2">
      <div className="overflow-hidden rounded-lg border border-border">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto w-full"
        />
      </div>
      <figcaption className="text-sm text-muted">{caption}</figcaption>
    </figure>
  );
}
