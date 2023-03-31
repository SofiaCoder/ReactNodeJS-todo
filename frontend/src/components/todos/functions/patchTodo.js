const patchTodo = async (todoTitle, todoBody, id) => {
    
    const task = todoTitle
    const text = todoBody
    const todoID = id
    
    const res = await fetch('http://localhost:5050/todo', {
        method: 'PATCH',
        credentials: 'include',
        body: JSON.stringify({task, text, todoID}),
        headers: {
            'content-type': 'application/json'
        }
    })
    const data = await res.text()
    console.log(data)
}
    
export default patchTodo
