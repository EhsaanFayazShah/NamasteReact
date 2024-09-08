import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const filterData = (searchText, restaurants) => {
  const data = restaurants.filter((restaurant) => {
    return restaurant.info.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });
  return data;
};
const Body = () => {
  //searchText is a local variable
  //State Variable
  const [searchText, setSearchInput] = useState("");
  // const [searchClick, setSearchClick] = useState("false");
  const [restaurants, setRestaurants] = useState(restaurantList);
  // console.log("render()");//for every keystroke React uses Reconciliation and render the changes to the DOM. React is really very fast.
  //React re-renders the whole component on each keypress.
  // console.log(restaurants);
  return (
    <>
      <div className="search-component">
        <input
          type="text"
          className="search-input"
          placeholder="Search "
          value={searchText}
          onChange={(e) => {
            setSearchInput(e.target.value); // Update the searchText state with the input value
          }}
        />

        <button
          className="search-btn"
          onClick={() => {
            //Filter the data
            const data = filterData(searchText, restaurants); // Filter the data based on searchText
            setRestaurants(data); // Update the restaurants state with filtered data
          }}
        >
          Submit
        </button>
      </div>
      <div className="restaurant-cards">
        {
          /* <RestaurantCard {...restaurantList[0].info} />
      <RestaurantCard {...restaurantList[1].info} />
      <RestaurantCard {...restaurantList[2].info} />
      <RestaurantCard {...restaurantList[3].info} /> */
          restaurants.map((res) => (
            <RestaurantCard {...res.info} key={res.info.id} />
          ))
        }
      </div>
    </>
  );
};
export default Body;
