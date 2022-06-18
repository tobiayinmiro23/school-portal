import React, { useState } from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import './navigation.css'
function Navigation({HandleMenu,menubarState,HandleMenubarState}) {
    // to display the cancel button
     const HandleMenubar=(param)=>{
        HandleMenu(param)
        HandleMenubarState(false)
    }
    // to display the menu button
    const HandleCancelbar=(param)=>{
        HandleMenu(param)
        HandleMenubarState(true)

    }
    return (
        <nav className='navigation'>
            <div className="navwrapper">
                    <div className="logo">
                        <img src="/image/FUTMINNA_LOGO.png" alt="hngjklcf;" />
                    </div>
                    <h1  className="schname">Futminna Portal</h1>
                    <div className="name">
                        <h3>Samuel Ejiofor</h3>
                        <p>M1722453 (2015/1/65343CT)</p>
                    </div>
                    <div className="notification">
                        <NotificationsIcon color='white'/>
                        <div className="msg">0</div>
                    </div>
                    <p className='logout'>Log out</p>
                    {menubarState ? 
                    <div className="menu" onClick={()=>HandleMenubar(true)}>
                        <MenuIcon/>
                    </div> :
                    <div className="menu" onClick={()=>HandleCancelbar(false)}>
                        <img src="/image/close.png" alt=""  />
                    </div>
                }
                    
            </div>
        </nav>
    )
}

export default Navigation
