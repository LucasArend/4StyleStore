import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiShoppingCart, FiChevronDown } from "react-icons/fi";
import "./../css/navbar.css";

function NavbarGlobal() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar-global">
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
      <div className="center">
        <Link to="/global/produtos">Produtos</Link>
        <Link to="/global/promocao">Promoção</Link>
      </div>
      <div className="right">
        <FiMoon />
        <FiShoppingCart />
      </div>
    </nav>
  );
}

export default NavbarGlobal;
