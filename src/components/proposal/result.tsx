import { PROPOSAL } from "@/types/dao";

export default function Result({ proposal }: { proposal: PROPOSAL }) {
  return (
    <div className="pt-[8%] pr-[8%] space-y-4">
      <h3>Result</h3>
      <div className="space-y-6">
        <div className="flex justify-between">
          <p className="text-white/50 text-sm font-normal">Approved</p>
          <p className="text-sm">
            <span className="text-white/50 font-normal">2M</span>{" "}
            <span className="font-bold">80.00%</span>
          </p>
        </div>
        <div className="flex justify-between">
          <p className="text-white/50 text-sm font-normal">Disapproved</p>
          <p className="text-sm">
            <span className="text-white/50 font-normal">200k</span>{" "}
            <span className="font-bold">20.00%</span>
          </p>
        </div>
      </div>
    </div>
  );
}
