import GovernancePage from "@/components/proposals/GovernancePage";
import Add from "@/components/Add";
import React from "react";

export default function page() {
  return (
    <div className="min-h-screen mb-20">
      <GovernancePage />
      <Add text={"Create Topic"} path={"/propose"} />
    </div>
  );
}
