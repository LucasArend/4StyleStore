import "./../css/productCard.css";

export default function ProductCard({ name, price }) {
  return (
    <div className="card-global">
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
}
