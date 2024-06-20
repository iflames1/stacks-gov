import Header from "@/components/header/Header2";
import React from "react";

export default function page({ params }) {
  return (
    <div>
      <Header />
      <h1>Welcome to {params.tokenID} governance page</h1>
    </div>
  );
}
