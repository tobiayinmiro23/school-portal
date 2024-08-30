import React, { useState, useRef, useContext } from 'react'
import '../styles/pages/Login.scss'
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom'
import { login } from '../hooks/Fetch'
import { userContext } from '../context/UserContext';
import { PopUpMessageWithAutoCancel, Loader, PasswordVisible } from '../AllFiles'
import { cancelPopUP } from '../helper function/cancelPopUp'
import { displayPopUpMessage } from '../helper function/popUp';



const Login = () => {
  let userData = useContext(userContext)
  const [, setuserId, , setmatricNumber, , setphotoUrl, , settoken, , setusername] = userData
  const [userName, setuserName] = useState('')
  const [Password, setPassword] = useState('')
  const [displayPopUp, setdisplayPopUp] = useState(false)
  const [popUpMsg, setpopUpMsg] = useState('')
  const [popUpType, setpopUpType] = useState('error')
  let [loading2, setLoading2] = useState(false);

  const navigate = useNavigate()
  const inputRef = useRef()

  const loaderStyle = {
    margin: "38vh auto"
  }
  
 const setCookie = (cookieName, ...data) => {
    const expirationDate = new Date();
    expirationDate.setMinutes(expirationDate.getMinutes() + 15);
    const cookieValue = JSON.stringify(['$' + data + '$']) + (1 ? `; expires=${expirationDate.toUTCString()}` : '');
    document.cookie = `${cookieName}=${cookieValue}; path=/`;
  };
  
  const handleLogin = async (e) => {
    setLoading2(true)
    e.preventDefault()
    const checkBox = inputRef.current.firstChild.checked
    // make a post request to the backend
    let response = login(userName, Password, 'login')
    let data = await response
    if (data?.message?.id) {
      setLoading2(false)
      const { id, matricNumber, photoUrl, token, username } = data.message
      setuserId(id)
      setmatricNumber(matricNumber)
      setphotoUrl(photoUrl)
      settoken(token)
      setusername(username)
      if (checkBox) setCookie(id, matricNumber, token, username)
      navigate('/DashBoard')
    } else {
      setLoading2(false)
      displayPopUpMessage(data?.code === ('ERR_BAD_REQUEST' && 'an error occured please try again later') || (data?.message && data?.message) || ('an error occured please try again later'), setpopUpMsg, setpopUpType, setdisplayPopUp, data?.status)
      cancelPopUP(setdisplayPopUp, 500)
    }
  }
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  return (
    <div className='Login'>

      <div className='LoginCard'>
        <div className="schlogo">
          <img src="/image/FUTMINNA_LOGO.png" alt="sch logo" />
        </div>
        <form action="">
          <div className="inputWrapper">
            <div className="text"> <input type="text" value={userName} onChange={(e) => setuserName(e.target.value)} placeholder='username' name="" id="" /></div>
            <PasswordVisible Password={Password} setPassword={setPassword} />
          </div>
          <div className='rememberMe'>
            <p>remember me</p>
            <Checkbox
              ref={inputRef}
              {...label}
              sx={{
                color: '#60d9fb',
                margin: 0,
                padding: 0,
                '&.Mui-checked': {
                  color: '#60d9fb',
                },
                '& .MuiSvgIcon-root': { fontSize: 16 }
              }}
            />
          </div>
          <div className="btnContainer"><button onClick={(e) => handleLogin(e)}>Login</button></div>
        </form>
        {loading2 && <div className='loaderWrapper'><div className='loader'><Loader loaderStyle={loaderStyle} /></div></div>}
        <PopUpMessageWithAutoCancel popUpMsg={popUpMsg} displayPopUp={displayPopUp} type={popUpType} duration={3000} />
      </div>
    </div>
  )
}

export default Login
