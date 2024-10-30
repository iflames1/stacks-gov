"use client";
import { usePathname } from "next/navigation";
import Nav from "./nav";
import { cn } from "@/lib/utils";

export const paths = [
  {
    title: "Dashboard",
    path: "/",
  },
  {
    title: "Explore",
    path: "/explore",
  },
  {
    title: "Delegates",
    path: "/delegates",
  },
  {
    title: "Activity",
    path: "/activity",
  },
];

export default function HomeNav() {
  const pathname = usePathname();

  const visiblePaths = paths.map((path) => path.path);

  return (
    <div
      className={cn(
        visiblePaths.includes(pathname)
          ? "xl:flex hidden flex-col gap-4"
          : "hidden",
        "w-[13.9vw] h-[calc(100vh-106.59px)] border-r border-white/15 pt-6 bg-black"
      )}
    >
      {paths.map((path) => (
        <Nav key={path.title} title={path.title} path={path.path} />
      ))}
    </div>
  );
}
