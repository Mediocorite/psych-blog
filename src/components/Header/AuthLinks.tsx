"use client";
import React from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function AuthLinks() {
  const { status } = useSession();

  if (status === "loading") return null;
  if (status === "authenticated") {
    return (
      <>
        <Link
          href={"/writer"}
          className="m-4 p-4 text-center text-2xl lg:m-0 lg:p-0 lg:text-xl"
        >
          Writer
        </Link>
        <Link
          href="/"
          className="m-4 p-4 text-center text-2xl lg:m-0 lg:p-0 lg:text-xl"
          onClick={() => signOut()}
        >
          Logout
        </Link>
      </>
    );
  }

  return null;
}
