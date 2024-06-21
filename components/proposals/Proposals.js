"use client";
import { useState } from "react";
import Link from "next/link";

export default function Proposals({ route }) {
  const [proposals] = useState([
    {
      id: 1,
      title: "Increase Staking Rewards",
      description:
        "Proposal to increase staking rewards by 5% to incentivize more staking.",
      status: "Active",
    },
    {
      id: 2,
      title: "Reduce Transaction Fees",
      description:
        "Proposal to reduce transaction fees by 2% to encourage more transactions on the network.",
      status: "Closed",
    },
    {
      id: 3,
      title: "Implement Governance Token",
      description:
        "Proposal to implement a governance token to allow community voting on key decisions.",
      status: "Pending",
    },
    {
      id: 4,
      title: "Launch Marketing Campaign",
      description:
        "Proposal to launch a new marketing campaign to increase community engagement and adoption.",
      status: "Pending",
    },
    {
      id: 5,
      title: "Develop Mobile Wallet",
      description:
        "Proposal to develop a mobile wallet application for easier access and transactions on the go.",
      status: "Pending",
    },
  ]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Proposals</h1>
      {route}
      <ul className="space-y-4">
        {proposals.map((proposal) => (
          <li key={proposal.id} className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-bold mb-2">{proposal.title}</h2>
            <p className="mb-2">{proposal.description}</p>
            {proposal.status === "Active" ? (
              <span className="inline-block bg-green-200 text-green-800 text-sm px-2 py-1 rounded">
                {proposal.status}
              </span>
            ) : (
              <span className="inline-block bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">
                {proposal.status}
              </span>
            )}

            <Link href={`/${route}/vote/${proposal.id}`}>
              <p className="ml-4 text-blue-500 hover:underline">View</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
