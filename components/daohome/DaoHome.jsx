"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import DaoHomeTop from "./DaoHomeTop";
import Proposals from "./Proposals";

export default function DaoHome() {
  const [dao, setDao] = useState({});
  const pathname = usePathname();

  useEffect(() => {
    async function fetchDaoData(endpoint = "/data.json") {
      try {
        const response = await axios.get(endpoint);
        const username = pathname.split("/")[1];
        const data = response.data.find(
          (dao) => dao.username.toLowerCase() === username
        );
        setDao(data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchDaoData();
  }, [pathname]);

  return (
    <div className="w-full py-[2.7%] px-[2.7%] text-white">
      <div className="flex flex-col gap-4">
        <Link
          href={"/"}
          className="flex items-center gap-2 p-2 rounded-full text-white bg-white/[0.03] text-sm w-fit"
        >
          <IoIosArrowBack className="size-6" /> Back
        </Link>
        <DaoHomeTop dao={dao} />
      </div>
      <Proposals dao={dao} className="pt-10" />
    </div>
  );
}
