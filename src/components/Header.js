import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onlineStatus=useOnlineStatus();

  const cartItems=useSelector((store)=>store.cart.items);

  return (
    <div className="header flex shadow-lg items-center justify-between bg-slate-200 sticky right-0 left-0 top-0">
      <div className="logo-container">
        <img className="w-[100px]" src={LOGO_URL} alt="logo" />
      </div>
      <div className="px-3">
        <ul className="flex">
          <li className="pr-2">
            Online Status:{onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="pr-2">
            <Link to="/">Home</Link>
          </li>
          <li className="pr-2">
            <Link to="/about">About Us</Link>
          </li>
          <li className="pr-2">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="pr-2">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="pr-2"><Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
          <button
            className="login"
            onClick={() => {
              btnName === "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
