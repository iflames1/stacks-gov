import "./globals.css";
import Providers from "./providers";
import Layout from "@/components/Layout";

export const metadata = {
  title: "Stack Governance App",
  description: "Your Decentralized Governance Platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`dark:bg-black bg-white font-manrope max-w-[100vw]`}>
        <Providers>
          <Layout className="dark:bg-gradient-to-r dark:from-[#0C0C0C] dark:to-transparent bg-gradient-to-r from-gray-100 to-white dark:text-white text-gray-800">
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  );
}
