import React, { useContext } from "react";
import { UserContext } from '../UserContext';

export const About = () => {
    const { value, setValue } = useContext(UserContext)
  return (
    <div className="App">
      <h1>About</h1>
      <p>{value}</p>
    </div>
  );
};
