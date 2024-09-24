"use client";

import { fetchProposal } from "@/lib/utils";
import { PROPOSAL } from "@/types/dao";
import { useEffect, useState } from "react";

interface ProposalProps {
  username: string;
  proposalID: string;
}
export default function Proposal({ username, proposalID }: ProposalProps) {
  const [proposal, setProposal] = useState<PROPOSAL | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFunc = async () => {
      const proposal = await fetchProposal(username, Number(proposalID));
      setProposal(proposal);
      setLoading(false);
    };
    fetchFunc();
  }, [username, proposalID]);

  console.log(proposal);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!proposal) {
    return <div>something went wrong</div>;
  }

  return <div>{proposal.author}</div>;
}
