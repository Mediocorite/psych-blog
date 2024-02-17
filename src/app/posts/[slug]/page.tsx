import React from "react";
import { getSinglePost } from "@/src/database/firestore";
import { BlogPost } from "@/src/models/blogPost";
import { formatDate } from "@/src/utils/dateFormatPipe";
import categories from "@/public/category.json";

export default async function Page({ params }: { params: { slug: string } }) {
  // TODO: Figure out why the classic type of blog post doesn't work here
  const data: BlogPost | undefined = await getSinglePost(params.slug);
  if (!data) return <div className="">Sad</div>;
  return (
    <>
      <div className="pt-16 text-center md:pt-32">
        <p className="text-sm font-bold text-green-500 md:text-base">
          {formatDate(data?.postDate)}
          <span className="text-gray-900"> / </span>
          {/* TODO: Dirty fix, better typescript definition would help */}
          {categories[data?.category as keyof typeof categories]?.label}
        </p>
        <h1 className="break-normal text-3xl font-bold md:text-5xl">
          {data.postTitle}
        </h1>
      </div>
      {/* TODO: Add Next image optimization here */}
      <div
        className="container mx-auto mt-8 w-full  rounded bg-white bg-cover"
        style={{
          backgroundImage: `url(${data.bannerLink})`,
          height: "75vh",
        }}
      />

      <div className="container mx-auto -mt-32 ">
        <div className="mx-0 sm:mx-6">
          <div
            className="w-full bg-white p-8 text-xl leading-normal text-gray-800 md:p-24 md:text-2xl"
            dangerouslySetInnerHTML={{ __html: data.blogText }}
          ></div>
        </div>
      </div>
    </>
  );
}
