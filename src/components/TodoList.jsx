import { BsPenFill } from "react-icons/bs"
import { AiFillDelete , AiFillCheckCircle} from "react-icons/ai"
const TodoList = ({todo,setTodo}) => {
    const removeList = ({id}) => {
        const newTodo = todo.filter((item) => {
          return item.id !== id;
        })
        setTodo(newTodo);
    }
    return (
        <ul className="space-y-2">
            {
                todo.map((todo) => (
                    <li key={todo.id} className="border-black border-2 py-2 text-white rounded-md flex items-center justify-around">
                       <input type="text" className=" bg-transparent border-none list-none" value={todo.title} onChange={(e)=> e.preventDefault()} />
                       <h2>{todo.completed ? "Completed" : "Not Completed"}</h2>
                       <div className=" flex items-center justify-between gap-4">
                        <div>
                        <AiFillCheckCircle className="text-orange-400 cursor-pointer"/>
                        </div>
                        <div>
                       <BsPenFill className="text-yellow-400 cursor-pointer"/>
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