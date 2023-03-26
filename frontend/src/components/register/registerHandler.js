const register = async (username, password) => {
   
    const res = await fetch('http://localhost:5050/auth/register', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({username, password}),
        headers: {
            'content-type': 'application/json'
        }
    })
    const data = await res.text()
    if(res.status === 200) {
       
    }
}

export default register