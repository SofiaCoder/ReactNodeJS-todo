const postTodo = async (todoTask, todoText) => {
    const task = todoTask
    const text = todoText
    

    const res = await fetch('http://localhost:5050/todo', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({task, text}),
        headers: {
            'content-type': 'application/json'
        }
    })
    const data = await res.text()
    return data
}

export {postTodo}