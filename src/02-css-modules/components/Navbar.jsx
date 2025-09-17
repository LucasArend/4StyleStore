import { useContext, useState } from "react";
import { FiMoon, FiSun, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "../css/Navbar.module.css";

function NavbarModules({ onCartClick, cartCount, onNavigate }) {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (path) => {
    setMenuOpen(false);
    onNavigate(path);
  };

  return (
    <nav className={`${styles.navbar} ${isDarkMode ? styles.dark : styles.light}`}>

      <div className={styles.left}>
        <span className={styles.brand}>CSS MODULES</span>
      </div>

      <div className={styles.center}>
        <button onClick={() => handleNav("/")} className={styles.link}>Tailwind</button>
        <button onClick={() => handleNav("/global")} className={styles.link}>CSS Global</button>
        <button onClick={() => handleNav("/styled")} className={styles.link}>Styled Components</button>
      </div>


      <div className={styles.actions}>
        <button onClick={toggleTheme} className={styles.icon}>
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </button>
        <div onClick={onCartClick} className={`${styles.icon} ${styles.cart}`}>
          <FiShoppingCart />
          {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className={styles.menuIcon}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>


      {menuOpen && (
        <div className={styles.mobileMenu}>
          <button onClick={() => handleNav("/global")}>CSS Global</button>
          <button onClick={() => handleNav("/modules")}>CSS Modules</button>
          <button onClick={() => handleNav("/styled")}>Styled</button>
        </div>
      )}
    </nav>
  );
}


export default NavbarModules;
