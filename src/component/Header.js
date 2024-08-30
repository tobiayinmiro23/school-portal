import React, { useContext } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/component/Header.scss'
import { userContext } from '../context/UserContext';

function Header({ setmobile, mobile }) {
    const navigate = useNavigate()

    let userData = useContext(userContext)
    const [, , matricNumber, , , , , , username,] = userData

    const deleteCookie = () => {
        const expirationDate = new Date(0); // Set expiration date to the past
        document.cookie = `creg=; expires=${expirationDate.toUTCString()}; path=/`;
        document.cookie = `creg_img=; expires=${expirationDate.toUTCString()}; path=/`;
        navigate('/Login')
    };

    return (
        <nav className='navigation'>
            <div className="navwrapper">
                <div className="logo">
                    <img src="/image/FUTMINNA_LOGO.png" alt="sch logo" />
                </div>
                <h1 className="schname">Futminna Portal</h1>
                <div className="name">
                    <h3>{username}</h3>
                    <p>{matricNumber}</p>
                </div>
                <div className="notification">
                    <NotificationsIcon className="notificationImg" />
                    <div className="msg">0</div>
                </div>
                <div className='logout' onClick={deleteCookie}>log out</div>
                <div className="menu" onClick={() => setmobile(!mobile)} >
                    <MenuIcon />
                </div>
            </div>
        </nav>
    )
}

export default Header
