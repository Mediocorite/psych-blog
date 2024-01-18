import Link from "next/link";
import React from "react";

const data = [
  { id: 1, title: "Case Studies", slug: "blue" },
  { id: 2, title: "Personal Reflection", slug: "yellow" },
  { id: 3, title: "Research Updates", slug: "green" },
  { id: 4, title: "Ethics", slug: "red" },
];

export default function CategoryList() {
  return (
    <div className="container">
      <h1 className="mt-10 text-3xl font-semibold">Popular Categories</h1>
      <div className="mt-4 flex flex-wrap gap-4 dark:text-black">
        {data?.map((item) => (
          <Link
            href="/blog?cat=style"
            className={`flex items-center gap-2 rounded-lg p-4 text-lg ${
              item.slug === "blue" ? "bg-blue-200" : ""
            } ${item.slug === "yellow" ? "bg-yellow-200" : ""} ${
              item.slug === "green" ? "bg-green-200" : ""
            } ${item.slug === "red" ? "bg-red-200" : ""} ${
              item.slug === "culture" ? "bg-orange-200" : ""
            } ${item.slug === "coding" ? "bg-indigo-200" : ""}`}
            key={item.id}
          >
            {/* {item.img && (
            <Image
              src={item.img}
              alt=""
              width={32}
              height={32}
              className="rounded-full"
            />
          )} */}
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
