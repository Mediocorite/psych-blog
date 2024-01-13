"use client";
import React, { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import Image from "next/image";

export default function ThemeSwitcher() {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkTheme);
  }, [darkTheme]);

  return (
    <Switch
      checked={darkTheme}
      onChange={setDarkTheme}
      className={`${darkTheme ? "bg-gray-700" : "bg-gray-200"}
        relative inline-flex h-6 w-11 items-center rounded-full
        transition-colors focus:outline-none`}
    >
      <span
        className={`${darkTheme ? "translate-x-6" : "translate-x-1"}
          inline-block h-4 w-4 transform rounded-full
          bg-white p-0.5 transition-transform`}
      >
        {darkTheme ? (
          <Image src="/moon.png" alt="moon" width={15} height={15} />
        ) : (
          <Image src="/sun.png" alt="sun" width={15} height={15} />
        )}
      </span>
    </Switch>
  );
}
