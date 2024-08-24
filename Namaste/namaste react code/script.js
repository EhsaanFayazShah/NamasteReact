//Manually creating React elements.

const heading1 = React.createElement(
  "h1",
  {
    id: "head1",
  },
  "React Hello"
);

const heading2 = React.createElement(
  "h2",
  {
    id: "head2",
  },
  " Hello"
);

const container = React.createElement("div", { id: "divider" }, [
  heading1,
  heading2,
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
