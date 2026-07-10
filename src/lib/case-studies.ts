import { caseStudies } from "@/data/case-studies";
import type { CaseStudy } from "@/types";

export function getAllCaseStudies(): CaseStudy[] {
  return caseStudies;
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
