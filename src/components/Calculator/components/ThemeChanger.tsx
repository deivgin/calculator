import { useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ThemeChanger = () => {
  const [theme, setThemeMode] = useLocalStorage<"dark" | "light">(
    "mode_dark",
    "dark"
  );

  useEffect(() => {
    theme === "dark"
      ? document.querySelector(".calculator")?.classList.add("dark-mode")
      : document.querySelector(".calculator")?.classList.remove("dark-mode");
  }, [theme]);

  const toggleTheme = () => {
    setThemeMode(theme === "light" ? "dark" : "light");
  };

  return (
    <button className="theme-changer" onClick={toggleTheme}>
      {theme === "dark" ? <div>&#9788;</div> : <div>&#9789;</div>}
    </button>
  );
};

export default ThemeChanger;
