import LoginForm from "../components/login/LoginForm";
import { Link } from "react-router-dom";

const LandingPage = () => {
    
    return(
        <div>
            <LoginForm headline='Login' btnName='Log in'/>
            <Link to='/RegisterPage'>Register</Link>
        </div>
    )
}

export default LandingPage