import Proposals from "@/components/proposals/Proposals";

export default function page({ params }) {
  return (
    <div>
      <Proposals route={params.tokenID} />
    </div>
  );
}
