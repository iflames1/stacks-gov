"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Connect from "../Connect";
import { CiMenuBurger } from "react-icons/ci";
import { navigations } from "./Nav";
import { usePathname } from "next/navigation";
import Small from "./Small";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  let navigation;

  const pathname = usePathname();
  const basePath = pathname.split("/")[1] ? `/${pathname.split("/")[1]}` : "/";
  if (pathname === "/") {
    navigation = navigations.default;
  } else {
    navigation = navigations.governance;
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <header
      className={`flex justify-between items-center py-4 px-8 shadow-md font-bold w- fixed top-0 z-50 w-full bg-white`}
    >
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
            <Link key={item.name} href={basePath + item.href} className="">
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <Connect className={"hidden lg:flex"} />
      <div ref={menuRef} className="flex lg:hidden">
        <button className="flex lg:hidden" onClick={() => setIsOpen(true)}>
          <CiMenuBurger className="h-6 w-6" aria-hidden="true" />
        </button>
        <Small
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          navigation={navigation}
          basePath={basePath}
        />
      </div>
    </header>
  );
}
