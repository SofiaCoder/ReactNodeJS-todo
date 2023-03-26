import { useState } from "react"
import login from "./loginHandler"

const LoginForm = ({headline, btnName}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const Submit = (e) => {
        e.preventDefault()

        login(username, password)
    }

    return (
    <div>
        <h1>{headline}</h1>
        <form>
            <label htmlFor="username">Username: </label>
            <input type="text" value={username} id="username" onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
            <label htmlFor="password">Password: </label>
            <input type="password" value={password} id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
            <button type="submit" id="loginRegisterBtn" onClick={Submit}>{btnName}</button>
        </form>
        <h2></h2>
    </div>)
}

export default LoginForm