import styles from "../css/ProductCard.module.css";

function ProductCard({ title, image, inCart, onToggleCart }) {
  return (
    <div
      className={`${styles.card} ${inCart ? styles.inCart : ""}`}
      onClick={onToggleCart}
    >
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.title}>{title}</div>
      <button
        className={`${styles.button} ${inCart ? styles.removeButton : ""}`}
      >
        {inCart ? "Remover do Carrinho" : "Adicionar ao Carrinho"}
      </button>
    </div>
  );
}

export default ProductCard;
