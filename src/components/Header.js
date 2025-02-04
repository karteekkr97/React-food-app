import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";
import { IoMenu, IoClose } from "react-icons/io5"; // Importing Icons

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [username, setUsername] = useState(null);
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
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
    <div className="header z-50 flex items-center justify-between bg-gradient-to-r from-gray-100 to-blue-200 shadow-md sticky top-0 w-full p-4 md:px-8 transition-all">
      {/* Logo */}
      <div className="flex items-center">
        <img className="w-[90px] hover:scale-105 transition-transform duration-300" src={LOGO_URL} alt="logo" />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex px-3">
        <ul className="flex items-center space-x-6 text-gray-800 text-lg font-medium">
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li><Link to="/" className="hover:text-blue-600 transition">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600 transition">About Us</Link></li>
          <li><Link to="/contact" className="hover:text-blue-600 transition">Contact Us</Link></li>
          <li><Link to="/grocery" className="hover:text-blue-600 transition">Grocery</Link></li>
          <li>
            <Link to="/cart" className="hover:text-blue-600 transition">
              Cart - ({cartItems.length} items)
            </Link>
          </li>

          {/* Show Login & Signup buttons if user is not logged in */}
          {!username ? (
            <>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition hover:bg-blue-600"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition hover:bg-green-600"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </>
          ) : (
            // User Dropdown
            <div className="relative">
              <button
                className="bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition hover:bg-blue-800"
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
                    className="block px-4 py-2 w-full text-left hover:bg-gray-200"
                  >
                    Logout
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
          <li>Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
          <li><Link to="/grocery" onClick={() => setMenuOpen(false)}>Grocery</Link></li>
          <li>
            <Link to="/cart" onClick={() => setMenuOpen(false)}>
              Cart - ({cartItems.length} items)
            </Link>
          </li>

          {/* Show Login & Signup buttons if user is not logged in */}
          {!username ? (
            <>
              <button
                className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition hover:bg-blue-600"
                onClick={() => {
                  navigate("/login");
                  setMenuOpen(false);
                }}
              >
                Login
              </button>
              <button
                className="bg-green-500 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition hover:bg-green-600"
                onClick={() => {
                  navigate("/signup");
                  setMenuOpen(false);
                }}
              >
                Sign Up
              </button>
            </>
          ) : (
            // User Dropdown in Mobile Menu
            <div className="relative">
              <button
                className="bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition hover:bg-blue-800"
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
                    className="block px-4 py-2 w-full text-left hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
