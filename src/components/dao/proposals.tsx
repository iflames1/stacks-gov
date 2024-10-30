import { cn } from "@/lib/utils";
import { DAO } from "@/types/dao";
import Image from "next/image";
import { IoMdArrowDown } from "react-icons/io";
import { IoMdArrowUp } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import Button from "../common/button";
import Link from "next/link";

export default function Proposals({ dao }: { dao: DAO }) {
  return (
    <div className="space-y-5">
      <h2 className="font-jost text-2xl font-normal">Proposals</h2>
      <div className="grid 2xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-6">
        {dao.proposals.map((proposal, index) => (
          <Link
            href={`${dao.username.toLocaleLowerCase()}/proposal/${index}`}
            key={index}
            className={cn(
              "bg-white/[0.03] border border-white/5 rounded",
              "group hover:bg-accent-blue transition-colors duration-200 ease-in-out"
            )}
          >
            <div className="flex flex-wrap items-center justify-between sm:px-6 px-4 sm:py-4 py-2">
              <div className="flex items-center sm:gap-4 gap-2">
                <div className="flex items-center gap-2">
                  <Image
                    src={proposal.author_dp}
                    alt={proposal.author}
                    width={32}
                    height={32}
                    className="rounded-full border border-white/5"
                  />
                  <p className="text-base font-jost">
                    <span
                      className={cn(
                        "text-white/30 font-normal",
                        "group-hover:text-white/50 transition-colors duration-200 ease-in-out"
                      )}
                    >
                      by
                    </span>{" "}
                    <span className="font-semibold">{proposal.author}</span>
                  </p>
                </div>
                <div className="h-8 w-px bg-white/5" />
                <p className="text-sm">
                  <span className="font-bold">
                    {proposal.votes.downvote + proposal.votes.upvote}
                  </span>{" "}
                  <span
                    className={cn(
                      "text-white/50 font-normal",
                      "group-hover:text-white/70 transition-colors duration-200 ease-in-out"
                    )}
                  >
                    Votes
                  </span>
                </p>
              </div>
              <p
                className={cn(
                  proposal.active ? "bg-teal" : "bg-red-500",
                  "w-fit px-2 py-[6px] rounded-full text-xs font-medium"
                )}
              >
                {proposal.active ? "Active" : "Closed"}
              </p>
            </div>
            <div className="flex items-center border-t border-white/5">
              <div>
                <div className="text-teal sm:p-4 p-2 space-y-1">
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
                <div className="text-red-500 sm:p-4 p-2 space-y-1">
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
                <div className="space-y-2 sm:py-4 py-2 sm:px-6 px-4">
                  <p className="text-white/80 font-bold text-lg">
                    {proposal.topic}
                  </p>
                  <p
                    className={cn(
                      "text-white/40 text-sm font-normal",
                      "group-hover:text-white/60 transition-colors duration-200 ease-in-out"
                    )}
                  >
                    {proposal.description}
                  </p>
                </div>
                <div className="sm:py-4 py-2 sm:px-6 px-4 border-t border-white/5">
                  <p
                    className={cn(
                      "text-white/25 text-xs font-normal flex gap-2 items-center",
                      "group-hover:text-white/45 transition-colors duration-200 ease-in-out"
                    )}
                  >
                    <FaRegClock />
                    <span>{proposal.daysleft}day(s) left</span>
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
