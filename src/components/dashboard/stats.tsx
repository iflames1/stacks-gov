import { cn } from "@/lib/utils";
import React from "react";
import { FiUsers } from "react-icons/fi";
import { LuArrowUpDown } from "react-icons/lu";

export default function Stats() {
  return (
    <div
      className={cn(
        "font-jost text-white/50 text-base sm:text-start text-center bg-white/[0.04] rounded sm:p-6 p-2",
        "flex items-center justify-between gap-2"
      )}
    >
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <span className="bg-accent-blue/15 p-3 rounded-full">
          <FiUsers className="text-white size-6 opacity-40" />
        </span>
        <div>
          <p>DAOs Joined</p>
          <p className="font-manrope text-xl font-bold text-accent-blue">64</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <span className="bg-teal/15 p-3 rounded-full">
          <LuArrowUpDown className="text-white size-6 opacity-40" />
        </span>
        <div>
          <p>Total Votes</p>
          <p className="font-manrope text-xl font-bold text-teal">127</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <span className="bg-light-gray/15 p-3 rounded-full">
          <LuArrowUpDown className="text-white size-6 opacity-40" />
        </span>
        <div>
          <p>Total Proposals</p>
          <p className="font-manrope text-xl font-bold text-white">1k</p>
        </div>
      </div>
    </div>
  );
}
