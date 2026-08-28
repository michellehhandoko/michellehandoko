import Link from "next/link";

export const externalLinks = {
  email: "mailto:michelle.handoko@gmail.com",
  github: "https://github.com/michellehhandoko",
  linkedin: "https://www.linkedin.com/in/michellehandoko/",
};

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 py-4 text-sm">
        <Link href="/" className="font-semibold tracking-tight">
          Michelle Handoko
        </Link>
        <div className="flex gap-6 text-muted">
          <Link href="/#work" className="hover:text-foreground">
            Work
          </Link>
          <Link href="/#about" className="hover:text-foreground">
            About
          </Link>
          <Link href="/#contact" className="hover:text-foreground">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-3xl px-6 pb-16">
      <div className="flex flex-wrap gap-6 border-t border-border pt-8 text-sm text-muted">
        <a href={externalLinks.email} className="hover:text-foreground">
          Email
        </a>
        <a
          href={externalLinks.linkedin}
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground"
        >
          LinkedIn
        </a>
        <a
          href={externalLinks.github}
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
