import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  //searchText is a local variable
  //State Variable
  //allRestaurants is used to search/ to filter
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchInput] = useState("");
  const [searchRestaurant, setSearchRestaurant] = useState("");
  // const [searchClick, setSearchClick] = useState("false");
  // console.log("render()");//-for every keystroke React uses Reconciliation and render the changes to the DOM. React is really very fast.
  //React re-renders the whole component on each keypress.
  // console.log(restaurants);

  const getRestaurants = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=34.08660&lng=74.80630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // console.log(json);
      setAllRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data" + error);
    }
  };
  //empty-dependency array +> once after render
  //dep arr[searchText] => once after initial render + every time search text changes.
  useEffect(() => {
    // useEffect will run for after first render only here
    // console.log("call this when dependency changes");
    getRestaurants();
  }, []);

  let online = useOnline();
  if (!online) {
    return <h1>You are Offline! Please check your internet connection</h1>;
  }
  // console.log(filteredRestaurants);
  // console.log("REnder");
  if (!allRestaurants) {
    //early return
    return null;
  }
  // if (filteredRestaurants?.length === 0) {
  //   return <h2>No match found </h2>;
  // }
  return filteredRestaurants === 0 ? (
    <Shimmer />
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
        {filteredRestaurants?.length === 0 ? (
          <>
            <Shimmer />
            {/* <h1>Not Found</h1> */}
          </>
        ) : (
          filteredRestaurants.map((res) => (
            <>
              <Link to={"/restaurant/" + res.info.id} key={res.info.id}>
                <RestaurantCard {...res.info} />
              </Link>
            </>
          ))
        )}
      </div>
    </>
  );
};
export default Body;
