"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { collection, addDoc, getFirestore } from "firebase/firestore";
import app from "@/middleware/firebase";
import { CategorySelect } from "./components/CategorySelect";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Writer() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const db = getFirestore(app);
  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, [session]);

  const [postTitle, setPostTitle] = useState<string>(``);
  const [bannerLink, setBannerLink] = useState<string>(``);
  const [category, setCategory] = useState<string>(``);
  const [blogText, setBlogText] = useState(``);

  const onSubmit = async () => {
    const docRef = await addDoc(collection(db, "blogs"), {
      postTitle,
      bannerLink,
      category,
      blogText,
    });
    try {
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

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
      <ReactQuill
        className="mb-4 h-full w-full"
        theme="snow"
        value={blogText}
        onChange={setBlogText}
      />
      <div className="mb-4 flex justify-end">
        <button className="focus:shadow-outline m-2 h-10 rounded-lg bg-green-700 px-5 text-green-100 transition-colors duration-150 hover:bg-green-800">
          Success
        </button>
      </div>
    </main>
  );
}

Writer.requireAuth = true;
