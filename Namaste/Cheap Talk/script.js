import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return (
    <>
      <a href="/">
        <img
          className="logo"
          src="https://cdn.dotpe.in/longtail/store-logo/1023934/dOZPIFia.jpeg"
        />
      </a>
    </>
  );
};

const Header = () => {
  return (
    <>
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};
// Config Driven UI
// Config Driven UI is a design pattern where the user interface (UI) is generated based on external configuration data, rather than hard-coded elements. This allows for greater flexibility and scalability, as changes to the UI can be made by updating the configuration file without altering the application’s core code.
const restaurantList = [
  {
    info: {
      id: "766876",
      name: "Hashim Restaurant",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/7/a73a697e-df18-4026-b758-e9cb41bdfde6_766876 SS.jpg",
      locality: "Rajbagh",
      areaName: "Munawarabad",
      costForTwo: "₹400 for two",
      cuisines: ["Kashmiri", "Tandoor", "Indian"],
      avgRating: 4.3,
      parentId: "94290",
      avgRatingString: "4.3",
      totalRatingsString: "207",
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.1,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.1 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-04 22:30:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/srinagar/hashim-restaurant-rajbagh-munawarabad-rest766876",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "626968",
      name: "Little Persia",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/1/374c4f1e-57dc-4c01-9de2-4083d7169ada_626968.ss.jpg",
      areaName: "Munawarabad",
      costForTwo: "₹600 for two",
      cuisines: [
        "Italian",
        "Arabian",
        "North Indian",
        "Continental",
        "Chinese",
        "Parsi",
      ],
      avgRating: 4.2,
      parentId: "372849",
      avgRatingString: "4.2",
      totalRatingsString: "207",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-04 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "FREE ITEM",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/srinagar/little-persia-munawarabad-rest626968",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "668430",
      name: "Pizza Jalapenia (Downtown)",
      cloudinaryImageId: "75ea930925c7961328e929e87406add3",
      locality: "Nallahmar Road",
      areaName: "Bohri Kadal",
      costForTwo: "₹450 for two",
      cuisines: ["Pizzas", "Fast Food", "Beverages"],
      avgRating: 4.4,
      parentId: "457841",
      avgRatingString: "4.4",
      totalRatingsString: "1.1K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 1.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "1.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-04 21:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/srinagar/pizza-jalapenia-downtown-nallahmar-road-bohri-kadal-rest668430",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "713388",
      name: "Rattan's Veg & Non Veg",
      cloudinaryImageId: "171d049be056fea3ffc21ba84b476d2a",
      locality: "Lal Chowk",
      areaName: "Lal Chowk,Gurudwara complex",
      costForTwo: "₹600 for two",
      cuisines: ["Indian", "Biryani", "Punjabi"],
      avgRating: 4.3,
      parentId: "425885",
      avgRatingString: "4.3",
      totalRatingsString: "1.0K+",
      sla: {
        deliveryTime: 23,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-04 22:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/srinagar/rattans-veg-and-non-veg-lal-chowk-lal-chowk-gurudwara-complex-rest713388",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "663544",
      name: "Albaik Citymall",
      cloudinaryImageId: "06b6a339c6d5c7f7e73eff21ca1ef9b5",
      locality: "M A Road City Mall",
      areaName: "City Mall",
      costForTwo: "₹300 for two",
      cuisines: ["Burgers"],
      avgRating: 4.3,
      parentId: "397989",
      avgRatingString: "4.3",
      totalRatingsString: "2.7K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "20-25 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2024-09-04 21:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Rxawards/_CATEGORY-Burger.png",
            description: "Delivery!",
          },
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Delivery!",
                  imageId: "Rxawards/_CATEGORY-Burger.png",
                },
              },
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹249",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "--",
        },
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/city/srinagar/albaik-citymall-m-a-road-city-mall-rest663544",
      type: "WEBLINK",
    },
  },
];
const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <div className="card">
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} Stars</h4>
    </div>
  );
};
const Footer = () => {
  return <h1>I am footer</h1>;
};
// Unique-Key (Best Option)
// Index-Key (Last Option)
// No-Key (Not Acceptable)
// Virtual DOM is the representation of the actual DOM.
// Reconciliation is the concept/technique that uses diffing algorithm to track changes made to specific nodes/areas and render the same to the actual DOM.
// React 16 introduced a concept of React Fiber engine that is used to Re-render the changes made to the component like diffing algo.
// React keys are used to uniquely identify the components of react so that its easy for diff algo to compare the changes that are made.
const Body = () => {
  return (
    <div className="restaurant-cards">
      {
        /* <RestaurantCard {...restaurantList[0].info} />
      <RestaurantCard {...restaurantList[1].info} />
      <RestaurantCard {...restaurantList[2].info} />
      <RestaurantCard {...restaurantList[3].info} /> */
        restaurantList.map((res) => (
          <RestaurantCard {...res.info} key={res.info.id} />
        ))
      }
    </div>
  );
};

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
