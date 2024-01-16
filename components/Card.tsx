import Image from "next/image";
import Link from "next/link";
import React from "react";

type PropType = {
  key: number;
  item: {
    img: string;
    createdAt: string;
    title: string;
    slug: string;
    catSlug: string;
    desc: string;
  };
};

export default function Card({ key, item }: PropType) {
  return (
    <div className="mb-12 flex items-center gap-12" key={key}>
      {item.img && (
        <div className="h-88 relative flex-1 lg:hidden">
          <Image src={item.img} alt="" fill className="object-cover" />
        </div>
      )}
      <div className="flex flex-1 flex-col gap-7">
        <div>
          <span className="text-gray-500">
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className="text-crimson-600 font-medium">{item.catSlug}</span>
        </div>
        <Link href={`/posts/${item.slug}`}>
          <h1>{item.title}</h1>
        </Link>
        {/* <p className="text-lg font-light text-[var(--softTextColor)]">{item.desc.substring(0, 60)}</p> */}
        <div
          className="text-lg font-light text-[var(--softTextColor)]"
          dangerouslySetInnerHTML={{ __html: item?.desc.substring(0, 60) }}
        />
        <Link
          href={`/posts/${item.slug}`}
          className="border-crimson-600 w-max border-b pb-0.5"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}
