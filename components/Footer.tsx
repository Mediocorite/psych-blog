import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="mt-12 flex flex-col items-center justify-between gap-12 p-0 text-[var(--softTextColor)] lg:flex-row lg:gap-0">
      <div className="flex flex-1 flex-col gap-3.5">
        <div className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="lama blog" width={50} height={50} />
          <h1 className="text-2xl">Lamablog</h1>
        </div>
        <p className="font-light">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim
          necessitatibus similique aspernatur obcaecati veritatis. Aperiam cum
          porro sequi, totam minima consequuntur, aspernatur deleniti vero
          repellendus dorales.
        </p>
        <div className="mt-2.5 flex gap-2.5">
          <Image src="/facebook.png" alt="" width={18} height={18} />
          <Image src="/instagram.png" alt="" width={18} height={18} />
        </div>
      </div>
      <div className="gap-25 flex flex-1 justify-end md:gap-6 lg:gap-12">
        <div className="flex flex-col gap-2.5 font-light">
          <span className="font-bold">Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className="flex flex-col gap-2.5 font-light">
          <span className="font-bold">Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
        <div className="flex flex-col gap-2.5 font-light">
          <span className="font-bold">Social</span>
          <Link href="/">Facebook</Link>
          <Link href="/">Instagram</Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
