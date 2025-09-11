import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiShoppingCart, FiChevronDown } from "react-icons/fi";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 bg-emerald-600 text-white relative">
      {/* Dropdown */}
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 font-bold"
        >
          TAILWINDCSS <FiChevronDown />
        </button>

        {open && (
          <ul className="absolute left-0 mt-2 bg-white text-black shadow-lg rounded w-40">
            <li><Link to="/global" className="block px-4 py-2 hover:bg-gray-100">CSS Global</Link></li>
            <li><Link to="/modules" className="block px-4 py-2 hover:bg-gray-100">CSS Modules</Link></li>
            <li><Link to="/styled" className="block px-4 py-2 hover:bg-gray-100">Styled Components</Link></li>
          </ul>
        )}
      </div>

      {/* Links centrais */}
      <div className="flex gap-6">
        <a href="#" className="hover:underline">Produtos</a>
        <a href="#" className="hover:underline">Promoção</a>
      </div>

      {/* Ícones */}
      <div className="flex gap-4 text-lg cursor-pointer">
        <FiMoon />
        <FiShoppingCart />
      </div>
    </nav>
  );
}

export default Navbar;
