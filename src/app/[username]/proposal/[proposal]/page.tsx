import Proposal from "@/components/proposal/proposal";

interface Params {
  params: {
    username: string;
    proposal: string;
  };
}

export default function page({ params }: Params) {
  return (
    <div className="w-full max-w-screen-2xl mx-auto">
      <Proposal username={params.username} proposalID={params.proposal} />
    </div>
  );
}
