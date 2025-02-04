import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice.js";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6 border border-gray-200">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">🛒 Shopping Cart</h1>

      {/* Clear Cart Button */}
      <div className="flex justify-center mb-6">
        <button
          onClick={handleClearCart}
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg shadow-md transition-all hover:scale-105"
        >
          Clear Cart 🗑️
        </button>
      </div>

      {/* Empty Cart Message */}
      {cartItems.length === 0 ? (
        <h2 className="text-center text-gray-500 text-xl">
          Your cart is empty! Start shopping now. 🛍️
        </h2>
      ) : (
        <ItemList items={cartItems} />
      )}
    </div>
  );
};

export default Cart;
