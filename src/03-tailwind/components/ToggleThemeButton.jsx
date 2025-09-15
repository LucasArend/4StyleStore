import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function ToggleThemeButton() {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition"
    >
      {isDarkMode ? "Tema Claro" : "Tema Escuro"}
    </button>
  );
}
