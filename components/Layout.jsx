import Nav from "./nav/Nav";
import SideNav from "./nav/SideNav";
import TopNav from "./nav/TopNav";

export default function Layout({ children, className }) {
  return (
    <div className="relative font-manrope">
      <TopNav />
      <div className="flex w-[100vw] min-h-[calc(100dvh-100px)] gap-0">
        <div className="flex w-[25%] gap-0">
          <SideNav className="w-[32%]" />
          <Nav className="w-[68%]" />
        </div>
        <div className={`w-[77%] ${className}`}>{children}</div>
      </div>
    </div>
  );
}
