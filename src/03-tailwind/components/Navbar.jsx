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
    "relative hover:after:w-full after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300";

  return (
    <nav className="bg-gray-800 text-white p-4 relative">
      <div className="flex items-center justify-between w-full">
        {/* Esquerda - Logo */}
        <div className="text-xl font-bold">TAILWIND</div>

        {/* Centro - Links (apenas desktop) */}
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

        {/* Direita - Ações */}
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
          {/* Ícone Menu Mobile */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Menu Mobile Dropdown */}
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
