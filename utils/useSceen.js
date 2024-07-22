"use client";
import { useEffect, useState } from "react";

export const useScreen = () => {
  const [screen, setScreen] = useState(null);
  useEffect(() => {
    const handleResize = () => {
      setScreen(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return screen;
};
