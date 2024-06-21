import Link from "next/link";

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center text-center gap-12 mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 pb-4">
          Welcome to STX-GOV: Your Hub for Token Governance
        </h1>
        <p className="text-xl font-bold text-gray-900">
          Empowering Communities with Decentralized Governance
        </p>
      </div>
      <Link
        href={"create"}
        className="bg-orange-500 hover:bg-orange-600 py-2 px-4 rounded-lg text-white max-w-xs mx-auto"
      >
        Create Governance Page
      </Link>
    </div>
  );
}
