import GovernancePage from "@/components/proposals/GovernancePage";
import Add from "@/components/Add";
import React from "react";

export default function page({ params }) {
  return (
    <div className="min-h-screen mb-20">
      <h1>Welcome to {params.tokenID} governance page</h1>
      <GovernancePage />
      <Add text={"Create Topic"} path={"/propose"} />
    </div>
  );
}
