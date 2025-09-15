import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiSun, FiShoppingCart, FiChevronDown } from "react-icons/fi";
import { ThemeContext } from "../../context/ThemeContext";

function NavbarTailwind({ onCartClick, cartCount }) {
  const [open, setOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-indigo-600 dark:bg-gray-900 text-white px-6 py-3 flex items-center justify-between">
      {/* Left - Dropdown */}
      <div className="relative cursor-pointer" onClick={() => setOpen(!open)}>
        <span className="flex items-center gap-1 font-semibold">
          TailwindCSS <FiChevronDown />
        </span>
        {open && (
          <div className="absolute mt-2 bg-white text-black rounded shadow w-40">
            <ul>
              <li><Link to="/modules" className="block px-4 py-2 hover:bg-indigo-100">CSS Modules</Link></li>
              <li><Link to="/global" className="block px-4 py-2 hover:bg-indigo-100">CSS Global</Link></li>
              <li><Link to="/styled" className="block px-4 py-2 hover:bg-indigo-100">Styled Components</Link></li>
            </ul>
          </div>
        )}
      </div>

      {/* Center - Links */}
      <div className="flex gap-6">
        <Link to="/tailwind/produtos" className="relative hover:after:w-full after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all">
          Produtos
        </Link>
        <Link to="/tailwind/promocao" className="relative hover:after:w-full after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all">
          Promoção
        </Link>
      </div>

      {/* Right - Icons */}
      <div className="flex gap-4 text-lg cursor-pointer">
        <div onClick={toggleTheme}>
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </div>
        <div onClick={onCartClick} className="relative">
          <FiShoppingCart />
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavbarTailwind;
