import SideNav from "./nav/SideNav";
import TopNav from "./nav/TopNav";

export default function Layout({ children }) {
  return (
    <div className="relative font-manrope">
      <TopNav />
      <SideNav />
      <div className="absolute left-[121px]">{children}</div>
    </div>
  );
}
