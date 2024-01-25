"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
export default function Writer() {
  // TODO: Make sure the page is inaccessible if not logged in.
  // TODO: Install react-markdown.
  // TODO: Hookup text area to be converted into markdown.
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });
  if (session)
    return (
      <div>
        <div className="">Writer</div>
      </div>
    );
  return null;
}

Writer.requireAuth = true;
