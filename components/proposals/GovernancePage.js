"use client";
import useFetchData from "../useFetchData";
import { useRouter, usePathname } from "next/navigation";
import { SiBitcoincash } from "react-icons/si";

export default function GovernancePage() {
  const { data, loading, error } = useFetchData("/data.json");
  const router = useRouter();
  const pathname = usePathname();

  const pageName = pathname.slice(1);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  //console.log(data);
  //console.log(data.governancePage);

  const governancePage = data.governancePage.find(
    (page) => page.pageName === pageName
  );

  if (!governancePage) return <div>Governance page not found</div>;

  const handleOpenClick = (topicId) => {
    router.push(`${pathname}/${topicId}`);
  };

  return (
    <div className="max-w-3xl mx-auto sm:p-8">
      <h1 className="sm:text-3xl text-2xl font-bold mb-10 text-center">
        Welcome to {governancePage.pageName}
      </h1>
      <h2 className="text-2xl font-bold mb-4">Topics</h2>
      {governancePage.topics.map((topic) => (
        <div
          key={topic.id}
          className="mb-4 sm:mb-8 p-4 border rounded shadow-md flex sm:gap-8 gap-4 relative"
        >
          <SiBitcoincash className="size-16 text-blue-500 hidden sm:block" />
          <div className="hidden sm:block">
            <h2 className="text-xl font-bold">{topic.topic}</h2>
            <p className="text-gray-700">{topic.description}</p>
            <button
              onClick={() => handleOpenClick(topic.id)}
              className="mt-2 bg-orange-500 hover:bg-orange-600 text-white py-1 px-3 rounded"
            >
              Open
            </button>
            <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded absolute right-4 bottom-4">
              Active
            </span>
          </div>
          <div className="sm:hidden block ">
            <span className="flex items-center gap-2">
              <SiBitcoincash className="size-10 text-blue-500" />
              <h2 className="text-lg font-bold">{topic.topic}</h2>
            </span>
            <p className="text-gray-700">{topic.description}</p>
            <div className="flex justify-between items-center">
              <button
                onClick={() => handleOpenClick(topic.id)}
                className="mt-2 bg-orange-500 hover:bg-orange-600 text-white py-1 px-3 rounded"
              >
                Open
              </button>
              <span className="bg-green-200 text-green-800 text-xs mt-4 px-2 py-1 rounded">
                Active
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
