import { BsPenFill } from "react-icons/bs"
import { AiFillDelete , AiFillCheckCircle} from "react-icons/ai"
const TodoList = ({todos,setTodo, setEditTodo}) => {
    const removeList = ({id}) => {
        const newTodo = todos.filter((item) => {
          return item.id !== id;
        })
        setTodo(newTodo);
    }
    const toggleList = (todo) =>{
       const updateTodo = todos.map((item) => {
        if(item.id === todo.id){
          return {...item, completed:!item.completed}
        }
        return item
    })
    setTodo(updateTodo);
    }

    const handelEdit = ({id}) => {
      const findTodo = todos.find((item) => id === item.id);
      setEditTodo(findTodo);
    }
    return (
        <ul className="space-y-2">
            {
              todos &&  todos.map((todo) => (
                    <li key={todo.id} className="border-black border-2 py-2 text-white rounded-md flex items-center justify-around">
                       <input type="text" className=" bg-transparent border-none list-none" value={todo.title} onChange={(e)=> e.preventDefault()} />
                       <h2>{todo.completed ? "Completed" : "Not Completed"}</h2>
                       <div className=" flex items-center justify-between gap-4">
                        <div>
                        <AiFillCheckCircle className="text-orange-400 cursor-pointer"  onClick={() => toggleList(todo)}/>
                        </div>
                        <div>
                       <BsPenFill className="text-yellow-400 cursor-pointer" onClick={() => handelEdit(todo)}/>
                       </div>
                       <div>
                       <AiFillDelete className="text-red-700 cursor-pointer text-lg" onClick={() =>removeList(todo)}/>
                       </div>
                       </div>
                       
                    </li>
                ))
            }
        </ul>
    )
}

export default TodoList;