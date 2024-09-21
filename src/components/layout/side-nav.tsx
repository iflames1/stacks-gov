"use client";
import { useEffect, useState } from "react";
import { DAO } from "@/types/dao";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const [joinedDAO, setJoinedDAO] = useState<DAO[]>([]);
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const username = parts[0];

  useEffect(() => {
    async function fetchJoinedDao() {
      try {
        const response = await axios.get("/data.json");
        const data: DAO[] = response.data;
        const filteredDAOs = data.filter((dao) => dao.joined);
        setJoinedDAO(filteredDAOs);
      } catch (error) {
        console.error("Error fetching DAOs:", error);
      }
    }

    fetchJoinedDao();
  });
  return (
    <div className="flex flex-col lg:gap-4 gap-2 px-2 justify-center items-center">
      {joinedDAO.map((dao) => (
        <Link
          key={dao.username}
          href={dao.username.toLocaleLowerCase()}
          className="flex items-center gap-2"
        >
          <div
            className={`size-4 bg-white rounded-full ${
              dao.username.toLowerCase() === username
                ? "lg:block hidden"
                : "hidden"
            }`}
          ></div>
          <div
            className={`lg:p-2 p-1 border rounded-lg ${
              dao.username.toLowerCase() === username
                ? "border-white"
                : "border-white/35"
            }`}
          >
            <Image
              src={dao.image}
              alt={dao.username}
              width={45}
              height={45}
              className=""
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
