import ProposalsPage from "@/components/Proposals";
import Add from "@/components/proposals/Add";

export default function page() {
  return (
    <div>
      <ProposalsPage />
      <Add path={"/#propose"} />
    </div>
  );
}
