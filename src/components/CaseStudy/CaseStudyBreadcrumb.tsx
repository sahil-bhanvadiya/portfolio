import Link from "next/link";
import type { CaseStudy } from "@/types";
import { getCaseStudyPath } from "@/lib/case-study-seo";

export default function CaseStudyBreadcrumb({ study }: { study: CaseStudy }) {
  return (
    <nav aria-label="Breadcrumb" className="w-full min-w-0">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[14px] font-medium text-light-gray-2">
        <li>
          <Link href="/" className="hover:text-light-gray-4 transition-colors">
            Home
          </Link>
        </li>
        <li aria-hidden="true" className="text-light-gray-1">
          /
        </li>
        <li>
          <Link
            href="/case-studies"
            className="hover:text-light-gray-4 transition-colors"
          >
            Case Studies
          </Link>
        </li>
        <li aria-hidden="true" className="text-light-gray-1">
          /
        </li>
        <li
          aria-current="page"
          className="text-light-gray-4 wrap-break-word min-w-0"
        >
          <Link
            href={getCaseStudyPath(study.slug)}
            className="hover:text-white transition-colors"
          >
            {study.title}
          </Link>
        </li>
      </ol>
    </nav>
  );
}
