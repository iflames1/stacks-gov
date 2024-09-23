import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";

interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  asChild?: boolean;
}

export default function Button({
  className,
  children,
  onClick,
  asChild = false,
}: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      onClick={onClick}
      className={cn(
        "flex items-center justify-center gap-3 border border-white/[0.02] rounded-[2px] bg-white/5 text-base font-normal cursor-pointer",
        "hover:bg-white/10 focus:bg-white/10 active:bg-white/20",
        "hover:text-white focus:text-white active:text-white",
        "transition-colors duration-200 ease-in-out",
        className
      )}
    >
      {children}
    </Component>
  );
}
