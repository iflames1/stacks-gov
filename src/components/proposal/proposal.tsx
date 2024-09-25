"use client";

import { fetchProposal } from "@/lib/utils";
import { PROPOSAL } from "@/types/dao";
import { useEffect, useState } from "react";
import Button from "../common/button";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import ProposalHeader from "./proposal-header";
import Information from "./information";
import Result from "./result";
import Description from "./description";
import Votes from "./votes";

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

  return (
    <div className="flex">
      <div className="w-1/3 border-r border-white/5">
        <div className="pr-[8%] pb-[8%] border-b border-white/5">
          <div className="space-y-6">
            <Button
              asChild={true}
              className="w-fit py-2 px-3 rounded-full gap-2"
            >
              <Link href={`/${username}`}>
                <IoIosArrowBack className="size-6" />
                <span className="font-normal text-sm">Back</span>
              </Link>
            </Button>
            <ProposalHeader proposal={proposal} />
          </div>
        </div>
        <Information proposal={proposal} />
        <Result proposal={proposal} />
      </div>
      <div className="w-full relative">
        <Description proposal={proposal} />
        <Votes proposal={proposal} />
      </div>
    </div>
  );
}
