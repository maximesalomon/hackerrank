import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Home = () => {
  return <h2>Home</h2>
}

const About = () => {
  return <h2>About</h2>
}

const Contact = () => {
  return <h2>Contact</h2>
}

const App = () => {
  return (
    <div className="App">
      <header>
        <BrowserRouter>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>

          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </BrowserRouter>
      </header>
      <h1>Hello, world!</h1>
    </div>
  );
};

export default App;
