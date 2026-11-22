import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/lib/data";
import "./globals.css";

const generalSans = localFont({
  src: [
    { path: "./fonts/GeneralSans-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/GeneralSans-Medium.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: `${site.name} Portfolio`,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  keywords: [
    "Anurag Mishra",
    "Software Developer",
    "Frontend Developer",
    "React Developer",
    "TypeScript",
    "Banking frontend",
    "Mantine",
    "TanStack Query",
    "Vitest",
    "Java",
    "SQL",
    "SAP ABAP",
    "Mindmash Data Labs",
    "Portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
    locale: "en_IN",
    firstName: "Anurag",
    lastName: "Mishra",
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#f4f4f2",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      url: site.url,
      email: `mailto:${site.email}`,
      jobTitle: site.role,
      description: site.description,
      worksFor: { "@type": "Organization", name: site.company },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Greater Noida",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
      alumniOf: [
        {
          "@type": "CollegeOrUniversity",
          name: "GL Bajaj Institute of Technology and Management",
        },
      ],
      knowsAbout: [
        "React",
        "TypeScript",
        "JavaScript",
        "Mantine",
        "TanStack Query",
        "Zod",
        "Vitest",
        "Java",
        "SQL",
        "SAP ABAP",
      ],
      sameAs: [site.links.linkedin, site.links.github, site.links.leetcode],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: `${site.name} Portfolio`,
      inLanguage: "en",
      author: { "@id": `${site.url}/#person` },
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={generalSans.variable} suppressHydrationWarning>
      <head>
        {/* Marks the document as script-enabled before paint so scroll reveals only hide content when they can also show it. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
