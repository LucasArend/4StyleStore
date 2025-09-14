import { NavLink } from "react-router-dom";
import { FiMoon, FiShoppingCart, FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import styles from "./../css/Navbar.module.css";

export default function NavbarModules() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.left} onClick={() => setOpen(!open)}>
        CSS MODULES <FiChevronDown />
        {open && (
          <div className={styles.dropdown}>
            <ul>
              <li><NavLink to="/global/produtos">CSS Global</NavLink></li>
              <li><NavLink to="/tailwind/produtos">TailwindCSS</NavLink></li>
              <li><NavLink to="/styled/produtos">Styled Components</NavLink></li>
            </ul>
          </div>
        )}
      </div>

      <div className={styles.center}>
        <NavLink to="/modules/produtos">Produtos</NavLink>
        <NavLink to="/modules/promocao">Promoção</NavLink>
      </div>

      <div className={styles.right}>
        <FiMoon />
        <FiShoppingCart />
      </div>
    </nav>
  );
}
