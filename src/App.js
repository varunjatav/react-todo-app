
import { useState } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import Header from './components/header';
import TodoList from "./components/TodoList"

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([
    {
    id:1, title:"Study", completed: false
  },
  {
    id:2, title:"Coding", completed: true
  },
  {
    id:3, title:"Play", completed: false
  },
]);
  return (
    <div className="App m-5 h-[650px] bg-indigo-900 w-[50%] mx-auto text-white rounded-xl p-4">
      <Header/>
      <TodoInput
      input={input}
      setInput={setInput}
      todo={todo}
      setTodo={setTodo}
      />
      <TodoList 
      todo={todo}
      setTodo={setTodo}
      />

    </div>
  );
}

export default App;
