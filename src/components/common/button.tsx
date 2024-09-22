import { cn } from "@/lib/utils";

export default function Button({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center gap-3 border border-white/[0.02] rounded-[2px] bg-white/5 text-base font-normal cursor-pointer",
        "hover:bg-white/10 focus:bg-white/10 active:bg-white/20",
        "hover:text-white focus:text-white active:text-white",
        "transition-colors duration-200 ease-in-out",
        className
      )}
    >
      {children}
    </div>
  );
}
