import { FiSearch } from "react-icons/fi";

export default function Search({ className }) {
  return (
    <form
      className={`flex-shrink flex items-center gap-6 w-full max-w-xl dark:bg-[rgba(255,255,255,0.03)] bg-gray-100 h-fit my-auto mx-[2%] py-[15px] px-4 rounded-sm ${className}`}
    >
      <FiSearch className="size-6 text-[rgba(255,255,255,0.5)] dark:text-[rgba(255,255,255,0.5)] text-gray-400" />
      <input
        placeholder="Search DAOS..."
        className="placeholder:text-[rgba(255,255,255,0.3)] dark:placeholder:text-[rgba(255,255,255,0.3)] placeholder:text-gray-400 outline-none w-full flex-shrink appearance-none bg-transparent"
      />
    </form>
  );
}