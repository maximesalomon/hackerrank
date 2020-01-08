import React, { useState } from 'react';

const App = ({name}) => {
  const [isDay, setIsDay] = useState(true)

  return (
    <div className="App">
      <h1>Hello, {name} <span role="img" aria-label="hand-waving">👋</span></h1>
      <h2>It's {new Date().toLocaleTimeString()}.</h2>
      <p>It's {isDay === true ? 'Day' : 'Night'}</p>
      <button onClick={() => setIsDay(true)}>Day</button>
      <button onClick={() => setIsDay(false)}>Night</button>
    </div>
  );
}

export default App;
