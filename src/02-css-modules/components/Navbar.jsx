import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiShoppingCart, FiChevronDown } from "react-icons/fi";
import styles from "./../css/navbar.module.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Dropdown */}
      <div className={styles.left} onClick={() => setOpen(!open)}>
        CSS MODULES <FiChevronDown />
        {open && (
          <div className={styles.dropdown}>
            <ul>
              <li><Link to="/global">CSS Global</Link></li>
              <li><Link to="/tailwind">TailwindCSS</Link></li>
              <li><Link to="/styled">Styled Components</Link></li>
            </ul>
          </div>
        )}
      </div>

      {/* Links centrais */}
      <div className={styles.center}>
        <a href="#">Produtos</a>
        <a href="#">Promoção</a>
      </div>

      {/* Ícones */}
      <div className={styles.right}>
        <FiMoon />
        <FiShoppingCart />
      </div>
    </nav>
  );
}

export default Navbar;
