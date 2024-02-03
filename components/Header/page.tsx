import React from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import AuthLinks from "./AuthLinks";
import { Drawer, DrawerContent, DrawerTrigger } from "../shadcn/ui/drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const links = [
  { id: 1, name: "About", url: "/about" },
  { id: 2, name: "Contact", url: "/contact" },
  { id: 3, name: "Resume", url: "/resume" },
];

export default function Header() {
  return (
    <nav className="mt-0 w-full">
      <div className="container mx-auto flex items-center">
        <div className="flex w-1/2 pl-4 text-sm">
          <ul className="list-reset flex flex-1 items-center justify-between md:flex-none">
            <li className="mr-2">
              <a
                className="inline-block px-2 py-2 text-white no-underline hover:underline"
                href="post.html"
              >
                POST
              </a>
            </li>
            <li className="mr-2">
              <a
                className="inline-block px-2 py-2 text-gray-600 no-underline hover:text-gray-200 hover:underline"
                href="multimenu post.html"
              >
                MULTIMENU POST
              </a>
            </li>
            <li className="mr-2">
              <a
                className="inline-block px-2 py-2 text-gray-600 no-underline hover:text-gray-200 hover:underline"
                href="#"
              >
                LINK
              </a>
            </li>
            <li className="mr-2">
              <a
                className="inline-block px-2 py-2 text-gray-600 no-underline hover:text-gray-200 hover:underline"
                href="post_vue.html"
              >
                POST_VUE
              </a>
            </li>
          </ul>
        </div>
        <div className="flex w-1/2 content-center justify-end">
          <a
            className="hover:text-underline avatar inline-block h-10 p-2 text-center text-gray-500 no-underline hover:text-white md:h-auto md:p-4"
            data-tippy-content="@twitter_handle"
            href="https://twitter.com/intent/tweet?url=#"
          >
            <svg
              className="h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path d="M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z" />
            </svg>
          </a>
          <a
            className="hover:text-underline avatar inline-block h-10 p-2 text-center text-gray-500 no-underline hover:text-white md:h-auto md:p-4"
            data-tippy-content="#facebook_id"
            href="https://www.facebook.com/sharer/sharer.php?u=#"
          >
            <svg
              className="h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path d="M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
  // return (
  //   <div className="flex h-28 items-center justify-between">
  //     <div className="flex flex-1 text-center text-lg font-bold md:text-2xl lg:text-left xl:text-3xl">
  //       <Link href={"/"}>Jung and the Restless</Link>
  //     </div>
  //     <div className="hidden flex-1 justify-end gap-5 text-lg md:flex xl:text-lg">
  //       <ThemeToggle initialTheme="light" />
  //       {links.map((link) => (
  //         <Link key={link.id} href={link.url}>
  //           {link.name}
  //         </Link>
  //       ))}
  //       <AuthLinks />
  //       <div className="hidden gap-3 lg:flex">
  //         <div style={{ width: "24px", height: "auto", position: "relative" }}>
  //           <Link href="https://www.linkedin.com/in/dinaish-mistry-16b496224/">
  //             <FontAwesomeIcon icon={faLinkedin} size="lg" />
  //           </Link>
  //         </div>
  //         <div style={{ width: "24px", height: "auto", position: "relative" }}>
  //           <Link href="https://www.instagram.com/_dinaish_mistry_/?hl=en">
  //             <FontAwesomeIcon icon={faInstagram} size="lg" />
  //           </Link>
  //         </div>
  //       </div>
  //       <div className="flex md:hidden">
  //         hello
  //         <Drawer>
  //           <DrawerTrigger>
  //             hello
  //             <svg
  //               xmlns="http://www.w3.org/2000/svg"
  //               className="icon icon-tabler icon-tabler-menu-2"
  //               width="24"
  //               height="24"
  //               viewBox="0 0 24 24"
  //               strokeWidth="2"
  //               stroke="currentColor"
  //               fill="none"
  //               strokeLinecap="round"
  //               strokeLinejoin="round"
  //             >
  //               <path stroke="none" d="M0 0h24v24H0z" fill="none" />
  //               <path d="M4 6l16 0" />
  //               <path d="M4 12l16 0" />
  //               <path d="M4 18l16 0" />
  //             </svg>
  //           </DrawerTrigger>
  //           <DrawerContent>
  //             <div className="flex flex-col items-center justify-center">
  //               {links.map((link) => (
  //                 <Link
  //                   key={link.id}
  //                   href={link.url}
  //                   className="m-4 p-4 text-center text-2xl"
  //                 >
  //                   {link.name}
  //                 </Link>
  //               ))}
  //             </div>
  //           </DrawerContent>
  //         </Drawer>
  //       </div>
  //     </div>
  //   </div>
  // );
}
