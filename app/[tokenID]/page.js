import Blog from "@/components/Blog";
import React from "react";

export default function page({ params }) {
  return (
    <div className="min-h-screen">
      <h1>Welcome to {params.tokenID} governance page</h1>
      <Blog />
    </div>
  );
}
