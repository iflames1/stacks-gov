"use client";
import { usePathname } from "next/navigation";
import useFetchData from "../components/useFetchData";

export default function ProposalsPage() {
  const { data, loading, error } = useFetchData("/data.json");
  const pathname = usePathname();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const pageName = pathname.split("/")[1];
  const topicId = pathname.split("/")[2];

  const governancePage = data.governancePage.find(
    (page) => page.pageName === pageName
  );

  // Find topic by ID (assuming unique IDs)
  const topic = governancePage?.topics?.find((t) => t.id === parseInt(topicId));

  if (!topic) return <div>Topic not found</div>;

  return (
    <div className="max-w-4xl mx-auto sm:p-8">
      <div className="mb-8 text-center flex flex-col gap-4">
        <h1 className="sm:text-3xl text-2xl font-bold ">{topic.topic}</h1>
        <p className="">{topic.description}</p>
      </div>
      {topic.proposals.map((proposal) => (
        <div key={proposal.id} className="mb-4 p-4 border rounded shadow-md">
          <h2 className="text-xl font-bold">{proposal.title}</h2>
          <p className="text-gray-700">{proposal.description}</p>
        </div>
      ))}
    </div>
  );
}
