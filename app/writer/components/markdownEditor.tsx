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

  return (
    <>
      <input
        value={title}
        onChange={onTitleChange}
        placeholder="Title"
        className="mb-4 text-4xl lg:text-5xl"
      ></input>
      <div className="flex h-full flex-col gap-2 lg:flex-row">
        <div className="w-full rounded-md border border-solid  border-gray-300 lg:w-1/2">
          <textarea
            onChange={onMarkdownChange}
            value={markdownSource}
            className=" w-full overflow-auto whitespace-pre font-mono text-sm lg:text-lg"
          />
        </div>
        <div
          className="w-full rounded-md border border-solid
          border-gray-300 lg:w-1/2"
        >
          <ReactMarkdown remarkPlugins={[remarkGfm]} className="prose">
            {markdownSource}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
}
