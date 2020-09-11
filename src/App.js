import React, { useState, useEffect } from "react";
import "./App.css";
import firebase from './utils/firebase'

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className={todo.complete ? "complete" : "todo"}
       /*style={{ textDecoration: todo.Complete ? "line-through" : "" }}*/
    >
      {todo.value}

      <div>
                
        <button className="btn" onClick={() => completeTodo(todo)}><link href='https://css.gg/check.css' rel='stylesheet'/>
        <i className="gg-check"></i></button>

        <button className="btn" onClick={() => removeTodo(todo)}><link href='https://css.gg/trash.css' rel='stylesheet'/>
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
    const todoRef = firebase.database().ref('ToDo')
    const todo = { value, complete: false}
    todoRef.push(todo)
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
  const [list, setList] = useState(null)
    
  useEffect(() => {
    const todoRef = firebase.database().ref('ToDo')
    todoRef.on('value', snapshot => {
      const todos = snapshot.val()
      const todoList = []
      for(let id in todos){
        todoList.push({id, ...todos[id]})
      }
      setList(todoList)
    })
  }, [])
  

  const completeTodo = todo => {
  const todoRef = firebase.database().ref('ToDo').child(todo.id)
  todoRef.update({ complete: !todo.complete})
  };

  const removeTodo = todo => {
    const todoRef = firebase.database().ref('ToDo').child(todo.id)
    todoRef.remove()
  };

  console.log(list);


  return (
    <div className="bgr-gradient-1">
       <section className="input-section">
          <h1 className="list-title">HELLO, KATIA! LIFE IS A BIG TO DO LIST</h1>
    <div className="app">
      <div className="todo-list">
        {list?.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm />
      </div>
    </div>
  </section>
</div>
  );
}

export default App;