"use client";
import { DAO } from "@/types/dao";
import axios from "axios";
import Link from "next/link";
import { Skeleton } from "../ui/skeleton";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function JoinedDAO() {
  const [joinedDAO, setJoinedDAO] = useState<DAO[] | null>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const parts = pathname.split("/").filter(Boolean);
  const username = parts[0];

  useEffect(() => {
    async function fetchJoinedDao() {
      try {
        const response = await axios.get("/data.json");
        console.log(response);
        const data: DAO[] = response.data;
        console.log(data);
        setJoinedDAO(data.filter((dao) => dao.joined));
      } catch (error) {
        console.log("error", error);
        console.error("Error fetching DAOs:", error);
        setJoinedDAO([]);
      } finally {
        setLoading(false);
      }
    }

    fetchJoinedDao();
  }, []);

  if (loading)
    return (
      <div className="flex flex-col lg:gap-4 gap-2 px-2 justify-center items-center">
        {Array.from({ length: 3 }).map((_, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="lg:p-2 p-1 border rounded-lg border-white/35 animate-pulse">
              <Skeleton className="min-h-11 min-w-11" />
            </div>
          </div>
        ))}
      </div>
    );

  if (!joinedDAO) return null;

  return joinedDAO.map((dao) => (
    <Link
      key={dao.username}
      href={dao.username.toLocaleLowerCase()}
      className="flex items-center gap-2"
    >
      <div
        className={`size-4 bg-white rounded-full ${
          dao.username.toLowerCase() === username ? "lg:block hidden" : "hidden"
        }`}
      ></div>
      <div
        className={`lg:p-2 p-1 border rounded-lg hover:border-white ${
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
          className="rounded-md"
        />
      </div>
    </Link>
  ));
}
