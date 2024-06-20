import Image from "next/image";
import Link from "next/link";
import { CiMenuBurger } from "react-icons/ci";

export default function Laptop({ setMobileMenuOpen, navigation }) {
  return (
    <nav className="flex items-center justify-between" aria-label="Global">
      <div className="flex-1">
        <Link href="/" className="-m-1.5 p-1.5">
          <span className="sr-only">Profile Picture</span>
          <Image
            className="h-8 w-auto rounded-lg"
            src={"/dp.jpg"}
            alt=""
            width={40}
            height={40}
          />
        </Link>
      </div>
      <div className="flex lg:hidden">
        <button
          type="button"
          className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          onClick={() => setMobileMenuOpen(true)}
        >
          <span className="sr-only">Open main menu</span>
          <CiMenuBurger className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div className="hidden lg:flex lg:gap-x-12">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            {item.name}
          </Link>
        ))}
      </div>
      {/* change to connect*/}
      <div className="hidden lg:flex lg:flex-1 lg:justify-end">
        <Link
          href="#"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Log in <span aria-hidden="true">→</span>
        </Link>
      </div>
    </nav>
  );
}
