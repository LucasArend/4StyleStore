import { NavLink } from "react-router-dom";
import { FiMoon, FiShoppingCart, FiChevronDown } from "react-icons/fi";
import { useState } from "react";

export default function NavbarTailwind() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative pb-2 transition-colors ${
      isActive ? "text-white" : "text-indigo-200 hover:text-white"
    }`;

  return (
    <nav className="bg-indigo-600 text-white px-6 py-3 flex justify-between items-center">
      {/* Esquerda */}
      <div className="relative cursor-pointer" onClick={() => setOpen(!open)}>
        TAILWIND <FiChevronDown className="inline ml-1" />
        {open && (
          <div className="absolute mt-2 bg-white text-indigo-600 rounded shadow p-2">
            <ul>
              <li><NavLink to="/global/produtos">CSS Global</NavLink></li>
              <li><NavLink to="/modules/produtos">CSS Modules</NavLink></li>
              <li><NavLink to="/styled/produtos">Styled Components</NavLink></li>
            </ul>
          </div>
        )}
      </div>

      {/* Centro */}
      <div className="flex gap-6">
        <NavLink to="/tailwind/produtos" className={linkClass}>Produtos</NavLink>
        <NavLink to="/tailwind/promocao" className={linkClass}>Promoção</NavLink>
      </div>

      {/* Direita */}
      <div className="flex gap-4">
        <FiMoon />
        <FiShoppingCart />
      </div>
    </nav>
  );
}
