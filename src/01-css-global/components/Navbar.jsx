import { NavLink } from "react-router-dom";
import { FiMoon, FiShoppingCart, FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import "./../css/navbar.css";

export default function NavbarGlobal() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar-global">
      <div className="left" onClick={() => setOpen(!open)}>
        CSS GLOBAL <FiChevronDown />
        {open && (
          <div className="dropdown">
            <ul>
              <li><NavLink to="/modules/produtos">CSS Modules</NavLink></li>
              <li><NavLink to="/tailwind/produtos">TailwindCSS</NavLink></li>
              <li><NavLink to="/styled/produtos">Styled Components</NavLink></li>
            </ul>
          </div>
        )}
      </div>

      <div className="center">
        <NavLink to="/global/produtos">Produtos</NavLink>
        <NavLink to="/global/promocao">Promoção</NavLink>
      </div>

      <div className="right">
        <FiMoon />
        <FiShoppingCart />
      </div>
    </nav>
  );
}
