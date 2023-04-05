import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "./scss/Todos.scss"
import handlingCheckbox from "./functions/handlingCheckbox"
import deleteTodo from "./functions/deleteTodo"
import { getTodos } from "./functions/getTodos"


const HandlingTodos = () => {
    const [todos, setTodos] = useState()
    const [respons, setRespons] = useState()
    const navigate = useNavigate()

    const fetchTodos = async () => {
        const data = await getTodos()
    
        if(data === 401) {
            setRespons('You are logged out, redirecting you to login-page')
            setTimeout(() => {
                navigate('/')
            }, 4000)
            return;
        }
        setTodos(data)
    };

    useEffect(() => {
        fetchTodos()
     },[]);
    
    const checkboxHandler = async (todo) => {
        const id = todo.id
        let newValue = todo.value
      
        todo.value === 1 ? newValue = 0 : newValue = 1

        await handlingCheckbox(id, newValue)
        fetchTodos()
    };

    const deleteHandler = async (todoID) => {
        const id = todoID
        const respons = await deleteTodo(id)
        setRespons(respons)
        scrollTop()
        setTimeout(() => {
            fetchTodos()
            setRespons('')
        },2000) 
    };

    const scrollTop = function() {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    
    return(
        <>
            <h3>{respons}</h3>
            <div className="todoBoxes">
                {todos?.map((todo) => {
                    return (<div className="todoBox" key={todo.id}>
                        <input type='checkbox' value={todo.value} checked={todo.value === 1 ? true : false} onChange={() => {checkboxHandler(todo)}}/>
                        <h3>{todo.task}</h3>
                        <p>{todo.text}</p>
                        <p>{todo.id}</p>
                        <Link className="editLink" to={`/Todos/${todo.id}`} state={todo} >Edit</Link>
                        <button className="deleteBtn" onClick={() => {deleteHandler(todo.id)}}>❌</button>
                    </div>)
                })}
            </div>
        </>
    )
};

export default HandlingTodos


