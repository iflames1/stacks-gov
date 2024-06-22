import ProposalsPage from "@/components/proposals/Proposals";
import Add from "@/components/Add";

export default function page() {
  return (
    <div>
      <ProposalsPage />
      <Add text={"Add Proposal"} path={"/#propose"} />
    </div>
  );
}
