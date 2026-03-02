import React from"react";
import {createRoot } from"react-dom/client";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Pizza Haven"),
    React.createElement(Pizza, {
        name: "Margherita Pizza",
        description: "It has a fresh, light flavor and represents the colors of the Italian flag."
    }),
    React.createElement(Pizza, {
        name: "Pepperoni pizza",
        description: "One of the most popular pizzas worldwide."
    }),
    React.createElement(Pizza, {
        name: "Hawaiian pizza",
        description: "It’s famous for the sweet pineapple + salty ham combination."
    }),
    React.createElement(Pizza, {
        name: "BBQ chicken pizza",
        description: "It has a smoky and slightly sweet flavor."
    }),
    React.createElement(Pizza, {
        name: "Vegetarian pizza",
        description: "It’s colorful, fresh, and lighter than meat pizzas."
    }),
  ]);
};
const Pizza = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h2", {}, props.name),
        React.createElement("p", {}, props.description),
    ]);
}




const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));