import Header from "@/components/header/Header";
import Header1 from "@/components/header/Header";

export default function Provider({ children }) {
  return (
    <div>
      <Header />
      <div className="mx-6 lg:mx-8">{children}</div>
    </div>
  );
}
