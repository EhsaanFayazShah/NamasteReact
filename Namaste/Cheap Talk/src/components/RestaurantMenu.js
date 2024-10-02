import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./shimmer";
import useRestaurant from "../utils/useRestaurant";
const RestaurantMenu = () => {
  // const [menu, setMenu] = useState([]);

  const { id } = useParams(); // useParams gets the thing that is passed to it inside the outlet.

  // useEffect(() => {
  //   console.log("Menu items:", menu);
  // }, [menu]);
  const [restaurant, menu] = useRestaurant(id); ///custom made hook.

  return (
    <>
      <div>
        <h1>{restaurant?.name}</h1>
        <img
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <h1>{restaurant?.areaName}</h1>
        <h1>{restaurant?.city}</h1>
        <h3>{restaurant?.avgRating} Stars</h3>
        <h3>{restaurant?.costForTwoMessage}</h3>
      </div>
      <div>
        {menu.length > 0 ? (
          menu.map((item) => (
            <div key={item?.card?.info?.id}>
              <h2>{item?.card?.info?.name}</h2>
              <ul>
                <li>Price: {item?.card?.info?.price / 100}</li>
              </ul>
            </div>
          ))
        ) : (
          <>
            <Shimmer />
            <p>No Menu items are available</p>
          </>
        )}
      </div>
    </>
  );
};

export default RestaurantMenu;
