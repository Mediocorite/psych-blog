import { BlogPost } from "@/src/models/blogPost";
import CategoryPipe from "@/src/utilities/categoryPipe";
import { getColumnSize } from "@/src/utilities/columnFunction";
import { DateFormatPipe } from "@/src/utilities/dateFormatPipe";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DefaultCard({
  blogPostData,
  articleID,
  index,
}: {
  blogPostData: BlogPost;
  articleID: string;
  index: number;
}) {
  return (
    <div
      className={`flex w-full flex-shrink flex-grow flex-col p-6 md:w-${getColumnSize(
        index,
      )}`}
    >
      <div className="flex-1 overflow-hidden rounded-b-none rounded-t bg-white shadow-lg">
        <Link
          href={`/posts/${articleID}`}
          className="flex flex-wrap no-underline hover:no-underline"
        >
          <Image
            src={blogPostData.bannerLink}
            alt="banner"
            width={500}
            height={500}
            className="h-full w-full shadow"
          />
          {/* <img
            src="https://source.unsplash.com/collection/225/800x600"
            className="h-64 w-full rounded-t pb-6"
          /> */}
          <p className="w-full px-6 pt-2 text-xs text-gray-600 md:text-sm">
            {CategoryPipe(blogPostData.category)}
          </p>
          <div className="w-full px-6 text-xl font-bold text-gray-900">
            {blogPostData.postTitle}
          </div>
          <p className="mb-5 px-6 font-serif text-base text-gray-800">
            {blogPostData.blogText.substring(0, 100)}...
          </p>
        </Link>
      </div>
      <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6 shadow-lg">
        <div className="flex items-center justify-between">
          <span>{DateFormatPipe(blogPostData.postDate)}</span>
          <p className="text-xs text-gray-600 md:text-sm">10 MIN READ</p>
        </div>
      </div>
    </div>
  );
}
