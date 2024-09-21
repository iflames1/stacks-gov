import { cn } from "@/lib/utils";
import { FiSearch } from "react-icons/fi";

export default function Search({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        `flex items-center gap-4 pl-4 py-3 bg-white/[0.03] border border-white/[0.02] rounded-sm`,
        className
      )}
    >
      <FiSearch className="size-4 text-white/50" />
      <input
        placeholder="Search DAOS..."
        className="placeholder:text-white/30 text-white text-sm w-full h-4 bg-white/0 outline-none"
      />
    </div>
  );
}
