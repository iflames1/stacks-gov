import { Fragment } from "react";
import { ThemeModeToggle } from "../toggle-theme";
import SideNav from "./side-nav";
import Top from "./top";

export default function LayoutSetup({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Top />
      <div className="flex">
        <div className="border-r border-white/15 lg:h-[calc(100dvh-106.59px)] h-[calc(100dvh-58px)] lg:py-6 py-3 lg:w-[7vw] w-[17vw] flex flex-col lg:gap-4 gap-2 justify-between items-center overflow-y-auto overflow-x-hidden">
          <SideNav />
          <ThemeModeToggle />
        </div>
        <main className="bg-main-gradient w-full">{children}</main>
      </div>
    </div>
  );
}
