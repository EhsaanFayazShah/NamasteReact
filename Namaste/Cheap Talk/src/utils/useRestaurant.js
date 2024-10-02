import { useState, useEffect } from "react";

// custom hook is used to extract some logic and not JSX.
const useRestaurant = (id) => {
  // return restaurant data got from API
  const [restaurant, setRestaurant] = useState(null);
  const [menu, setMenu] = useState([]);
  async function getRestaurantInfo() {
    try {
      //we can also put the below url into constant file for reusability.
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=34.08660&lng=74.80630&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
      );
      const json = await response.json();
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

  // called only one bcz of empty dependency Array.
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  return [restaurant, menu];
};

export default useRestaurant;
