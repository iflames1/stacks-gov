"use client";
import { fetchData } from "../fetchData";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";

export default function SideNav() {
  const [daos, setDaos] = useState(null);

  useEffect(() => {
    async function loadData() {
      const response = await fetchData();
      if (response) {
        setDaos(response);
      }
    }
    loadData();
  }, []);

  return (
    <div className="px-8 pt-6 min-h-[calc(100vh-100px)] flex flex-col items-center absolute left-0 top-full border-r-[1px] border-r-[rgba(255,255,255,0.15)]">
      <div className="flex flex-col gap-4 justify-center items-center">
        {daos &&
          daos.map((dao) => (
            <div
              key={dao.id}
              className="p-[5px] border-[1px] border-[rgba(255,255,255,0.35)] rounded-lg"
            >
              <Image
                src={`/images/sidenav/${dao.daoLogo}`}
                alt={dao.name}
                width={45}
                height={45}
              />
            </div>
          ))}
      </div>
      <div className="bg-[rgba(255,255,255,0.15)] w-[57px] h-[1px] my-6"></div>
      <button className="size-[57px] flex items-center justify-center bg-[rgba(255,255,255,0.06)] border-dashed border-[1px] border-[rgba(255,255,255,0.35)] rounded-lg">
        <FaPlus className="size-6 text-white" />
      </button>
    </div>
  );
}