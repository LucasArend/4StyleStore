import "../css/ProductCard.css";

function ProductCard({ title, image, preco, inCart, onToggleCart }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-img" />
      <h3 className="product-title">{title}</h3>
      <h3 className="product-title">{preco}</h3>
      <button
        className={inCart ? "remove-btn" : "buy-btn"}
        onClick={onToggleCart}
      >
        {inCart ? "Remover" : "Comprar"}
      </button>
    </div>
  );
}

export default ProductCard;
