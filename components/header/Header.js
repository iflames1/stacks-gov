"use client";
import { useState } from "react";
import Laptop from "./Laptop";
import Mobile from "./Mobile";

const navigation = [
  { name: "Create", href: "create" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative">
      <div className="absolute w-full top-0 z-50">
        <Laptop setMobileMenuOpen={setMobileMenuOpen} navigation={navigation} />
        <Mobile
          setMobileMenuOpen={setMobileMenuOpen}
          mobileMenuOpen={mobileMenuOpen}
          navigation={navigation}
        />
      </div>
    </header>
  );
}
