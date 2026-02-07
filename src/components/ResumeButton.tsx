"use client";

import { FileText } from "lucide-react";
import Button from "./ui/Button";
import Tooltip from "./ui/Tooltop";

const ResumeButton = ({
    isForSidebar = false,
}: {
    isForSidebar?: boolean;
}) => {
    const resumePath = "/Sahil_Bhanvadiya_Resume.pdf";

    const handleView = () => {
        window.open(resumePath, "_blank");
    };

    return isForSidebar ? (
        <button
            type="button"
            onClick={handleView}
            aria-label="Resume"
            className={`p-3.5 group flex cursor-pointer border items-center justify-center transition-all duration-300 h-min w-min  relative rounded-xl hover:bg-very-dark-gray hover:border-dark-gray-3 bg-almost-black border-dark-gray-3 text-white`}
        >
            <span className="text-light-gray-3">
                <FileText size={18} />
            </span>
            <Tooltip content="Resume" position="right" />
        </button>
    ) : (
        <Button
            onClick={handleView}
            position="left"
            icon={<FileText size={18} />}
            title="Resume"
        />
    );
};

export default ResumeButton;
