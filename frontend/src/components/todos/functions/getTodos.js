const getTodos = async () => {
    const res = await fetch('http://localhost:5050/todo', {
        credentials: "include"
    })
    const data = await res.json()
    return data
}

export { getTodos }