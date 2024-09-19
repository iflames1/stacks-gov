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
        "flex items-center gap-3 px-4 py-3 border border-white/[0.02] rounded-sm bg-white/5 text-base font-normal",
        className
      )}
    >
      {children}
    </div>
  );
}
