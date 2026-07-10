import { emailIcon } from "@/app/assets/assets";
import EmailMeButton from "../EmailMeButton";
import SectionHeading from "../SectionHeading";
import ScheduleButton from "../ui/ScheduleButton";

export default function ContactForm() {
  return (
    <div id="contact" className="flex flex-col gap-[30px] w-full scroll-mt-24">
      <SectionHeading
        icon={emailIcon}
        title="Let's work together"
        description="Available for freelance and contract engagements with US, EU, and global teams. Share your project and I'll get back within 24 hours."
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
