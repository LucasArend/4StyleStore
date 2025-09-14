import styles from "./../css/ProductCard.module.css";

export default function ProductCard({ name, price }) {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
}
