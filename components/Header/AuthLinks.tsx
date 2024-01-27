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
        <Link href={"/writer"}>Writer</Link>
        <Link href="/" onClick={() => signOut()}>
          Logout
        </Link>
      </>
    );
  }

  return null;
}
