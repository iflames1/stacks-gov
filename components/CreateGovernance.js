"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateGovernance() {
  const [communityName, setCommunityName] = useState("");
  const router = useRouter();

  const handleChange = (e) => {
    setCommunityName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (communityName.trim()) {
      // Redirect to the governance page for the given community
      router.push(`/${communityName}`);
    } else {
      // Handle error for empty community name
      alert("Community name is required");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-8">
      <h2 className="text-2xl font-bold mb-4">Create Governance Page</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="communityName"
          >
            Community Name
          </label>
          <input
            id="communityName"
            name="communityName"
            type="text"
            required
            value={communityName}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter community name"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
