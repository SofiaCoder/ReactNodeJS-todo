import RegisterForm from "../components/register/RegisterForm"
import { Link } from "react-router-dom"

const RegisterPage = () => {
    
    return(
        <div>
            <RegisterForm headline='Register' btnName='Register'/>
            <Link to='/'>Log in</Link>
        </div>
    )
}

export default RegisterPage