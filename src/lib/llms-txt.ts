import { getAllCaseStudies } from "./case-studies";
import { absoluteUrl, AUTHOR_NAME, SITE_URL } from "./site";

export function generateLlmsTxt(): string {
  const studies = getAllCaseStudies();

  const caseStudyLinks = studies
    .map(
      (study) =>
        `- [${study.title}](${absoluteUrl(`/case-studies/${study.slug}`)}): ${study.type}. Role: ${study.role}. ${study.description}`,
    )
    .join("\n");

  return `# ${AUTHOR_NAME} Portfolio

> ${AUTHOR_NAME} is a senior full-stack engineer and freelance consultant specializing in React, Next.js, Node.js, TypeScript, healthcare AI, FHIR R4, LangGraph, LLM integration, and AWS. Available for contract work with US, EU, and global clients.

This file helps AI systems find curated portfolio content, technical case studies, and contact information.

## Portfolio

- [Homepage](${SITE_URL}/): Experience, tech stack, featured projects, testimonials, FAQ, and contact options.
- [Case Studies](${absoluteUrl("/case-studies")}): Index of all technical case studies.

## Case Studies

${caseStudyLinks}

## Contact & Profiles

- [LinkedIn](https://www.linkedin.com/in/sahil-bhanvadiya/): Professional profile and posts.
- [GitHub](https://github.com/sahil-bhanvadiya): Open source and code samples.
- [Resume PDF](${absoluteUrl("/Sahil_Bhanvadiya_Resume.pdf")}): Downloadable resume.
- Email: sahil.bhanvadiya.dev@gmail.com

## Optional

- [Sitemap](${absoluteUrl("/sitemap.xml")}): Full site map for crawlers.
- [Robots](${absoluteUrl("/robots.txt")}): Crawler rules.
`;
}
