"use client";
import React, { Fragment, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Markdown from "react-markdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import CategoryList from "../components/CategoryList";
import { CategorySelect } from "./components/CategorySelect";

const categories = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
];

export default function Writer() {
  // TODO: Hookup text area to be converted into markdown.
  // const { data: session } = useSession();
  // const router = useRouter();

  // useEffect(() => {
  //   if (!session) {
  //     router.push("/");
  //   }
  // }, [session]);
  // Have a simple markdown editor.
  // Two components -> Editor window / Output windows

  // Metadata for the post
  const [postTitle, setPostTitle] = useState<string>(``);
  const [bannerLink, setBannerLink] = useState<string>(``);
  const [category, setCategory] = useState<string>(``);

  // Main content
  const [markdown, setMarkdown] = useState(``);

  return (
    <main className="markdown-page h-full">
      <div className="mb-4 flex w-full flex-col text-2xl md:text-4xl lg:flex-row">
        <div className="relative mr-2 flex w-full lg:w-9/12">
          <input
            placeholder="Title..."
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            className="focus:outline-none "
          />
        </div>
        <div className="w-full lg:w-3/12">
          <CategorySelect
            value={category}
            onChange={(value) => setCategory(value)}
          />
          {/* <Listbox value={categoryList} onChange={setCategoryList}>
            <div className="relative text-4xl">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white px-6 py-3 text-left text-lg shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 md:text-xl">
                <span className="block truncate">{categoryList.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  👇
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                  {categories.map((category, categoryIdx) => (
                    <Listbox.Option
                      key={categoryIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? "bg-amber-100 text-amber-900"
                            : "text-gray-900"
                        }`
                      }
                      value={category}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {category.name}
                          </span>
                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              ✅
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox> */}
        </div>
      </div>
      <div className="mb-4 ">
        <div className="h-3/4 w-full"></div>
      </div>
      <div className="mb-4 flex justify-end">
        <div className="w-28 rounded-xl bg-green-300"></div>
      </div>
    </main>
  );
}

Writer.requireAuth = true;
