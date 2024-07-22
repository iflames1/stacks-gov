"use client";
import Nav from "../nav/Nav";
import DashboardTop from "./DashboardTop";

export default function Dashboard() {
  return (
    <Nav className="text-white p-8 bg-gradient-to-r from-[#0C0C0C] to-transparent">
      <DashboardTop />
    </Nav>
  );
}
