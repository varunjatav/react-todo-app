import React from 'react'
import { v4 as uuidv4 } from "uuid";

const TodoInput = ({todo, setTodo, input, setInput}) => {

    const onInputChange = (e) => {
        setInput(e.target.value);
    }
    const onFormSubmit = (e) => {
        e.preventDefault();
        setTodo([...todo, {id:uuidv4(), title:input, completed:true}])
        setInput("");
    }
  return (
    <div className='py-5'>
        <form  className='flex gap-4 justify-center' onSubmit={onFormSubmit}>
        <input 
        type="text" 
        placeholder='ADD TASK...'  
        className='p-2 rounded-md text-black'
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