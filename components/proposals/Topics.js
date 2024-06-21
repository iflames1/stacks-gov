"use client";
import Link from "next/link";
import { proposals } from "./Data";
import { usePathname } from "next/navigation";

export default function Proposals() {
  const pathname = usePathname();
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Proposals</h1>
      <ul className="space-y-4">
        {proposals.map((proposal) => (
          <li key={proposal.id} className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-2">{proposal.title}</h2>
            {/*<p className="mb-2">{proposal.description}</p>*/}
            <p className="mb-2">Some description</p>
            {proposal.status === "Active" ? (
              <span className="inline-block bg-green-200 text-green-800 text-sm px-2 py-1 rounded">
                {proposal.status}
              </span>
            ) : (
              <span className="inline-block bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">
                {proposal.status}
              </span>
            )}

            <Link href={`${pathname}/${proposal.id}`}>
              <p className="ml-4 text-blue-500 hover:underline">View</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
