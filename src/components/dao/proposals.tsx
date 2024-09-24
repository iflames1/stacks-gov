import { cn } from "@/lib/utils";
import { DAO } from "@/types/dao";
import Image from "next/image";
import { IoMdArrowDown } from "react-icons/io";
import { IoMdArrowUp } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import Button from "../common/button";

export default function Proposals({ dao }: { dao: DAO }) {
  return (
    <div className="space-y-5">
      <h2 className="font-jost text-2xl font-normal">Proposals</h2>
      <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6">
        {dao.proposals.map((proposal, index) => (
          <div
            key={index}
            className={cn("bg-white/[0.03] border border-white/5 rounded")}
          >
            <div className="flex items-center justify-between px-6 py-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Image
                    src={proposal.author_dp}
                    alt={proposal.author}
                    width={32}
                    height={32}
                    className="rounded-full border border-white/5"
                  />
                  <p className="text-base">
                    <span className="text-white/30 font-normal">by</span>{" "}
                    <span className="font-semibold">{proposal.author}</span>
                  </p>
                </div>
                <div className="h-8 w-px bg-white/5"></div>
                <p className="text-sm">
                  <span className="font-bold">
                    {proposal.votes.downvote + proposal.votes.upvote}
                  </span>{" "}
                  <span className="text-white/50 font-normal">Votes</span>
                </p>
              </div>
              <div
                className={cn(
                  proposal.active ? "bg-teal" : "bg-red-500",
                  "w-fit px-2 py-[6px] rounded-full text-xs font-medium"
                )}
              >
                {proposal.active ? "Active" : "Closed"}
              </div>
            </div>
            <div className="flex items-center border-t border-white/5">
              <div>
                <div className="text-teal p-4 space-y-1">
                  <p className="text-base font-normal text-center">
                    {proposal.votes.upvote}
                  </p>
                  <Button
                    className={cn(
                      "p-[10px]",
                      "hover:text-teal focus:text-teal active:text-teal"
                    )}
                  >
                    <IoMdArrowUp className="size-6" />
                  </Button>
                </div>
                <div className="h-px w-full bg-white/5" />
                <div className="text-red-500 p-4 space-y-1">
                  <Button
                    className={cn(
                      "p-[10px]",
                      "hover:text-red-500 focus:text-red-500 active:text-red-500"
                    )}
                  >
                    <IoMdArrowDown className="size-6" />
                  </Button>
                  <p className="text-base font-normal text-center">
                    {proposal.votes.downvote}
                  </p>
                </div>
              </div>
              <div className="border-l border-white/5">
                <div className="space-y-2 py-4 px-6">
                  <p className="text-white/80 font-bold text-lg">
                    {proposal.topic}
                  </p>
                  <p className="text-white/40 text-sm font-normal">
                    {proposal.description}
                  </p>
                </div>
                <div className="py-4 px-6 border-t border-white/5">
                  <p className="text-white/25 text-xs font-normal flex gap-2 items-center">
                    <FaRegClock />
                    <span>{proposal.daysleft}day(s) left</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
