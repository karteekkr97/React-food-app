import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="flex flex-col md:flex-row items-center bg-white p-4 shadow-md rounded-lg border border-gray-200 hover:shadow-lg transition-all mb-4"
        >
          {/* Item Image */}
          <img
            className="w-32 h-32 object-cover rounded-lg md:mr-6"
            src={CDN_URL + item?.card?.info?.imageId}
            alt={item?.card?.info?.name}
          />

          {/* Item Details */}
          <div className="flex-1 text-left">
            <h3 className="text-lg font-semibold text-gray-800">
              {item?.card?.info?.name}
            </h3>
            <p className="text-gray-600 text-sm mt-1">{item?.card?.info?.description}</p>
            <p className="text-gray-900 font-bold mt-2 text-lg">
              ₹
              {item?.card?.info?.price
                ? item?.card?.info?.price / 100
                : item?.card?.info?.defaultPrice / 100}
            </p>
          </div>

          {/* Add to Cart Button */}
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg transition-all hover:scale-105"
            onClick={() => handleAddItems(item)}
          >
            Add +
          </button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
