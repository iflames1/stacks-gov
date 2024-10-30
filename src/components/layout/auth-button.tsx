"use client";
import { connectWallet, getWalletAddress, signOut } from "@/utils/wallet";
import Image from "next/image";
import { useEffect, useState } from "react";

const formatWalletAddress = (address: string): string => {
  if (address.length <= 13) return address;
  return `${address.slice(0, 5)}...${address.slice(-5)}`;
};

export default function AuthButton() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);

  useEffect(() => {
    const fetchWalletAddress = async () => {
      const address = await getWalletAddress();
      setWalletAddress(address);
    };

    fetchWalletAddress();
  }, []);

  return (
    <>
      {walletAddress ? (
        <button
          onClick={signOut}
          className="flex items-center gap-3 px-4 py-3 border border-white/[0.02] rounded-sm bg-white/5"
        >
          <Image
            src={"/images/wallet-icon.png"}
            alt="avater"
            width={23}
            height={23}
            className="rounded-full size-[23px]"
          />
          <p className="text-base font-normal">
            {formatWalletAddress(walletAddress)}
          </p>
        </button>
      ) : (
        <button
          onClick={connectWallet}
          className="flex items-center gap-3 px-4 py-3 border border-white/[0.02] rounded-sm bg-white/5"
        >
          Connect Wallet
        </button>
      )}
    </>
  );
}
