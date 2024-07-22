"use client";
import Nav from "../nav/Nav";
import DashboardTop from "./DashboardTop";
import Daos from "./Daos";

export default function Dashboard() {
  return (
    <Nav className="text-white p-8 bg-gradient-to-r from-[#0C0C0C] to-transparent">
      <DashboardTop />
      <div className="h-[1px] w-full my-8 bg-[rgba(255,255,255,0.05)]"></div>
      <Daos />
    </Nav>
  );
}
