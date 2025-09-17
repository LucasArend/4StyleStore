import { useState, useContext } from "react";
import styled from "styled-components";
import Navbar from "./components/Navbar"; 
import ProductCard from "./components/ProductCard";
import { ThemeContext } from "../context/ThemeContext"; 

import cafeGelado from "../assets/cafe/cafe-gelado.jpg";
import cafeGlobinho from "../assets/cafe/cafe-globinho.jpg";
import cafeTurco from "../assets/cafe/cafe-turco.jpg";
import chemex from "../assets/cafe/chemex.jpg";
import cleverDripper from "../assets/cafe/clever-dripper.jpg";
import harioV60 from "../assets/cafe/hario-v60.jpg";

const products = [
  { id: 1, title: "Café Gelado", preco: "R$ 15,00", image: cafeGelado },
  { id: 2, title: "Café Globinho", preco: "R$ 12,00", image: cafeGlobinho },
  { id: 3, title: "Café Turco", preco: "R$ 18,00", image: cafeTurco },
  { id: 4, title: "Chemex (coador)", preco: "R$ 250,00", image: chemex },
  { id: 5, title: "Clever Dripper", preco: "R$ 180,00", image: cleverDripper },
  { id: 6, title: "Hario V60", preco: "R$ 120,00", image: harioV60 },
];

const Main = styled.main`
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#111827" : "#f9fafb")};
  color: ${({ isDarkMode }) => (isDarkMode ? "#d1d5db" : "#111827")};
  min-height: 100vh;
  padding: 2rem;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const Header = styled.header`
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
`;

const EmptyMessage = styled.p`
  margin-top: 0.5rem;
  font-style: italic;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  align-items: start;
  width: 100%;
  box-sizing: border-box;
`;

function StyledStore({ onNavigate }) {
  const { isDarkMode } = useContext(ThemeContext);

  const [cart, setCart] = useState([]);
  const [showCartOnly, setShowCartOnly] = useState(false);

  const toggleCartProduct = (product) => {
    const isInCart = cart.some((item) => item.id === product.id);
    if (isInCart) {
      setCart(cart.filter((item) => item.id !== product.id));
    } else {
      setCart([...cart, product]);
    }
  };

  const handleCartClick = () => {
    setShowCartOnly(!showCartOnly);
  };

  const displayedProducts = showCartOnly
    ? products.filter((p) => cart.find((item) => item.id === p.id))
    : products;

  return (
    <>
      <Navbar
        onCartClick={handleCartClick}
        cartCount={cart.length}
        onNavigate={onNavigate}
        isDarkMode={isDarkMode}
      />

      <Main isDarkMode={isDarkMode}>
        <Header>
          <Title>{showCartOnly ? "Seu Carrinho" : "Produtos em Destaque"}</Title>
          {showCartOnly && cart.length === 0 && (
            <EmptyMessage>Nenhum item no carrinho.</EmptyMessage>
          )}
        </Header>

        <ProductsGrid>
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              preco={product.preco}
              image={product.image}
              inCart={cart.some((item) => item.id === product.id)}
              onToggleCart={() => toggleCartProduct(product)}
              isDarkMode={isDarkMode}
            />
          ))}
        </ProductsGrid>
      </Main>
    </>
  );
}

export default StyledStore;
