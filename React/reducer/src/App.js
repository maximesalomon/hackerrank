import React, { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
};

const App = () => {
  const [count, dispatch] = useReducer(reducer, 0)

  return (
    <div className="App">
      <p>Count = {count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT'})}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT'})}>Decrement</button>
    </div>
  );
}

export default App;
