import Nav from "./nav";

export default function HomeNav({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <div className="w-[13.7vw] h-[calc(100vh-106.59px)] border-r border-white/15 lg:flex hidden flex-col gap-4 pt-6 bg-black">
        <Nav title="Dashboard" path="/" />
        <Nav title="Explore" path="/explore" />
        <Nav title="Delegates" path="/delegates" />
        <Nav title="Activity" path="/activity" />
      </div>
      <div className="w-full">{children}</div>
    </div>
  );
}
