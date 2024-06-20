import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import Connect from "../Connect";

export default function Small({ isOpen, setIsOpen, navigation }) {
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    isOpen && (
      <div
        onClose={() => setIsOpen(false)}
        className="absolute right-0 top-1 z-50 bg-white shadow-md p-5 w-full"
      >
        <div className="">
          <div className="flex justify-between items-center">
            <Link href="/" onClick={handleClose}>
              <Image
                alt="profile"
                src={"/dp.jpg"}
                width={40}
                height={40}
                className="rounded-lg"
              />
            </Link>
            <button
              className="-m-2.5 p-2.5 text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <AiOutlineClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="my-16 ">
            <div className="flex flex-col justify-between gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  onClick={handleClose}
                  href={item.href}
                  className=""
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <Connect onClick={handleClose} className="mt-8" />
          </div>
        </div>
      </div>
    )
  );
}
