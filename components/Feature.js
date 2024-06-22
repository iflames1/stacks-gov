import React from "react";

export default function Feature({ progress, children }) {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`bg-orange-500 hover:bg-orange-600 text-white text-lg text-center flex items-center justify-center p-4 ${
          progress && "bg-[url(/check.svg)]"
        }  bg-no-repeat bg-center bg-cover rounded-lg w-full max-w-[300px] h-full`}
      >
        <p className="my-auto">{children}</p>
      </div>
    </div>
  );
}
