const Shimmer = () => {
    return (
      <div className="body mt-5 px-4">
        {/* Shimmer Effect - Matching Restaurant Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 justify-center">
          {Array(15)
            .fill("")
            .map((_, index) => (
              <div
                key={index}
                className="w-full sm:w-64 h-72 p-4 rounded-lg shadow-lg bg-gray-200 animate-pulse"
              >
                <div className="w-full h-36 rounded-md bg-gray-300 mb-3"></div>
                <div className="w-3/4 h-4 rounded-md bg-gray-400 mb-2"></div>
                <div className="w-1/2 h-3 rounded-md bg-gray-400 mb-2"></div>
                <div className="w-full h-3 rounded-md bg-gray-400"></div>
              </div>
            ))}
        </div>
      </div>
    );
  };
  
  export default Shimmer;
  