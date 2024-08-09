import Image from "next/image";
import Link from "next/link";
import { IoNotifications } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import Search from "./Search";
import Wallet from "../Wallet";

export default function TopNav() {
  return (
    <div className="w-[100vw] pr-[2%] flex justify-between border-b-[1px] dark:border-b-[rgba(255,255,255,0.15)] border-b-gray-200">
      <div className="lg:w-[25%] w-full pl-[2%] flex justify-between">
        <Link href={"/"} className="flex items-center gap-8 py-2">
          <Image
            src={"/images/logo.png"}
            alt="logo"
            width={54.6}
            height={42.7}
          />
          <p className="dark:text-white text-gray-800">STX-GOV</p>
        </Link>
        <div className="bg-[rgba(255,255,255,0.15)] dark:bg-[rgba(255,255,255,0.15)] bg-gray-200 w-[1px] h-[99px] lg:block hidden"></div>
      </div>

      <div className="flex lg:justify-between justify-end items-center sm:w-[75%] w-full">
        <Search className="hidden xl:flex" />

        <div className="hidden lg:flex items-center gap-6 ml-auto">
          <div className="p-3 dark:bg-[rgba(255,255,255,0.05)] bg-gray-100 rounded-full">
            <IoNotifications className="size-6 dark:text-[rgba(255,255,255,0.4)] text-gray-600" />
          </div>

          <Wallet />
        </div>

        <div className="block lg:hidden">
          <IoMdMenu className="size-6" />
        </div>
      </div>
    </div>
  );
}
