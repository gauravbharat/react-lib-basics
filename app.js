const Person = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", { key: "1" }, props.name),
    React.createElement("p", { key: "2" }, props.occupation),
  ]);
};

const App = () => {
  return React.createElement(
    "div",
    {
      style: {
        backgroundColor: "limegreen",
        width: "100vh",
        height: "100vh",
        padding: "10px",
      },
    },
    [
      React.createElement(
        "h1",
        { key: "1", className: "title" },
        "React rendered"
      ),
      React.createElement(Person, {
        key: "2",
        name: "Gaurav",
        occupation: "Web Developer",
      }),
      React.createElement(Person, {
        key: "3",
        name: "Renuka",
        occupation: "QA",
      }),
      React.createElement(Person, {
        key: "4",
        name: "Frank",
        occupation: "VP - Tech",
      }),
      React.createElement(Person, {
        key: "5",
        name: "Ritesh",
        occupation: "Backend Developer",
      }),
    ]
  );
};

const container = document.getElementById("react-lib-demo");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
