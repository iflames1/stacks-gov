import { AiFillHome } from "react-icons/ai";
import { ImTarget } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";
import { RiPlayCircleFill } from "react-icons/ri";
import { useScreen } from "@/utils/useSceen";

export default function Nav({ className, children }) {
  let screenSize = useScreen();
  return (
    <div className="relative">
      {screenSize > 1280 && (
        <div className="w-[calc(374px-121px)]  text-[rgba(255,255,255,0.5)] pt-6 flex flex-col gap-4">
          <div className="bg-[rgba(0,201,169,0.05)] border-r-[2px] border-r-[#00C9A9] flex items-center gap-4 py-4 pl-8">
            <AiFillHome className="size-6 text-[rgba(36,106,238,1)]" />
            <p className="text-white">Dashboard</p>
          </div>
          <div className="flex items-center gap-4 py-4 pl-8">
            <ImTarget className="size-6" />
            <p className="">Explore</p>
          </div>
          <div className="flex items-center gap-4 py-4 pl-8">
            <BsPeopleFill className="size-6" />
            <p className="">Delegates</p>
          </div>
          <div className="flex items-center gap-4 py-4 pl-8 ">
            <RiPlayCircleFill className="size-6" />
            <p className="">Activity</p>
          </div>
        </div>
      )}
      <div
        className={`absolute top-0 left-full w-[calc(100vw-374px)] h-[calc(100vh-100px)] ${className}`}
      >
        {children}
      </div>
    </div>
  );
}
