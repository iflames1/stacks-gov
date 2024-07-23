"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { IoShieldCheckmark } from "react-icons/io5";
import { fetchData } from "../fetchData";

export default function Daos() {
  const [daos, setDaos] = useState(null);

  useEffect(() => {
    const fetchDaos = async () => {
      const res = await fetchData("/dashboard.json");
      if (res) {
        setDaos(res);
      }
    };
    fetchDaos();
  }, []);

  return (
    <div className="text-gray-600 dark:text-[rgba(255,255,255,0.40)] text-xs font-normal grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 justify-between gap-x-[2%] gap-y-8 w-full">
      {daos &&
        daos.map((dao) => (
          <div
            key={dao.id}
            className="text-gray-600 dark:text-[rgba(255,255,255,0.40)] text-xs font-normal border-[1px] border-gray-200 dark:border-[rgba(255,255,255,0.05)] rounded-sm bg-white dark:bg-[rgba(255,255,255,0.02)]"
          >
            <div className="flex items-center gap-4 border-b-[1px] border-b-gray-200 dark:border-b-[rgba(255,255,255,0.07)] p-4">
              <div className="border-[1px] border-gray-300 dark:border-[rgba(255,255,255,0.15)] rounded-sm">
                <Image src={dao.image} alt={``} width={64} height={64} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-gray-800 dark:text-white text-xl font-bold">
                    {dao.name}
                  </p>
                  <IoShieldCheckmark className="size-4 text-blue-600 dark:text-[#246AEE]" />
                </div>
                <p className="text-gray-500 dark:text-[rgba(255,255,255,0.6)] text-base">
                  18K members
                </p>
              </div>
            </div>
            <div className="p-4">
              <p className="pb-5 text-gray-700 dark:text-gray-300">
                Lorem ipsum dolor sit amet, ametly mang at along tio nang lei
                lang lohe...
              </p>
              <button className="font-jost text-blue-600 dark:text-white font-bold text-sx bg-blue-100 dark:bg-[rgba(36,106,238,0.15)] border-blue-200 dark:border-[rgba(255,255,255,0.05)] border-[1px] rounded-sm py-3 text-center w-full hover:bg-blue-200 dark:hover:bg-[rgba(36,106,238,0.25)] transition-colors">
                JOIN
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
