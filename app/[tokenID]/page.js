import Blog from "@/components/Blog";
import Add from "@/components/proposals/Add";
import Proposals from "@/components/proposals/Proposals";
import React from "react";

export default function page({ params }) {
  return (
    <div className="min-h-screen">
      <h1>Welcome to {params.tokenID} governance page</h1>
      <Proposals route={params.tokenID} />
      <Blog />
      <Add />
    </div>
  );
}
