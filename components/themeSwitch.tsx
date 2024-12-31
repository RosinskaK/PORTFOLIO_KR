"use client";

import React, { useEffect, useState } from "react";
import { GoSun } from "react-icons/go";
import { RiMoonClearFill } from "react-icons/ri";

type Theme = "light" | "dark";

function ThemeSwitch() {
  const [theme, setTheme] = useState<Theme>("light");

  const handleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <button
      className="fixed bottom-5 right-5 bg-white h-[3rem] w-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border-2 border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-zinc-950"
      onClick={handleTheme}
    >
      {theme === "light" ? (
        <GoSun className="w-[26px] h-[26px]" />
      ) : (
        <RiMoonClearFill className="w-[26px] h-[26px]" />
      )}
    </button>
  );
}

export default ThemeSwitch;
