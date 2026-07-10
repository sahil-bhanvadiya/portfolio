"use client";
import { getCalApi } from "@calcom/embed-react";
import { Calendar } from "lucide-react";
import { useEffect } from "react";
import Button from "./Button";
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
    <Button
      icon={<Calendar size={18} />}
      title="Schedule call"
      data-cal-namespace="15min"
      data-cal-link="sahil-bhanvadiya/15min"
      data-cal-config='{"layout":"month_view"}'
    />
  );
}
