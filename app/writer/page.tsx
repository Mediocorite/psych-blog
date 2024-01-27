"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Markdown from "react-markdown";
import MarkdownEditor from "./components/markdownEditor";
export default function Writer() {
  // TODO: Hookup text area to be converted into markdown.
  // const { data: session } = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!session) {
  //     router.push("/");
  //   }
  // }, [session]);
  // Have a simple markdown editor.
  // Two components -> Editor window / Output windows

  return <MarkdownEditor />;
}

Writer.requireAuth = true;
