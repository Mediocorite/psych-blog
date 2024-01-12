"use client";
import Link from "next/link";
import React, { useState } from "react";
export default function AuthLinks() {
  const [AuthStatus, setAuthStatus] = useState(true);

  if (!AuthStatus) return null;

  return <Link href="/logout">Logout</Link>;
}
