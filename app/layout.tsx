/* eslint-disable @next/next/no-sync-scripts */
import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Nav";
import "flowbite";
import Banner from "./components/Banner";
import HeroSection from "./components/HeroSection";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Canex",
  description: "An Event Management Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <div className="flex overflow-x-hidden flex-col h-screen w-max-screen  max-h-screen">
          <NavBar />
          <div className="bg-page text-default-text">
            {children}
          </div>
        </div>
        {/* <script src=""></script> */}
        {/* <script src="https://cdn.jsdelivr.net/npm/flowbite@latest"></script> */}
        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"></script> */}
        {/* <script src="https://unpkg.com/flowbite@latest/dist/flowbite.js"></script> */}
      </body>
    </html>
  );
}
