"use client";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function RichTextEditor({
  blogText,
  update,
}: {
  blogText: string;
  update: (newText: string) => void;
}) {
  return (
    <ReactQuill
      className="mb-4 h-full w-full"
      theme="snow"
      value={blogText}
      onChange={update}
    />
  );
}
