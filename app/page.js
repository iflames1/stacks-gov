import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Roadmap from "@/components/Roadmap";

export default function page() {
  return (
    <main className="mb-8">
      <Hero />
      <Roadmap />
      <FAQ />
      <About />
    </main>
  );
}
