"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React, { useState } from "react";
export default function AuthLinks() {
  const { data: session } = useSession();
  if (session) return <Link href="/logout">Logout</Link>;

  return null;
}
