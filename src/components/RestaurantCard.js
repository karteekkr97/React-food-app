import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="w-full sm:w-60 md:w-72 lg:w-80 sm:mt-0 mt-10 bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition p-4 transform hover:scale-105">
      <img
        className="w-full h-44 object-cover rounded-lg"
        src={CDN_URL + cloudinaryImageId}
        alt={name}
      />

      <div className="mt-3">
        <h3 className="font-semibold text-lg truncate">{name}</h3>
        <p className="text-sm text-gray-500 truncate">{cuisines.join(", ")}</p>
        <p className="text-sm text-gray-600">{costForTwo}</p>
        
        <div className="flex justify-between items-center mt-2">
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-md text-xs font-semibold">
            ⭐ {avgRating}
          </span>
          <span className="text-gray-600 text-xs">{sla?.slaString} min</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
