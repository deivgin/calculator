import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeChanger = () => {
  const [theme, setThemeMode] = useLocalStorage("mode_dark", "dark");

  useEffect(() => {
    theme === "dark"
      ? document.querySelector(".calculator")?.classList.add("dark-mode")
      : document.querySelector(".calculator")?.classList.remove("dark-mode");
  }, [theme]);

  return (
    <button
      className="theme-changer"
      onClick={() => {
        if (theme === "light") {
          setThemeMode("dark");
        } else if (theme === "dark") {
          setThemeMode("light");
        }
      }}
    >
      {theme === "dark" ? <div>&#9788;</div> : <div>&#9789;</div>}
    </button>
  );
};

export default ThemeChanger;
