import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiShoppingCart, FiChevronDown } from "react-icons/fi";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #9333ea;
  color: white;
  position: relative;
`;

const Left = styled.div`
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const Center = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const Right = styled.div`
  display: flex;
  gap: 1rem;
  font-size: 1.2rem;
  cursor: pointer;
`;

const Dropdown = styled.div`
  position: absolute;
  top: 3.5rem;
  left: 2rem;
  background: white;
  color: black;
  border-radius: 0.25rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.15);
  width: 160px;
  z-index: 10;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding: 0.5rem 1rem;
  }

  li:hover {
    background-color: #f1f1f1;
  }
`;

const LinkItem = styled.a`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      {/* Dropdown */}
      <Left onClick={() => setOpen(!open)}>
        STYLED COMPONENTS <FiChevronDown />
        {open && (
          <Dropdown>
            <ul>
              <li><Link to="/global">CSS Global</Link></li>
              <li><Link to="/modules">CSS Modules</Link></li>
              <li><Link to="/tailwind">TailwindCSS</Link></li>
            </ul>
          </Dropdown>
        )}
      </Left>

      {/* Links centrais */}
      <Center>
        <LinkItem href="#">Produtos</LinkItem>
        <LinkItem href="#">Promoção</LinkItem>
      </Center>

      {/* Ícones */}
      <Right>
        <FiMoon />
        <FiShoppingCart />
      </Right>
    </Nav>
  );
}

export default Navbar;
