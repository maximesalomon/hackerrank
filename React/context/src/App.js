import React from "react";
import { Route, Link } from "react-router-dom";
import { Index } from "./pages/Index";
import { About } from "./pages/About";

const App = () => {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <header></header>
      <Route path="/" exact component={Index} />
      <Route path="/about" component={About} />
    </div>
  );
};

export default App;
