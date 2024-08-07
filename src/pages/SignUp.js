import React,{useState,useEffect,useContext} from 'react'
import '../styles/pages/Login.scss'
import { Link,useNavigate } from 'react-router-dom'
import {PopUpMessageWithAutoCancel,Loader,PasswordVisible} from '../AllFiles'
import { cancelPopUP } from '../helper function/cancelPopUp'
import {  rememberMe,signin} from '../hooks/Fetch'
import { displayPopUpMessage } from '../helper function/popUp';
import { userContext } from '../context/UserContext';

const SignUp = () => {
  let userData=useContext(userContext)
  const [,setuserId, ,setmatricNumber,,setphotoUrl,,settoken,, setusername]=userData
    const [userName, setuserName] = useState('')
    const [Password, setPassword] = useState('')
    const [displayPopUp, setdisplayPopUp] = useState(false)
    const [popUpMsg, setpopUpMsg] = useState('')
    const [popUpType, setpopUpType] = useState('error')
    let [loading, setLoading] = useState(true);
    let [loading2, setLoading2] = useState(false);

  const loaderStyle={
        margin:"38vh auto"
    }
  const navigate=useNavigate()
  useEffect(()=>{
     const getCookie=async (route)=>{
      // make a request to the backend
      const data=await rememberMe(route)
      console.log(data)
      if(data?.data?.message?.id){
          const{id,matricNumber,photoUrl,token,username}=data.data.message
          setuserId(id)
          setmatricNumber(matricNumber)
          setphotoUrl(photoUrl)
          settoken(token)
          setusername(username)
          setLoading(false)
          navigate('DashBoard')
          
        }else  setLoading(false)
     }
      getCookie('rememberMe')
   },[])
   const CreateAccount= async(e)=>{
    e.preventDefault()
   
    if(userName.trim().length===0 || Password.trim().length===0) displayPopUpMessage('required fields are missing, please fill in all required fields',setpopUpMsg,setpopUpType,setdisplayPopUp,false)
    else if(userName.trim().length <= 5 || Password.trim().length <= 5) displayPopUpMessage('username and password must be atleast 6 characters long',setpopUpMsg,setpopUpType,setdisplayPopUp,false)
    else{
        try{
             // make a post request to the backend
             setLoading2(true)
            let response= signin(userName,Password,'signin')
            let data=await response
            if((data.data.status)) navigate('Congratulations')
            else {
            setLoading2(false)
            displayPopUpMessage(data?.data?.message || 'an error occured please try again later',setpopUpMsg,setpopUpType,setdisplayPopUp,false)
            cancelPopUP(setdisplayPopUp,1000)
            }
          }catch(err) {
            setLoading2(false)
            displayPopUpMessage('unable to signup, please try again later',setpopUpMsg,setpopUpType,setdisplayPopUp,false)
            cancelPopUP(setdisplayPopUp,1000)
          }
    }
  }
  return (
    <div className='Login'>
     {
      loading ?
        <Loader/>
        :
       <div>
           <div  className='LoginCard'>
          <div className="schlogo">
              <img src="/image/FUTMINNA_LOGO.png" alt="sch logo" />
          </div>
          <form action="">
              <div className="inputWrapper">
                 <div className="text"> <input type="text" value={userName} onChange={(e)=>setuserName(e.target.value)} placeholder='username' name="" id="" /></div>
                  <PasswordVisible Password={Password} setPassword={setPassword}/>
              </div>
              <div className='text-center'><Link to='/Login'>already have an account? login</Link></div>
              <div className="btnContainer"><button onClick={(e)=>CreateAccount(e)}>Create account</button></div>
          </form>
          <PopUpMessageWithAutoCancel popUpMsg={popUpMsg} displayPopUp={displayPopUp} type={popUpType} duration={3000} />

          </div>
          {loading2 && <div className='loaderWrapper'><div className='loader'><Loader loaderStyle={loaderStyle}/></div></div>}

       </div>
     }
    </div>
  )
}

export default SignUp