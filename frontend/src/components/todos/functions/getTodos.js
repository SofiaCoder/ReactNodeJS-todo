const getTodos = async () => {
    const res = await fetch('http://localhost:5050/todo', {
        credentials: "include"
    })
    if (res.status === 401) {
       return res.status
    }
    const data = await res.json()
    return data
}

export { getTodos }