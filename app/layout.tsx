import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SessionProvider from "@/providers/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen dark:bg-black dark:text-white">
          <div className="ml-auto mr-auto max-w-screen-2xl  pl-4 pr-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl ">
            <SessionProvider>
              <Navbar />
              {children}
              <Footer />
            </SessionProvider>
          </div>
        </div>
      </body>
    </html>
  );
}
