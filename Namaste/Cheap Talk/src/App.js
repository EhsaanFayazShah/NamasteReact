import React from "react";
import ReactDOM from "react-dom/client";
//Default Import Header
//in default imports name of the component that is being exported can or cannot be same as the exported name
import Header from "./components/Header";
// Named Export
import { Title } from "./components/Header";

import * as obj from "./components/Header";
//obj.Title;

import Footer from "./components/footer";
import Body from "./components/body";

// Config Driven UI
// Config Driven UI is a design pattern where the user interface (UI) is generated based on external configuration data, rather than hard-coded elements. This allows for greater flexibility and scalability, as changes to the UI can be made by updating the configuration file without altering the application’s core code.

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
      <Body />
      <Footer />
    </>
  );
};
let root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
