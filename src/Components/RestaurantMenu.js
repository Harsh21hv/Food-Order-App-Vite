import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/custom hooks/useResMenu";
import HomepageSkeleton from "../lib/Skeleton/HomepageSkeleton";
import Menucategory from "./Menucategory";

const Restaurantmenu = () => {
  const { id } = useParams();

  const resInfo = useResMenu(id);
  const [showIndex, setShowIndex] = useState(null);

  if (resInfo === null) return <HomepageSkeleton />;

  console.log(resInfo);

  const { name, costForTwo, cuisines } = resInfo?.cards[0]?.card?.card?.info;

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

      {categories.map((category, index) => (
        //Controlled components
        <Menucategory
          key={category.card.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default Restaurantmenu;
