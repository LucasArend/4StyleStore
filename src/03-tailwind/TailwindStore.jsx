import { useState } from "react";
import NavBar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

const products = [
  { id: 1, title: "Produto 1", image: "https://via.placeholder.com/300x200" },
  { id: 2, title: "Produto 2", image: "https://via.placeholder.com/300x200" },
  { id: 3, title: "Produto 3", image: "https://via.placeholder.com/300x200" },
  { id: 4, title: "Produto 4", image: "https://via.placeholder.com/300x200" },
  { id: 5, title: "Produto 5", image: "https://via.placeholder.com/300x200" },
  { id: 6, title: "Produto 6", image: "https://via.placeholder.com/300x200" },
];

function TailwindStore() {
  const [cart, setCart] = useState([]);
  const [showCartOnly, setShowCartOnly] = useState(false);

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
    ? products.filter(p => cart.find(item => item.id === p.id))
    : products;

  return (
    <>
      <NavBar onCartClick={handleCartClick} cartCount={cart.length} />
      <main className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {showCartOnly ? "Seu Carrinho" : "Produtos em Destaque"}
          </h2>
        </div>
        {showCartOnly && cart.length === 0 && (
          <p className="text-red-500">Nenhum item no carrinho.</p>
        )}

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 dark:text-gray-100">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
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

export default TailwindStore;