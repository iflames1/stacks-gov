import { Button } from "@/components/ui/button";
import { FaPlus } from "react-icons/fa6";

export default function Dashboard() {
  return (
    <div className="px-[2.7%] pt-[2.7%] w-full">
      <div className="flex justify-between items-center">
        <h1 className="font-jost text-2xl">Dashboard</h1>
        <Button className="flex gap-3 rounded-none">
          <FaPlus className="size-6" />{" "}
          <span className="text-sm font-bold">Create a DAO</span>
        </Button>
      </div>
    </div>
  );
}
