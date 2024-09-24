"use client";
import { cn } from "@/lib/utils";
import { DAO } from "@/types/dao";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../common/button";
import Image from "next/image";
import { MdVerifiedUser } from "react-icons/md";
import { Skeleton } from "../ui/skeleton";
import Link from "next/link";

export default function Daos() {
  const [daos, setDaos] = useState<DAO[] | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchDao() {
      try {
        const response = await axios.get("/data.json");
        const data: DAO[] = response.data;
        setDaos(data);
      } catch (error) {
        console.error("Error fetching DAOs:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchDao();
  });

  if (loading) {
    return (
      <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {Array.from({ length: 8 }).map((_, index) => (
          <div
            key={index}
            className="border border-white/5 rounded-[2px] bg-white/[0.02]"
          >
            <div className="flex items-center gap-4 p-4">
              <Skeleton className="size-[64px] border border-white/15 rounded-[2px]" />
              <div className="space-y-1">
                <Skeleton className="w-24 h-6" />
                <Skeleton className="w-20 h-5" />
              </div>
            </div>
            <div className="w-full h-px bg-white/[0.07]" />
            <div className="space-y-5 p-4">
              <div className="space-y-1">
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-full" />
                <Skeleton className="h-3 w-1/3" />
              </div>
              <Skeleton className="w-full h-10" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!daos) return <p>something went wrong...</p>;

  return (
    <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
      {daos.map((dao) => (
        <div
          key={dao.username}
          className={cn(
            "border border-white/5 rounded-[2px] bg-white/[0.02]",
            "group hover:bg-accent-blue transition-colors duration-200 ease-in-out"
          )}
        >
          <div className="flex items-center gap-4 p-4">
            <Image
              src={dao.image}
              alt="dp"
              width={64}
              height={64}
              className="border border-white/15 rounded-[2px]"
            />
            <div className="space-y-1">
              <p className="flex gap-2">
                <span className="text-white font-bold">{dao.username}</span>
                <MdVerifiedUser
                  className={cn(
                    "text-accent-blue size-4 mt-[2px]",
                    "group-hover:text-white transition-colors duration-200 ease-in-out"
                  )}
                />
              </p>
              <p
                className={cn(
                  "text-sm font-normal text-white/60",
                  "text-white/80"
                )}
              >
                18k members
              </p>
            </div>
          </div>
          <div className="w-full h-px bg-white/[0.07] group-hover:bg-white/15 transition-colors duration-200 ease-in-out" />
          <div className="space-y-5 p-4">
            <p className={cn("text-white/40 text-xs", "text-white/80")}>
              {dao.proposals[0].description.length > 160
                ? `${dao.proposals[0].description.substring(0, 160)}...`
                : dao.proposals[0].description}
            </p>
            {dao.joined ? (
              <Button
                asChild={true}
                className={cn(
                  "w-full font-jost text-xs font-bold p-3",
                  "group-hover:bg-white/45 transition-colors duration-200 ease-in-out"
                )}
              >
                <Link href={dao.username.toLowerCase()}>OPEN</Link>
              </Button>
            ) : (
              <Button
                className={cn(
                  "w-full font-jost text-xs font-bold p-3 border-white/5 bg-accent-blue/15",
                  "group-hover:bg-white/45 transition-colors duration-200 ease-in-out"
                )}
              >
                JOIN
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
