const deleteTodo = async (id) => {
    const todoID = id
    
    const res = await fetch('http://localhost:5050/todo', {
        method: 'DELETE',
        credentials: 'include',
        body: JSON.stringify({todoID}),
        headers: {
            'content-type': 'application/json'
        }
    })
    const data = await res.text()
    return data
}

export default deleteTodo