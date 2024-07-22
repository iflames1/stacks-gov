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
    <div className="text-[rgba(255,255,255,0.40)] text-xs font-normal grid xl:grid-cols-4 grid-cols-3 justify-between gap-x-[2%] gap-y-8 w-full">
      {daos &&
        daos.map((dao) => (
          <div
            key={dao.id}
            className="text-[rgba(255,255,255,0.40)] text-xs font-normal border-[1px] border-[rgba(255,255,255,0.05)] rounded-sm bg-[rgba(255,255,255,0.02)]"
          >
            <div className="flex items-center gap-4 border-b-[1px] border-b-[rgba(255,255,255,0.07)] p-4">
              <div className="border-[1px] border-[rgba(255,255,255,0.15)] rounded-sm">
                <Image src={dao.image} alt={``} width={64} height={64} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-xl font-bold">{dao.name}</p>
                  <IoShieldCheckmark className="size-4 text-[#246AEE]" />
                </div>
                <p className="text-[rgba(255,255,255,0.6)] text-base">
                  18K members
                </p>
              </div>
            </div>
            <div className="p-4">
              <p className="pb-5">
                Lorem ipsum dolor sit amet, ametly mang at along tio nang lei
                lang lohe...
              </p>
              <button className="font-jost text-white font-bold text-sx bg-[rgba(36,106,238,0.15)] border-[rgba(255,255,255,0.05)] border-[1px] rounded-sm py-3 text-center w-full">
                JOIN
              </button>
            </div>
          </div>
        ))}
    </div>
  );
}
