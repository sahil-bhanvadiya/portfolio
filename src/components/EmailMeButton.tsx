"use client";

import { Mail } from "lucide-react";
import Button from "./ui/Button";
import Tooltip from "./ui/Tooltop";

const EmailMeButton = ({
  isForSidebar = false,
}: {
  isForSidebar?: boolean;
}) => {
  const handleClick = () => {
    const email = "sahil.bhanvadiya.dev@gmail.com";
    const subject = "Schedule a Call";
    const body = "Hi, I'd like to schedule a call.";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
  };
  return isForSidebar ? (
    <button
      type="button"
      onClick={handleClick}
      className={`p-3.5 group flex cursor-pointer border items-center justify-center transition-all duration-300 h-min w-min  relative rounded-xl hover:bg-very-dark-gray hover:border-dark-gray-3 bg-almost-black border-dark-gray-3 text-white`}
    >
      <span className="text-light-gray-3">
        <Mail size={18} />
      </span>

      <Tooltip content="Email Me" position="right" />
    </button>
  ) : (
    <Button
      onClick={handleClick}
      position="left"
      icon={<Mail size={18} />}
      title="Email Me"
    />
  );
};

export default EmailMeButton;
