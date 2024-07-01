import React,{useState,useContext,useEffect} from 'react'
import { Outlet ,useNavigate} from 'react-router-dom'
import { SideBar,Header } from '../AllFiles'
import '../styles/pages/DashboardLayout.scss'
import { userContext } from '../context/UserContext';
const DashboardLayout = () => {
  const [mobile, setmobile] = useState(false)
  const navigate=useNavigate()
  let userData=useContext(userContext)
  const [,,,,,,,,username,]=userData
  useEffect(()=>{
    if(username==='')navigate('/')
  })
  return (
    <div className='layoutContainer'>
        <Header setmobile={setmobile} mobile={mobile}/>
        <div className='layout'>
            <div className={mobile ? "sidebarMobile" : "sidebar"}>
              <SideBar  setmobile={setmobile} mobile={mobile}/>
            </div>
            <div className='wrapper'>
              <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default DashboardLayout