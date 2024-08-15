"use client";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function MobileNav() {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div className="block lg:hidden">
      <IoMdMenu
        onClick={() => setShowMobileNav(!showMobileNav)}
        className={`size-6 dark:text-white/40 text-gray-600 ${
          showMobileNav ? "hidden" : "block"
        }`}
      />
      {showMobileNav && (
        <div className={`${showMobileNav ? "block" : "hidden"}`}>
          <IoMdClose
            onClick={() => setShowMobileNav(!showMobileNav)}
            className="size-6 dark:text-white/40 text-gray-600"
          />
          <div className="absolute top-full left-0">Hello World</div>
        </div>
      )}
    </div>
  );
}
