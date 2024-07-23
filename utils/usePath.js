"use client";
import { usePathname } from "next/navigation";

export const usePath = () => {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  console.log("page", page, "daoName", daoName);

  return {
    page: parts[0] || null,
    daoName: parts[1] || null,
    section: parts[2] || null,
  };
};
