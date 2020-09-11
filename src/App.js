import React, { useState } from "react";
import "./App.css";
import firebase from './firebase'

firebase.firestore().collection('times').add({
title: 'blala',
time_seconds: '45',
})


function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
                
        <button className="btn" onClick={() => completeTodo(index)}><link href='https://css.gg/check.css' rel='stylesheet'/>
        <i className="gg-check"></i></button>

        <button className="btn" onClick={() => removeTodo(index)}><link href='https://css.gg/trash.css' rel='stylesheet'/>
        <i className="gg-trash"></i></button>
        
      </div>
    </div>
  );
}


function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "To finish React project",
      isCompleted: false
    },
    {
      text: "To pass interview tomorrow",
      isCompleted: false
    },
    {
      text: "To complete design of landing",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="bgr-gradient-1">
       <section className="input-section">
          <h1 className="list-title">HELLO, KATIA! LIFE IS A BIG TO DO LIST</h1>
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  </section>
</div>
  );
}

export default App;