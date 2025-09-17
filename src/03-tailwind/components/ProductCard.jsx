function ProductCard({ image, title, preco, inCart, onToggleCart }) {
  return (
    <div className="bg-white dark:bg-gray-800 border border-zinc-200 dark:border-gray-700 rounded shadow p-4 flex flex-col justify-between">
      <div>
        <img src={image} alt={title} className="w-full h-[380px] object-contain rounded" />
        <h3 className="mt-4 font-semibold text-lg text-zinc-900 dark:text-gray-100">{title}</h3>
        <h3 className="mt-2 font-semibold text-lg text-zinc-600 dark:text-gray-100">{preco}</h3>
      </div>
      <button
        onClick={onToggleCart}
        className={`mt-6 py-2 rounded transition font-medium ${
          inCart
            ? "bg-[#D2691E] hover:bg-[#B25919] text-white"
            : "bg-indigo-600 hover:bg-indigo-700 text-white"
        }`}
      >
        {inCart ? "Remover" : "Comprar"}
      </button>
    </div>
  );
}


export default ProductCard;
