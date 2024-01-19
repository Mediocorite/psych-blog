"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
export default function Editor() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });
  return (
    <div>
      {" "}
      <div className="">{session?.data?.user?.email}</div>
    </div>
  );
}

Editor.requireAuth = true;
