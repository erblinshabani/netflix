import { useAuthState } from 'react-firebase-hooks/auth'
import '../../styles/profile.css'
import { auth } from '../../firebase/firebase'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export const Profile = () => {
    const [user] = useAuthState(auth)
    
    const navigate = useNavigate(null)

    const logOut = () => {
        signOut(auth)
        navigate('/netflix')
    }
    
    return (
        <div className="profile">
            <div className="user-profile">
                <h1 className='user-profile-title'>Profile</h1>
                <div className="user-account">
                    <img src={user?.photoURL} alt="user-photoUrl" />
                    <div className="user-account-info">
                        <h2 className='user-account-name'>{user?.displayName}</h2>
                        <h3>{user?.email}</h3>
                        <button className='logout-btn' onClick={logOut}>Log Out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}