import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Button from "./button";
import { cn } from "@/lib/utils";
import { FaPlus } from "react-icons/fa6";

interface FormDialogProps {
  children: React.ReactNode;
  title: string;
  trigger: string;
  addIcon?: boolean;
}

export default function FormDialog({
  children,
  title,
  trigger,
  addIcon = false,
}: FormDialogProps) {
  return (
    <Dialog>
      <Button
        asChild={true}
        className={cn(
          "bg-button-gradient sm:py-3 py-2 sm:px-4 px-2 sm:gap-3 gap-2"
        )}
      >
        <DialogTrigger>
          {addIcon && <FaPlus />}
          <span>{trigger}</span>
        </DialogTrigger>
      </Button>
      <DialogContent className="space-y-8 bg-[#0A0B0A]">
        <DialogHeader className="space-y-10">
          <DialogTitle className="font-jost font-bold text-xl">
            {title}
          </DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
