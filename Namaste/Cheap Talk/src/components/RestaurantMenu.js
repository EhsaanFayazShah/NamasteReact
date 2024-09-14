import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);
  const [items, setItems] = useState([]);

  const { id } = useParams(); //use params gets the thing that is passed to it inside the outlet .

  async function getRestaurantInfo() {
    try {
      const data = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=34.08660&lng=74.80630&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await data.json();
      console.log(json?.data?.cards?.[2]?.card?.card?.info.name);
      setRestaurant(json?.data?.cards?.[2]?.card?.card?.info);

      if (restaurant) {
        // console.log(restaurant);
        setMenu(
          json?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
            ?.card?.card?.itemCards
        );
      } else {
        throw new Error("Restaurant info not found in the response.", err);
      }
    } catch (err) {
      console.log(menu);
      console.log(err);
    }
  }

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  return (
    <>
      <div>
        <h1>{restaurant?.name}</h1>
        <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
        <h1>{restaurant?.areaName}</h1>
        <h1>{restaurant?.city}</h1>
        <h3>{restaurant?.avgRating} Stars</h3>
        <h3>{restaurant?.costForTwoMessage} </h3>
      </div>
      <div>
        {(() => {
          // You can now use itemCards here, for example:
          // return menu.map((item) => {
          return menu.forEach((item) => {
            <div key={item?.card?.info?.id}>
              <h2>{item?.card?.info?.name}</h2>
              <ul>
                <li>Price : {item?.card?.info?.price / 100}</li>
              </ul>
            </div>;
          });
          // <div key={item?.card?.info?.id}>
          //   <h2>{item?.card?.info?.name}</h2>
          //   <ul>
          //     <li>Price : {item?.card?.info?.price / 100}</li>
          //   </ul>
          // </div>;
          // });
        })()}
      </div>
    </>
  );
};

export default RestaurantMenu;

// formik library
// createBrowserRouter -> react-router-dom

// nested routes
