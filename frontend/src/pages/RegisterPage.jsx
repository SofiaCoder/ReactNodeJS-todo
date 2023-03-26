
import { Link } from "react-router-dom"
import RegisterForm from "../components/register/RegisterForm"

const RegisterPage = () => {
    
    return(
        <div>
            <RegisterForm/>
            <Link to='/'>Log in</Link>
        </div>
    )
}

export default RegisterPage