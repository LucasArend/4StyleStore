import "../css/ProductCard.css";

function ProductCard({ title, image, inCart, onToggleCart }) {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-img" />
      <h3 className="product-title">{title}</h3>
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
