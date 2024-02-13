import { getPosts } from "@/src/database/firestore";
import { log } from "console";
import React from "react";

export default async function page({
  searchParams,
}: {
  searchParams: { category: string };
}) {
  const { category } = searchParams;
  const postsOfCurrentCategory = await getPosts(category);
  postsOfCurrentCategory?.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
  // console.log(postsOfCurrentCategory);

  // postsOfCurrentCategory?.forEach((element) => )
  return <div>{category}</div>;
}
