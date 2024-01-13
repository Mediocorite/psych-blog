"use client";
import { createContext, useEffect, useState } from "react";

type ThemeContextType = {
  isDark: boolean;
  toggle: () => void;
};

const defaultContextValue: ThemeContextType = {
  isDark: false,
  toggle: () => {},
};

export const ThemeContext =
  createContext<ThemeContextType>(defaultContextValue);

const getFromLocalStorage = (): boolean => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("isDark");
    return value === "true";
  }
  return false;
};

type ThemeContextProviderProps = {
  children: ReactNode;
};

export function ThemeContextProvider({ children }: ThemeContextProviderProps) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    return getFromLocalStorage();
  });

  const toggle = () => setIsDark(!isDark);

  useEffect(() => {
    localStorage.setItem("isDark", isDark.toString());
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
