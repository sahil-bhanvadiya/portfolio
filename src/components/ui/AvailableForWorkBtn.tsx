import Link from "next/link";

const greenColor = "#6dd33d";

export default function AvailableForWorkBtn() {
  return (
    <Link
      href="#contact"
      className="inline-flex items-center justify-center gap-2.5 h-11 px-4 rounded-3xl bg-dark-gray-3 border border-border-color hover:bg-dark-gray-4 transition-colors duration-300 whitespace-nowrap"
    >
      <span
        className="h-2 w-2 relative flex items-center justify-center rounded-full shrink-0"
        style={{ backgroundColor: greenColor }}
      >
        <span className="absolute w-3 h-3 rounded-full bg-green-400/30 animate-ping pointer-events-none" />
      </span>
      <span className="text-sm font-medium text-light-gray-3">
        Available for work
      </span>
    </Link>
  );
}
