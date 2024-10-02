export const filterData = (searchText, restaurants) => {
  const data = restaurants.filter((restaurant) => {
    return restaurant?.info?.name
      ?.toLowerCase()
      ?.includes(searchText.toLowerCase());
  });
  setSearchRestaurant(""); // Clear the search input box after search
  return data;
};
