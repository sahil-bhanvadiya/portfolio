"use client";
import { motion } from "framer-motion";

import { stackIcon } from "@/app/assets/assets";
import { myStack } from "@/data";
import SectionHeading from "../SectionHeading";

export default function MyStack() {
  return (
    <div className="flex items-start flex-none flex-col flex-nowrap gap-[30px] h-min justify-start overflow-visible relative w-full ">
      <div className="flex-none h-auto relative w-full">
        <SectionHeading
          icon={stackIcon}
          title="My Tech & Tool Stack"
          description="Technologies and tools I use to build amazing products"
        />
      </div>
      <div className="w-full">
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-none flex-col gap-[10px] h-min justify-start overflow-visible p-0 relative w-full flex-nowrap items-start "
        >
          {myStack.map((category) => (
            <motion.li
              key={category.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{
                once: true,
              }}
              className="bg-very-dark-gray border border-dark-gray-3 w-full rounded-xl flex flex-col flex-nowrap gap-3 h-min justify-start overflow-visible pt-4 relative"
            >
              <div className="w-full px-4 flex justify-between flex-none items-center h-min flex-nowrap overflow-visible p-0 relative">
                <div className="flex items-center flex-1 gap-2 h-min justify-start overflow-visible p-0 relative ">
                  <div className="flex float-none flex-nowrap items-start gap-[6px] h-min justify-center overflow-visible p-0 relative w-min ">
                    <div className="gap-0 flex h-min justify-start overflow-visible items-start flex-col flex-nowrap">
                      <div className="flex-none h-auto relative whitespace-pre w-auto flex flex-col justify-start shrink-0">
                        <p className="font-bold  text-[20px]  text-light-gray-4">
                          {category.key}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-dark-gray-3 rounded-b-xl bg-darkest-gray flex flex-none flex-col flex-nowrap gap-1 h-min justify-start overflow-visible p-4 relative w-full">
                <div className="w-full ">
                  <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="grid gap-[10px] flex-none auto-rows-min h-min justify-center overflow-visible relative p-0 w-full grid-cols-[repeat(auto-fill,minmax(62px,1fr))]"
                  >
                    {category.value.map((stack) => (
                      <div
                        key={stack.id}
                        className="cursor-pointer bg-dark-gray-4 border border-border-color rounded-[7px] flex items-center flex-none flex-nowrap gap-[10px] h-[62px] w-[62px] justify-center overflow-visible p-2 relative hover:scale-110 transition-transform duration-300 group"
                      >
                        <div className="aspect-square flex-none h-auto overflow-visible relative w-[38px]  ">
                          <figure className="relative inset-0 rounded-[inherit]  ">
                            <img
                              src={stack.logo}
                              alt={stack.title}
                              width={38}
                              height={38}
                              className="block w-full h-full rounded-[inherit] object-cover object-center "
                            />
                          </figure>
                        </div>
                        <span className="absolute bottom-[70%] left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex bg-dark-gray-3 text-light-gray-4 text-xs font-medium py-1 px-2 rounded-md whitespace-nowrap z-50 shadow-lg">
                          {stack.title}
                        </span>
                      </div>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </div>
  );
}
