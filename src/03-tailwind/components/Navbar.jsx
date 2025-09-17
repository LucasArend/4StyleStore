import { useState, useContext } from "react";
import { FiMoon, FiSun, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { ThemeContext } from "../../context/ThemeContext";

function NavbarTailwind({ onCartClick, cartCount, onNavigate }) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (path) => {
    setMenuOpen(false);
    onNavigate(path);
  };

  const linkClass =
    "relative hover:after:w-full after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-gray-400 after:w-0 dark:after:bg-blue-200 after:transition-all after:duration-300 ";

  return (
    <nav className="bg-indigo-100 dark:bg-gray-700 dark:text-white text-zinc-900 p-4 relative">

      <div className="flex items-center justify-between w-full">

      <div className="relative group inline-block px-4 py-2">
        <span className="relative z-10 text-xl font-bold">TAILWIND</span>

        <svg
          className="absolute inset-0 w-full h-full z-0 pointer-events-none"
          viewBox="0 0 120 40"
          preserveAspectRatio="none"
        >
          <rect
            x="2"
            y="2"
            width="116"
            height="36"
            rx="4"
            ry="4"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="4"
            className="stroke-snake opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
        </svg>
      </div>


        <div className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
          <div
            onClick={() => handleNav("/global")}
            className={`${linkClass} cursor-pointer`}
          >
            CSS Global
          </div>
          <div
            onClick={() => handleNav("/modules")}
            className={`${linkClass} cursor-pointer`}
          >
            CSS Modules
          </div>
          <div
            onClick={() => handleNav("/styled")}
            className={`${linkClass} cursor-pointer`}
          >
            Styled Components
          </div>
        </div>


        <div className="flex gap-4 items-center text-lg">
          <button onClick={toggleTheme}>
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </button>
          <div onClick={onCartClick} className="relative cursor-pointer">
            <FiShoppingCart />
            {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cartCount}
          </span>
            )}
          </div>

          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-indigo-700 dark:bg-gray-800 flex flex-col gap-4 p-4 md:hidden z-50">
          <button
            onClick={() => handleNav("/global")}
            className={`${linkClass} text-left`}
          >
            CSS Global
          </button>
          <button
            onClick={() => handleNav("/modules")}
            className={`${linkClass} text-left`}
          >
            CSS Modules
          </button>
          <button
            onClick={() => handleNav("/styled")}
            className={`${linkClass} text-left`}
          >
            Styled Components
          </button>
        </div>
      )}
    </nav>
  );
}

export default NavbarTailwind;
