import React, { useState } from "react";

const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow =
  "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

const App = () => {
  const [lightOn, setLightOn] = useState(true);
  return (
    <div onClick={() => setLightOn(!lightOn)} className="App">
      {lightOn === false ? (
        <img src={white} alt="lightbulb off" />
      ) : (
        <img src={yellow} alt="lightbulb on" />
      )}
    </div>
  );
};

export default App;
