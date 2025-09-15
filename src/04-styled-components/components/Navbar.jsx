import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMoon, FiShoppingCart, FiChevronDown } from "react-icons/fi";
import styled from "styled-components";

const Nav = styled.nav`
  background: #9ca3af; /* cinza */
  padding: 12px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

const Left = styled.div`
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  position: relative;
`;

const Center = styled.div`
  a {
    margin: 0 12px;
    text-decoration: none;
    color: white;
    position: relative;

    &:hover::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 2px;
      left: 0;
      bottom: -4px;
      background: white;
    }
  }
`;

const Right = styled.div`
  display: flex;
  gap: 12px;
`;

const Dropdown = styled.div`
  position: absolute;
  background: white;
  color: black;
  margin-top: 8px;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    padding: 8px 12px;
  }
  li:hover {
    background: #d1d5db;
  }
`;

function NavbarStyled() {
  const [open, setOpen] = useState(false);

  return (
    <Nav>
      <Left onClick={() => setOpen(!open)}>
        STYLED COMPONENTS <FiChevronDown />
        {open && (
          <Dropdown>
            <ul>
              <li><Link to="/modules">CSS Modules</Link></li>
              <li><Link to="/global">CSS Global</Link></li>
              <li><Link to="/tailwind">TailwindCSS</Link></li>
            </ul>
          </Dropdown>
        )}
      </Left>
      <Center>
        <Link to="/styled/produtos">Produtos</Link>
        <Link to="/styled/promocao">Promoção</Link>
      </Center>
      <Right>
        <FiMoon />
        <FiShoppingCart />
      </Right>
    </Nav>
  );
}

export default NavbarStyled;
