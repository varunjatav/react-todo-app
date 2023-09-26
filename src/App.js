
import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import Header from './components/header';
import TodoList from "./components/TodoList";

import { taskArr } from './components/taskArr';



function App() {
  
  const [input, setInput] = useState("");
  const [todos, setTodo] = useState(taskArr);
  const [editTodo, setEditTodo] = useState("");

  return (
    <div className="App m-5 h-[650px] bg-indigo-900 w-[50%] mx-auto text-white rounded-xl p-4">
      <Header/>
      <TodoInput
      input={input}
      setInput={setInput}
      todos={todos}
      setTodo={setTodo}
      editTodo={editTodo}
      setEditTodo={setEditTodo}
      />
      <TodoList 
      todos={todos}
      setTodo={setTodo}
      editTodo={editTodo}
      setEditTodo={setEditTodo}
      />

    </div>
  );
}

export default App;
