"use client";

import { motion } from "framer-motion";
import { linkedInIcon } from "@/app/assets/assets";
import { linkedInPosts } from "@/data";
import SectionHeading from "./SectionHeading";

export default function LinkedInPosts() {

    if (!linkedInPosts || linkedInPosts.length === 0) {
        return null;
    }

    return (
        <div className="flex items-start flex-none flex-col flex-nowrap gap-[30px] h-min justify-start overflow-visible relative w-full ">
            <div className="flex-none h-auto relative w-full">
                <SectionHeading
                    title="LinkedIn Posts"
                    icon={linkedInIcon}
                    description="Recent thoughts, insights, and updates from my LinkedIn"
                />
            </div>
            <div className="w-full">
                <motion.ul
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="flex flex-none flex-col gap-[10px] h-auto justify-start overflow-visible p-0 relative w-full flex-nowrap items-start "
                >
                    {linkedInPosts.map((post, index) => (
                        <motion.li
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{
                                once: true,
                            }}
                            key={post.id}
                            className="bg-very-dark-gray border border-dark-gray-3 w-full rounded-xl flex flex-col flex-nowrap gap-4 justify-start h-auto p-4 sm:p-6 relative"
                        >
                            <iframe
                                src={`https://www.linkedin.com/embed/feed/update/${post.embedId.startsWith("urn:")
                                    ? post.embedId
                                    : `urn:li:ugcPost:${post.embedId}`
                                    }?collapsed=1`}
                                height="100%"
                                width="100%"
                                frameBorder="0"
                                allowFullScreen
                                title={`Embedded LinkedIn Post ${post.id}`}
                                className="w-full"
                                style={{ minHeight: "650px" }}
                            />
                        </motion.li>
                    ))}
                </motion.ul>
            </div>
        </div>
    );
}
