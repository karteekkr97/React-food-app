import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";
import { clearCart } from "../utils/cartSlice.js";

const Cart = () => {
const cartItems = useSelector((store)=>store.cart.items)
const dispatch =  useDispatch();

const handleClearCart = ()=>{
    dispatch(clearCart())
}
  return (
    <div>
      <h1>Cart</h1>
      <div>
        <button onClick={handleClearCart}>
            ClearCart
        </button>
        {cartItems.length===0 && (<h1>Cart is empty, Add items to the cart!</h1>)}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
