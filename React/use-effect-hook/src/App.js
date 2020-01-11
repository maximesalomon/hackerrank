import React, { useState, useEffect } from 'react';
import styled from 'styled-components'

const App = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <StyledDiv>
      <p>You clicked {count} times</p>
      <StyledButton onClick={() => setCount(count + 1)}>
        Click me
      </StyledButton>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  background-color: lightgray;
  padding: 50px;
  height: 100px;
  width: 200px;
  margin: 200px auto;
  border: 1px solid black;
`;

const StyledButton = styled.button`
  height: 40px;
  width: 80px;
  background-color: white;
  border: 1px solid black; 
`

export default App;