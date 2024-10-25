import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CreateDaoForm from "./create-dao-form";

export default function CreateDaoDialog() {
  return (
    <DialogContent className="space-y-8 bg-[#0A0B0A]">
      <DialogHeader className="space-y-10">
        <DialogTitle className="font-jost font-bold text-xl">
          Create a DAO
        </DialogTitle>
        {/*
        <DialogDescription>description</DialogDescription>*/}
      </DialogHeader>
      <CreateDaoForm />
    </DialogContent>
  );
}
