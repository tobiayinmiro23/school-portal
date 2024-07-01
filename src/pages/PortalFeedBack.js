import React,{useState} from 'react'
import '../styles/pages/PortalFeedBack.scss'
import { cancelPopUP } from '../helper function/cancelPopUp'
import { displayPopUpMessage } from '../helper function/popUp';
import {PopUpMessageWithAutoCancel} from '../AllFiles'

function PortalFeedBack() {
    const [feedBackMsg, setfeedBackMsg] = useState('')
    const [displayPopUp, setdisplayPopUp] = useState(false)
    const [popUpMsg, setpopUpMsg] = useState('')
    const [popUpType, setpopUpType] = useState('error')

    const handleButton=(e)=>{
        e.preventDefault()
        if(feedBackMsg.trim().length===0 ) displayPopUpMessage('required fields are missing, please fill in all required fields',setpopUpMsg,setpopUpType,setdisplayPopUp,false)
        else displayPopUpMessage('message sent successfully',setpopUpMsg,setpopUpType,setdisplayPopUp,true)
        cancelPopUP(setdisplayPopUp,1000)
        setfeedBackMsg('')
        
    }
    return (
        <div className='portalFeedBack'>
            <h1>Feed Back</h1>
            <form action="">
                <textarea required placeholder='Message' value={feedBackMsg} onInput={(e)=>setfeedBackMsg(e.target.value)} name="" id="" cols="30" rows="10"></textarea>
                <button onClick={(e)=>handleButton(e)}>send</button>
            </form>
            <PopUpMessageWithAutoCancel popUpMsg={popUpMsg} displayPopUp={displayPopUp} type={popUpType} duration={3000} />

        </div>
    )
}

export default PortalFeedBack
