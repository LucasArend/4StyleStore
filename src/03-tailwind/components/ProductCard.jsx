export default function ProductCard({ name, price }) {
  return (
    <div className="p-4 bg-indigo-100 rounded shadow hover:bg-indigo-200 transition">
      <h3 className="font-semibold">{name}</h3>
      <p>{price}</p>
    </div>
  );
}
