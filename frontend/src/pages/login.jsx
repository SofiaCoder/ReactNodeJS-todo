import { useState } from "react"

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [respons, setRespons] = useState('')

    
    const login = async (e) => {
        e.preventDefault()
       
        const res = await fetch('http://localhost:5050/auth/login', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({username, password}),
            headers: {
                'content-type': 'application/json'
            }
        })
        const data = await res.text()
        setRespons(data)
        
    }

    return(
        <div>
            <h1>Login</h1>
            <form>
                <label htmlFor="username">Username: </label>
                <input type="text" value={username} id="username" onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
                <label htmlFor="password">Password: </label>
                <input type="password" value={password} id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                <button type="submit" id="loginBtn" onClick={login}>Log in</button>
            </form>
            <h2>{respons}</h2>
        </div>
    )
}

export default Login