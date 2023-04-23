import { signInWithPopup } from "firebase/auth"
import { auth, provider } from "../../firebase/firebase"
import '../../styles/login.css'
import { useNavigate } from "react-router-dom"

export const LogIn = () => {
    const navigate = useNavigate()

    const signIn = async () => {
        await signInWithPopup(auth, provider)
        navigate('/netflix')
    }

    return (
        <div className="login-page">
            <div className="login-form">
                <h1>Log In</h1>
                <p>
                    Login with email by clicking in button Gmail
                </p>
                <button className="login-gmail" onClick={signIn}>Gmail</button>
            </div>
        </div>
    )
}