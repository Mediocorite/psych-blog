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
    <div className="-mx-6 flex flex-wrap justify-between pt-12">
      {/*1/3 col */}
      <div className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-1/3">
        <div className="flex-1 overflow-hidden rounded-b-none rounded-t bg-white shadow-lg">
          <a
            href="#"
            className="flex flex-wrap no-underline hover:no-underline"
          >
            <img
              src="https://source.unsplash.com/collection/225/800x600"
              className="h-64 w-full rounded-t pb-6"
            />
            <p className="w-full px-6 text-xs text-gray-600 md:text-sm">
              GETTING STARTED
            </p>
            <div className="w-full px-6 text-xl font-bold text-gray-900">
              Lorem ipsum dolor sit amet.
            </div>
            <p className="mb-5 px-6 font-serif text-base text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              at ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
          </a>
        </div>
        <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <img
              className="avatar mr-4 h-8 w-8 rounded-full"
              data-tippy-content="Author Name"
              src="http://i.pravatar.cc/300"
              alt="Avatar of Author"
            />
            <p className="text-xs text-gray-600 md:text-sm">1 MIN READ</p>
          </div>
        </div>
      </div>
      {/*1/3 col */}
      <div className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-1/3">
        <div className="flex-1 overflow-hidden rounded-b-none rounded-t bg-white shadow-lg">
          <a
            href="#"
            className="flex flex-wrap no-underline hover:no-underline"
          >
            <img
              src="https://source.unsplash.com/collection/3106804/800x600"
              className="h-64 w-full rounded-t pb-6"
            />
            <p className="w-full px-6 text-xs text-gray-600 md:text-sm">
              GETTING STARTED
            </p>
            <div className="w-full px-6 text-xl font-bold text-gray-900">
              Lorem ipsum dolor sit amet.
            </div>
            <p className="mb-5 px-6 font-serif text-base text-gray-800">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. ipsum
              dolor sit amet, consectetur adipiscing elit. Aliquam at ip Aliquam
              at ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
          </a>
        </div>
        <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <img
              className="avatar mr-4 h-8 w-8 rounded-full"
              data-tippy-content="Author Name"
              src="http://i.pravatar.cc/300"
              alt="Avatar of Author"
            />
            <p className="text-xs text-gray-600 md:text-sm">1 MIN READ</p>
          </div>
        </div>
      </div>
      {/*1/3 col */}
      <div className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-1/3">
        <div className="flex-1 overflow-hidden rounded-b-none rounded-t bg-white shadow-lg">
          <a
            href="#"
            className="flex flex-wrap no-underline hover:no-underline"
          >
            <img
              src="https://source.unsplash.com/collection/539527/800x600"
              className="h-64 w-full rounded-t pb-6"
            />
            <p className="w-full px-6 text-xs text-gray-600 md:text-sm">
              GETTING STARTED
            </p>
            <div className="w-full px-6 text-xl font-bold text-gray-900">
              Lorem ipsum dolor sit amet.
            </div>
            <p className="mb-5 px-6 font-serif text-base text-gray-800">
              Lorem ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
          </a>
        </div>
        <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <img
              className="avatar mr-4 h-8 w-8 rounded-full"
              data-tippy-content="Author Name"
              src="http://i.pravatar.cc/300"
              alt="Avatar of Author"
            />
            <p className="text-xs text-gray-600 md:text-sm">1 MIN READ</p>
          </div>
        </div>
      </div>
      {/*1/2 col */}
      <div className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-1/2">
        <div className="flex-1 overflow-hidden rounded-b-none rounded-t bg-white shadow-lg">
          <a
            href="#"
            className="flex flex-wrap no-underline hover:no-underline"
          >
            <img
              src="https://source.unsplash.com/collection/3657445/800x600"
              className="h-full w-full rounded-t pb-6"
            />
            <p className="w-full px-6 text-xs text-gray-600 md:text-sm">
              GETTING STARTED
            </p>
            <div className="w-full px-6 text-xl font-bold text-gray-900">
              Lorem ipsum dolor sit amet.
            </div>
            <p className="mb-5 px-6 font-serif text-base text-gray-800">
              Lorem ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
          </a>
        </div>
        <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <img
              className="avatar mr-4 h-8 w-8 rounded-full"
              data-tippy-content="Author Name"
              src="http://i.pravatar.cc/300"
              alt="Avatar of Author"
            />
            <p className="text-xs text-gray-600 md:text-sm">1 MIN READ</p>
          </div>
        </div>
      </div>
      {/*1/2 col */}
      <div className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-1/2">
        <div className="flex-1 flex-row overflow-hidden rounded-b-none rounded-t bg-white shadow-lg">
          <a
            href="#"
            className="flex flex-wrap no-underline hover:no-underline"
          >
            <img
              src="https://source.unsplash.com/collection/764827/800x600"
              className="h-full w-full rounded-t pb-6"
            />
            <p className="w-full px-6 text-xs text-gray-600 md:text-sm">
              GETTING STARTED
            </p>
            <div className="w-full px-6 text-xl font-bold text-gray-900">
              Lorem ipsum dolor sit amet.
            </div>
            <p className="mb-5 px-6 font-serif text-base text-gray-800">
              Lorem ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
          </a>
        </div>
        <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <img
              className="avatar mr-4 h-8 w-8 rounded-full"
              data-tippy-content="Author Name"
              src="http://i.pravatar.cc/300"
              alt="Avatar of Author"
            />
            <p className="text-xs text-gray-600 md:text-sm">1 MIN READ</p>
          </div>
        </div>
      </div>
      {/*2/3 col */}
      <div className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-2/3">
        <div className="flex-1 overflow-hidden rounded-b-none rounded-t bg-white shadow-lg">
          <a
            href="#"
            className="flex flex-wrap no-underline hover:no-underline"
          >
            <img
              src="https://source.unsplash.com/collection/325867/800x600"
              className="h-full w-full rounded-t pb-6"
            />
            <p className="w-full px-6 text-xs text-gray-600 md:text-sm">
              GETTING STARTED
            </p>
            <div className="w-full px-6 text-xl font-bold text-gray-900">
              Lorem ipsum dolor sit amet.
            </div>
            <p className="mb-5 px-6 font-serif text-base text-gray-800">
              Lorem ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
          </a>
        </div>
        <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <img
              className="avatar mr-4 h-8 w-8 rounded-full"
              data-tippy-content="Author Name"
              src="http://i.pravatar.cc/300"
              alt="Avatar of Author"
            />
            <p className="text-xs text-gray-600 md:text-sm">1 MIN READ</p>
          </div>
        </div>
      </div>
      {/*1/3 col */}
      <div className="flex w-full flex-shrink flex-grow flex-col p-6 md:w-1/3">
        <div className="flex-1 overflow-hidden rounded-b-none rounded-t bg-white shadow-lg">
          <a
            href="#"
            className="flex flex-wrap no-underline hover:no-underline"
          >
            <img
              src="https://source.unsplash.com/collection/1118905/800x600"
              className="h-full w-full rounded-t pb-6"
            />
            <p className="w-full px-6 text-xs text-gray-600 md:text-sm">
              GETTING STARTED
            </p>
            <div className="w-full px-6 text-xl font-bold text-gray-900">
              Lorem ipsum dolor sit amet.
            </div>
            <p className="mb-5 px-6 font-serif text-base text-gray-800">
              Lorem ipsum eu nunc commodo posuere et sit amet ligula.
            </p>
          </a>
        </div>
        <div className="mt-auto flex-none overflow-hidden rounded-b rounded-t-none bg-white p-6 shadow-lg">
          <div className="flex items-center justify-between">
            <img
              className="avatar mr-4 h-8 w-8 rounded-full"
              data-tippy-content="Author Name"
              src="http://i.pravatar.cc/300"
              alt="Avatar of Author"
            />
            <p className="text-xs text-gray-600 md:text-sm">1 MIN READ</p>
          </div>
        </div>
      </div>
    </div>
  );
}
