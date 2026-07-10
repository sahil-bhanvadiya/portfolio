"use client";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { flyIcon } from "@/app/assets/assets";
import { myShowCases } from "@/data";
import SectionHeading from "./SectionHeading";

const INITIAL_VISIBLE_COUNT = 4;

export default function ShowCase() {
  const [showAll, setShowAll] = useState(false);
  const hasMoreProjects = myShowCases.length > INITIAL_VISIBLE_COUNT;
  const visibleProjects = showAll
    ? myShowCases
    : myShowCases.slice(0, INITIAL_VISIBLE_COUNT);
  const hiddenCount = myShowCases.length - INITIAL_VISIBLE_COUNT;

  return (
    <div
      id="featured-projects"
      className="flex items-start flex-none flex-col flex-nowrap gap-[30px] h-min justify-start overflow-visible relative w-full "
    >
      <div className="flex-none h-auto relative w-full">
        <SectionHeading
          title="Featured Projects"
          icon={flyIcon}
          description="Explore a collection of my most innovative and impactful technical projects."
        >
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-light-gray-2 hover:text-light-gray-4 transition-colors text-[15px] font-medium w-fit"
          >
            Browse all case studies
            <ArrowRight size={16} />
          </Link>
        </SectionHeading>
      </div>
      <div className="w-full">
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-none flex-col gap-[10px] h-min justify-start overflow-visible p-0 relative w-full flex-nowrap items-start "
        >
          {visibleProjects.map((item, index) => (
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{
                once: true,
              }}
              key={item.id}
              className="bg-very-dark-gray border border-dark-gray-3 w-full min-w-0 rounded-xl flex flex-col flex-nowrap gap-5 h-min justify-start overflow-hidden p-4 sm:p-6 relative"
            >
              <h3 className="font-bold text-[20px] text-light-gray-4 leading-snug wrap-break-word w-full">
                {item.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 pb-3 border-b border-dark-gray-3 w-full min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-light-gray-3 text-[12px] font-medium uppercase tracking-wider">
                    Category
                  </span>
                  <span className="bg-dark-gray-4 border border-border-color text-light-gray-4 text-[14px] font-semibold px-3 py-1 rounded-lg max-w-full wrap-break-word">
                    {item.type}
                  </span>
                </div>
                <div className="bg-medium-gray rounded-full h-[4px] aspect-square w-[4px]"></div>
                <div className="flex items-center gap-2">
                  <span className="text-light-gray-3 text-[12px] font-medium uppercase tracking-wider">
                    Role
                  </span>
                  <span className="bg-dark-gray-4 border border-border-color text-light-gray-4 text-[14px] font-semibold px-3 py-1 rounded-lg max-w-full wrap-break-word">
                    {item.role}
                  </span>
                </div>
              </div>
              <div className="border border-dark-gray-3 rounded-xl bg-darkest-gray flex flex-none flex-col flex-nowrap gap-4 h-min justify-start p-4 relative w-full min-w-0">
                <div className="flex flex-none shrink-0 flex-col justify-start relative w-full min-w-0 wrap-break-word">
                  <p className="text-light-gray-3 text-[13px] font-medium uppercase tracking-wide mb-2">
                    Description
                  </p>
                  <p className="text-light-gray-2 text-[15px] text-base font-medium ">
                    {item.description}
                  </p>
                </div>
                <div className="flex flex-none shrink-0 flex-col justify-start relative w-full min-w-0 wrap-break-word">
                  <p className="text-light-gray-3 text-[13px] font-medium uppercase tracking-wide mb-2">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2 items-center">
                    {item.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="bg-dark-gray-4 border border-border-color text-light-gray-2 text-[13px] font-medium px-3 py-1.5 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <Link
                  href={`/case-studies/${item.slug}`}
                  className="inline-flex items-center gap-2 bg-almost-black hover:bg-dark-gray-4 transition-all duration-300 rounded-[10px] border border-dark-gray-4 px-[18px] py-[14px] text-very-light-gray uppercase font-medium font-IBM_Plex_Mono text-[15px] opacity-70 hover:opacity-100 w-full sm:w-auto justify-center"
                >
                  View case study
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.li>
          ))}
        </motion.ul>
        {hasMoreProjects && (
          <button
            type="button"
            onClick={() => setShowAll((prev) => !prev)}
            className="mt-4 flex w-full cursor-pointer items-center justify-center gap-2 bg-almost-black hover:bg-dark-gray-4 transition-all duration-300 rounded-[10px] border border-dark-gray-4 px-[18px] py-[14px] text-very-light-gray uppercase font-medium font-IBM_Plex_Mono text-[15px] opacity-70 hover:opacity-100"
          >
            {showAll ? (
              <>
                Show less
                <ChevronUp size={16} />
              </>
            ) : (
              <>
                Show {hiddenCount} more projects
                <ChevronDown size={16} />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
