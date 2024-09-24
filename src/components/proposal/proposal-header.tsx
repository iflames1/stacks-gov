import { cn } from "@/lib/utils";
import { PROPOSAL } from "@/types/dao";
import Image from "next/image";
import React from "react";
import Button from "../common/button";
import { TbMessage } from "react-icons/tb";
import { MdInsertLink } from "react-icons/md";
import { SlStar } from "react-icons/sl";
import Link from "next/link";
import { FiShare2 } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa6";

export default function ProposalHeader({ proposal }: { proposal: PROPOSAL }) {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Image
            src={proposal.author_dp}
            alt={proposal.author}
            width={32}
            height={32}
            className="rounded-full border border-white/5"
          />
          <p className="text-xl font-jost">
            <span className={cn("text-white/30 font-normal")}>by</span>{" "}
            <span className="font-semibold">{proposal.author}</span>
          </p>
          <p className="border border-white/15 rounded-full px-2 py-[2px]">
            <span className="text-white/60 text-xs font-normal">Core</span>
          </p>
        </div>
        <div className="space-y-4 p-4 border border-white/30 rounded bg-accent-blue">
          <p className="font-jost text-xl font-semibold">{proposal.topic}</p>
          <div className="flex items-center gap-3">
            <Button className="py-3 px-4 rounded-lg w-fit" asChild={true}>
              <Link href="">
                <TbMessage className="size-6" />{" "}
                <span className="text-base text-white/80 font-normal">
                  Join this discussion
                </span>{" "}
                <MdInsertLink className="size-4" />
              </Link>
            </Button>
            <Button className="p-3 rounded-lg">
              <SlStar className="size-6" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <p
          className={cn(
            proposal.active ? "bg-teal" : "bg-red-500",
            "w-fit px-2 py-[6px] rounded-full text-xs font-medium"
          )}
        >
          {proposal.active ? "Active" : "Closed"}
        </p>
        <div className="h-7 w-px bg-white/[0.08]" />
        <Button className="px-2 py-1 rounded">
          <FiShare2 className="size-6 text-white/60" />
          <span className="text-base font-semibold gap-2">Share</span>
        </Button>
      </div>
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
  );
}
