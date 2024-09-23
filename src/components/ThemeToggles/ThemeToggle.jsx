import { useTheme } from "./ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeToggle = () => {
  
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="px-4 py-2 flex items-center space-x-2 rounded bg-gray-800 text-white dark:bg-gray-200 dark:text-black"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <>
          <FontAwesomeIcon icon={faMoon} className="h-6 w-6" />  
          <span>Dark</span>
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={faSun} className="h-6 w-6" />  
          <span>Light</span>
        </>
      )}
    </button>
  );
};

export default ThemeToggle;
