import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice.js";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaTrash, FaCreditCard, FaPaypal, FaMoneyCheck } from "react-icons/fa";
import { motion } from "framer-motion";
import ItemList from "./ItemList";

const Checkout = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [showPopup, setShowPopup] = useState(false);

  const handlePayment = () => {
    setShowPopup(true);
    setTimeout(() => {
      dispatch(clearCart());
      setShowPopup(false);
      navigate("/");
    }, 3000);
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + (Number(item?.card?.info?.price) || 0) / 100,
    0
  );
  const tax = totalAmount * 0.05;
  const shipping = 50;
  const finalTotal = totalAmount + tax + shipping;

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 min-h-screen relative">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6 flex items-center justify-center">
        <FaShoppingCart className="mr-2" /> Checkout
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-white p-4 rounded-lg shadow-md">
          {cartItems.length === 0 ? (
            <h2 className="text-center text-gray-500 text-xl">Your cart is empty! 🛍️</h2>
          ) : (
            <>
              <h2 className="text-xl font-semibold mb-4">🛍️ Your Items</h2>
              <ItemList items={cartItems} />
            </>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">💳 Payment Summary</h2>
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Subtotal:</span>
            <span className="font-semibold">₹{totalAmount.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Shipping:</span>
            <span className="font-semibold">₹{shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-2 border-b">
            <span className="text-gray-600">Tax (5%):</span>
            <span className="font-semibold">₹{tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between py-3 text-lg font-bold">
            <span>Total:</span>
            <span>₹{finalTotal.toFixed(2)}</span>
          </div>

          {/* Payment Methods */}
          <h2 className="text-lg font-semibold mt-4">Select Payment Method:</h2>
          <div className="mt-2 space-y-2">
            {["credit", "debit", "upi", "paypal"].map((method) => (
              <label key={method} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="payment"
                  value={method}
                  checked={paymentMethod === method}
                  onChange={() => setPaymentMethod(method)}
                />
                {method === "credit" ? <FaCreditCard /> : 
                 method === "debit" ? <FaMoneyCheck /> : 
                 method === "paypal" ? <FaPaypal /> : "🏦"} {method.toUpperCase()}
              </label>
            ))}
          </div>

          <button
            onClick={handlePayment}
            className="w-full mt-4 bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg shadow-md flex items-center justify-center transition-all hover:scale-105"
          >
            <FaCreditCard className="mr-2" /> Pay Now
          </button>

          <button
            onClick={() => dispatch(clearCart())}
            className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg shadow-md flex items-center justify-center transition-all hover:scale-105"
          >
            <FaTrash className="mr-2" /> Clear Cart
          </button>
        </div>
      </div>

      {/* Payment Success Popup */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="bg-white p-6 rounded-lg shadow-xl text-center max-w-sm">
            <h2 className="text-2xl font-bold text-green-600">🎉 Congratulations!</h2>
            <p className="text-gray-700 mt-2">Your order has been placed successfully via {paymentMethod.toUpperCase()}!</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              OK
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Checkout;
