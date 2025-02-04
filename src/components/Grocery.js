const Grocery = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 md:p-12 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-green-700 mb-4">
        Welcome to Our Grocery Store 🛒
      </h1>
      <p className="text-center text-lg text-gray-700 mb-6">
        Fresh produce, daily essentials, and your favorite grocery items delivered to your doorstep.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* What We Offer Section */}
        <div>
          <h2 className="text-2xl font-semibold text-green-600">What We Offer</h2>
          <ul className="list-none mt-4 space-y-2">
            <li className="flex items-center gap-2">
              🥦 <span>Fresh Fruits & Vegetables</span>
            </li>
            <li className="flex items-center gap-2">
              🥛 <span>Dairy & Beverages</span>
            </li>
            <li className="flex items-center gap-2">
              🥖 <span>Bakery & Snacks</span>
            </li>
            <li className="flex items-center gap-2">
              🍚 <span>Rice, Grains & Pulses</span>
            </li>
            <li className="flex items-center gap-2">
              🛒 <span>Household Essentials</span>
            </li>
          </ul>
        </div>

        {/* Why Choose Us Section */}
        <div>
          <h2 className="text-2xl font-semibold text-green-600">Why Choose Us?</h2>
          <ul className="list-none mt-4 space-y-2">
            <li className="flex items-center gap-2">
              🚚 <span>Fast & Reliable Delivery</span>
            </li>
            <li className="flex items-center gap-2">
              💰 <span>Affordable Prices & Great Discounts</span>
            </li>
            <li className="flex items-center gap-2">
              🌱 <span>Fresh & Organic Products</span>
            </li>
            <li className="flex items-center gap-2">
              🛍️ <span>Easy Online Ordering</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="text-center mt-8">
        <h2 className="text-2xl font-semibold text-green-600">Start Shopping Now!</h2>
        <p className="mt-2 text-gray-700">
          Explore our wide range of grocery items and enjoy hassle-free shopping.
        </p>

        <button className="mt-4 px-6 py-3 bg-green-500 text-white font-bold rounded-lg shadow-md hover:bg-green-600 transition-all">
          🛍️ Shop Now
        </button>
      </div>
    </div>
  );
};

export default Grocery;
