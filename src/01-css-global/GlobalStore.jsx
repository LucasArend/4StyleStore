import { useState, useEffect, useContext } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { ThemeContext } from "../context/ThemeContext";
import "./css/GlobalStore.css";

const products = [
  { id: 1, title: "Produto 1", image: "https://via.placeholder.com/300x200" },
  { id: 2, title: "Produto 2", image: "https://via.placeholder.com/300x200" },
  { id: 3, title: "Produto 3", image: "https://via.placeholder.com/300x200" },
  { id: 4, title: "Produto 4", image: "https://via.placeholder.com/300x200" },
  { id: 5, title: "Produto 5", image: "https://via.placeholder.com/300x200" },
  { id: 6, title: "Produto 6", image: "https://via.placeholder.com/300x200" },
];

function GlobalStore({ onNavigate }) {
  const { isDarkMode } = useContext(ThemeContext);
  const [cart, setCart] = useState([]);
  const [showCartOnly, setShowCartOnly] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

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
    ? products.filter((p) => cart.some((item) => item.id === p.id))
    : products;

  return (
    <>
      <Navbar
        onCartClick={handleCartClick}
        cartCount={cart.length}
        onNavigate={onNavigate}
      />

      <main className="global-store-main">
        <header className="global-store-header">
          <h2>
            {showCartOnly ? "Seu Carrinho" : "Produtos em Destaque"}
          </h2>
          {showCartOnly && cart.length === 0 && (
            <p className="empty-cart-msg">
              Nenhum item no carrinho.
            </p>
          )}
        </header>

        <div className="product-grid">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              image={product.image}
              inCart={cart.some((item) => item.id === product.id)}
              onToggleCart={() => toggleCartProduct(product)}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default GlobalStore;
