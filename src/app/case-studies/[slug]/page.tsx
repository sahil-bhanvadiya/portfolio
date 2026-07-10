import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CaseStudyContent from "@/components/CaseStudy/CaseStudyContent";
import CaseStudyJsonLd from "@/components/CaseStudy/CaseStudyJsonLd";
import {
  getAllCaseStudySlugs,
  getCaseStudyBySlug,
} from "@/lib/case-studies";
import { buildCaseStudyMetadata } from "@/lib/case-study-seo";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return getAllCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    return {
      title: "Case Study Not Found",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return buildCaseStudyMetadata(study);
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);

  if (!study) {
    notFound();
  }

  return (
    <>
      <CaseStudyJsonLd study={study} />
      <div className="flex lg:flex-1 flex-col w-full min-w-0 px-5 lg:px-0 overflow-x-hidden">
        <div className="flex flex-col w-full max-w-full lg:max-w-[750px] lg:w-[80%] mx-auto min-w-0 p-[20px_0px] md:p-[80px_0px]">
          <CaseStudyContent study={study} />
        </div>
      </div>
    </>
  );
}
