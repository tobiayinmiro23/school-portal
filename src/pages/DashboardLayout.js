import React, { useState, useContext, useEffect, useRef } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { SideBar, Header } from '../AllFiles'
import '../styles/pages/DashboardLayout.scss'
import { getPhoto } from '../hooks/Fetch'

import { userContext } from '../context/UserContext';
const DashboardLayout = () => {
  const [mobile, setmobile] = useState(false)
  const navigate = useNavigate()
  let userData = useContext(userContext)
  const [, , , , , , , , username,] = userData

  const scrollRef = useRef(null)
  const location = useLocation()
  useEffect(async () => {
    if (username === '') navigate('/')
    scrollRef.current?.scrollTo(0, 0)

  }, [location.pathname])
  return (
    <div className='layoutContainer'>
      <Header setmobile={setmobile} mobile={mobile} />
      <div className='layout'>
        <div className={mobile ? "sidebarMobile" : "sidebar"}>
          <SideBar setmobile={setmobile} mobile={mobile} />
        </div>
        <div className='wrapper' ref={scrollRef}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
