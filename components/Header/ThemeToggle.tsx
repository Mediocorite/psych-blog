"use client";
import React, { useEffect, useState } from "react";
import { Switch } from "@headlessui/react";
import type { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { req } = context;
  const { cookies } = req;

  const theme = cookies.theme || "light"; // Default to light theme

  return { props: { initialTheme: theme } };
}

export default function ThemeSwitcher({
  initialTheme,
}: {
  initialTheme: string;
}) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check the cookie at initial load
    const cookieTheme = document.cookie
      .split("; ")
      .find((row) => row.startsWith("theme="));
    if (cookieTheme) {
      setTheme(cookieTheme.split("=")[1]);
    }
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.cookie = `theme=${newTheme}; path=/; max-age=31536000; SameSite=Lax`;
  };

  return (
    <Switch
      checked={theme === "dark"}
      onChange={toggleTheme}
      className={`${theme === "dark" ? "bg-gray-700" : "bg-gray-200"}
        relative inline-flex h-6 w-12 items-center rounded-full
        text-center transition-colors focus:outline-none`}
    >
      <span
        className={`${
          theme === "dark"
            ? "translate-x-7 bg-gray-300"
            : "translate-x-1 bg-white"
        }
          inline-block h-4 w-4 transform rounded-full
           transition-transform`}
      />

      <div
        className={`${theme === "dark" ? "translate-x-1" : "translate-x-7"}
          absolute z-10 flex h-4 w-4 items-center justify-center text-sm`}
      >
        {theme === "dark" ? "☀️" : "🌕"}
      </div>
    </Switch>
  );
}
