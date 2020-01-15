import React, { useState, useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADDTODO":
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
        todoCount: state.todoCount + 1
      };
    case "DONE":
      return {
        todos: state.todos.map((t, idx) =>
          idx === action.idx ? { ...t, completed: !t.completed } : t
        ),
        todoCount: state.todoCount
      };
    default:
      return state;
  }
};

const App = () => {
  const [text, setText] = useState();

  const [{ todos, todoCount }, dispatch] = useReducer(reducer, {
    todos: [],
    todoCount: 0
  });

  return (
    <div className="App">
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch({ type: "ADDTODO", text });
          setText("");
        }}
      >
        <input value={text} onChange={e => setText(e.target.value)}></input>
      </form>
      <p>TODO Count = {todoCount}</p>
      <ul>
        {todos.map((t, idx) => (
          <li
            key={t.text}
            onClick={() => dispatch({ type: "DONE", idx })}
            style={{
              textDecoration: t.completed ? "line-through" : ""
            }}
          >
            {t.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
