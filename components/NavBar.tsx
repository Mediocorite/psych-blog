import React from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AuthLinks from "./AuthLinks";
import Hamburger from "./Hamburger";

export default function Navbar() {
  return (
    <div className="flex h-28 items-center justify-between">
      <div className="flex flex-1 text-center text-4xl font-bold md:text-2xl lg:text-left xl:text-3xl">
        Jung and the Restless
      </div>
      <div className="flex flex-1 items-center gap-5 text-lg sm:justify-end xl:text-lg">
        <ThemeToggle initialTheme="light" />
        <Link href="/" className="hidden sm:flex">
          Homepage
        </Link>
        <Link href="/" className="hidden sm:flex">
          Contact
        </Link>
        <Link href="/" className="hidden sm:flex">
          About
        </Link>
        <AuthLinks />
        <div className=" hidden flex-1 gap-3 lg:flex">
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        </div>
        <Hamburger initialTheme="light" />
      </div>
    </div>
  );
}
