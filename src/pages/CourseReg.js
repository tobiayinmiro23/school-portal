import React,{useState,useEffect,useContext} from 'react'
import '../styles/pages/CourseReg.scss'
import {PopUpMessageWithAutoCancel,NoResult,Loader} from '../AllFiles'
import {deleteCourse,getAllCourse} from '../hooks/Fetch'
import { userContext } from '../context/UserContext';
import { cancelPopUP } from '../helper function/cancelPopUp'
import { displayPopUpMessage } from '../helper function/popUp';

const CourseReg = () => {
    let userData=useContext(userContext)
    const [userId,,,,,,token,,,]=userData
    const [allCourse, setallCourse] = useState([])   
   const [displayPopUp, setdisplayPopUp] = useState(false)
   const [popUpMsg, setpopUpMsg] = useState('')
   const [popUpType, setpopUpType] = useState('error')
   const [popUpDuration, setpopUpDuration] = useState(1200)
   const [loading, setloading] = useState(true)
    const [loading2, setloading2] = useState(false)
        useEffect(()=>{
            const getCourse= async()=>{
                let response= getAllCourse(userId,token,'allCourse')
                let data= await response
                 if((data?.status)){
                    setallCourse(data?.message)
                     setloading(false)
                 }else{
                    setloading(false)
                    displayPopUpMessage(data?.code==='ERR_BAD_REQUEST' ? 'an error occured please try again later': data?.message ,setpopUpMsg,setpopUpType,setdisplayPopUp,data?.status)
                    cancelPopUP(setdisplayPopUp,500)
                }
            }
            getCourse()
        },[])
        // cod eto delete a course
    const handleDeleteCourse=async(id)=>{
        setloading2(true)
        let response= deleteCourse(userId,token,id,'deleteCourse')
        let data=await response
        setpopUpDuration(1200)
        if((data?.status)){
            setloading2(false)
            displayPopUpMessage(data?.message,setpopUpMsg,setpopUpType,setdisplayPopUp,data?.status)
            let newCourse=allCourse.filter((item)=> item._id !== id)
            setallCourse(newCourse)
        }else{
            setloading2(false)
            displayPopUpMessage(data?.code==='ERR_BAD_REQUEST' ? 'unable to add courses, an error occured please try again later': data?.message ,setpopUpMsg,setpopUpType,setdisplayPopUp,data?.status)
        }
        cancelPopUP(setdisplayPopUp,500)
        
    }

    // code to submit course registration
    const submitCourseReg=()=>{
        setpopUpDuration(4600)
        const firstSemesterElectiveCheck=allCourse.filter((item)=> item?.data?.Semester==='1ST' && item?.data?.Nature==='elective')
        const secondSemesterElectiveCheck=allCourse.filter((item)=> item?.data?.Semester==='2ND' && item?.data?.Nature==='elective')
            if(allCourse.length===16 && firstSemesterElectiveCheck.length===1 && secondSemesterElectiveCheck.length ===1)displayPopUpMessage('Congratulations you have successfully completed your course registration',setpopUpMsg,setpopUpType,setdisplayPopUp,true)
            else displayPopUpMessage('unable to submit course reg, all students are to select 7 core courses and one elective in both semesters',setpopUpMsg,setpopUpType,setdisplayPopUp,false)
            cancelPopUP(setdisplayPopUp,500)
        }
        const loaderStyle={
            margin:"38vh auto"
            }
 
    return (
       <div className="courseReg">
         {
            loading ?
                <Loader/>
                :
                <div>
                {
                    allCourse.length > 0 ?
                    <div className='Reg'>
                        {loading2 && <div className='loaderWrapper'><div className='loader'><Loader loaderStyle={loaderStyle}/></div></div>}
                        <div className='Result'>
                        <h2>Session 2024/2025</h2>
                        <table >
                            <thead>
                                <tr>
                                    <th>Course Code</th>
                                    <th>Course Title</th>
                                    <th>Unit</th>
                                    <th>Semester</th>
                                    <th>Nature</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                                {
                                allCourse.map(item=>{
                                    return  <tbody key={item._id}>
                                        <tr  key={item._id}><td>{item?.data?.CourseCode}</td><td>{item?.data?.CourseTitle}</td><td>{item?.data?.Unit}</td><td>{item?.data?.Semester}</td><td>{item?.data?.Nature}</td><td className='cancelMultiple delCourse'><button onClick={()=>handleDeleteCourse(item?._id)}>Delete Course</button></td></tr>
                                    </tbody>
                                })
                            }
                        </table>
                        <div className='submitBtn'><button onClick={submitCourseReg}><h3>Submit </h3></button></div>
                    </div>
                    </div>
                :
                    <div>
                        <NoResult/>
                    </div>
                }   
                </div>
         }
                <PopUpMessageWithAutoCancel popUpMsg={popUpMsg} displayPopUp={displayPopUp} type={popUpType} duration={popUpDuration}/>
       </div>
    )
}

export default CourseReg