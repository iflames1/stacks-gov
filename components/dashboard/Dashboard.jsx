import React from "react";
import DashboardTop from "./DashboardTop";
import Daos from "./Daos";

export default function Dashboard() {
  return (
    <div className="w-full py-[2.7%] px-[2.7%]">
      <DashboardTop />
      <div className="h-[1px] w-full my-8 bg-gray-200 dark:bg-white/5"></div>
      <Daos />
    </div>
  );
}
