import Header from "@/components/header/Header";

export default function Provider({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}
