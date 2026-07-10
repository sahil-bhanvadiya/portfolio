/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: JSON-LD requires inline script tags */
import type { CaseStudy } from "@/types";
import {
  buildCaseStudyBreadcrumbSchema,
  buildCaseStudyTechArticleSchema,
} from "@/lib/case-study-seo";

export default function CaseStudyJsonLd({ study }: { study: CaseStudy }) {
  const techArticleSchema = buildCaseStudyTechArticleSchema(study);
  const breadcrumbSchema = buildCaseStudyBreadcrumbSchema(study);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(techArticleSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
