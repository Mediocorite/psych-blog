"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
export default function AuthLinks() {
  const { data: session } = useSession();
  if (session)
    return (
      <>
        <Link href={"/writer"}>Writer</Link>
        <Link href="/" onClick={() => signOut()}>
          Logout
        </Link>
      </>
    );

  return null;
}
