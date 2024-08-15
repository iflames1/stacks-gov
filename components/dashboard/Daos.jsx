"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoShieldCheckmark } from "react-icons/io5";
import { fetchData } from "../fetchData";
import Link from "next/link";

export default function Daos() {
  const [daos, setDaos] = useState(null);

  useEffect(() => {
    const fetchDaos = async () => {
      const res = await fetchData("/data.json");
      if (res) {
        setDaos(res);
      }
    };
    fetchDaos();
  }, []);

  return (
    <div className="text-gray-600 dark:text-white/40 text-xs font-normal grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between gap-x-[2%] gap-y-8 w-full">
      {daos &&
        daos.map((dao) => (
          <Link
            href={dao.username.toLowerCase()}
            key={dao.id}
            className="group text-gray-600 dark:text-white/40 text-xs font-normal border-[1px] border-gray-200 dark:border-white/5 rounded-sm bg-white dark:bg-white/[0.02] hover:bg-blue-600 hover:dark:bg-blue-600 transition-colors"
          >
            <div className="flex items-center gap-4 border-b-[1px] border-b-gray-200 dark:border-b-white/[0.07] p-4">
              <div className="border-[1px] border-gray-300 dark:border-white/15 rounded-sm">
                <Image src={dao.image} alt={``} width={64} height={64} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-gray-800 dark:text-white text-xl font-bold">
                    {dao.username}
                  </p>
                  <IoShieldCheckmark className="size-4 text-blue-600 dark:text-blue-600 group-hover:text-white" />
                </div>
                <p className="text-gray-500 dark:text-[rgba(255,255,255,0.6)] text-base">
                  18K members
                </p>
              </div>
            </div>
            <div className="p-4">
              <p className="pb-5 text-gray-700 dark:text-gray-300 group-hover:text-white/40 group-hover:dark:text-white/40">
                Lorem ipsum dolor sit amet, ametly mang at along tio nang lei
                lang lohe...
              </p>
              <button
                className={`font-jost text-blue-600 dark:text-white font-bold text-sx border-blue-200 dark:border-white/5 border-[1px] rounded-sm py-3 text-center w-full group-hover:dark:bg-white/45 group-hover:bg-white/45 transition-colors ${
                  dao.joined
                    ? "bg-white/[0.07]"
                    : "bg-blue-100 dark:bg-blue-600/15"
                }`}
              >
                {dao.joined ? "OPEN" : "JOIN"}
              </button>
            </div>
          </Link>
        ))}
    </div>
  );
}
