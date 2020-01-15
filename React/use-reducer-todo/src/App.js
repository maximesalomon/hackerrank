import React, { useState, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADDTODO':
      return {todos: [...state.todos, {text: action.text, completed: false }] };

    default:
      return state;
  }
}



const App = () => {
  const [text, setText] = useState();

  const [{todos}, dispatch] = useReducer(reducer, {todos: [] })

  return (
    <div className="App">
      <form onSubmit={e => {
        e.preventDefault()
        dispatch({type: 'ADDTODO', text})
        setText('')
      }}>
        <input value={text} onChange={e => setText(e.target.value)}></input>
      </form>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </div>
  );
}

export default App;
