import { useState } from "react";


const RegisterForm = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [respons, setRespons] = useState('')

    const Register = async () => {
        const res = await fetch('http://localhost:5050/auth/register', {
            method: 'POST',
            credentials: 'include',
            body: JSON.stringify({username, password}),
            headers: {
                'content-type': 'application/json'
            }
        })
        const data = await res.text()
        setRespons(data)
        if(res.status === 200) {
            window.location.href='/'
        }
    }
    const Submit = (e) => {
        e.preventDefault()
        Register()
    }

    return (
        <div>
            <h1>Register</h1>
            <form>
                <label htmlFor="username">Username: </label>
                <input type="text" value={username} id="username" onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
                <label htmlFor="password">Password: </label>
                <input type="password" value={password} id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
                <button type="submit" id="loginRegisterBtn" onClick={Submit}>Register</button>
            </form>
            <h2>{respons}</h2>
        </div>)
}

export default RegisterForm