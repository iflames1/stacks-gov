import CreateGovernance from "@/components/CreateGovernance";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <CreateGovernance />
      <Link
        href={"/demo"}
        className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Create
      </Link>
    </div>
  );
}
