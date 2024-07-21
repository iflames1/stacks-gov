import Image from "next/image";
import { FiSearch } from "react-icons/fi";
import { IoNotifications } from "react-icons/io5";

export default function TopNav() {
  const address = "SPF0V8KWBS70F0WDKTMY65B3G591NN52PTHHN51D";
  return (
    <div className="max-w-[100vw] px-8 flex border-b-[1px] border-b-[rgba(255,255,255,0.15)]">
      <div className="w-[342px] flex items-center gap-8">
        <Image src={"/images/logo.png"} alt="logo" width={54.6} height={42.7} />
        <p>STX-GOV</p>
      </div>
      <div className="bg-[rgba(255,255,255,0.15)] w-[1px] h-[99px] mr-8"></div>
      <div className="flex justify-between items-center w-full">
        <form className="flex items-center gap-6 w-full max-w-xl bg-[rgba(255,255,255,0.03)] h-fit my-auto py-[15px] px-4 rounded-sm">
          <FiSearch className="size-6 text-[rgba(255,255,255,0.5)]" />
          {/* i dont know what is wrong this background  */}
          <input
            placeholder="Search DAOS..."
            className="bg-[rgba(255,255,255,0.03)] placeholder:text-[rgba(255,255,255,0.3)] text-white outline-none w-full appearance-none"
          />
        </form>
        <div className="flex items-center gap-6">
          <div className="p-3 bg-[rgba(255,255,255,0.05)] rounded-full">
            <IoNotifications className="size-6 text-[rgba(255,255,255,0.4)]" />
          </div>
          <div className="flex items-center gap-[10px] py-3 px-4 bg-[rgba(255,255,255,0.05)] rounded-sm">
            <Image
              src={"/images/wallet-icon.png"}
              alt="avater"
              width={23}
              height={23}
              className="rounded-full"
            />
            <p>{`${address.slice(0, 7)}...${address.slice(-3)}`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
