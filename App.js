const headtag = React.createElement(
  "h1",
  { id: "heading", name: "testing" },
  "Helllo world from React"
);

console.log(headtag);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headtag);
