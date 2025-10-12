"use client";
import { getCalApi } from "@calcom/embed-react";
import { Calendar } from "lucide-react";
import { useEffect } from "react";
import { calendarIcon } from "@/app/assets/assets";
import Tooltip from "./Tooltop";

export default function ScheduleButton({
  isForSidebar = false,
}: {
  isForSidebar?: boolean;
}) {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return isForSidebar ? (
    <button
      type="button"
      aria-label="Schedule Meeting"
      data-cal-namespace="15min"
      data-cal-link="sahil-bhanvadiya/15min"
      data-cal-config='{"layout":"month_view"}'
      className={`p-3.5 group flex cursor-pointer border items-center justify-center transition-all duration-300 h-min w-min  relative rounded-xl hover:bg-very-dark-gray hover:border-dark-gray-3 bg-almost-black border-dark-gray-3 text-white`}
    >
      <span className="text-light-gray-3">
        <Calendar size={18} />
      </span>

      <Tooltip content="Schedule Meeting" position="right" />
    </button>
  ) : (
    <button
      type="button"
      data-cal-namespace="15min"
      data-cal-link="sahil-bhanvadiya/15min"
      data-cal-config='{"layout":"month_view"}'
      className="bg-almost-black hover:bg-dark-gray-4 transition-all duration-300 rounded-[10px] border border-dark-gray-4 w-full flex gap-2 cursor-pointer items-center group justify-center p-[14px_18px] relative group"
    >
      <div className="flex items-center justify-center gap-2">
        {/* Icon */}
        <div className="aspect-square opacity-70 group-hover:opacity-100 transition-all duration-500 relative h-5 w-5 overflow-hidden">
          <figure className="absolute inset-0 h-full w-full rounded-[inherit]">
            <img
              src={calendarIcon}
              alt="calendarIcon"
              className="block w-full h-full object-cover object-center"
              width={20}
              height={20}
            />
          </figure>
        </div>

        {/* Text */}
        <div className="flex-none h-auto w-auto whitespace-pre opacity-70 shrink-0 flex-col justify-start group-hover:opacity-100">
          <p className="text-very-light-gray uppercase font-medium font-IBM_Plex_Mono leading-[100%] text-[15px]">
            Schedule call
          </p>
        </div>
      </div>
    </button>
  );
}
