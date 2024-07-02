import React,{useState,useContext} from 'react'
import '../styles/pages/ChangePassword.scss'
import {  ForgotPassword} from '../hooks/Fetch'
import { userContext } from '../context/UserContext';
import {PopUpMessageWithAutoCancel,Loader,PasswordVisible} from '../AllFiles'
import { cancelPopUP } from '../helper function/cancelPopUp'
import { displayPopUpMessage } from '../helper function/popUp';


function ChangePassword() {
    let userData=useContext(userContext)
    const [userId,,,,,,token,,username,]=userData
    const [userName, setuserName] = useState('')
    const [Password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const [displayPopUp, setdisplayPopUp] = useState(false)
    const [popUpMsg, setpopUpMsg] = useState('')
    const [popUpType, setpopUpType] = useState('error')
    const [loading, setloading] = useState(false)
    const loaderStyle={
        margin:"38vh auto"
    }
    const handleButton= async(e)=>{
        e.preventDefault()
        if(Password.trim().length===0 || confirmPassword.trim().length===0) displayPopUpMessage('required fields are missing, please fill in all required fields',setpopUpMsg,setpopUpType,setdisplayPopUp,false)
        else if(Password.trim() !== confirmPassword.trim()) displayPopUpMessage('passwords do not match',setpopUpMsg,setpopUpType,setdisplayPopUp,false)
        else if(Password.trim().length <= 5 || confirmPassword.trim().length <= 5)  displayPopUpMessage('password must be atleast 6 characters long',setpopUpMsg,setpopUpType,setdisplayPopUp,false)
        else{
             setloading(true)
              let response= ForgotPassword(confirmPassword,userId,token,'forgotPassword')
              let data=await response
              setdisplayPopUp(true)
              if((data?.status))  displayPopUpMessage(data?.message,setpopUpMsg,setpopUpType,setdisplayPopUp,true)
              else displayPopUpMessage(data?.message,setpopUpMsg,setpopUpType,setdisplayPopUp,false)
                setloading(false)
          }
          cancelPopUP(setdisplayPopUp,1000)
    }
    return (
        <div className="changePasswordWrapper">
                <div className='changePassword'>
                {loading && <div className='loaderWrapper'><div className='loader'><Loader loaderStyle={loaderStyle}/></div></div>}
                <form action="">
                    <h1>Reset Password</h1>
                        <div className="text"><input type="text" value={username} /></div>
                        <PasswordVisible Password={Password} setPassword={setPassword} placeholder={'new password'}/>
                        <PasswordVisible Password={confirmPassword} setPassword={setconfirmPassword}  placeholder={'confirm new password'}/>
                        <div className="btn">
                            <button onClick={(e)=>handleButton(e)}>Submit</button>
                        </div>
                </form>
                <PopUpMessageWithAutoCancel popUpMsg={popUpMsg} displayPopUp={displayPopUp} type={popUpType} duration={3000} />
            </div>
        </div>
    )
}

export default ChangePassword
