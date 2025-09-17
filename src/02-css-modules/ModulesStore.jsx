import { useState, useEffect, useContext } from "react";
import Navbar from "./components/Navbar";
import styles from "./css/ModulesStore.module.css";
import ProductCard from "./components/ProductCard";
import { ThemeContext } from "../context/ThemeContext";

import aTorreNegra from "../assets/livros/a-torre-negra-volumeVII.jpg";
import asCronicasDeNarnia from "../assets/livros/AsCronicasDeNarnia.jpg";
import eoVentoLevou from "../assets/livros/EoVentoLevou.jpg";
import guerraDosTronos from "../assets/livros/GuerraDosTronosLivro1.jpg";
import harryPotter1 from "../assets/livros/HarryPottereApedraFilosofal.jpg";
import olaDoRadeRaios from "../assets/livros/oladraoderaios-eosolimpianos.jpg";

const products = [
  { id: 1, title: "A Torre Negra - Volume VII", preco: "R$ 59,90", image: aTorreNegra },
  { id: 2, title: "As Crônicas de Nárnia", preco: "R$ 89,90", image: asCronicasDeNarnia },
  { id: 3, title: "E o Vento Levou", preco: "R$ 69,90", image: eoVentoLevou },
  { id: 4, title: "Guerra dos Tronos - Livro 1", preco: "R$ 79,90", image: guerraDosTronos },
  { id: 5, title: "Harry Potter e a Pedra Filosofal", preco: "R$ 49,90", image: harryPotter1 },
  { id: 6, title: "Percy Jackson e o Ladrão de Raios", preco: "R$ 54,90", image: olaDoRadeRaios },
];

function ModulesStore({ onNavigate }) {
  const { isDarkMode } = useContext(ThemeContext);
  const [cart, setCart] = useState([]);
  const [showCartOnly, setShowCartOnly] = useState(false);

  // Ativa classe `dark` no body quando necessário
  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleCartProduct = (product) => {
    const isInCart = cart.some(item => item.id === product.id);
    if (isInCart) {
      setCart(cart.filter(item => item.id !== product.id));
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

      <main className={styles.main}>
        <div className={styles.header}>
          <h2>{showCartOnly ? "Seu Carrinho" : "Produtos em Destaque"}</h2>
          {showCartOnly && cart.length === 0 && (
            <p className={styles.empty}>Nenhum item no carrinho.</p>
          )}
        </div>

        <div className={styles.grid}>
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              preco={product.preco}
              image={product.image}
              inCart={cart.some(item => item.id === product.id)}
              onToggleCart={() => toggleCartProduct(product)}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default ModulesStore;
