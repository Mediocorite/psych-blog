import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface EventObject {
  currentTarget: {
    value: string;
  };
}

export default function MarkdownEditor() {
  const [title, setTitle] = useState("");
  const [markdownSource, setMarkdownSource] = useState("");

  const onMarkdownChange = ({ currentTarget: { value } }: EventObject) => {
    setMarkdownSource(value);
  };
  const onTitleChange = ({ currentTarget: { value } }: EventObject) => {
    setTitle(value);
  };
  // Architecture of the note
  // Add banner button | Title view -> No box | Tags selection dropdown
  // Large box with rounded corner flex-row lg: flex-col
  // Main editor
  //

  return (
    <main className="markdown-page h-full">
      <div className="mb-4 flex w-full flex-col lg:flex-row">
        <div className="h-10 w-full bg-black lg:w-1/12"></div>
        <div className="h-10 w-full bg-slate-500 lg:w-8/12"></div>
        <div className="h-10 w-full bg-zinc-600 lg:w-3/12"></div>
      </div>
      <div className="mb-4 flex flex-col lg:flex-row">
        <div className="h-3/4 min-h-12 w-full bg-red-600 lg:w-1/2"></div>
        <div className="h-3/4 min-h-12 w-full bg-blue-500 lg:w-1/2"></div>
      </div>
      <div className="mb-4 flex justify-end">
        <div className="h-10 w-28 rounded-xl bg-green-300"></div>
      </div>
    </main>
  );

  // return (
  //   <>
  //     <input
  //       value={title}
  //       onChange={onTitleChange}
  //       placeholder="Title"
  //       className="mb-4 text-4xl lg:text-5xl"
  //     ></input>
  //     <div className="flex h-full flex-col gap-2 lg:flex-row">
  //       <div className="w-full rounded-md border border-solid  border-gray-300 lg:w-1/2">
  //         <textarea
  //           onChange={onMarkdownChange}
  //           value={markdownSource}
  //           className=" w-full overflow-auto whitespace-pre font-mono text-sm lg:text-lg"
  //         />
  //       </div>
  //       <div
  //         className="w-full rounded-md border border-solid
  //         border-gray-300 lg:w-1/2"
  //       >
  //         <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose">
  //           {markdownSource}
  //         </ReactMarkdown>
  //       </div>
  //     </div>
  //   </>
  // );
}
