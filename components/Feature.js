import React from "react";

export default function Feature({ progress, children }) {
  return (
    <li
      className={`bg-orange-500 text-white text-lg text-center p-4 ${
        progress && "bg-[url(/check.svg)]"
      }  bg-no-repeat bg-center bg-cover rounded-lg w-full max-w-[300px] h-full`}
    >
      <p className="my-auto">{children}</p>
    </li>
  );
}
