import { proposals } from "@/components/proposals/Data";

export default function page({ params }) {
  const proposal = proposals[params.proposal];
  return (
    <div>
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <h2 className="text-xl font-bold mb-2">{proposal.title}</h2>
        <p className="mb-2">{proposal.description}</p>
        <p className="mb-2">Some description</p>
        {proposal.status === "Active" ? (
          <span className="inline-block bg-green-200 text-green-800 text-sm px-2 py-1 rounded">
            {proposal.status}
          </span>
        ) : (
          <span className="inline-block bg-gray-200 text-gray-800 text-sm px-2 py-1 rounded">
            {proposal.status}
          </span>
        )}
      </div>
    </div>
  );
}
