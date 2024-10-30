import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";
import AuthButton from "./auth-button";

export default function Top() {
  return (
    <div className="w-full border-b border-white/15">
      <div className="flex items-center">
        <div className="w-[23vw] border-r border-white/15">
          <Link href={"/"} className="flex items-center gap-8 py-8 pl-8">
            <Image
              src={"/images/logo.png"}
              alt="stacks gov logo"
              width={54.5}
              height={42.7}
            />
            <span className="text-white text-xl">Stacks Gov</span>
          </Link>
        </div>
        <div className="px-8 flex items-center justify-between w-full">
          <div className="flex items-center gap-6 pl-4 py-4 bg-white/[0.03] border border-white/[0.02] rounded-sm w-1/2">
            <FiSearch className="size-6 text-white/50" />
            <input
              placeholder="Search DAOS..."
              className="placeholder:text-white/30 text-white text-sm w-full bg-white/0 outline-none"
            />
          </div>
          <div className="flex items-center gap-6">
            <button className="p-3 bg-white/5 rounded-full">
              <IoNotifications className="size-6 text-white/[0.4]" />
            </button>
            {/*<button className="flex items-center gap-3 px-4 py-3 border border-white/[0.02] rounded-sm bg-white/5">
              <Image
                src={"/images/wallet-icon.png"}
                alt="avater"
                width={23}
                height={23}
                className="rounded-full size-[23px]"
              />
              <p className="text-base font-normal">SPF0V...HN51D</p>
            </button>*/}
            <AuthButton />
          </div>
        </div>
      </div>
    </div>
  );
}
