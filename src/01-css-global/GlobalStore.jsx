import { useState, useEffect, useContext } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import { ThemeContext } from "../context/ThemeContext";
import "./css/GlobalStore.css";
import andJusticeForAll from "../assets/metalica/and-justice-for-all.jpeg";
import blackAlbum from "../assets/metalica/blackalbum.jpg";
import hardwired from "../assets/metalica/hardwiredtoselfdestruct.jpeg";
import killEmAll from "../assets/metalica/killemall.jpg";
import masterOfPuppets from "../assets/metalica/masterofpuppets.jpg";
import rideTheLight from "../assets/metalica/ridethelight.jpg";

const products = [
  { id: 1, title: "Master of Puppets", preco: "45R$", image: masterOfPuppets },
  { id: 2, title: "Ride the Lightning", preco: "50R$", image: rideTheLight },
  { id: 3, title: "...And Justice for All", preco: "80R$", image: andJusticeForAll },
  { id: 4, title: "Kill 'Em All", preco: "60R$", image: killEmAll },
  { id: 5, title: "Black Album", preco: "125R$", image: blackAlbum },
  { id: 6, title: "Hardwired... to Self-Destruct", preco: "100R$", image: hardwired },
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
              preco={product.preco}
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
