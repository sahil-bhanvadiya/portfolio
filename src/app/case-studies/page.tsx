/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: JSON-LD requires inline script tags */
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { flyIcon } from "@/app/assets/assets";
import SectionHeading from "@/components/SectionHeading";
import { getAllCaseStudies } from "@/lib/case-studies";
import { buildCaseStudiesIndexSchema } from "@/lib/case-study-seo";
import {
  AUTHOR_NAME,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  TWITTER_HANDLE,
} from "@/lib/site";

const pageTitle = "Case Studies";
const pageDescription =
  "Explore technical case studies by Sahil Bhanvadiya — full-stack engineering, healthcare AI, enterprise SaaS, FHIR pipelines, LangGraph agents, and cloud-native platforms.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  keywords: [
    "case studies",
    "software engineering portfolio",
    "full stack developer projects",
    "healthcare AI",
    "enterprise SaaS",
    "React case study",
    "Next.js case study",
    AUTHOR_NAME,
  ],
  alternates: {
    canonical: "/case-studies",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/case-studies",
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${pageTitle} — ${AUTHOR_NAME}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: [DEFAULT_OG_IMAGE],
    creator: TWITTER_HANDLE,
  },
};

export default function CaseStudiesIndexPage() {
  const studies = getAllCaseStudies();
  const collectionSchema = buildCaseStudiesIndexSchema(studies);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema),
        }}
      />
      <div className="flex lg:flex-1 flex-col w-full min-w-0 px-5 lg:px-0 overflow-x-hidden">
        <div className="flex flex-col w-full max-w-full lg:max-w-[750px] lg:w-[80%] mx-auto min-w-0 p-[20px_0px] md:p-[80px_0px] gap-[30px]">
          <SectionHeading
            icon={flyIcon}
            title={pageTitle}
            description={pageDescription}
          />
          <ul className="flex flex-col gap-[10px] list-none p-0 m-0 w-full">
            {studies.map((study) => (
              <li
                key={study.slug}
                className="bg-very-dark-gray border border-dark-gray-3 w-full min-w-0 rounded-xl flex flex-col gap-4 p-4 sm:p-6"
              >
                <div className="flex flex-col gap-2">
                  <p className="text-light-gray-3 text-[12px] font-medium uppercase tracking-wider">
                    {study.type}
                  </p>
                  <h2 className="font-bold text-[20px] text-light-gray-4 leading-snug wrap-break-word">
                    <Link
                      href={`/case-studies/${study.slug}`}
                      className="hover:text-white transition-colors"
                    >
                      {study.title}
                    </Link>
                  </h2>
                  <p className="text-light-gray-2 text-[15px] font-medium leading-relaxed">
                    {study.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {study.techStack.slice(0, 6).map((tech) => (
                    <span
                      key={tech}
                      className="bg-dark-gray-4 border border-border-color text-light-gray-2 text-[13px] font-medium px-3 py-1.5 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="inline-flex items-center gap-2 bg-almost-black hover:bg-dark-gray-4 transition-all duration-300 rounded-[10px] border border-dark-gray-4 px-[18px] py-[14px] text-very-light-gray uppercase font-medium font-IBM_Plex_Mono text-[15px] opacity-70 hover:opacity-100 w-full sm:w-auto justify-center"
                >
                  Read case study
                  <ArrowRight size={16} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
