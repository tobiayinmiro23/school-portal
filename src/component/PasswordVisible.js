import React,{useState} from 'react'
import '../styles/component/Password.scss'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
const PasswordVisible = ({Password,setPassword}) => {
    const [Type, setType] = useState('password')
  
  return (
        <div className="password">
            <input type={Type} value={Password} onChange={(e)=>setPassword(e.target.value)} placeholder='password' name="" id="" />
            <div>
                {
                  Type==='password' ?
                  <div onClick={()=>setType('text')}><VisibilityOutlinedIcon className='eye'/></div>  
                  :
                  <div onClick={()=>setType('password')}><VisibilityOffOutlinedIcon className='eye'/></div>
                }
            </div>
        </div>
  )
}

export default PasswordVisible