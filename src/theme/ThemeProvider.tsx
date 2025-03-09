import { useEffect, useState } from "react";
import { ThemeProviderContext } from "./ThemeContext";
import type { Theme, ThemeProviderProps } from "./types";

export function ThemeProvider({ children, defaultTheme = "system", storageKey = "theme", attribute = "class", enableSystem = true, ...props }: ThemeProviderProps) {
 const [theme, setTheme] = useState<Theme>(() => {
  if (typeof window !== "undefined") {
   return (localStorage.getItem(storageKey) as Theme) || defaultTheme;
  }
  return defaultTheme;
 });

 useEffect(() => {
  const root = window.document.documentElement;
  root.classList.remove("light", "dark");

  if (theme === "system" && enableSystem) {
   const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
   root.classList.add(systemTheme);
   return;
  }

  root.classList.add(theme);
 }, [theme, enableSystem]);

 const value = {
  theme,
  setTheme: (newTheme: Theme) => {
   localStorage.setItem(storageKey, newTheme);
   setTheme(newTheme);
  },
 };

 return (
  <ThemeProviderContext.Provider value={value} {...props} {...{ [attribute]: theme }}>
   {children}
  </ThemeProviderContext.Provider>
 );
}
