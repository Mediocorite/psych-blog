import DefaultCard from "@/src/components/Card/default";
import { getPosts } from "@/src/database/firestore";
import { BlogPost } from "@/src/models/blogPost";
import CategoryPipe from "@/src/utilities/categoryPipe";
import React from "react";

export default async function page({
  searchParams,
}: {
  searchParams: { category: string };
}) {
  const { category } = searchParams;
  const postsOfCurrentCategory = await getPosts(category);
  return (
    <>
      <div className="mb-6 text-4xl">{CategoryPipe(category)}</div>
      <div className="-m-6 flex flex-wrap justify-between">
        {postsOfCurrentCategory?.docs.map((docSnapshot, index) => {
          const document = docSnapshot.data() as BlogPost;
          const documentID = docSnapshot.id;

          return (
            <DefaultCard
              key={index}
              blogPostData={document}
              articleID={documentID}
              index={index - 1}
            />
          );
        })}
      </div>
    </>
  );
}
