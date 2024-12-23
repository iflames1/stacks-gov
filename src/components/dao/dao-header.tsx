import { DAO } from "@/types/dao";
import Image from "next/image";
import React from "react";
import { MdVerifiedUser } from "react-icons/md";
import { BsPersonCheck } from "react-icons/bs";
import Button from "../common/button";
import DaoHeaderNav from "./dao-header-nav";
import FormDialog from "../common/form-dialog";
import ProposalForm from "./proposal-form";

export default function DaoHeader({ dao }: { dao: DAO }) {
  console.log(dao);
  return (
    <div className="bg-white/[0.04] rounded">
      <div className="flex sm:items-center items-start gap-4 justify-between sm:flex-row flex-col sm:p-4 p-2">
        <div className="flex items-center gap-6">
          <Image
            src={dao.image}
            alt={dao.username}
            width={88}
            height={88}
            className="border border-white/15 rounded"
          />
          <div className="space-y-[6px]">
            <p className="flex items-center gap-2">
              <span className="font-jost font-bold text-2xl">
                {dao.username}
              </span>
              <MdVerifiedUser className="size-4 text-accent-blue" />
            </p>
            <div className="flex items-center gap-4">
              <p className="border border-white/[0.07] rounded-[2px] px-2 py-1">
                <span className="text-white/60 text-sm">Protocol</span>
              </p>
              <p className="text-white/60 text-base font-no">18k members</p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <Button className="sm:py-3 py-2 sm:px-4 px-2 gap-2">
            <BsPersonCheck className="size-6" />
            <span className="text-sm font-bold">Joined</span>
          </Button>
          <FormDialog
            trigger="Create a Proposal"
            addIcon={true}
            title="Create a proposal"
          >
            <ProposalForm />
          </FormDialog>
        </div>
      </div>
      <div className="h-px w-[calc(100%-32px)] mx-auto bg-white/5" />
      <div className="flex items-center sm:gap-8 gap-4 text-white/40 text-sm font-normal sm:px-4 px-2 sm:pt-4 pt-2 overflow-auto">
        <DaoHeaderNav username={dao.username} />
      </div>
    </div>
  );
}
