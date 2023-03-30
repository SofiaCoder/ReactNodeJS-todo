import { useState, useEffect } from "react";

const TodoForm = ({taskProp, todoTextProp, formFunction, submitFunction, btnText}) => {

    const [task, setTask] = useState('')
    const [todoText, setTodoText] = useState('')


    // useEffect(() => {
    //     setTask(taskProp)
    //     setTodoText(todoTextProp)
    // },[])

    return(
        <div className="todoForm">
            <form onSubmit={formFunction}>
                <label htmlFor="task">Task: </label>
                <input type="text" value={task} id="task" onChange={(e) => setTask(e.target.value)} />
                <label htmlFor="todoText">Text: </label>
                <input type="text" value={todoText} id="todoText" onChange={(e) => setTodoText(e.target.value)} />
                <button type="submit" id="todoBtn" onClick={() => submitFunction(task, todoText)}>{btnText}</button>
            </form>
        </div>
    )
}

export {TodoForm}

