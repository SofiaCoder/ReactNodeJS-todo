import { useEffect, useState } from "react"
import "./handlingTodos.scss"
import handlingCheckbox from "./functions/handlingCheckbox"

const HandlingTodos = () => {
    const [todos, setTodos] = useState()

    const getTodos = async () => {
        const res = await fetch('http://localhost:5050/todo', {
            credentials: "include"
        })
        const data = await res.json()
        setTodos(data)
    }

    useEffect(() => {
        getTodos()
     },[])
    
    const checkboxHandler = async (todo) => {
        const id = todo.id
        let newValue = todo.value
      
        todo.value == 1 ? newValue = 0 : newValue = 1

        await handlingCheckbox(id, newValue)
        getTodos()
    }
        
    return(
        <div className="handlingTodos">
            {todos?.map((todo) => {
                return (<div className="todoBox" key={todo.id}>
                <h3>{todo.task}</h3>
                <p>{todo.text}</p>
                <p>{todo.id}</p>
                <input type='checkbox' value={todo.value} checked={todo.value == '1' ? true : false} onChange={() => {checkboxHandler(todo)}}/>
                </div>)
            })}
        </div>
    )
}

export default HandlingTodos
