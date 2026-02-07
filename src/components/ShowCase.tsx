"use client";
import { motion } from "framer-motion";

import { flyIcon } from "@/app/assets/assets";
import { myShowCases } from "@/data";
import SectionHeading from "./SectionHeading";

export default function ShowCase() {
  return (
    <div className="flex items-start flex-none flex-col flex-nowrap gap-[30px] h-min justify-start overflow-visible relative w-full ">
      <div className="flex-none h-auto relative w-full">
        <SectionHeading
          title="Featured Projects"
          icon={flyIcon}
          description="Explore a collection of my most innovative and impactful technical projects."
        />
      </div>
      <div className="w-full">
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-none flex-col gap-[10px] h-min justify-start overflow-visible p-0 relative w-full flex-nowrap items-start "
        >
          {myShowCases?.map((item, index) => (
            <motion.li
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{
                once: true,
              }}
              key={item.id}
              className="bg-very-dark-gray border border-dark-gray-3 w-full rounded-xl flex flex-col flex-nowrap gap-5 h-min justify-start overflow-visible p-4 sm:p-6 relative"
            >
              <div className="w-full flex justify-between flex-none items-center h-min flex-nowrap overflow-visible p-0 relative">
                <div className="flex items-center flex-1 gap-2 h-min justify-start overflow-visible p-0 relative ">
                  <div className="flex float-none flex-nowrap items-start gap-[6px] h-min justify-center overflow-visible p-0 relative w-min ">
                    <div className="gap-0 flex h-min justify-start overflow-visible items-start flex-col flex-nowrap">
                      <div className="flex-none h-auto relative whitespace-pre w-auto flex flex-col justify-start shrink-0">
                        <p className="font-bold  text-[20px]  text-light-gray-4">
                          {item.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 pb-3 border-b border-dark-gray-3">
                <div className="flex items-center gap-2">
                  <span className="text-light-gray-3 text-[12px] font-medium uppercase tracking-wider">
                    Category
                  </span>
                  <span className="bg-dark-gray-4 border border-border-color text-light-gray-4 text-[14px] font-semibold px-3 py-1 rounded-lg">
                    {item.type}
                  </span>
                </div>
                <div className="bg-medium-gray rounded-full h-[4px] aspect-square w-[4px]"></div>
                <div className="flex items-center gap-2">
                  <span className="text-light-gray-3 text-[12px] font-medium uppercase tracking-wider">
                    Role
                  </span>
                  <span className="bg-dark-gray-4 border border-border-color text-light-gray-4 text-[14px] font-semibold px-3 py-1 rounded-lg">
                    {item.role}
                  </span>
                </div>
              </div>
              <div className="border border-dark-gray-3 rounded-xl bg-darkest-gray flex flex-none flex-col flex-nowrap gap-4 h-min justify-start overflow-visible p-4 relative w-full">
                <div className="flex flex-none shrink-0 flex-col justify-start relative whitespace-pre-wrap w-full break-words">
                  <p className="text-light-gray-3 text-[13px] font-medium uppercase tracking-wide mb-2">
                    Description
                  </p>
                  <p className="text-light-gray-2 text-[15px] text-base font-medium ">
                    {item.description}
                  </p>
                </div>
                <div className="flex flex-none shrink-0 flex-col justify-start relative whitespace-pre-wrap w-full break-words">
                  <p className="text-light-gray-3 text-[13px] font-medium uppercase tracking-wide mb-2">
                    Tech Stack
                  </p>
                  <div className="flex flex-wrap gap-2 items-center">
                    {item.techStack.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-dark-gray-4 border border-border-color text-light-gray-2 text-[13px] font-medium px-3 py-1.5 rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
