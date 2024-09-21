import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";
import MobileTop from "./mobile-top";
import Test from "./test";
import Search from "./search";

export default function Top() {
  return (
    <div className="w-full border-b border-white/15">
      <div className="flex items-center lg:justify-start justify-between lg:gap-0 gap-4">
        <div className="lg:w-[23vw] lg:border-r border-white/15">
          <Link
            href={"/"}
            className="flex items-center lg:gap-8 gap-2 lg:py-8 py-2 xl:pl-8 pl-4"
          >
            <Image
              src={"/images/logo.png"}
              alt="stacks gov logo"
              width={54.5}
              height={42.7}
            />
            <span className="text-white lg:text-xl hidden md:flex">
              Stacks Gov
            </span>
          </Link>
        </div>

        <Search className="flex lg:hidden w-full max-w-sm flex-shrink" />

        <MobileTop className="lg:hidden pr-2 py-2" />
        <div className="px-8 lg:flex hidden items-center justify-between w-full">
          <Search className="w-1/2 hidden lg:flex" />
          <div className="flex items-center gap-6">
            <button className="p-3 bg-white/5 rounded-full">
              <IoNotifications className="size-6 text-white/[0.4]" />
            </button>
            <button className="flex items-center gap-3 px-4 py-3 border border-white/[0.02] rounded-sm bg-white/5">
              <Image
                src={"/images/wallet-icon.png"}
                alt="avater"
                width={23}
                height={23}
                className="rounded-full size-[23px]"
              />
              <p className="text-base font-normal">SPF0V...HN51D</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
