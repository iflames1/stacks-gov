import GovernancePage from "@/components/proposals/GovernancePage";
import Add from "@/components/proposals/Add";
import Topics from "@/components/proposals/Topics";
import React from "react";

export default function page({ params }) {
  return (
    <div className="min-h-screen mb-20">
      <h1>Welcome to {params.tokenID} governance page</h1>
      <Topics />
      <GovernancePage />
      <Add path={"/propose"} />
    </div>
  );
}
