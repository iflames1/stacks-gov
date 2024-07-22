import React from "react";
import DashboardTop from "./DashboardTop";
import Daos from "./Daos";

export default function Dashboard() {
  return (
    <div className="py-6 px-8">
      <DashboardTop />
      <div className="h-[1px] w-full my-8 bg-[rgba(255,255,255,0.05)]"></div>
      <Daos />
    </div>
  );
}
