import Image from "next/image";

export default function Stats() {
  return (
    <div className="font-jost text-[rgba(255,255,255,0.50)] text-base font-normal hidden md:flex justify-between items-center p-6 bg-[rgba(255,255,255,0.04)] rounded">
      <div className="flex items-center gap-2">
        <div className="flex justify-center items-center p-3 rounded-full bg-[rgba(7,7,8,0.15)]">
          <Image
            src={"/images/icon-daos-joined.png"}
            alt="icon"
            width={24}
            height={24}
          />
        </div>
        <div>
          <p>DAOs Joined</p>
          <p className="text-xl font-bold font-manrope text-[#246AEE]">64</p>
        </div>
      </div>
      <div className="w-[1px] h-[52px] bg-[rgba(255,255,255,0.15)]"></div>
      <div className="flex items-center gap-2">
        <div className="flex justify-center items-center p-3 rounded-full bg-[rgba(0,201,169,0.15)]">
          <Image
            src={"/images/icon-total-vote.png"}
            alt="icon"
            width={24}
            height={24}
          />
        </div>
        <div>
          <p>Total Votes</p>
          <p className="text-xl font-bold font-manrope text-[#00C9A9]">127</p>
        </div>
      </div>
      <div className="w-[1px] h-[52px] bg-[rgba(255,255,255,0.15)]"></div>
      <div className="flex items-center gap-2">
        <div className="flex justify-center items-center p-3 rounded-full bg-[rgba(217,217,217,0.15)]">
          <Image
            src={"/images/icon-total-proposals.png"}
            alt="icon"
            width={24}
            height={24}
          />
        </div>
        <div>
          <p>Total Proposals</p>
          <p className="text-xl font-bold font-manrope text-[#FFF]">1K</p>
        </div>
      </div>
    </div>
  );
}
