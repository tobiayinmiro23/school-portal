import React,{useState} from 'react'
import './Container.css'
import PortalLinks from './PortalLinks';
import Dashbord from './Dashbord';
import Result from './Result';
import Department from'./Department'
import Resource from './Resource' 
import LectureTimeTable from './LectureTimeTable'
import SchoolCalender from './SchoolCalender';
import MissedSession from './MissedSession'
import PortalFeedBack from './PortalFeedBack'
import ChangePassword from './ChangePassword'
import CourseReg from './CourseReg';

function Container({menu}) {
    const [portal ,setportal]=useState('P-Dashbord')
    const ChangePortalState=(param)=>{
        setportal(param)
    }
    return (
        <div className="containerWrapper">
            <div className='container'>
                <PortalLinks menu={menu} portal={ChangePortalState}/>
                <div className={menu? 'holderMobile' : 'holder'}>
                    {portal==='P-Dashbord' && <Dashbord/> }
                    {portal==='P-Result' && <Result/> }
                    {portal==='P-CourseReg' && <CourseReg/> }
                    {portal==='P-Department' && <Department/> }
                    {portal==='P-Resource' && <Resource/> }
                    {portal==='P-LectureTimeTable' && <LectureTimeTable/> }
                    {portal==='P-SchCal' && <SchoolCalender/> }
                    {portal==='P-MSess' && <MissedSession/> }
                    {portal==='P-PortalFeedBack' && <PortalFeedBack/> }
                    {portal==='P-ChangePassword' && <ChangePassword/> }
                </div>
            </div>
        </div>
    )
}

export default Container
