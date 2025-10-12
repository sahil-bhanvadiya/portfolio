"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

import Link from "next/link";
import { sidebarLogo } from "@/app/assets/assets";
import EmailMeButton from "../EmailMeButton";
import ScheduleButton from "../ui/ScheduleButton";
import Tooltip from "../ui/Tooltop";

interface SideNavbarProps {
  isMenuOpen?: boolean;
}

export default function SideNavbar({ isMenuOpen }: SideNavbarProps) {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.5, type: "spring" }}
      className=" absolute lg:block max-w-[13%] w-full border-r border-border-color h-screen md:sticky top-0 flex-none z-10"
      style={{
        left: isMenuOpen ? "0" : "-100%",
        maxWidth: isMenuOpen ? "140px" : "13%",
      }}
    >
      <div className="flex items-end justify-between h-full flex-none flex-nowrap relative p-[20px_30px_40px_0px] flex-col">
        {/* top */}
        <Link
          href="/"
          className="bg-border-color rounded-full w-[60px] border border-zinc-800 hover:scale-95 transition-all duration-300 h-auto aspect-square p-[4px] relative overflow-hidden flex items-center justify-center flex-none flex-nowrap gap-[10px]"
        >
          <div className="w-[50px] aspect-square h-auto rounded-full flex-none relative bg-darkest-gray">
            <div className="absolute rounded-full inset-0">
              <img
                src={sidebarLogo}
                alt="Avatar"
                className="block w-full h-full rounded-full opacity-80 object-fill object-center"
              />
            </div>
          </div>
        </Link>
        {/* middle */}
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="flex flex-col flex-none flex-nowrap gap-[20px] h-min justify-start p-0 relative w-min z-10 items-start"
        >
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{
              once: true,
            }}
          >
            <EmailMeButton isForSidebar />
            <br />
            <ScheduleButton isForSidebar />
          </motion.li>
        </motion.ul>
        {/* bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.1,
            type: "spring",
            stiffness: 120,
          }}
          className="relative group items-center w-full flex justify-end max-w-max"
        >
          <Link
            href="#top"
            aria-label="Go to Top"
            className={`p-3.5 flex cursor-pointer border border-transparent overflow-hidden items-center justify-center h-min w-min  relative rounded-xl hover:bg-very-dark-gray hover:border-dark-gray-3}`}
          >
            <span className="text-light-gray-2">
              <ArrowUp size={24} />
            </span>
          </Link>
          <Tooltip content="Go to Top" position="top" />
        </motion.div>
      </div>
    </motion.div>
  );
}
