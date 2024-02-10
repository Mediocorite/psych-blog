import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="mt-12 flex flex-col items-center justify-between gap-12 p-0 text-[var(--softTextColor)] lg:flex-row lg:gap-0">
      <div className="flex flex-1 flex-col gap-3.5">
        <div className="flex items-center gap-2.5">
          {/* <Image src="/logo.png" alt="lama blog" width={50} height={50} /> */}
          <h1 className="text-2xl">Jung and the Restless</h1>
        </div>
        <p className="font-light">
          &copy; 2024 Dinaish Mistry. All rights reserved. Made in collaboration
          with Anzar Ahmad Malik. Want to build something? Let me know{" "}
          {`{Insert portfolio link here}`}
        </p>
      </div>
      <div className="flex lg:justify-end">
        <div className="m-6 flex flex-col gap-2.5 font-light">
          <span className="font-bold">Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="m-6 flex flex-col gap-2.5 font-light">
          <span className="font-bold">Categories</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className="m-6 flex flex-col gap-2.5 font-light">
          <span className="font-bold">Social</span>
          <Link href="https://www.linkedin.com/in/dinaish-mistry-16b496224/">
            LinkedIn
          </Link>
          <Link href="https://www.instagram.com/_dinaish_mistry_/?hl=en">
            Instagram
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
