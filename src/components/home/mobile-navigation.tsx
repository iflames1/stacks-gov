"use client";
import { usePathname } from "next/navigation";
import { DropdownMenuGroup, DropdownMenuItem } from "../ui/dropdown-menu";
import Nav from "./nav";
import { paths } from "./home-nav";
import { cn } from "@/lib/utils";

export default function MobileNavigation() {
  const pathname = usePathname();

  const visiblePaths = paths.map((path) => path.path);

  return (
    <DropdownMenuGroup
      className={cn(visiblePaths.includes(pathname) ? "mb-4" : "hidden")}
    >
      {paths.map((path) => (
        <DropdownMenuItem key={path.title}>
          <Nav path={path.path} title={path.title} />
        </DropdownMenuItem>
      ))}
    </DropdownMenuGroup>
  );
}
