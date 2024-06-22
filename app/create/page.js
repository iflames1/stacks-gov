import CreateGovernance from "@/components/CreateGovernance";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <CreateGovernance />
      <Link
        href={"/demo"}
        className="bg-orange-500 hover:bg-orange-600 text-white text-center font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Launch Demo
      </Link>
    </div>
  );
}
