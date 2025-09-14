import { NavLink } from "react-router-dom";
import { FiMoon, FiShoppingCart, FiChevronDown } from "react-icons/fi";
import { useState } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  background: #9ca3af;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
`;
const Left = styled.div`
  cursor: pointer;
  position: relative;
`;
const Dropdown = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  color: #6b7280;
  border-radius: 6px;
  padding: 8px;
`;

export default function NavbarStyled() {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <Left onClick={() => setOpen(!open)}>
        STYLED COMPONENTS <FiChevronDown />
        {open && (
          <Dropdown>
            <ul>
              <li><NavLink to="/global/produtos">CSS Global</NavLink></li>
              <li><NavLink to="/modules/produtos">CSS Modules</NavLink></li>
              <li><NavLink to="/tailwind/produtos">TailwindCSS</NavLink></li>
            </ul>
          </Dropdown>
        )}
      </Left>

      <div>
        <NavLink to="/styled/produtos">Produtos</NavLink>
        {" | "}
        <NavLink to="/styled/promocao">Promoção</NavLink>
      </div>

      <div>
        <FiMoon />
        <FiShoppingCart />
      </div>
    </Nav>
  );
}
