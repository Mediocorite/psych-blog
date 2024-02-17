import { getPosts } from "@/src/database/firestore";
import { BlogPost } from "@/src/models/blogPost";
import { getColumnSize } from "@/src/utilities/columnFunction";
import Image from "next/image";
import Link from "next/link";
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
      {/*Posts Container*/}
      <div className="flex flex-wrap justify-between">
        {postsOfCurrentCategory?.docs.map((fireStoreDoc, index) => {
          const document = fireStoreDoc.data() as BlogPost;
          return (
            <React.Fragment key={fireStoreDoc.id}>
              <div
                className={`flex w-full flex-shrink flex-grow flex-col p-6 lg:w-${getColumnSize(
                  index,
                )}`}
              >
                <div className="flex-1 overflow-hidden rounded-b-none rounded-t bg-white shadow-lg">
                  <Link
                    href={`/posts/${fireStoreDoc.id}`}
                    className="flex flex-wrap no-underline hover:no-underline"
                  >
                    {/* TODO: Fix image  */}
                    <div className="over h-64 w-full rounded-t pb-6">
                      <Image
                        src={document.bannerLink}
                        alt="Banner image"
                        width={640}
                        height={480}
                        className="h-fit object-cover"
                      />
                    </div>
                    {/* <img
                      src="https://source.unsplash.com/collection/225/800x600"
                      className="h-64 w-full rounded-t pb-6"
                    /> */}
                    <p className="w-full px-6 text-xs text-gray-600 md:text-sm">
                      {document.category}
                    </p>
                    <div className="w-full px-6 text-xl font-bold text-gray-900">
                      {document.postTitle}
                    </div>
                    <p className="mb-5 px-6 font-serif text-base text-gray-800">
                      {`${document.blogText.substring(0, 50)}...`}
                    </p>
                  </Link>
                </div>
                {/* <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6 shadow-lg">
                  <div className="flex items-center justify-between">
                    <img
                      className="avatar mr-4 h-8 w-8 rounded-full"
                      data-tippy-content="Author Name"
                      src="http://i.pravatar.cc/300"
                      alt="Avatar of Author"
                    />
                    <p className="text-xs text-gray-600 md:text-sm">
                      1 MIN READ
                    </p>
                  </div>
                </div> */}
              </div>
            </React.Fragment>
          );
        })}
      </div>
      {/*/ Post Content*/}
    </>
  );
}
