import { useState } from "react";
import postTodo from "./functions/postTodo"

const TodoForm = () => {

    const [task, setTask] = useState('')
    const [todoText, setTodoText] = useState('')

    const addTodo = () => {
        postTodo(task, todoText)
    }

    return(
        <div className="todoForm">
            <form>
                <label htmlFor="task">Task: </label>
                <input type="text" value={task} id="task" onChange={(e) => setTask(e.target.value)} />
                <label htmlFor="todoText">Text: </label>
                <input type="text" value={todoText} id="todoText" onChange={(e) => setTodoText(e.target.value)} />
                <button type="submit" id="todoBtn" onClick={addTodo}>Add</button>
            </form>
        </div>
    )
}

export default TodoForm