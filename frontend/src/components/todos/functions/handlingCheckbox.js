const handlingCheckbox = async (id, newValue) => {
    const todoID = id
    const checkValue = newValue
    

    const res = await fetch('http://localhost:5050/todo/value', {
        method: 'PATCH',
        credentials: 'include',
        body: JSON.stringify({todoID, checkValue}),
        headers: {
            'content-type': 'application/json'
        }
    })
    const data = await res.text()
    console.log(data)
}

export default handlingCheckbox