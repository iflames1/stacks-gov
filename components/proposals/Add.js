"use client";
import Link from "next/link";
import { IoAdd } from "react-icons/io5";
import { usePathname } from "next/navigation";

export default function Add() {
  const pathname = usePathname();
  const basePath = pathname.split("/")[1] ? `/${pathname.split("/")[1]}` : "/";
  return (
    <Link
      href={basePath + "/propose"}
      className="bg-orange-500 fixed bottom-8 right-8 rounded-full size-16 sm:size-fit flex items-center justify-center p-2 sm:px-4 cursor-pointer"
      aria-label="Add Proposal"
    >
      <span className="relative flex items-center justify-center py-2 px-4 text-white">
        <p className="hidden sm:flex">Add Proposal</p>
        <IoAdd size={32} className="" />
      </span>
    </Link>
  );
}
