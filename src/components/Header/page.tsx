import React from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AuthLinks from "./AuthLinks";
import categories from "@/public/category.json";
import { Drawer, DrawerContent, DrawerTrigger } from "../shadcn/ui/drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <div className="flex h-28 items-center justify-between">
      <div className="flex text-center text-lg font-bold md:text-2xl lg:text-left xl:text-3xl">
        <Link href={"/"}>Jung and Restless</Link>
      </div>
      <div className="hidden flex-1 justify-end gap-5 text-lg lg:flex xl:text-lg">
        <ThemeToggle initialTheme="light" />
        {Object.values(categories).map((category) => (
          <Link key={category.id} href={category.link}>
            {category.name}
          </Link>
        ))}
        <AuthLinks />
        <div className="hidden gap-3 lg:flex">
          <div style={{ width: "24px", height: "auto", position: "relative" }}>
            <Link href="https://www.linkedin.com/in/dinaish-mistry-16b496224/">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </Link>
          </div>
          <div style={{ width: "24px", height: "auto", position: "relative" }}>
            <Link href="https://www.instagram.com/_dinaish_mistry_/?hl=en">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </Link>
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <Drawer>
          <DrawerTrigger>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-menu-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </DrawerTrigger>
          <DrawerContent>
            <div className="flex flex-col items-center justify-center">
              {Object.values(categories).map((categories) => (
                <Link
                  key={categories.id}
                  href={categories.link}
                  className="m-4 p-4 text-center text-2xl"
                >
                  {categories.name}
                </Link>
              ))}
              <div className="m-4 p-4 text-center text-2xl">
                Switch to dark mode
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
