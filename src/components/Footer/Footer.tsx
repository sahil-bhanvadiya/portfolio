import Link from "next/link";
import { socialLists } from "@/data";

export default function Footer() {
  return (
    <footer className="bg-darkest-gray border-t border-border-color flex flex-col items-center flex-nowrap gap-[10px] h-min justify-center overflow-visible py-5 md:py-10 px-0 relative w-full ">
      <div className="flex md:hidden items-start overflow-hidden justify-center h-full flex-nowrap relative flex-1">
        <ul className="flex items-center gap-5">
          {socialLists.map((social) => (
            <li key={social.id} className="flex items-center gap-10 ">
              <Link
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-very-dark-gray hover:bg-dark-gray-3 transition-all duration-300 border border-dark-gray-3 p-3 group rounded-xl"
              >
                <span className="text-light-gray-1 text-sm group-hover:text-light-gray-3 transition-all duration-300">
                  <img
                    src={social.icon}
                    alt={social.title}
                    height={22}
                    width={22}
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="items-center flex flex-none flex-col flex-nowrap gap-[10px] h-min justify-center overflow-hidden p-0 relative w-full  ">
        <div className="w-[80%] flex flex-col-reverse sm:flex-row items-center sm:items-start gap-5 sm:gap-0 flex-nowrap flex-none h-min justify-center overflow-hidden p-0 relative ">
          <div className="shrink-0 flex justify-center flex-1 relative break-words whitespace-pre-wrap h-auto ">
            <p className="text-md md:text-lg text-light-gray-2 font-medium">
              &copy; {new Date().getFullYear()} Sahil Bhanvadiya. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
