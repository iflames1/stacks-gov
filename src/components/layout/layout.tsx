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
        <div className="border-r border-white/15 h-[calc(100vh-106.59px)] lg:py-6 py-3 lg:w-[7vw] w-[17vw] flex flex-col justify-between items-center">
          <SideNav />
          <ThemeModeToggle />
        </div>
        {children}
      </div>
    </div>
  );
}
