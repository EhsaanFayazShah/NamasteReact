import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import ShimmerExample from "./shimmer";

const filterData = (searchText, restaurants) => {
  const data = restaurants.filter((restaurant) => {
    return restaurant?.info?.name
      ?.toLowerCase()
      ?.includes(searchText.toLowerCase());
  });
  return data;
};

const Body = () => {
  //searchText is a local variable
  //State Variable
  //allRestaurants is used to search/ to filter
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchInput] = useState("");
  // const [searchClick, setSearchClick] = useState("false");
  // console.log("render()");//-for every keystroke React uses Reconciliation and render the changes to the DOM. React is really very fast.
  //React re-renders the whole component on each keypress.
  // console.log(restaurants);

  const getRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=34.08660&lng=74.80630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setAllRestaurants(
      json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[1].card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //empty-dependency array +> once after render
  //dep arr[searchText] => once after initial render + every time search text changes.
  useEffect(() => {
    // useEffect will run for after first render only here
    // console.log("call this when dependency changes");
    getRestaurants();
  }, []);

  // console.log(restaurants);
  // console.log("REnder");
  if (!allRestaurants) {
    //early return
    return null;
  }
  // if (filteredRestaurants?.length === 0) {
  //   return <h2>No match found </h2>;
  // }
  return filteredRestaurants === 0 ? (
    <ShimmerExample />
  ) : (
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
            const data = filterData(searchText, allRestaurants); // Filter the data based on searchText
            setFilteredRestaurants(data); // Update the restaurants state with filtered data
          }}
        >
          Submit
        </button>
      </div>
      <div className="restaurant-cards">
        {/* //logic for no restaurant found. */}
        {filteredRestaurants?.length === 0
          ? "No Result Found"
          : filteredRestaurants.map((res) => (
              <RestaurantCard {...res.info} key={res.info.id} />
            ))}
      </div>
    </>
  );
};
export default Body;
