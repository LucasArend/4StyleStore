import { useState, useContext } from "react";
import { FiMoon, FiSun, FiShoppingCart, FiMenu, FiX } from "react-icons/fi";
import { ThemeContext } from "../../context/ThemeContext";
import styled from "styled-components";

// Cores café
const NAV_DARK = "#3B261C";       // Marrom escuro
const NAV_LIGHT = "#A9745B";      // Latte

const Nav = styled.nav`
  background-color: ${({ isDarkMode }) => (isDarkMode ? NAV_DARK : NAV_LIGHT)};
  color: white;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  height: 64px;
  position: relative;
`;

const Title = styled.div`
  flex: 1;
  font-weight: bold;
  font-size: 1.2rem;
`;

const Links = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LinkButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: white;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Actions = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 120px;
  gap: 16px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.25rem;
  cursor: pointer;
`;

const MenuIcon = styled(IconButton)`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#4A3024" : "#B5836F")};
  padding: 16px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 10;
`;

function NavbarStyled({ onCartClick, cartCount, onNavigate, isDarkMode }) {
  const { toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = (path) => {
    setMenuOpen(false);
    onNavigate(path);
  };

  return (
    <Nav isDarkMode={isDarkMode}>
      <Title>CAFÉ STORE</Title>

      <Links>
        <LinkButton onClick={() => handleNav("/")}>Tailwind</LinkButton>
        <LinkButton onClick={() => handleNav("/global")}>CSS Global</LinkButton>
        <LinkButton onClick={() => handleNav("/modules")}>CSS Modules</LinkButton>
      </Links>

      <Actions>
        <IconButton onClick={toggleTheme}>
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </IconButton>

        <IconButton onClick={onCartClick} style={{ position: "relative" }}>
          <FiShoppingCart />
          {cartCount > 0 && (
            <span
              style={{
                position: "absolute",
                top: "-8px",
                right: "-8px",
                backgroundColor: "#d97706", // amarelo café
                color: "white",
                fontSize: "0.7rem",
                width: "18px",
                height: "18px",
                borderRadius: "9999px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {cartCount}
            </span>
          )}
        </IconButton>

        <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </MenuIcon>
      </Actions>

      {menuOpen && (
        <MobileMenu isDarkMode={isDarkMode}>
          <button onClick={() => handleNav("/")}>Tailwind</button>
          <button onClick={() => handleNav("/global")}>CSS Global</button>
          <button onClick={() => handleNav("/modules")}>CSS Modules</button>
        </MobileMenu>
      )}
    </Nav>
  );
}

export default NavbarStyled;
