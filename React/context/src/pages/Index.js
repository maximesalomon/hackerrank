import React, { useContext } from "react";
import { UserContext } from '../UserContext';

export const Index = () => {
    const { value, setValue } = useContext(UserContext)
  return (
    <div className="App">
      <h1>Home</h1>
      <p>{ value }</p>
      <button onClick={() => setValue("Hello, world!")}>Say "Hello, world!"</button>
    </div>
  );
};
