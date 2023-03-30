import patchTodo from './patchTodo';


const showTodoToEdit = async (id) => {

    const res = await fetch('http://localhost:5050/todo/id',
    {credentials: "include"})
    const data = await res.json()

    const todoIndex = data.findIndex((todo) => todo.id === id)

    const taskVal = data[todoIndex].task;
    const textVal = data[todoIndex].text;
}

export {showTodoToEdit}