import Image from "next/image";
import Link from "next/link";
import { IoNotifications } from "react-icons/io5";
import AuthButton from "./auth-button";

export default function Top() {
  return (
    <div className="w-full border-b border-white/15">
      <div className="flex items-center xl:justify-start justify-between xl:gap-0 gap-4">
        <div className="xl:w-[23vw] xl:border-r border-white/15">
          <Link
            href={"/"}
            className="flex items-center xl:gap-8 gap-2 xl:py-8 py-2 xl:pl-8 pl-4"
          >
            <Image
              src={"/images/logo.png"}
              alt="stacks gov logo"
              width={54.5}
              height={42.7}
            />
            <span className="text-white xl:text-xl hidden md:flex">
              Stacks Gov
            </span>
          </Link>
        </div>

        <Search className="flex xl:hidden w-full max-w-sm flex-shrink" />

        <MobileTop className="xl:hidden pr-2 py-2" />

        <div className="px-8 xl:flex hidden items-center justify-between w-full">
          <Search className="w-1/2 hidden xl:flex" />
          <div className="flex items-center gap-6">
            <Button className="p-3 bg-white/5 rounded-full">
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
