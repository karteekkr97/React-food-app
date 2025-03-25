import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { motion } from "framer-motion";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true); // Added a loading state
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallPopup, setShowInstallPopup] = useState(
    localStorage.getItem("installPopupDismissed") !== "true" // Check if popup was dismissed
  );

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      if (localStorage.getItem("installPopupDismissed") !== "true") {
        setDeferredPrompt(event);
        setShowInstallPopup(true);
      }
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setShowInstallPopup(false);
    }
  }, []);
  useEffect(() => {
    fetchData();
  }, []);
  const handleInstall = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === "accepted") {
          console.log("User accepted the install prompt");
        }
        setDeferredPrompt(null);
        setShowInstallPopup(false);
      });
    }
  };

  const handleCancel = () => {
    setShowInstallPopup(false);
    localStorage.setItem("installPopupDismissed", "true"); // Save user's decision
  };
  const fetchData = async () => {
    try {
      setLoading(true); // Start loading
      const data = await fetch(
        "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();

      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      const resData = await checkJsonData(json);
      setListOfRestaurants(resData);
      setFilteredRestaurants(resData);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return (
      <h1 className="text-center text-red-500 text-lg mt-5">
        ⚠️ You are offline! Please check your internet connection.
      </h1>
    );
  }

  // Show Shimmer when loading
  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="body mt-5 px-4">
      {/* Filter Section */}
      <div className="filter flex flex-col sm:flex-row items-center gap-3 justify-center">
        <input
          type="text"
          className="border-2 border-gray-300 px-4 py-2 rounded-md w-full sm:w-80"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="search-btn bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
          onClick={() => {
            const filteredList = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          🔍 Search
        </button>

        <button
          className="filter-btn bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition"
          onClick={() => {
            const topRated = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredRestaurants(topRated);
          }}
        >
          ⭐ Top Rated
        </button>
      </div>

      {/* Restaurant Cards - Using Flexbox */}
      <div className="res-container sm:flex flex-wrap justify-center gap-6 mb-6 mt-6">
        {filteredRestaurants.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurants/${restaurant.info.id}`}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
      {/* Install App Popup */}
      {showInstallPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white p-6 rounded-lg shadow-lg max-w-sm sm:max-w-md w-full mx-4 text-center"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              Install This App 🚀
            </h2>
            <p className="text-gray-600 mb-4">
              Get a better experience by installing the app on your device!
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleInstall}
                className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Install
              </button>
              <button
                onClick={handleCancel}
                className="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Body;
