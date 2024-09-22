import React from "react";
import Stats from "./stats";
import Button from "../common/button";
import { FaPlus } from "react-icons/fa6";
import { cn } from "@/lib/utils";

export default function Dashboard() {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-normal font-jost">Dashboard</h1>
        <Button className={cn("bg-button-gradient py-3 px-4")}>
          <FaPlus />
          <span>Create a DAO</span>
        </Button>
      </div>
      <Stats />
    </div>
  );
}
