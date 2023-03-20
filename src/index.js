import React from "react"; // робота з JSX та React component
import { createRoot } from "react-dom/client"; // робота з Dom
import "bootstrap/dist/css/bootstrap.css"; // підключення стилів bootstrap

// const element = <h1>Hello World</h1>; // react element
// createRoot(document.getElementById('root')).render(element);

import Counter from "./components/counter";

const App = () => {
  return <Counter />;
};

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
