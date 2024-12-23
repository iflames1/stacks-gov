import Image from "next/image";
import Link from "next/link";
import { IoNotifications } from "react-icons/io5";
import AuthButton from "./auth-button";
import Search from "./search";
import Button from "../common/button";
import dynamic from "next/dynamic";
import { Skeleton } from "../ui/skeleton";

const MobileTop = dynamic(() => import("./mobile-top"), {
  ssr: false,
  loading: () => (
    <div className="xl:hidden pr-2 py-2">
      <Button className="px-4 py-3">
        <Skeleton className="size-4" />
      </Button>
    </div>
  ),
});

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
            </Button>
            <AuthButton />
          </div>
        </div>
      </div>
    </div>
  );
}
