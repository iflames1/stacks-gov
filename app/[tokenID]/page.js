import Blog from "@/components/Blog";
import Add from "@/components/proposals/Add";
import Topics from "@/components/proposals/Topics";
import React from "react";

export default function page({ params }) {
  return (
    <div className="min-h-screen">
      <h1>Welcome to {params.tokenID} governance page</h1>
      <h1>Topics</h1>
      <Topics route={params.tokenID} />
      <Blog />
      <Add path={"/propose"} />
    </div>
  );
}
