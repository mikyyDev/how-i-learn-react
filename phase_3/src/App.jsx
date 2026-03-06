import React from "react";
import { createRoot } from "react-dom/client";
import Pizza from "./Pizza.jsx";

const App = () => {
  return (
    <div>
      <h1>Pizza Haven</h1>

      <Pizza
        name="Margherita Pizza"
        description="It has a fresh, light flavor and represents the colors of the Italian flag."
      />

      <Pizza
        name="Pepperoni pizza"
        description="One of the most popular pizzas worldwide."
      />

      <Pizza
        name="Hawaiian pizza"
        description="It’s famous for the sweet pineapple + salty ham combination."
      />

      <Pizza
        name="BBQ chicken pizza"
        description="It has a smoky and slightly sweet flavor."
      />

      <Pizza
        name="Vegetarian pizza"
        description="It’s colorful, fresh, and lighter than meat pizzas."
      />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
