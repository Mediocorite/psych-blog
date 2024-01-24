"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
export default function Writer() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });
  return (
    <div>
      <div className="">Writer</div>
    </div>
  );
}

Writer.requireAuth = true;
