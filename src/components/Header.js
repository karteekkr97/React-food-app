import logo from "../assets/logo.jpg";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { IoMenu,IoClose,IoCart, IoPersonCircle, IoLogIn, IoLogOut, IoInformationCircle, IoCall } from "react-icons/io5";
import { MdShoppingBag } from "react-icons/md";
import { motion } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUsername(storedUser);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUsername(null);
    setDropdownOpen(false);
    navigate("/login");
  };

  return (
    <div className="header z-50 flex items-center justify-between bg-gray-100 shadow-md px-4 py-3 sm:py-0 sticky top-0 w-full md:px-8">
      {/* Logo */}
      <motion.div
        className="flex items-center mix-blend-darken cursor-pointer"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 0.6, ease: "easeInOut" }}
        onClick={() => navigate("/")}
      >
         <Link to="/"><motion.img className="sm:w-[120px] w-[100px] h-auto" src={logo} alt="logo" /></Link>
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex px-3">
        <ul className="flex items-center space-x-6 text-gray-800 text-lg font-semibold">
          <li>
            <Link to="/" className="hover:text-blue-600 flex items-center gap-1">
              <IoPersonCircle className="text-xl" /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600 flex items-center gap-1">
              <IoInformationCircle className="text-xl" /> About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600 flex items-center gap-1">
              <IoCall className="text-xl" /> Contact
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="hover:text-blue-600 flex items-center gap-1">
              <MdShoppingBag className="text-xl" /> Grocery
            </Link>
          </li>
          <li>
            <Link to="/cart" className="hover:text-blue-600 flex items-center gap-1">
              <IoCart className="text-xl" /> Cart ({cartItems.length})
            </Link>
          </li>

          {/* User Section */}
          {!username ? (
            <>
              <button
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition hover:from-indigo-600 hover:to-purple-500"
                onClick={() => navigate("/login")}
              >
                <IoLogIn className="text-xl" /> Login
              </button>
              <button
                className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-600 text-white px-5 py-2 rounded-lg shadow-md hover:shadow-lg transition hover:from-teal-600 hover:to-green-500"
                onClick={() => navigate("/signup")}
              >
                <IoPersonCircle className="text-xl" /> Sign Up
              </button>
            </>
          ) : (
            <div className="relative">
              <button
                className="flex items-center gap-1 bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition hover:bg-blue-800"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {username}
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white text-black rounded shadow-md w-32">
                  <Link to="/profile" className="block px-4 py-2 hover:bg-gray-200">
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block px-4 py-2 w-full text-left hover:bg-gray-200 flex items-center gap-2"
                  >
                    <IoLogOut /> Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </ul>
      </div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-gray-700 text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <IoClose /> : <IoMenu />}
      </button>

      {/* Sidebar Menu for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg border-l border-gray-300 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <button className="absolute top-4 right-4 text-3xl text-gray-700" onClick={() => setMenuOpen(false)}>
          <IoClose />
        </button>

        <ul className="flex flex-col items-center gap-5 mt-16 text-lg text-gray-800">
          <li>Online Status: {onlineStatus ? "🟢 Online" : "🔴 Offline"}</li>
          <li>
            <Link to="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
              <IoPersonCircle /> Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
              <IoInformationCircle /> About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
              <IoCall /> Contact
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
              <MdShoppingBag /> Grocery
            </Link>
          </li>
          <li>
            <Link to="/cart" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
              <IoCart /> Cart ({cartItems.length})
            </Link>
          </li>

          {!username ? (
            <>
              <button
                className="flex items-center gap-2 bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition hover:bg-blue-600"
                onClick={() => {
                  navigate("/login");
                  setMenuOpen(false);
                }}
              >
                <IoLogIn /> Login
              </button>
              <button
                className="flex items-center gap-2 bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition hover:bg-green-600"
                onClick={() => {
                  navigate("/signup");
                  setMenuOpen(false);
                }}
              >
                <IoPersonCircle /> Sign Up
              </button>
            </>
          ) : (
            <button onClick={handleLogout} className="flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600">
              <IoLogOut /> Logout
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
