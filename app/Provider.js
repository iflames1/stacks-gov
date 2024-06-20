import Header from "@/components/header/Header";

export default function Provider({ children }) {
  return (
    <div>
      <Header className="" />
      <div className="mx-6 pt-[72px] lg:mx-8">{children}</div>
    </div>
  );
}
