import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./scss/handlingTodos.scss"
import handlingCheckbox from "./functions/handlingCheckbox"
import deleteTodo from "./functions/deleteTodo"
import { getTodos } from "./functions/getTodos"


const HandlingTodos = () => {
    const [todos, setTodos] = useState()

    useEffect(() => {
        const fetchTodos = async () => {
        const data = await getTodos()
        setTodos(data)
        }
        fetchTodos()
     },[])
    
    const checkboxHandler = async (todo) => {
        const id = todo.id
        let newValue = todo.value
      
        todo.value == 1 ? newValue = 0 : newValue = 1

        await handlingCheckbox(id, newValue)
        getTodos()
    }

    const deleteHandler = async (todoID) => {
        const id = todoID
        await deleteTodo(id)
        await getTodos() 
    } 
    
        
    return(
        <div className="handlingTodos">
            {todos?.map((todo) => {
                return (<div className="todoBox" key={todo.id}>
                    <h3>{todo.task}</h3>
                    <p>{todo.text}</p>
                    <p>{todo.id}</p>
                    <input type='checkbox' value={todo.value} checked={todo.value == '1' ? true : false} onChange={() => {checkboxHandler(todo)}}/>
                    <Link className="editLink" to={`/Todos/${todo.id}`} state={todo} >Edit</Link>
                    <button className="deleteBtn" onClick={() => {deleteHandler(todo.id)}}>❌</button>
                </div>)
            })}
        </div>
    )
}

export default HandlingTodos


