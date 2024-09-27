import React, { Profiler } from "react";
import ReactDOM from "react-dom/client";
//Default Import Header
//in default imports name of the component that is being exported can or cannot be same as the exported name
import Header from "./components/Header";
// Named Export
import { Title } from "./components/Header";
import * as obj from "./components/Header";
//obj.Title;
import Error from "./components/Error";
import Footer from "./components/footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Body from "./components/Body";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/Profile.js";

// Unique-Key (Best Option)
// Index-Key (Last Option)
// No-Key (Not Acceptable)
// Virtual DOM is the representation of the actual DOM.
// Reconciliation is the concept/technique that uses diffing algorithm to track changes made to specific nodes/areas and render the same to the actual DOM.
// React 16 introduced a concept of React Fiber engine that is used to Re-render the changes made to the component like diffing algo.
// React keys are used to uniquely identify the components of react so that its easy for diff algo to compare the changes that are made.

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const appRouter = createBrowserRouter([
  // List of Paths in array.
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
    ],
  },
]);
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
