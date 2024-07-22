import { Manrope, Jost } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
import Layout from "@/components/Layout";
import Nav from "@/components/nav/Nav";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
});

export const metadata = {
  title: "Stack Governance App",
  description: "Your Decentralized Governance Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body
        className={`${manrope.variable} ${jost.variable} dark:bg-[#040404]`}
      >
        <Providers>
          <Layout className="dark:bg-gradient-to-r from-[#0C0C0C] to-transparent dark:text-white">
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
