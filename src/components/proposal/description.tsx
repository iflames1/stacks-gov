import { PROPOSAL } from "@/types/dao";

export default function Description({ proposal }: { proposal: PROPOSAL }) {
  return (
    <div className="pt-[8%] lg:pt-0 lg:pl-[2.7%] pb-[8%] lg:pb-[2.7%] border-b border-white/5">
      <h3 className="text-xl font-semibold font-jost">Description</h3>
      <p className="max-w-2xl text-white/60 text-base font-normal">
        {proposal.description}
      </p>
    </div>
  );
}
