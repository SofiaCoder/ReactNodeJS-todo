import { useState, useEffect } from "react";

const TodoForm = ({title, body, submitFunction, btnText}) => {
    const [todoTitle, setTodoTitle] = useState('')
    const [todoBody, setTodoBody] = useState('')
    

    useEffect(() => {
        const startSetHandler = () => {
            if (title && body) {
            setTodoTitle(title)
            setTodoBody(body)
            }
        } 
        startSetHandler()
    }, [])

    const submitHandler = async (e) => {
        e.preventDefault()
        await submitFunction(todoTitle, todoBody)
        
    }

    const timeFunction = () => {
        setTimeout(() => {
            
        }, 3000)
    }


    return(
        <div className="todoForm">
            <form onSubmit={submitHandler}>
                <label htmlFor="task">Todo: </label>
                <input type="text" value={todoTitle} id="task" onChange={(e) => setTodoTitle(e.target.value)} />
                <label htmlFor="todoText">Description: </label>
                <input type="text" value={todoBody} id="todoText" onChange={(e) => setTodoBody(e.target.value)} />
                <button type="submit" id="todoBtn">{btnText}</button>
            </form>
        </div>
    )
}

export {TodoForm}

