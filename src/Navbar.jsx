import './styles/navbar.css'
import { auth } from "./firebase/firebase";
import { useAuthState } from 'react-firebase-hooks/auth';
import UserAvatar from './assets/User-avatar.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

export const Navbar = () => {
    const [se, setSe] = useState(false)
    const [user] = useAuthState(auth)

    const navigate = useNavigate()

    const navClassName = () => {
        if (window.scrollY >= 10) {
            setSe(true)
        }
        else {
            setSe(false)
        }
    }

    window.addEventListener('scroll', navClassName)

    return (
        <nav className={`${se ? 'nav-active' : 'nav'}`}>
            <h1 onClick={() => navigate('/netflix')} className="logo">XIZT</h1>

            <div className="user" onClick={() => navigate('/login')}>
                <img className="userImage" src={user?.photoURL ? user.photoURL : UserAvatar} alt="userImg" />
                <h4 className="username">{user?.displayName}</h4>
            </div>
        </nav>
    )
}