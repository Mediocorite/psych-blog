"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Markdown from "react-markdown";
export default function Writer() {
  const [markdownText, setMarkdownText] = useState(``);
  // TODO: Hookup text area to be converted into markdown.
  // Vconst { data: session } = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!session) {
  //     router.push("/");
  //   }
  // }, [session]);
  // Have a simple markdown editor.
  // Two components -> Editor window / Output windows

  return (
    <div>
      <textarea
        className="w-full placeholder:opacity-80"
        placeholder="Feed me some Markdown 🍕"
        value={markdownText}
        onChange={(e) => setMarkdownText(e.target.value)}
        autoFocus
      ></textarea>
      <Markdown>{markdownText}</Markdown>
    </div>
  );
}

Writer.requireAuth = true;
