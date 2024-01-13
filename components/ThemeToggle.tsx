"use client";
import React, { useEffect, useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { Switch } from "@headlessui/react";

export default function ThemeSwitcher() {
  const { isDark, toggle } = useContext(ThemeContext);

  useEffect(() => {
    document.body.classList.toggle("dark", isDark);
  }, [isDark]);

  return (
    <Switch
      checked={isDark}
      onChange={toggle}
      className={`${isDark ? "bg-gray-700" : "bg-gray-200"}
        relative inline-flex h-6 w-11 items-center rounded-full
        transition-colors focus:outline-none`}
    >
      <span
        className={`${isDark ? "translate-x-6" : "translate-x-1"}
          inline-block h-4 w-4 transform rounded-full
          bg-white transition-transform`}
      />

      <div
        className={`${isDark ? "translate-x-0.5" : "translate-x-5"}
          absolute z-10 text-sm`}
      >
        {isDark ? "☀️" : "🌙"}
      </div>
    </Switch>
  );
}
