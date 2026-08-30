import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SiteHeader, SiteFooter } from "./site-chrome";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Longer form for search results; short form for social previews (which truncate ~125 chars).
const seoDescription =
  "Michelle Handoko builds AI-powered tools and the operational systems that make them work. Background across tech, healthcare, go-to-market, and operations.";
const socialDescription =
  "Michelle Handoko builds AI-powered tools and the operational systems that make them work.";

export const metadata: Metadata = {
  metadataBase: new URL("https://michellehandoko.vercel.app"),
  title: "Michelle Handoko — AI + Operations",
  description: seoDescription,
  openGraph: {
    title: "Michelle Handoko — AI + Operations",
    description: socialDescription,
    url: "https://michellehandoko.vercel.app",
    siteName: "Michelle Handoko",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Michelle Handoko — AI + Operations",
    description: socialDescription,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
