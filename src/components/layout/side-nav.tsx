import { FaPlus } from "react-icons/fa6";
import JoinedDAO from "./joined-dao";
import Button from "../common/button";

export default function SideNav() {
  return (
    <div className="flex flex-col lg:gap-4 gap-2 px-2 justify-center items-center">
      <JoinedDAO />
      <div className="h-px w-full lg:my-6 my-4 bg-white/15" />
      <Button className="border-dashed border border-white/35 hover:border-white bg-white/[0.06] rounded-lg p-4 lg:p-5">
        <FaPlus className="text-white size-4 lg:size-5" />
      </Button>
    </div>
  );
}
