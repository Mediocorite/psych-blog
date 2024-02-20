import Link from "next/link";
import React from "react";
import categories from "@/public/category.json";
function Footer() {
  return (
    <div className="mt-12 flex flex-col items-center justify-between gap-12 p-0 text-[var(--softTextColor)] lg:flex-row lg:gap-0">
      <div className="flex flex-1 flex-col gap-3.5">
        <div className="flex items-center gap-2.5">
          {/* <Image src="/logo.png" alt="lama blog" width={50} height={50} /> */}
          <h1 className="text-2xl">Jung and the Restless</h1>
        </div>
        <p className="font-light">
          &copy; 2024 Dinaish Kaizad Mistry. All rights reserved. Made in
          collaboration with Anzar Ahmad Malik. Want to build something? Let me
          know {`{Insert portfolio link here}`}
        </p>
      </div>
      <div className="flex lg:justify-end">
        <div className="m-6 flex flex-col gap-2.5 font-light">
          <span className="font-bold">Categories</span>
          {Object.values(categories).map((category) => (
            <Link
              key={category.id}
              href={`/posts?category=${category.value}`}
              // className="m-4 p-4 text-center text-2xl lg:m-0 lg:p-0 lg:text-xl"
            >
              {category.label}
            </Link>
          ))}
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
