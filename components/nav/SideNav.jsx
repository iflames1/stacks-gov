"use client";
import { fetchData } from "../fetchData";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import ThemeSwitch from "../ThemeSwitch";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideNav({ className }) {
  const [daos, setDaos] = useState(null);
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const username = parts[0];

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
    <div
      className={`${className} pt-6 flex flex-col items-center border-r-[1px] dark:border-r-[rgba(255,255,255,0.15)] border-r-gray-200 relative`}
    >
      <div className="flex flex-col gap-4 justify-center items-center">
        {daos &&
          daos.slice(0, 3).map((dao) => (
            <Link href={`/${dao.username}/dashboard`} key={dao.username}>
              <div className="flex items-center gap-2">
                <div
                  className={`size-4 bg-blue-500 dark:bg-white rounded-full ${
                    dao.username === username ? "block" : "hidden"
                  }`}
                ></div>
                <div
                  className={`p-[5px] border-[1px] rounded-lg ${
                    dao.username === username
                      ? "border-blue-500 dark:border-white"
                      : "border-gray-300 dark:border-[rgba(255,255,255,0.35)]"
                  }`}
                >
                  <Image
                    src={dao.image}
                    alt={dao.name}
                    width={45}
                    height={45}
                  />
                </div>
              </div>
            </Link>
          ))}
      </div>

      <div className="bg-gray-200 dark:bg-[rgba(255,255,255,0.15)] w-[57px] h-[1px] my-6"></div>

      <button className="size-[57px] flex items-center justify-center bg-gray-100 dark:bg-[rgba(255,255,255,0.06)] border-dashed border-[1px] border-gray-300 dark:border-[rgba(255,255,255,0.35)] rounded-lg">
        <FaPlus className="size-6 text-gray-600 dark:text-white" />
      </button>
      <div className="bg-gray-200 dark:bg-[rgba(255,255,255,0.15)] w-[57px] h-[1px] my-6"></div>

      <div className="sticky">
        <ThemeSwitch />
      </div>
    </div>
  );
}
