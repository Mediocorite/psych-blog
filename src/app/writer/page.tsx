"use client";
import React, { useState } from "react";
import { CategorySelect } from "./components/CategorySelect";
import RichTextEditor from "./components/richTextEditor";
import { useSession } from "next-auth/react";
import { postBlogArticle } from "@/src/database/firestore";

import { redirect } from "next/navigation";

export default function Writer() {
  const { data: session, status } = useSession();

  const [postTitle, setPostTitle] = useState<string>(``);
  const [bannerLink, setBannerLink] = useState<string>(``);
  const [category, setCategory] = useState<string>(``);
  const [blogText, setBlogText] = useState(``);
  const editBlogText = (newText: string) => setBlogText(newText);

  const postArticle = () => {
    postBlogArticle({
      bannerLink: bannerLink,
      blogText: blogText,
      postDate: {
        seconds: Math.floor(new Date().getTime() / 1000),
        nanoseconds: (new Date().getTime() % 1000) * 1000000,
      },
      category: category,
      postTitle: postTitle,
    });
  };

  if (status === "unauthenticated") redirect("/");
  if (status === "loading") return <div className="">Loading...</div>;

  // Form Logic -> Storing information in a state

  return (
    <main className="markdown-page h-full">
      <div className="mb-4 flex w-full flex-col text-2xl md:text-4xl lg:flex-row">
        <div className="relative mr-2 flex w-full lg:w-9/12">
          <input
            placeholder="Title..."
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            className="focus:outline-none "
          />
        </div>
        <div className="w-full lg:w-3/12">
          <CategorySelect
            value={category}
            onChange={(value) => setCategory(value)}
          />
        </div>
      </div>
      {status === "authenticated" && (
        <>
          <input
            placeholder="Paste unsplash link..."
            value={bannerLink}
            onChange={(e) => setBannerLink(e.target.value)}
            className="w-full p-4"
          />
          <RichTextEditor blogText={blogText} update={editBlogText} />
        </>
      )}
      <div className="mb-4 flex justify-end">
        <button
          className="focus:shadow-outline m-2 h-10 rounded-lg bg-green-700 px-5 text-green-100 transition-colors duration-150 hover:bg-green-800"
          onClick={postArticle}
        >
          Submit
        </button>
      </div>
    </main>
  );
}

Writer.requireAuth = true;
