import React from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AuthLinks from "./AuthLinks";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";

const links = [
  { id: 1, name: "About", url: "/about" },
  { id: 2, name: "Contact", url: "/contact" },
  { id: 3, name: "Resume", url: "/resume" },
];

export default function Navbar() {
  return (
    <div className="flex h-28 items-center justify-between">
      <div className="flex flex-1 text-center text-lg font-bold md:text-2xl lg:text-left xl:text-3xl">
        <Link href={"/"}>Jung and the Restless</Link>
      </div>
      <div className="hidden flex-1 items-center gap-5 text-lg sm:justify-end md:flex xl:text-lg">
        <ThemeToggle initialTheme="light" />
        {links.map((link) => (
          <Link key={link.id} href={link.url}>
            {link.name}
          </Link>
        ))}
        <AuthLinks />
        <div className=" hidden flex-1 gap-3 lg:flex">
          <Image src="/facebook.png" alt="facebook" width={24} height={24} />
          <Image src="/instagram.png" alt="instagram" width={24} height={24} />
        </div>
      </div>
      <Drawer>
        <DrawerTrigger className="flex md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="2"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </DrawerTrigger>
        <DrawerContent>
          <div className="flex flex-col items-center justify-center">
            {links.map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="m-4 p-4 text-center text-2xl"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
