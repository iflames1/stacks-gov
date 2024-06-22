"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import useFetchData from "../components/useFetchData";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProposalsPage() {
  const { data, loading, error } = useFetchData("/data.json");
  const pathname = usePathname();
  const [selectedProposal, setSelectedProposal] = useState(null);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const pageName = pathname.split("/")[1];
  const topicId = pathname.split("/")[2];

  const governancePage = data.governancePage.find(
    (page) => page.pageName === pageName
  );

  const topic = governancePage?.topics?.find((t) => t.id === parseInt(topicId));

  if (!topic) return <div>Topic not found</div>;

  const handleSelectProposal = (proposalId) => {
    setSelectedProposal(proposalId);
  };

  const handleVote = () => {
    if (selectedProposal !== null) {
      toast.success(`Vote sent for proposal ID: ${selectedProposal}`);
    } else {
      toast.error("Please select a proposal to vote.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto sm:p-8 mb-16">
      <div className="mb-8 text-center flex flex-col gap-4">
        <h1 className="sm:text-3xl text-2xl font-bold">{topic.topic}</h1>
        <p>{topic.description}</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">Select a Proposal to Vote</h2>
          <div className="space-y-4">
            {topic.proposals.map((proposal) => (
              <div
                key={proposal.id}
                className={`p-4 border rounded-lg shadow-sm cursor-pointer transition-colors duration-200 ${
                  selectedProposal === proposal.id
                    ? "bg-blue-100 border-blue-500"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => handleSelectProposal(proposal.id)}
              >
                <h3 className="text-lg font-semibold">{proposal.title}</h3>
                <p className="text-gray-700 mt-2">{proposal.description}</p>
              </div>
            ))}
          </div>
          <button
            onClick={handleVote}
            className={`mt-6 w-full py-3 max-w-sm rounded-lg text-white font-semibold transition-colors duration-200 ${
              selectedProposal
                ? "bg-green-500 hover:bg-green-600"
                : "bg-green-300 cursor-not-allowed"
            }`}
            disabled={!selectedProposal}
          >
            Send Vote
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
