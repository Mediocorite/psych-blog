"use client";
import React, { useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "../shadcn/ui/drawer";
import { NavLinks } from "./page";
export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="block lg:hidden">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-menu-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 6l16 0" />
            <path d="M4 12l16 0" />
            <path d="M4 18l16 0" />
          </svg>
        </DrawerTrigger>
        <DrawerContent>
          <div className="flex flex-col items-center justify-center">
            <NavLinks />
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
