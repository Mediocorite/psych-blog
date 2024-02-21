import { BlogPost } from "@/src/models/blogPost";
import CategoryPipe from "@/src/utilities/categoryPipe";
import { DateFormatPipe } from "@/src/utilities/dateFormatPipe";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LeadCard({
  blogPostData,
  articleID,
}: {
  blogPostData: BlogPost;
  articleID: string;
}) {
  return (
    <Link
      href={`/posts/${articleID}`}
      className="flex h-full w-full flex-wrap overflow-hidden rounded bg-white p-6 no-underline hover:no-underline"
    >
      <div
        className="relative block w-full rounded-t md:w-2/3"
        style={{
          position: "relative",
          paddingTop: "56.25%" /* 16:9 Aspect Ratio */,
        }}
      >
        <Image
          src={blogPostData.bannerLink}
          alt="banner"
          fill
          className="absolute left-0 top-0 h-full w-full object-cover "
        />
      </div>
      {/* <div className="relative block h-full w-full rounded-t md:w-2/3">
        <Image
          src={blogPostData.bannerLink}
          alt="banner"
          // width={500}
          fill
          // height={500}
          className="h-auto w-full object-cover"
          // className="h-full w-full transform object-cover transition-transform duration-500 ease-in-out hover:scale-150"
        />
      </div> */}
      <div className="flex w-full flex-shrink flex-grow flex-col md:w-1/3">
        <div className="flex-1 overflow-hidden rounded-b-none rounded-t bg-white shadow-lg">
          <p className="w-full px-6 pt-6 text-xs text-gray-600 md:text-sm">
            {CategoryPipe(blogPostData.category)}
          </p>
          <div className="w-full px-6 text-xl font-bold text-gray-900">
            {blogPostData.postTitle}
          </div>
          <p className="mb-5 px-6 font-serif text-base text-gray-800">
            {blogPostData.blogText.substring(0, 850)}...
          </p>
        </div>
        <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between">
            {DateFormatPipe(blogPostData.postDate)}
            <p className="text-xs text-gray-600 md:text-sm">1 MIN READ</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
