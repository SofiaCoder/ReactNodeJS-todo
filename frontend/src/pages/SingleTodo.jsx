import { TodoForm } from "../components/Form/todoForm";
import patchTodo from "../components/todos/functions/patchTodo";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const SingleTodo = () => {
    const [todoTitle, setTodoTitle] = useState('')
    const [todoBody, setTodoBody] = useState('')
    const {id} = useParams()

    const location = useLocation()
    const navigate = useNavigate()
   
    useEffect(() => {
        if(location.state) {
            setTodoTitle(location.state.task)
            setTodoBody(location.state.text)
            return;
        }

        const getSingleTodo = async () => {
            const res = await fetch('http://localhost:5050/todo',
                {credentials: "include"})
                const data = await res.json()

                const todoIndex = await data.findIndex((todo) => todo.id == id)
        
                setTodoTitle(data[todoIndex].task)
                setTodoBody(data[todoIndex].text)
            }
            getSingleTodo()
    },[id])

    // const timeFunction = () => {
    //     setTimeout(() => {
    //         navigate('/TodoPage')
    //     }, 2000)
    // }

    return (
        <div className="todoForm">
            <form>
                <label htmlFor="task">Task: </label>
                <input type="text" value={todoTitle} id="task" onChange={(e) => setTodoTitle(e.target.value)} />
                <label htmlFor="todoText">Text: </label>
                <textarea value={todoBody} id="todoText" onChange={(e) => setTodoBody(e.target.value)} />
                <button type="submit" id="todoBtn" onClick={() => patchTodo({todoTitle, todoBody, id})}>Save</button>
            </form>
        </div>
    )
}

export {SingleTodo}



//

  // return(
    //     <TodoForm taskProp={task} todoTextProp={todoText} formFunction={timeFunction} submitFunction={patchTodo} btnText="Save" />
    // )