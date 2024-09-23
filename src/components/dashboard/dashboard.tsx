import Stats from "./stats";
import Button from "../common/button";
import { FaPlus } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import Daos from "./daos";

export default function Dashboard() {
  return (
    <div>
      <div className="flex justify-between items-center pb-3">
        <h1 className="sm:text-2xl text-xl font-normal font-jost">Dashboard</h1>
        <Button
          className={cn(
            "bg-button-gradient sm:py-3 py-2 sm:px-4 px-2 sm:gap-3 gap-2"
          )}
        >
          <FaPlus />
          <span>Create a DAO</span>
        </Button>
      </div>
      <Stats />
      <div className="w-full h-px bg-white/5 my-8"></div>
      <Daos />
    </div>
  );
}
