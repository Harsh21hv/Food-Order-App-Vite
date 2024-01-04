import React from "react";
import Restaurantcard, { withPromotedLabel } from "./Restaurantcard.js";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { resList_URL } from "../utils/constants.js";
import HomepageSkeleton from "../lib/Skeleton/HomepageSkeleton.js";
import useOnlineStatus from "../utils/custom hooks/useOnlineStatus.js";
import userContext from "../utils/userContext.js";
const Body = () => {
  const [listOfRes, setlistOfRes] = useState(null);
  const [filteredRes, setFilteredres] = useState([]);
  const [SearchText, setSearchText] = useState("");
  const PromotedRestraunt = withPromotedLabel(Restaurantcard);

  const data = useContext(userContext);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(resList_URL);
    const json = await data.json();

    console.log("JSON Body.js: ", json);

    let index;
    let maxList = [];
    let tempResList = [];
    for (let i = 1; i <= 4; i++) {
      tempResList =
        json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      if (tempResList) {
        if (maxList.length < tempResList.length) {
          maxList = tempResList;
          index = i;
        }
      }
    }

    console.log("Index at which Restaurant list is present: ", index);

    if (maxList) {
      setFilteredres(maxList);
      setlistOfRes(maxList);
    }

    // if (
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // ) {
    //   setFilteredres(
    //     json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
    //       ?.restaurants
    //   );
    // }
    // setlistOfRes(
    //   json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );
  };
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1> looks like you are offline.. </h1>;

  return listOfRes === null ? (
    <HomepageSkeleton />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn shadow-lg"
          onClick={() => {
            setFilteredres(listOfRes.filter((res) => res.info.avgRating > 4.3));
          }}
        >
          Top rated Restaurant
        </button>
        <div className="flex items-center m-4 p-4">
          <label className="font-serif font-bold">UserName:-</label>
          <input
            className="border border-black p-2 rounded-md"
            value={data.userName}
            onChange={(e) => {
              data.setUserName(e.target.value);
            }}
          ></input>
        </div>
        <div className="px-[15px] ">
          <input
            type="text"
            className="search-box m-4 p-4"
            placeholder="search your Restaurants"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="searchBtn"
            onClick={() => {
              setFilteredres(
                listOfRes.filter((filRes) =>
                  filRes.info.name
                    .toLowerCase()
                    .includes(SearchText.toLowerCase())
                )
              );
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredRes.map((Restaurant) => (
          <Link
            className="resCard"
            to={"/Restaurant/" + Restaurant.info.id}
            key={Restaurant.info.id}
          >
            {Restaurant.info.avgRating > 4.2 ? (
              <PromotedRestraunt resdata={Restaurant} />
            ) : (
              <Restaurantcard resdata={Restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
