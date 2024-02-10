import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/Header";
import Navbar from "@/src/components/Header/page";
import Footer from "@/src/components/Footer";
import SessionProvider from "@/src/providers/SessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jung and Restless",
  description: "Micro blog about concepts and research in psychology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen bg-white dark:bg-black">
          <SessionProvider>
            {/* <Header /> */}
            <div className="container mx-auto max-w-screen-2xl px-4 dark:bg-black sm:max-w-screen-sm  md:max-w-screen-md md:px-0 lg:max-w-screen-lg xl:max-w-screen-xl">
              {/* <div className="container -mt-32 px-8"> */}
              <Navbar />
              {children}
              <Footer />
            </div>
          </SessionProvider>
        </div>
      </body>
    </html>
  );
}
