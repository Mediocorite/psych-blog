import React from "react";
import Link from "next/link";
import categories from "@/public/category.json";
import AuthLinks from "./AuthLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import MobileMenu from "./mobileMenu";

export function NavLinks() {
  return (
    <>
      {Object.values(categories).map((category) => (
        <Link
          key={category.id}
          href={`/posts?category=${category.value}`}
          className="m-4 p-4 text-center text-2xl lg:m-0 lg:p-0 lg:text-xl"
        >
          {category.label}
        </Link>
      ))}
      <AuthLinks />
    </>
  );
}

export default function Header() {
  return (
    <div className="flex h-28 items-center justify-between">
      <div className="flex text-center text-lg font-bold md:text-2xl lg:text-left xl:text-3xl">
        <Link href={"/"}>Jung and Restless</Link>
      </div>
      <div className="hidden flex-1 justify-end gap-5 text-lg lg:flex xl:text-lg">
        <div className="hidden gap-3 lg:flex">
          <NavLinks />
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
      <MobileMenu />
    </div>
  );
}
