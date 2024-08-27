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
      <SideNav />
    </div>
  );
}
