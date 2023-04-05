import { useState, useEffect } from "react";
import './scss/todoForm.scss'

const TodoForm = ({title, body, submitFunction, btnText}) => {
    const [todoTitle, setTodoTitle] = useState('')
    const [todoBody, setTodoBody] = useState('')
    const [respons, setRespons] = useState()


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
        const respons = await submitFunction(todoTitle, todoBody)
        setRespons(respons)
        setTimeout(() => {
            setRespons('')
            setTodoTitle('')
            setTodoBody('')
            window.location.reload();
        }, 2000)
    }

    return(
        <>
            <div className="todoForm">
                <form onSubmit={submitHandler}>
                    <label htmlFor="task">Todo: </label>
                    <input type="text" value={todoTitle} id="task" onChange={(e) => setTodoTitle(e.target.value)} />
                    <label htmlFor="todoText">Description: </label>
                    <textarea value={todoBody} id="todoText" onChange={(e) => setTodoBody(e.target.value)} />
                    <button type="submit" id="todoBtn">{btnText}</button>
                </form>
            </div>
            <h3>{respons}</h3>
        </>
    )
}

export {TodoForm}

