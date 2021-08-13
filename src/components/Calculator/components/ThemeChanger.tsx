import { useEffect, useState } from "react";

const ThemeChanger = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    darkMode
      ? document.querySelector(".calculator")?.classList.add("dark-mode")
      : document.querySelector(".calculator")?.classList.remove("dark-mode");
  }, [darkMode]);

  return (
    <button className="theme-changer" onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? <div>&#9788;</div> : <div>&#9789;</div>}
    </button>
  );
};

export default ThemeChanger;
