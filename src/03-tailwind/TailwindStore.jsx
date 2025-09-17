import { useState } from "react";
import NavbarTailwind from "./components/Navbar";
import ProductCard from "./components/ProductCard";

import divinity2 from "../assets/jogos/divinity2.png";
import eldenRing from "../assets/jogos/EldenRingNightreing.png";
import expedition33 from "../assets/jogos/Expedition33.png";
import helldivers2 from "../assets/jogos/helldiversII.png";
import hollowKnight from "../assets/jogos/hollowknight.png";
import noita from "../assets/jogos/Noita.png";

const products = [
  { id: 1, title: "Divinity: Original Sin 2", preco: "R$ 90,00", image: divinity2 },
  { id: 2, title: "Elden Ring", preco: "R$ 250,00", image: eldenRing },
  { id: 3, title: "Expedition 33", preco: "R$ 200,00", image: expedition33 },
  { id: 4, title: "Helldivers II", preco: "R$ 199,00", image: helldivers2 },
  { id: 5, title: "Hollow Knight", preco: "R$ 46,00", image: hollowKnight },
  { id: 6, title: "Noita", preco: "R$ 38,00", image: noita },
];

function TailwindStore({ onNavigate }) {
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
      <NavbarTailwind
        onCartClick={handleCartClick}
        cartCount={cart.length}
        onNavigate={onNavigate}
      />
      <main className="p-6 bg-zinc-50 dark:bg-gray-900 min-h-screen">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-gray-100">
            {showCartOnly ? "Seu Carrinho" : "Produtos em Destaque"}
          </h2>
        </div>
        {showCartOnly && cart.length === 0 && (
          <p className="text-red-600 dark:text-red-400">Nenhum item no carrinho.</p>
        )}

        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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

export default TailwindStore;
