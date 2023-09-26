import React from 'react'
import { v4 as uuidv4 } from "uuid";
import { taskArr } from './taskArr';
const TodoInput = ({todos, setTodo, input, setInput, editTodo, setEditTodo}) => {

    const updateTodo = (title, id, completed) =>{
       const newTodo = todos.map((todo) => (
        todo.id === id ? {title, id, completed} : todo
       ))
       setTodo(newTodo);
       setEditTodo("");
    }

    const onInputChange = (e) => {
        setInput(e.target.value);
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        if(!editTodo) {
        const newTodo = { id: uuidv4(), title: input, completed: true };
        setTodo([...todos, newTodo]);
        setInput("");
        taskArr.push(newTodo)
        }else{
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    }
  return (
    <div className='py-5'>
        <form  className='flex gap-4 justify-center' onSubmit={onFormSubmit}>
        <input 
        type="text" 
        placeholder='ADD TASK...'  
        className='p-2 rounded-md text-gray-400 bg-black'
        value={input}
        required
        onChange={onInputChange}
        />
        <button className='bg-green-600 text-sm p-2 rounded-md' type='submit'>
            ADD TODO
        </button>
        </form>
        
        
    </div>
  )
}

export default TodoInput