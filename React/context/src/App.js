import React, { useState, createContext } from "react";
import { Route, Link } from "react-router-dom";
import { Index } from "./pages/Index";
import { About } from "./pages/About";

export const UserContext = createContext(null);

const App = () => {
  const [value, setValue] = useState("Hello from value");
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
      <UserContext.Provider value={{ value, setValue }}>
        <Route path="/" exact component={Index} />
        <Route path="/about" component={About} />
      </UserContext.Provider>
    </div>
  );
};

export default App;
