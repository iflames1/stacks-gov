import Image from "next/image";
import Link from "next/link";
import { IoShieldCheckmark } from "react-icons/io5";
import { BsPersonCheck } from "react-icons/bs";
import { MdArrowDropDown } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";

export default function DaoHomeTop({ dao }) {
  return (
    <div className="px-4 pt-4 bg-white/[0.04] rounded">
      <div className="flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <Image
            src={dao.image}
            alt={dao.username}
            width={88}
            height={88}
            className="border-[1px] border-white/15 rounded"
          />
          <div className="">
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold font-jost">{dao.username}</p>
              <IoShieldCheckmark className="text-blue-600 size-4" />
            </div>
            <div className="text-white/60 flex gap-4 items-center">
              <p className="rounded-sm border-[1px] border-white/[0.07] text-sm py-1 px-2">
                Protocol
              </p>
              <p className="text-base">18k members</p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-white font-bold flex items-center gap-2 px-4 py-3 bg-white/5 rounded-sm w-fit">
            <BsPersonCheck className="size-6" />
            Joined
            <MdArrowDropDown className="size-4" />
          </div>
          <div className="flex items-center gap-2 px-4 py-3 font-bold bg-blue-600 rounded-sm w-fit">
            <FaPlus /> Create Proposal
          </div>
        </div>
      </div>
      <hr className="bg-white/5 my-6 border-none outline-none h-px" />
      <div className="flex gap-8 items-center text-sm text-white/40">
        <Link
          href={"proposals"}
          className="px-4 pb-4 text-white font-bold border-b-[2px] border-b-blue-600"
        >
          Propsoals
        </Link>
        <Link href={"delegate"} className="px-4 pb-4">
          Delegate
        </Link>
        <Link href={"treasury"} className="px-4 pb-4">
          Treasury
        </Link>
        <Link href={"about"} className="px-4 pb-4">
          About
        </Link>
      </div>
    </div>
  );
}
