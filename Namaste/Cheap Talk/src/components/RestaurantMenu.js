import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);

  const { id } = useParams(); // useParams gets the thing that is passed to it inside the outlet.

  async function getRestaurantInfo() {
    try {
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=34.08660&lng=74.80630&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await response.json();
      // console.log(json?.data?.cards?.[2]?.card?.card?.info.name); //restaurant name in console when any card is clicked.
      setRestaurant(json?.data?.cards?.[2]?.card?.card?.info);

      const itemCards =
        json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]
          ?.card?.card?.itemCards || [];
      setMenu(itemCards);
      // console.log("item CArds " + menu.length);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  // useEffect(() => {
  //   console.log("Menu items:", menu);
  // }, [menu]);

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
          <p>No menu items available</p>
        )}
      </div>
    </>
  );
};

export default RestaurantMenu;
