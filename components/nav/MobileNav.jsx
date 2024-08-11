import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

export default function MobileNav({ showMobileNav, setShowMobileNav }) {
  return (
    <div className="block lg:hidden">
      <IoMdMenu
        onClick={() => setShowMobileNav(!showMobileNav)}
        className={`size-6 dark:text-[rgba(255,255,255,0.4)] text-gray-600 ${
          showMobileNav ? "hidden" : "block"
        }`}
      />
      {showMobileNav && (
        <div className={`${showMobileNav ? "block" : "hidden"}`}>
          <IoMdClose
            onClick={() => setShowMobileNav(!showMobileNav)}
            className="size-6 dark:text-[rgba(255,255,255,0.4)] text-gray-600"
          />
          <div className="absolute top-full left-0">Hello World</div>
        </div>
      )}
    </div>
  );
}
