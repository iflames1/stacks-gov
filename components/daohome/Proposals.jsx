import Image from "next/image";
import { IoChevronDownSharp } from "react-icons/io5";
import { IoMdArrowDown } from "react-icons/io";
import { IoMdArrowUp } from "react-icons/io";
import { GoClock } from "react-icons/go";

export default function Proposals({ dao, className }) {
  return (
    <div className={className}>
      <div className="flex justify-between items-center pb-4">
        <p className="text-2xl font-jost">Proposals</p>
        <button className="text-sm font-semibold flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border-white/[0.07] border-[1px]">
          All ({dao?.proposals?.length || 0}){" "}
          <IoChevronDownSharp className="size-6" />
        </button>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {dao.proposals &&
          dao.proposals.map((proposal, index) => (
            <div
              key={index}
              className="bg-white/[0.03] border-[1px] border-white/5 rounded"
            >
              <div className="flex items-center justify-between py-4 px-6">
                <div className="flex items-center">
                  <div className="flex gap-2 items-center">
                    <Image
                      src={proposal.author_dp}
                      alt={proposal.topic}
                      width={32}
                      height={32}
                      className="rounded-full border-[1px] border-white/5"
                    />
                    <p className="text-white/30 text-base">
                      by{" "}
                      <span className="text-white/80 font-semibold">
                        {proposal.author}
                      </span>
                    </p>
                  </div>
                  <div className="mx-4 h-8 w-px bg-white/5"></div>
                  <div>
                    <p className="text-white text-sm font-bold">
                      {proposal.votes.upvote + proposal.votes.downvote}K+{" "}
                      <span
                        className="font-normal text-white/50
                          "
                      >
                        Votes
                      </span>
                    </p>
                  </div>
                </div>
                <p
                  className={`text-white text-xs px-2 py-[6px] rounded-full ${
                    proposal.active ? "bg-teal-500" : "bg-red-500"
                  }`}
                >
                  {proposal.active ? "Active" : "Closed"}
                </p>
              </div>
              <hr className="h-px bg-white/5 border-none" />
              <div className="flex">
                <div className="border-r-[1px] border-r-white/5">
                  <div className="text-teal-500 flex flex-col items-center py-3 px-4">
                    <div className="p-[10px] bg-white/[0.04] rounded-sm">
                      <IoMdArrowUp className="size-6" />
                    </div>
                    <p className="text-xs">{proposal.votes.upvote}</p>
                  </div>
                  <hr className="h-px bg-white/5 border-none" />
                  <div className="text-red-500 flex flex-col items-center py-3 px-4">
                    <p className="text-xs">{proposal.votes.downvote}</p>
                    <div className="p-[10px] bg-white/[0.04] rounded-sm">
                      <IoMdArrowDown className="size-6" />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="py-4 px-6">
                    <p className="text-white/80 font-bold text-lg pb-2">
                      {proposal.topic}
                    </p>
                    <p className="text-white/40 text-sm">
                      {proposal.description.slice(0, 176)}
                    </p>
                  </div>
                  <hr className="h-px bg-white/5 border-none" />
                  <div className="text-xs text-white/25 flex gap-2 items-center py-4 px-6">
                    <GoClock className="size-4" />
                    <p>{proposal.daysleft} day(s) left</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
