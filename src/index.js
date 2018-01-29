import React from "react";
import { render } from "react-dom";
import TodoApp from "./components/TodoApp";
import Styles from "./css/index.css";

const App = () => (
  <div>
    <TodoApp />
  </div>
);

render(<App />, document.getElementById("root"));
