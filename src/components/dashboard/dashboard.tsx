import Stats from "./stats";
import Button from "../common/button";
import { FaPlus } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import Daos from "./daos";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateDaoDialog from "./create-dao-dialog";

export default function Dashboard() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center pb-3">
        <h1 className="sm:text-2xl text-xl font-normal font-jost">Dashboard</h1>
        <Dialog>
          <Button
            asChild={true}
            className={cn(
              "bg-button-gradient sm:py-3 py-2 sm:px-4 px-2 sm:gap-3 gap-2"
            )}
          >
            <DialogTrigger>
              <FaPlus />
              <span>Create a DAO</span>
            </DialogTrigger>
          </Button>
          <CreateDaoDialog />
        </Dialog>
      </div>
      <Stats />
      <div className="w-full h-px bg-white/5 my-8" />
      <Daos />
    </div>
  );
}
