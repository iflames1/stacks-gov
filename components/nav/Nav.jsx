import { AiFillHome } from "react-icons/ai";
import { ImTarget } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";
import { RiPlayCircleFill } from "react-icons/ri";

export default function Nav({ className }) {
  return (
    <div
      className={`${className} dark:text-[rgba(255,255,255,0.5)] pt-6 flex flex-col gap-4`}
    >
      <div className="dark:bg-[rgba(0,201,169,0.05)] border-r-[2px] border-r-[#00C9A9] flex items-center gap-4 py-4 pl-8">
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
  );
}
