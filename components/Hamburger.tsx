"use client";
import { ThemeContext } from "@/context/ThemeContext";
import React, { useContext, useState } from "react";

export default function Hamburger() {
  const [open, setOpen] = useState(false);
  const { isDark } = useContext(ThemeContext);
  console.log(isDark);

  return (
    <div>
      <div
        className={
          "flex h-4 w-5 cursor-pointer flex-col content-between sm:hidden"
        }
        onClick={() => setOpen(!open)}
      >
        <div
          className={`${isDark ? "bg-gray-200" : "bg-gray-700"}
        relative inline-flex h-0.5 w-full items-center rounded-full
        transition-colors focus:outline-none`}
        ></div>
        <div
          className={`${isDark ? "bg-gray-200" : "bg-gray-700"}
        relative  inline-flex h-0.5 w-full items-center rounded-full
        transition-colors focus:outline-none`}
        ></div>
        <div
          className={`${isDark ? "bg-gray-200" : "bg-gray-700"}
        relative  inline-flex h-0.5 w-full items-center rounded-full
        transition-colors focus:outline-none`}
        ></div>
      </div>
      {/* {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/">Homepage</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          {status === "notauthenticated" ? (
            <Link href="/login">Login</Link>
          ) : (
            <>
              <Link href="/write">Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )} */}
    </div>
  );
}
