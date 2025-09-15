function ProductCard({ image, title, inCart, onToggleCart }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-4 flex flex-col justify-between">
      <div>
        <img src={image} alt={title} className="w-full h-40 object-cover rounded" />
        <h3 className="mt-4 font-semibold text-lg text-gray-800 dark:text-gray-100">{title}</h3>
      </div>
      <button
        onClick={onToggleCart}
        className={`mt-6 py-2 rounded transition font-medium ${
          inCart
            ? "bg-red-500 hover:bg-red-600 text-white"
            : "bg-indigo-600 hover:bg-indigo-700 text-white"
        }`}
      >
        {inCart ? "Remover" : "Comprar"}
      </button>
    </div>
  );
}

export default ProductCard;
