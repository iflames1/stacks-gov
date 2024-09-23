import { ThemeModeToggle } from "../toggle-theme";
import SideNav from "./side-nav";
import Top from "./top";
import Nav from "../home/nav";
import HomeNav from "../home/home-nav";

export default function LayoutSetup({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Top />
      <div className="flex">
        <div className="border-r border-white/15 xl:h-[calc(100dvh-106.59px)] h-[calc(100dvh-58px)] xl:py-6 py-3 xl:w-[7vw] w-[17vw] flex flex-col xl:gap-4 gap-2 justify-between items-center overflow-y-auto overflow-x-hidden">
          <SideNav />
          <ThemeModeToggle />
        </div>
        <div className="bg-main-gradient w-full">
          <div className="flex">
            <HomeNav />
            <div className="w-full xl:max-h-[calc(100dvh-106.59px)] max-h-[calc(100dvh-58px)] overflow-auto p-[2.7%]">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
