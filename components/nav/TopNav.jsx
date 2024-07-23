import Image from "next/image";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";

export default function TopNav() {
  const address = "SPF0V8KWBS70F0WDKTMY65B3G591NN52PTHHN51D";
  return (
    <div className="w-[100vw] pr-[2%] flex border-b-[1px] border-b-[rgba(255,255,255,0.15)]">
      <div className="w-[25%] pl-[2%] flex justify-between">
        <Link href={"/"} className="flex items-center gap-8">
          <Image
            src={"/images/logo.png"}
            alt="logo"
            width={54.6}
            height={42.7}
          />
          <p className="dark:text-white">STX-GOV</p>
        </Link>
        <div className="bg-[rgba(255,255,255,0.15)] w-[1px] h-[99px]"></div>
      </div>

      <div className="flex justify-between items-center w-[75%]">
        <form className="hidden flex-shrink lg:flex items-center gap-6 w-full max-w-xl dark:bg-[rgba(255,255,255,0.03)] h-fit my-auto mx-[2%] py-[15px] px-4 rounded-sm">
          <FiSearch className="size-6 text-[rgba(255,255,255,0.5)]" />
          {/* i dont know what is wrong this background  */}
          <input
            placeholder="Search DAOS..."
            className="placeholder:text-[rgba(255,255,255,0.3)] outline-none w-full flex-shrink appearance-none"
          />
        </form>

        <div className="flex items-center gap-6">
          <div className="p-3 dark:bg-[rgba(255,255,255,0.05)] rounded-full">
            <IoNotifications className="size-6 dark:text-[rgba(255,255,255,0.4)]" />
          </div>

          <div className="flex items-center w-fit gap-[10px] py-3 px-4 dark:bg-[rgba(255,255,255,0.05)] rounded-sm">
            <Image
              src={"/images/wallet-icon.png"}
              alt="avater"
              width={23}
              height={23}
              className="rounded-full size-[23px]"
            />
            <p className="text-base font-normal">
              {`${address.slice(0, 7)}...${address.slice(-3)}`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
