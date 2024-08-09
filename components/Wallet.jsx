"use client";
import { useWallet } from "@/app/utils/wallet";
import Image from "next/image";

export default function Wallet() {
  const { userAddress, userData, connectWallet, disconnectWallet } =
    useWallet();

  const handleConnection = () => {
    if (userData) {
      disconnectWallet();
    } else {
      connectWallet();
    }
  };
  return (
    <button
      onClick={() => handleConnection()}
      className="flex items-center w-fit gap-[10px] py-3 px-4 dark:bg-[rgba(255,255,255,0.05)] bg-gray-100 rounded-sm"
    >
      <Image
        src={"/images/wallet-icon.png"}
        alt="avater"
        width={23}
        height={23}
        className="rounded-full size-[23px]"
      />
      <p className="text-base font-normal dark:text-white text-gray-800">
        {userData
          ? `${userAddress.slice(0, 5)}...${userAddress.slice(-5)}`
          : userAddress}
      </p>
    </button>
  );
}
