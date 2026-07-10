import Link from "next/link";
import { Check, Target } from "lucide-react";
import type { ReactNode } from "react";
import CaseStudyBreadcrumb from "@/components/CaseStudy/CaseStudyBreadcrumb";
import type { CaseStudy } from "@/types";

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 min-w-0">
      <span className="text-light-gray-3 text-[12px] font-medium uppercase tracking-wider">
        {label}
      </span>
      <span className="text-light-gray-4 text-[15px] font-semibold wrap-break-word">
        {value}
      </span>
    </div>
  );
}

function SectionCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border border-dark-gray-3 rounded-xl bg-darkest-gray flex flex-col gap-4 p-4 sm:p-6">
      <h2 className="text-light-gray-4 text-xl font-bold">{title}</h2>
      {children}
    </section>
  );
}

function PointList({
  items,
  variant,
}: {
  items: string[];
  variant: "challenge" | "impact";
}) {
  const Icon = variant === "challenge" ? Target : Check;

  return (
    <ul className="flex flex-col gap-3 list-none p-0 m-0">
      {items.map((item, index) => (
        <li
          key={item}
          className="flex gap-4 bg-very-dark-gray border border-dark-gray-3 rounded-xl p-4 sm:p-5"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border-color bg-dark-gray-4">
            <Icon size={18} className="text-light-gray-3" strokeWidth={2} />
          </div>
          <div className="flex flex-col gap-1 min-w-0 pt-0.5">
            <span className="font-IBM_Plex_Mono text-[11px] font-semibold uppercase tracking-widest text-light-gray-1">
              {variant === "challenge" ? "Challenge" : "Impact"}{" "}
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="text-light-gray-2 text-[15px] font-medium leading-relaxed wrap-break-word">
              {item}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default function CaseStudyContent({ study }: { study: CaseStudy }) {
  return (
    <article className="flex flex-col gap-[30px] w-full min-w-0 self-stretch">
      <div className="flex flex-col gap-4 border-b border-dashed border-dark-gray-4 pb-[30px] w-full min-w-0">
        <CaseStudyBreadcrumb study={study} />
        <h1 className="text-3xl sm:text-4xl font-bold text-white leading-[1.2em] wrap-break-word w-full">
          {study.title}
        </h1>
        <p className="text-light-gray-2 text-lg font-medium">{study.description}</p>
      </div>

      <div className="bg-very-dark-gray border border-dark-gray-3 rounded-xl p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full min-w-0">
        <MetaItem label="Role" value={study.role} />
        <MetaItem label="Category" value={study.type} />
        {study.client && <MetaItem label="Client" value={study.client} />}
        {study.domain && <MetaItem label="Domain" value={study.domain} />}
      </div>

      <div className="bg-very-dark-gray border border-dark-gray-3 rounded-xl p-4 sm:p-6 flex flex-col gap-3">
        <p className="text-light-gray-3 text-[13px] font-medium uppercase tracking-wide">
          Tech Stack
        </p>
        <div className="flex flex-wrap gap-2">
          {study.techStack.map((tech) => (
            <span
              key={tech}
              className="bg-dark-gray-4 border border-border-color text-light-gray-2 text-[13px] font-medium px-3 py-1.5 rounded-lg"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <SectionCard title="Project Overview">
        <p className="text-light-gray-2 text-[15px] font-medium leading-relaxed">
          {study.overview}
        </p>
      </SectionCard>

      <SectionCard title="The Challenge">
        {study.challengeIntro && (
          <p className="text-light-gray-2 text-[15px] font-medium leading-relaxed mb-2">
            {study.challengeIntro}
          </p>
        )}
        <PointList items={study.challengePoints} variant="challenge" />
      </SectionCard>

      <SectionCard title="Technical Implementation">
        <div className="flex flex-col gap-6">
          {study.solutionSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-2">
              <h3 className="text-light-gray-4 text-[17px] font-bold">
                {section.title}
              </h3>
              <p className="text-light-gray-2 text-[15px] font-medium leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Key Achievements & Impact">
        <PointList items={study.results} variant="impact" />
      </SectionCard>

      {study.takeaways && (
        <SectionCard title="Key Takeaways">
          <p className="text-light-gray-2 text-[15px] font-medium leading-relaxed">
            {study.takeaways}
          </p>
        </SectionCard>
      )}

      {study.links && study.links.length > 0 && (
        <SectionCard title="Related Links">
          <div className="flex flex-col gap-2">
            {study.links.map((link) => (
              <Link
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-gray-2 hover:text-white transition-colors text-[15px] font-medium underline underline-offset-4"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </SectionCard>
      )}
    </article>
  );
}
