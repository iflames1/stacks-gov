"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function Propose() {
  const [form, setForm] = useState({
    topic: "",
    description: "",
    proposal: "",
  });

  const pathname = usePathname();
  const basePath = pathname.split("/")[1] ? `/${pathname.split("/")[1]}` : "/";
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(basePath + "/1");
    console.log("Form Submitted:", form);
  };

  return (
    <div className="max-w-lg mx-auto p-4 sm:p-8">
      <h2 className="text-2xl font-bold mb-4 text-center">Create a Proposal</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-4 sm:px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="topic"
          >
            Topic
          </label>
          <input
            id="topic"
            name="topic"
            type="text"
            required
            value={form.topic}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter topic"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            required
            value={form.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter description"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="proposal"
          >
            Proposal (Optional)
          </label>
          <textarea
            id="proposal"
            name="proposal"
            value={form.proposal}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter proposal details (optional)"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
