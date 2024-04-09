import React from "react";
import { CDN_URL } from "../utils/constants";

const Restaurantcard = ({ resdata }) => {
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating } =
    resdata?.info; //Option chaining

  return (
    <div
      className="w-[230px] m-[19px] p-2 shadow-lg"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <img
        alt="res-logo "
        className=" w-[210px] h-[195px] px-2 py-2 rounded-xl"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{resdata.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export const withPromotedLabel = (Restaurantcard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg- bg-orange-400  p-1 rounded-l text-orange-100 shadow-lg">
          Recommended
        </label>
        <Restaurantcard {...props} />
      </div>
    );
  };
};

export default Restaurantcard;
