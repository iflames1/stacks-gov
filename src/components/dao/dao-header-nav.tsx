"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function DaoHeaderNav({ username }: { username: string }) {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  console.log(parts);

  const paths = ["", "delegate", "treasury", "about"];
  return paths.map((path) => (
    <div
      key={path}
      //href={`/${username}/${path}`}
      className={cn(
        "sm:p-4 p-2 border-accent-blue text-sm capitalize font-normal text-white/40 cursor-pointer",
        "hover:text-white hover:border-b-[2px]",
        path === "" && "text-white border-b-[2px]"
      )}
    >
      {path ? path : "proposals"}
    </div>
  ));
}
