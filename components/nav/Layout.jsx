import SideNav from "./SideNav";
import TopNav from "./TopNav";

export default function Layout({ children }) {
  return (
    <div className="relative">
      <TopNav />
      <SideNav />
      <div className="absolute left-[121px]">{children}</div>
    </div>
  );
}
