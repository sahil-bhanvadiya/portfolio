import { emailIcon } from "@/app/assets/assets";
import EmailMeButton from "../EmailMeButton";
import SectionHeading from "../SectionHeading";
import ScheduleButton from "../ui/ScheduleButton";

export default function ContactForm() {
  return (
    <div className="flex flex-col gap-[30px] w-full">
      <SectionHeading
        icon={emailIcon}
        title="I Love to hear from you."
        description="Connect with Me Today. Let's Create Something Amazing Together!"
      />
      <div className="w-full ">
        <div className="flex  items-start flex-none flex-nowrap  w-full gap-5 h-min justify-start p-0 relative">
          <EmailMeButton />
          <ScheduleButton />
        </div>
      </div>
    </div>
  );
}
