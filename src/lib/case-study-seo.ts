import type { Metadata } from "next";
import type { CaseStudy } from "@/types";
import {
  absoluteUrl,
  AUTHOR_NAME,
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  TWITTER_HANDLE,
} from "./site";

export function getCaseStudyPath(slug: string): string {
  return `/case-studies/${slug}`;
}

export function getCaseStudyKeywords(study: CaseStudy): string[] {
  return [
    ...new Set(
      [
        ...study.techStack,
        study.type,
        study.role,
        study.domain,
        "case study",
        "software engineering",
        "full stack development",
        AUTHOR_NAME,
      ].filter((value): value is string => Boolean(value)),
    ),
  ];
}

export function buildCaseStudyMetadata(study: CaseStudy): Metadata {
  const path = getCaseStudyPath(study.slug);
  const keywords = getCaseStudyKeywords(study);

  return {
    title: study.title,
    description: study.description,
    keywords,
    authors: [{ name: AUTHOR_NAME, url: SITE_URL }],
    creator: AUTHOR_NAME,
    publisher: AUTHOR_NAME,
    category: study.type,
    alternates: {
      canonical: path,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: study.title,
      description: study.description,
      url: path,
      type: "article",
      siteName: SITE_NAME,
      locale: "en_US",
      tags: keywords,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 630,
          alt: `${study.title} — ${AUTHOR_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: study.title,
      description: study.description,
      images: [DEFAULT_OG_IMAGE],
      creator: TWITTER_HANDLE,
    },
  };
}

export function buildCaseStudyTechArticleSchema(study: CaseStudy) {
  const url = absoluteUrl(getCaseStudyPath(study.slug));

  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: study.title,
    description: study.description,
    abstract: study.overview,
    author: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: SITE_URL,
      sameAs: [
        "https://github.com/sahil-bhanvadiya",
        "https://www.linkedin.com/in/sahil-bhanvadiya",
        "https://x.com/sahil_bhanvadia",
      ],
    },
    publisher: {
      "@type": "Person",
      name: AUTHOR_NAME,
      url: SITE_URL,
    },
    keywords: getCaseStudyKeywords(study).join(", "),
    about: study.techStack.map((technology) => ({
      "@type": "Thing",
      name: technology,
    })),
    articleSection: study.type,
    inLanguage: "en-US",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    url,
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function buildCaseStudyBreadcrumbSchema(study: CaseStudy) {
  const caseStudyUrl = absoluteUrl(getCaseStudyPath(study.slug));

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Case Studies",
        item: absoluteUrl("/case-studies"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: study.title,
        item: caseStudyUrl,
      },
    ],
  };
}

export function buildCaseStudiesIndexSchema(
  studies: Pick<CaseStudy, "slug" | "title" | "description">[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Case Studies",
    description:
      "Technical case studies by Sahil Bhanvadiya covering healthcare AI, full-stack platforms, enterprise SaaS, and cloud architecture.",
    url: absoluteUrl("/case-studies"),
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: studies.map((study, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: study.title,
        description: study.description,
        url: absoluteUrl(getCaseStudyPath(study.slug)),
      })),
    },
  };
}
