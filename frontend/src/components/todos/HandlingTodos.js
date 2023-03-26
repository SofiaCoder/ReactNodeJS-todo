import { useEffect, useState } from "react"
import TodoBox from "./TodoBox"
import "./handlingTodos.scss"

const HandlingTodos = () => {
    const [todos, setTodos] = useState()

    useEffect(() => {
        const getTodos = async () => {
            const res = await fetch('http://localhost:5050/todo', {
                credentials: "include"
            })
            const data = await res.json()
            console.log("🚀 ~ file: HandlingTodos.js:11 ~ getTodos= ~ data:", data)
            setTodos(data)
        }
        getTodos()
    },[])

    return(
        <div className="handlingTodos">
            {todos?.map((todo) => 
            <TodoBox key={todo.id} props={todo} />)}
        </div>
    )
}

export default HandlingTodos