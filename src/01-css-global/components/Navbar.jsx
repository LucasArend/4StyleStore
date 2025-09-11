import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiShoppingCart, FiChevronDown } from "react-icons/fi";
import "./../css/navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Dropdown */}
      <div className="left" onClick={() => setOpen(!open)}>
        CSS GLOBAL <FiChevronDown />
        {open && (
          <div className="dropdown">
            <ul>
              <li><Link to="/modules">CSS Modules</Link></li>
              <li><Link to="/tailwind">TailwindCSS</Link></li>
              <li><Link to="/styled">Styled Components</Link></li>
            </ul>
          </div>
        )}
      </div>

      {/* Links centrais */}
      <div className="center">
        <a href="#">Produtos</a>
        <a href="#">Promoção</a>
      </div>

      {/* Ícones */}
      <div className="right">
        <FiMoon />
        <FiShoppingCart />
      </div>
    </nav>
  );
}

export default Navbar;
