import React, {useContext } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import '../styles/component/Header.scss'
import { userContext } from '../context/UserContext';

function Header({setmobile,mobile}) {
    let userData=useContext(userContext)
    const [,,matricNumber,,,,,,username,]=userData
    
    return (
        <nav className='navigation'>
            <div className="navwrapper">
                    <div className="logo">
                        <img src="/image/FUTMINNA_LOGO.png" alt="sch logo" />
                    </div>
                    <h1  className="schname">Futminna Portal</h1>
                    <div className="name">
                        <h3>{username}</h3>
                        <p>{matricNumber}</p>
                    </div>
                    <div className="notification">
                        <NotificationsIcon className="notificationImg"/>
                        <div className="msg">0</div>
                    </div>
                    <div className='logout'><Link to='/login'>log out</Link></div>
                    <div className="menu" onClick={()=>setmobile(!mobile)} >
                        <MenuIcon/>
                    </div> 
            </div>
        </nav>
    )
}

export default Header
