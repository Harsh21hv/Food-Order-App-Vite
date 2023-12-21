import React, { useState } from "react";
import CategoryList from "./CategoryList";

const Menucategory = ({ data }) => {
  const[showItems, setShowItems] =useState(false);

  const Handleclick=() =>{
     setShowItems(!showItems);
  }
  return (
   
      <div className="w-6/12 my-4 bg-gray-100 mx-auto p-4 shadow-lg cursor-pointer hover:bg-gray-50 ">
        <div className="flex justify-between " onClick={Handleclick}>
          <span className="font-bold text-lg font-sans">
            {data?.title} ({data.itemCards.length})
          </span>
          <span>💧</span>
        </div>

       { showItems && <CategoryList items={data.itemCards} />}
      </div>
   
  );
};

export default Menucategory;
