import { useState, useContext } from "react";
import { FiMoon, FiSun, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { ThemeContext } from "../../context/ThemeContext";
import "../css/Navbar.css";

function Navbar({ onCartClick, cartCount, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  const handleNav = (path) => {
    setMenuOpen(false);
    onNavigate(path);
  };

  return (
    <nav className="navbar-global">
      <div className="left">
        <a className="brand-name">CSS GLOBAL</a>
      </div>

      <div className="center desktop-menu">
        <a onClick={() => handleNav("/")}>Tailwind</a>
        <a onClick={() => handleNav("/modules")}>CSS Modules</a>
        <a onClick={() => handleNav("/styled")}>Styled Components</a>
      </div>

      <div className="right">
        <button onClick={toggleTheme} className="icon-button">
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </button>
        <div onClick={onCartClick} className="icon-button cart-icon">
          <FiShoppingCart />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
        <button
          className="icon-button menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {menuOpen && (
        <div className="navbar-mobile-menu">
          <button onClick={() => handleNav("/")}>Tailwind</button>
          <button onClick={() => handleNav("/modules")}>CSS Modules</button>
          <button onClick={() => handleNav("/styled")}>Styled Components</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
