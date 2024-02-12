import { getSinglePost } from "@/src/database/firestore";
import { BlogPost } from "@/src/models/blogPost";
import React from "react";
import Image from "next/image";

export default async function Page({ params }: { params: { slug: string } }) {
  const data: BlogPost | undefined = await getSinglePost(params.slug);
  if (!data) return <div className="">Sad</div>;
  return (
    <div>
      <div className="">Post Title: {data.postTitle}</div>
      <div className="">Post Category: {data.category}</div>
      <Image
        priority
        src={data?.bannerLink}
        alt="BannerLink"
        width={100}
        height={100}
      />
      <div dangerouslySetInnerHTML={{ __html: data.blogText }}></div>
    </div>
  );
}
