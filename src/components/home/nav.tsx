"use client";
import Link from "next/link";
import { IconType } from "react-icons";
import { AiFillHome } from "react-icons/ai";
import { ImTarget } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";
import { RiPlayCircleFill } from "react-icons/ri";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface NavProps {
  path: string;
  title: string;
}

export default function Nav({ path, title }: NavProps) {
  const pathname = usePathname();

  const IconMap: { [key: string]: IconType } = {
    "/": AiFillHome,
    "/explore": ImTarget,
    "/delegates": BsPeopleFill,
    "/activity": RiPlayCircleFill,
  };
  const Icon = IconMap[path];
  return (
    <Link
      href={path}
      className={cn("flex items-center gap-4 py-4 pl-[14%]", {
        "bg-teal/5 border-r-2 border-teal": pathname === path,
      })}
    >
      <Icon
        className={cn("size-6 text-white/40", {
          "text-accent-blue/40": pathname === path,
        })}
      />
      <span
        className={cn("text-sm font-normal text-white/50", {
          "text-white font-medium": pathname === path,
        })}
      >
        {title}
      </span>
    </Link>
  );
}
