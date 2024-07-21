"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <p>chill</p>;

  if (resolvedTheme === "dark")
    return (
      <div>
        <IoMoon onClick={() => setTheme("light")} className="text-white" />
      </div>
    );
  if (resolvedTheme === "light")
    return (
      <div>
        <IoSunny onClick={() => setTheme("dark")} className="text-black" />
      </div>
    );
}
