import React from "react";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/custom hooks/useResMenu";
import HomepageSkeleton from "../lib/Skeleton/HomepageSkeleton";
import Menucategory from "./Menucategory";

const Restaurantmenu = () => {
  const { id } = useParams();

  const resInfo = useResMenu(id);

  if (resInfo === null) return <HomepageSkeleton />;

  console.log(resInfo);

  const { name, costForTwo, cuisines } = resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);
  return (
    <div className="text-center ">
      <h1 className="font-serif my-6 ">{name} </h1>
      <p className="text-xl font-bold font-serif">
        {cuisines.join(", ")} - {costForTwo / 100} for two
      </p>
       
       {categories.map((category)=>(
        <Menucategory data={category?.card?.card}/>
       ))}
    </div>
  );
};

export default Restaurantmenu;
