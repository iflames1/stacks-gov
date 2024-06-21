"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Create() {
  const router = useRouter();
  const [tokenName, setTokenName] = useState("");
  const hundleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    router.push(`/${tokenName}`);
  };
  return (
    <div className="min-h-screen flex items-center text-center mx-auto">
      <form
        className="bg-gray-100 py-8 px-4 rounded-lg mx-auto"
        onSubmit={hundleSubmit}
      >
        <legend className="font-bold pb-10 text-xl">
          Create a governance page
        </legend>
        <label className="pr-2" htmlFor="name">
          Token name
        </label>
        <input
          id="name"
          type="text"
          required
          className="border-2 border-gray-300 rounded-lg outline-none px-2 py-1 text-sm"
          value={tokenName}
          onChange={(e) => setTokenName(e.target.value)}
        />
        <p className="text-sm text-gray-600 pt-4">
          This would serve as the governance page name
        </p>
        <button
          type="submit"
          className="bg-orange-500 text-white py-1 px-2 rounded-lg mt-12"
        >
          Create
        </button>
      </form>
    </div>
  );
}
