"use client";
import { AiFillHome } from "react-icons/ai";
import { ImTarget } from "react-icons/im";
import { BsPeopleFill } from "react-icons/bs";
import { RiPlayCircleFill } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Nav({ className }) {
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const userName = parts.length >= 1 ? parts[0] : "";

  const nav =
    parts.length >= 1
      ? parts[1] === undefined
        ? "/"
        : parts[1]
      : parts[0] === undefined
      ? "/"
      : parts[0];

  const [userNames, setUserNames] = useState([""]);

  const active = (path) => {
    const activeStyle = {
      container:
        "bg-blue-50 dark:bg-teal-500/5 border-r-[2px] border-r-blue-500 dark:border-r-teal-500",
      icon: "text-blue-500 dark:text-blue-600",
      text: "text-blue-700 dark:text-white",
    };

    if (userNames.includes(userName) && nav === path) {
      return activeStyle;
    } else if (userName === path) {
      return activeStyle;
    }
    return {};
  };

  const direct = (path) => {
    if (nav === path && path !== "/") {
      return path;
    } else if (userNames.includes(userName)) {
      return `/${userName}/${path}`;
    } else return `/${path}`;
  };

  useEffect(() => {
    async function getUserNames(endpoint = "/data.json") {
      try {
        const response = await axios.get(endpoint);
        const userNames = response.data.map((item) => item.username);
        console.log(userNames);
        setUserNames(userNames);

        return userNames;
      } catch (error) {
        console.error(error);
      }
    }
    getUserNames();
  }, [pathname]);

  return (
    <div
      className={`${className} text-gray-600 dark:text-white/50 pt-6 flex flex-col gap-4`}
    >
      <Link
        href={direct("/")}
        className={`flex items-center gap-4 py-4 pl-8 ${active("/").container}`}
      >
        <AiFillHome className={`size-6 ${active("/").icon}`} />
        <p className={`${active("/").text}`}>Dashboard</p>
      </Link>

      <Link
        href={direct("explore")}
        className={`flex items-center gap-4 py-4 pl-8 ${
          active("explore").container
        }`}
      >
        <ImTarget className={`size-6 ${active("explore").icon}`} />
        <p className={`${active("explore").text}`}>Exploore</p>
      </Link>

      <Link
        href={direct("delegates")}
        className={`flex items-center gap-4 py-4 pl-8 ${
          active("delegates").container
        }`}
      >
        <BsPeopleFill className={`size-6 ${active("delegates").icon}`} />
        <p className={`${active("delegates").text}`}>Delegates</p>
      </Link>

      <Link
        href={direct("activity")}
        className={`flex items-center gap-4 py-4 pl-8 ${
          active("activity").container
        }`}
      >
        <RiPlayCircleFill className={`size-6 ${active("activity").icon}`} />
        <p className={`${active("activity").text}`}>Activity</p>
      </Link>
    </div>
  );
}
