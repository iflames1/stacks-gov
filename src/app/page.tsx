import Dashboard from "@/components/home/dashboard/dashboard";
import HomeNav from "@/components/home/home-nav";

export default function Home() {
  return (
    <main className="w-full">
      <HomeNav>
        <Dashboard />
      </HomeNav>
    </main>
  );
}
