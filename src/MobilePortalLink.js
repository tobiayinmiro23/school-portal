import React from 'react'
import './MobilePortalLink.css'
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
import {Link,} from 'react-router-dom';
function MobilePortalLink({portal}) {

    // {var home=document.querySelectorAll('.home')[0]}
    
    // // function to remove background from portal
    // const RemoveBackground=()=>{
    //     {var curentlink=document.querySelectorAll('.general').forEach(item=>{
    //         home.classList.remove('home')
    //         item.classList.remove('current')
    //     })}
    // }
    // console.log(menu)
    // // code to add background to current portal
    //     {var curentlink=document.querySelectorAll('.general').forEach(item=>{
    //         item.addEventListener('click',()=>{
    //             RemoveBackground()
    //             // home.classList.remov('current')
    //             item.classList.add('current')
    //         })})}

    {   var MobilePortal=document.querySelectorAll('.MobilePortalLink')[0]
        var portallink=document.querySelectorAll('general').forEach(item=>{
        item.addEventListener('click',()=>{
            MobilePortal.classList.add('none')
        })
    })}

    return (
        <div  className='MobilePortalLink'>
          <div className="userimg">
                <img src="/image/user.png" alt="" />
            </div> 
            <hr color='white'/>
            <div className="home general">
                <HomeIcon/>
                <h4>Dash board</h4>
            </div>
            <hr color='white'/>
            <div onClick={()=>{portal('P-Result')}} className="result general">
                <FormatListBulletedIcon/>
                <h4>Result</h4>
            </div>
            <hr color='white'/>
            <div onClick={()=>{portal('P-CourseReg')}} className="coursereg general">
                <FeedIcon/>
                <h4>Course reg</h4>
            </div>
            <hr color='white'/>
            <div onClick={()=>{portal('P-Department')}} className="department general">
                <Link to="P-Department">
                <AccountBalanceIcon/>
                <h4>Department</h4>
                </Link>
                
            </div>
            <hr color='white'/>
            <div onClick={()=>{portal('P-Resource')}} className="resource general">
                <FileCopyIcon/>
                <h4>Resource</h4>
            </div>
            <hr color='white'/>
            <div onClick={()=>{portal('P-LectureTimeTable')}} className="resource general">
                <CalendarTodayIcon/>
                <h4>Lecture Timetable</h4>
            </div>
            <hr color='white'/>
            <div onClick={()=>{portal('P-SchCal')}} className="calendar general">
                <EventNoteIcon className='schcalender'/>
                <h4>School Calendar</h4>
            </div>
            <hr color='white'/>
            <div onClick={()=>{portal('P-MSess')}} className="missedsession general">
                <FmdBadIcon/>
                <h4>Missed session</h4>
            </div>
            <hr color='white'/>
            <div onClick={()=>{portal('P-PortalFeedBack')}} className="PortalFeedback general">
                <ForwardToInboxIcon/>
                <h4>Portal feedback</h4>
            </div>
            <hr color='white'/>
            <div onClick={()=>{portal('P-ChangePassword')}} className='password general'>
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

export default MobilePortalLink
