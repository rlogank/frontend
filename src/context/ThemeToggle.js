import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { ThemeContext } from "./ThemeContext";

const Toggle = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="transition ease-in-out rounded-full p-2.5 bg-black bg-opacity-5 hover:bg-opacity-10 active:bg-opacity-20 dark:bg-opacity-20 dark:hover:bg-opacity-40 dark:active:bg-opacity-90 dark:bg-black"
    >
      {theme === "dark" ? (
        <FaSun className="text-neutral-800 dark:text-neutral-100 cursor-pointer" />
      ) : (
        <FaMoon className="text-neutral-800 dark:text-neutral-100 cursor-pointer" />
      )}
    </button>
  );
};

export default Toggle;
