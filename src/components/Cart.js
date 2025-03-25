import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice.js";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
const navigate=useNavigate();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleCheckout=()=>{
    navigate("/checkout");
  }

  // Calculate Total Price
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + (Number(item?.card?.info?.price) || 0) / 100,
    0
  );

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6 border border-gray-200">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">🛒 Shopping Cart</h1>

      {/* Main Container for Cart Items & Payment Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Items Section (2/3 width) */}
        <div className="md:col-span-2 bg-gray-50 p-4 rounded-lg shadow">
          {/* Empty Cart Message */}
          {cartItems.length === 0 ? (
            <h2 className="text-center text-gray-500 text-xl">Your cart is empty! Start shopping now. 🛍️</h2>
          ) : (
            <>
              <h2 className="text-xl font-semibold mb-4">🛍️ Your Items</h2>
              <ItemList items={cartItems} />
            </>
          )}
        </div>

        {/* Payment Section (1/3 width) */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">💳 Payment Summary</h2>

          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Subtotal:</span>
            <span className="font-semibold">₹{totalAmount.toFixed(2)}</span>
          </div>

          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Shipping:</span>
            <span className="font-semibold">₹50.00</span>
          </div>

          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Tax (5%):</span>
            <span className="font-semibold">₹{(totalAmount * 0.05).toFixed(2)}</span>
          </div>

          <div className="flex justify-between py-3 text-lg font-bold">
            <span>Total:</span>
            <span>₹{(totalAmount + 50 + totalAmount * 0.05).toFixed(2)}</span>
          </div>

          {/* Clear Cart Button */}
          <button
            onClick={handleClearCart}
            className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg shadow-md transition-all hover:scale-105"
          >
            Clear Cart 🗑️
          </button>

          {/* Checkout Button */}
          <button onClick={handleCheckout} className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg shadow-md transition-all hover:scale-105">
            Proceed to Checkout 🛒
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
