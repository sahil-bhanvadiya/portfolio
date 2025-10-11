/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: / */
import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Header/Navbar";
import SideNavbar from "@/components/SideNavbar/SideNavbar";
import SocialLists from "@/components/Socials/SocialLists";
import { ThemeProvider } from "@/providers/theme-provider";
import {
  faqSchema,
  personSchema,
  profilePageSchema,
  reviewSchema,
  websiteSchema,
} from "./schema";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-Space_Grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-IBM_Plex_Mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Sahil Bhanvadiya | Full Stack Developer & Software Engineer",
    template: "%s | Sahil Bhanvadiya",
  },
  description:
    "Sahil Bhanvadiya. A Full Stack Developer specializing in React, Next.js, Node.js, TypeScript, AI Integration, and Cloud technologies. Building scalable web applications with extensive experience. Expert in modern web technologies, artificial intelligence, and cloud infrastructure. Portfolio showcasing innovative projects and technical expertise.",
  keywords: [
    "Sahil Bhanvadiya",
    "Full Stack Developer",
    "Software Engineer",
    "Senior Full Stack Developer",
    "Senior Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "Web Development",
    "JavaScript Developer",
    "Frontend Developer",
    "React.js Developer",
    "Next.js Developer",
    "Backend Developer",
    "Portfolio",
    "UI/UX Developer",
    "Seaflux",
    "AI Developer",
    "Machine Learning",
    "Artificial Intelligence",
    "AI Integration",
    "Cloud Technologies",
    "AWS Developer",
    "Cloud Computing",
    "Cloud Architecture",
    "DevOps Engineer",
    "AI/ML Engineer",
    "Tech Enthusiast",
    "Problem Solver",
    "Open Source Contributor",
    "Freelance Developer",
    "MVP Developer",
  ],
  authors: [{ name: "Sahil Bhanvadiya" }],
  creator: "Sahil Bhanvadiya",
  publisher: "Sahil Bhanvadiya",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sahilbhanvadiya.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sahilbhanvadiya.com",
    title: "Sahil Bhanvadiya | Full Stack Developer & Software Engineer",
    description:
      "Full Stack Developer building scalable web applications using React, Next.js, Node.js, AI technologies, and cloud infrastructure.",
    siteName: "Sahil Bhanvadiya Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sahil Bhanvadiya - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sahil Bhanvadiya | Full Stack Developer & Software Engineer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, AI technologies, and cloud infrastructure.",
    images: ["/og-image.png"],
    creator: "@sahil_bhanvadia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add after setting up Google Search Console
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" style={{ colorScheme: "dark" }}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profilePageSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} antialiased`}
      >
        <ThemeProvider attribute="data-theme" defaultTheme="dark">
          <div className="flex items-start w-full">
            <SideNavbar />
            <div className="w-full lg:flex-1">
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
            <SocialLists />
          </div>
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
