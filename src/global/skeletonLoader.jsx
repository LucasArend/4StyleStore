// src/components/SkeletonLoader.jsx
function SkeletonLoader() {
  return (
    <div className="animate-pulse min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Navbar fake */}
      <div className="bg-indigo-600 dark:bg-gray-800 h-16 flex items-center px-6 space-x-6">
        <div className="h-4 w-24 bg-white/30 rounded" />
        <div className="h-4 w-24 bg-white/30 rounded" />
        <div className="h-4 w-24 bg-white/30 rounded" />
        <div className="ml-auto h-6 w-6 bg-white/30 rounded-full" />
        <div className="h-6 w-6 bg-white/30 rounded-full" />
      </div>

      {/* Conteúdo de cards */}
      <div className="p-8 space-y-8">
        <div className="h-6 w-40 bg-gray-300 dark:bg-gray-700 rounded" />

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[...Array(6)].map((_, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 rounded shadow p-4 space-y-4"
            >
              <div className="h-32 bg-gray-300 dark:bg-gray-700 rounded" />
              <div className="h-4 w-3/4 bg-gray-300 dark:bg-gray-700 rounded" />
              <div className="h-8 w-1/2 bg-gray-300 dark:bg-gray-700 rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkeletonLoader;
