import { PROPOSAL } from "@/types/dao";

export default function Information({ proposal }: { proposal: PROPOSAL }) {
  return (
    <div className="py-[8%] pr-[8%] border-b border-white/5 space-y-4">
      <h3 className="font-jost text-xl font-semibold">Information</h3>
      <div className="flex justify-between">
        <p className="text-sm font-medium text-white/50">Voting System</p>
        <p className="text-sm font-bold text-white/80">Single choice voting</p>
      </div>
      <div className="flex justify-between">
        <p className="text-sm font-medium text-white/50">Start Date</p>
        <p className="text-sm font-bold text-white/80">Jun 10, 2022, 2:00 PM</p>
      </div>
      <div className="flex justify-between">
        <p className="text-sm font-medium text-white/50">End Date</p>
        <p className="text-sm font-bold text-white/80">Jun 15, 2022, 2:00 PM</p>
      </div>
      <div className="flex justify-between">
        <p className="text-sm font-medium text-white/50">Snapshot</p>
        <p className="text-sm font-bold text-white/80">8,938</p>
      </div>
    </div>
  );
}
