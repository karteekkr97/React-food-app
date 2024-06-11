import { CDN_URL } from "../utils/constants";

// ** ResaurantCard component **
const RestaurantCard = (props) => {
  // object destructuring
  const { resData } = props;

  // object destructuring + optional chaining
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;

  return (
    <div className="res-card w-[250px] border h-full rounded-xl hover:bg-gray-300 bg-gray-100">
      <img
        className="res-logo rounded-2xl p-3 w-[100%] h-56"
        src={CDN_URL + resData.info.cloudinaryImageId}
        alt="res-logo"
      />

      <h3 className="px-3 font-bold">{name}</h3>
      <h4 className="px-3 font-medium">{cuisines.join(", ")}</h4>
      <h4 className="px-3">{costForTwo}</h4>
      <h4 className="px-3">{avgRating} stars</h4>
      <h4 className="px-3 pb-2">{sla?.slaString} minutes</h4>
    </div>
  );
};

//higher order functions

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;
