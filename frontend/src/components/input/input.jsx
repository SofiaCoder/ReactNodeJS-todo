<div>
    <h1>Login</h1>
    <form>
        <label htmlFor="username">Username: </label>
        <input type="text" value={username} id="username" onChange={(e) => setUsername(e.target.value)} placeholder="Username"/>
        <label htmlFor="password">Password: </label>
        <input type="password" value={password} id="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password"/>
        <button type="submit" id="loginRegisterBtn" onClick={Submit}>Log in</button>
    </form>
    <h2>{respons}</h2>
</div>