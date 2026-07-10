"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const greenColor = "#6dd33d";

export default function FreelanceAvailability() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      viewport={{ once: true }}
      className="flex flex-col items-center text-center gap-3 mt-8 py-5 w-full border-t border-b border-dashed border-dark-gray-4"
      aria-label="Freelance availability"
    >
      <div className="flex flex-col items-center gap-1.5 min-w-0">
        <div className="flex items-center justify-center gap-2.5">
          <div
            className="h-2 w-2 relative flex items-center justify-center rounded-full shrink-0"
            style={{ backgroundColor: greenColor }}
          >
            <div className="absolute w-3 h-3 rounded-full bg-green-400/30 animate-ping pointer-events-none" />
          </div>
          <p className="text-light-gray-4 text-[15px] sm:text-base font-bold">
            Available for freelance & contract work
          </p>
        </div>
        <div className="flex flex-col items-center gap-1 text-light-gray-2 text-[14px] sm:text-[15px] font-medium leading-relaxed max-w-lg">
          <p>Full-stack, AI, cloud-native</p>
        </div>
      </div>

      <Link
        href="#contact"
        className="inline-flex items-center justify-center gap-1.5 bg-almost-black hover:bg-dark-gray-4 transition-all duration-300 rounded-[10px] border border-dark-gray-4 px-[18px] py-[14px] text-very-light-gray uppercase font-medium font-IBM_Plex_Mono text-[14px] opacity-70 hover:opacity-100 group"
      >
        Hire me
        <ArrowRight
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        />
      </Link>
    </motion.div>
  );
}
