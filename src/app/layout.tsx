import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import LayoutSetup from "@/components/layout/layout-setup";

export const metadata: Metadata = {
  title: "Stacks Gov",
  description: "Making governce easy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-manrope text-black dark:text-white overflow-y-hidden">
        <ThemeProvider
          attribute="class"
          //defaultTheme="system"
          //enableSystem
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <LayoutSetup>{children}</LayoutSetup>
        </ThemeProvider>
      </body>
    </html>
  );
}
