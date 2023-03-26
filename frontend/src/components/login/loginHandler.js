const login = async (username, password) => {
   
    const res = await fetch('http://localhost:5050/auth/login', {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify({username, password}),
        headers: {
            'content-type': 'application/json'
        }
    })
    const data = await res.text()
    if(res.status === 200) {
        window.location.href='/TodoPage'
    }
    
}

export default login