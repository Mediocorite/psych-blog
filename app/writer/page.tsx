"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
export default function Writer() {
  // TODO: Install react-markdown.
  // TODO: Hookup text area to be converted into markdown.
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, [session]);

  return (
    <div>
      <div className="">Writer</div>
    </div>
  );
}

Writer.requireAuth = true;
