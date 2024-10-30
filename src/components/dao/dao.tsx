"use client";
import { IoIosArrowBack } from "react-icons/io";
import Button from "../common/button";
import Link from "next/link";
import { fetchDao } from "@/lib/utils";
import { useEffect, useState } from "react";
import { DAO } from "@/types/dao";
import DaoHeader from "./dao-header";
import Proposals from "./proposals";

export default function Dao({ username }: { username: string }) {
  const [dao, setDao] = useState<DAO | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFunc = async () => {
      const dao = await fetchDao(username);
      setDao(dao);
      setLoading(false);
    };
    fetchFunc();
  }, [username]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!dao) {
    return <div>something went wrong</div>;
  }

  return (
    <div className="w-full space-y-10">
      <div className="space-y-4">
        <Button asChild={true} className="w-fit py-2 px-3 rounded-full gap-2">
          <Link href={"/"}>
            <IoIosArrowBack className="size-6" />
            <span className="font-normal text-sm">Back</span>
          </Link>
        </Button>
        <DaoHeader dao={dao} />
      </div>
      <Proposals dao={dao} />
    </div>
  );
}
