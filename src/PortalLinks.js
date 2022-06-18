import React from 'react'
import './portalLinks.css'
import HomeIcon from '@mui/icons-material/Home';
import FeedIcon from '@mui/icons-material/Feed';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EventNoteIcon from '@mui/icons-material/EventNote';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import ForwardToInboxIcon from '@mui/icons-material/ForwardToInbox';
import CopyrightIcon from '@mui/icons-material/Copyright';
import LockIcon from '@mui/icons-material/Lock';
function PortalLinks({portal,menu,HandleMenu,HandleMenubarState}) {

    {var home=document.querySelectorAll('.home')[0]}
    
    // function to remove background from portal
    const RemoveBackground=()=>{
        var curentlink=document.querySelectorAll('.general').forEach(item=>{
            home.classList.remove('home')
            item.classList.remove('current')
        })
    }
    // code to add background to current portal
        {var curentlink=document.querySelectorAll('.general').forEach(item=>{
            item.addEventListener('click',()=>{
                RemoveBackground()
                item.classList.add('current')
            })})}

    return (
        <div  className={menu ? 'portalLinksMobile':'PortalLinks'}>
            <div className="userimgwrapper">
            <div className="userimg">
                <img src="/image/user.png" alt="" />
            </div> 
            </div>
            <hr color='white'/>
            <div  onClick={()=>{
                portal('P-Dashbord')
                HandleMenu(false)
                HandleMenubarState(true)
            }} className="home general">
                <HomeIcon/>
                <h4>Dash board</h4>
            </div>
            <hr color='white'/>
            <div onClick={()=>{
                portal('P-Result')
                 HandleMenu(false)
                HandleMenubarState(true)
                 }} className="result general">
                <FormatListBulletedIcon/>
                <h4>Result</h4>
            </div>
            <hr color='white'/>
            <div onClick={()=>{
                portal('P-CourseReg')
                HandleMenu(false)
                HandleMenubarState(true)
                }} className="coursereg general">
                <FeedIcon/>
                <h4>Course reg</h4>
            </div>
            <hr color='white'/>
            <div onClick={()=>{
                portal('P-Department')
                HandleMenu(false)
                HandleMenubarState(true)
                }} className="department general">
                <AccountBalanceIcon/>
                <h4>Department</h4>
            </div>
            <hr color='white'/>
            <div onClick={()=>{
                portal('P-Resource')
                HandleMenu(false)
                HandleMenubarState(true)
                }} className="resource general">
                <FileCopyIcon/>
                <h4>Resource</h4>
            </div>
            <hr color='white'/>
            <div onClick={()=>{
                portal('P-LectureTimeTable')
                HandleMenu(false)
                HandleMenubarState(true)
                }} className="resource general">
                <CalendarTodayIcon/>
                <h4>Lecture Timetable</h4>
            </div>
            <hr color='white'/>
            <div onClick={()=>{
                portal('P-SchCal')
                HandleMenu(false)
                HandleMenubarState(true)
                }} className="calendar general">
                <EventNoteIcon className='schcalender'/>
                <h4>School Calendar</h4>
            </div>
            <hr color='white'/>
            <div onClick={()=>{
                portal('P-MSess')
                HandleMenu(false)
                HandleMenubarState(true)
                }} className="missedsession general">
                <FmdBadIcon/>
                <h4>Missed session</h4>
            </div>
            <hr color='white'/>
            <div onClick={()=>{
                portal('P-PortalFeedBack')
                HandleMenu(false)
                HandleMenubarState(true)
                }} className="PortalFeedback general">
                <ForwardToInboxIcon/>
                <h4>Portal feedback</h4>
            </div>
            <hr color='white'/>
            <div onClick={()=>{
                portal('P-ChangePassword')
                HandleMenu(false)
                HandleMenubarState(true)
                }} className='password general'>
                <LockIcon className="lock"/>
                <h4>Change password</h4>
            </div>
            <hr color='white'/>
            <div className="cpy">
                <CopyrightIcon className="cpyimg"/>
                <p>Ayinmiro tobi all rights reserver</p>
            </div>
        </div>
    )
}

export default PortalLinks
