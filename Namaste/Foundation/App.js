import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
const Title = () => {
  return <h2>Title</h2>;
};
// jsx sanitises our code that is got from third-party api . Example : cross side scripting.In simple terms provides security.
// normal react component/element
const heading = <h2>Hello i am heading from element</h2>;
// JSX
const HeaderComponent = () => {
  return (
    <div>
      {Title()}
      {heading}
      <h1>Hello Functional component</h1>
    </div>
  );
};

root.render(<HeaderComponent />);
