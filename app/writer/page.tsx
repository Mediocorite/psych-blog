"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Markdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
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

  // Metadata for the post
  const [postTitle, setPostTitle] = useState(``);
  const [bannerLink, setBannerLink] = useState(``);
  const [categoryList, setCategoryList] = useState([]);

  // Main content
  const [markdown, setMarkdown] = useState(``);

  return (
    <main className="markdown-page h-full">
      <div className="mb-4 flex w-full flex-col text-4xl lg:flex-row">
        <div className="relative mr-2 flex w-full lg:w-9/12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="z-10 h-full w-full opacity-0 hover:opacity-100"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="absolute left-0 top-0 h-full w-full opacity-100 hover:opacity-100"
          >
            <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
          </svg>

          {/* <FontAwesomeIcon icon={faCirclePlus} /> */}
          <input
            placeholder="Title..."
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            className="focus:outline-none "
          />
        </div>
        <div className="w-full bg-zinc-600 lg:w-3/12"></div>
      </div>
      <div className="mb-4 flex flex-col lg:flex-row">
        <div className="h-3/4 min-h-12 w-full bg-red-600 lg:w-1/2"></div>
        <div className="h-3/4 min-h-12 w-full bg-blue-500 lg:w-1/2"></div>
      </div>
      <div className="mb-4 flex justify-end">
        <div className="w-28 rounded-xl bg-green-300"></div>
      </div>
    </main>
  );
}

Writer.requireAuth = true;
