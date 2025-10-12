"use client";

import Marquee from "react-fast-marquee";
import { personalQualities } from "@/data/index";

export default function Brandcontainer() {
  return (
    <div className="flex flex-none flex-nowrap gap-[30px] h-min overflow-hidden relative w-full p-[0px_0px_10px]">
      <section className="maskImage w-full max-w-full p-[10px] max-h-full flex overflow-hidden justify-between">
        <Marquee className="w-full" autoFill speed={30} loop={0}>
          <ul className="flex shrink-0 w-full h-full max-w-full max-h-full place-items-center pl-7 p-0 gap-7 relative">
            {personalQualities.map((quality) => (
              <li key={quality.id} className="h-full w-full">
                <div className="cursor-default h-[60px] relative flex items-center justify-center shrink-0 overflow-hidden w-full bg-very-dark-gray border border-dark-gray-3 rounded-lg hover:border-border-color transition-all duration-300 group">
                  <div className="flex items-center gap-3 px-4">
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {quality.icon}
                    </span>
                    <span className="text-sm font-medium text-light-gray-2 group-hover:text-light-gray-4 transition-colors duration-300 whitespace-nowrap">
                      {quality.name}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Marquee>
      </section>
    </div>
  );
}
