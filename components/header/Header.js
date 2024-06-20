"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Connect from "../Connect";
import { CiMenuBurger } from "react-icons/ci";
import { navigation } from "./Nav";

import Small from "./Small";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex justify-between items-center py-4 px-8 shadow-md font-bold w- fixed top-0 z-50 w-full bg-white">
      <Link href="/">
        <Image
          alt="profile"
          src={"/dp.jpg"}
          width={40}
          height={40}
          className="rounded-lg"
        />
      </Link>
      <div className="hidden lg:flex">
        <div className="flex items-center space-x-4">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="">
              {item.name}
            </Link>
          ))}
        </div>
        <Connect />
      </div>
      <button className="flex lg:hidden" onClick={() => setIsOpen(true)}>
        <CiMenuBurger className="h-6 w-6" aria-hidden="true" />
      </button>
      <Small isOpen={isOpen} setIsOpen={setIsOpen} navigation={navigation} />
    </header>
  );
}
