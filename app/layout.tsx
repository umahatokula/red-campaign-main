import Nav from "@/components/Nav";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Redtrybe",
  description: "The cross speaks love",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-full min-h-screen text-sm laptop:w-10/12 laptop:mx-auto tablet:text-base">
        <Nav />
        {children}
      </body>
    </html>
  );
}
