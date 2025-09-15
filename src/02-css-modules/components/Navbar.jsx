import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiShoppingCart, FiChevronDown } from "react-icons/fi";
import styles from "./../css/Navbar.module.css";

function NavbarModules() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.left} onClick={() => setOpen(!open)}>
        CSS MODULES <FiChevronDown />
        {open && (
          <div className={styles.dropdown}>
            <ul>
              <li><Link to="/tailwind">TailwindCSS</Link></li>
              <li><Link to="/global">CSS Global</Link></li>
              <li><Link to="/styled">Styled Components</Link></li>
            </ul>
          </div>
        )}
      </div>
      <div className={styles.center}>
        <Link to="/modules/produtos">Produtos</Link>
        <Link to="/modules/promocao">Promoção</Link>
      </div>
      <div className={styles.right}>
        <FiMoon />
        <FiShoppingCart />
      </div>
    </nav>
  );
}

export default NavbarModules;
