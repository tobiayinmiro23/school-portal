import React,{useState,useRef,useEffect,useContext} from 'react'
import '../styles/pages/CourseReg.scss'
import { allCourses } from '../database/CourseReg'
import Checkbox from '@mui/material/Checkbox';
import {PopUpMessage,PopUpMessageWithAutoCancel,Loader} from '../AllFiles'
import {addCourse} from '../hooks/Fetch'
import { userContext } from '../context/UserContext';
import { cancelPopUP } from '../helper function/cancelPopUp'
import { displayPopUpMessage } from '../helper function/popUp';


const AddCourse = () => {
    let userData=useContext(userContext)
    const [userId,,,,,,token,,,]=userData
    const [selectMultipleCourse, setselectMultipleCourse] = useState(false)
   const [allRefs, setallRefs] = useState([])
   const [checkAll, setcheckAll] = useState(false)
   const [displayPopUp, setdisplayPopUp] = useState(false)
   const [popUpMsg, setpopUpMsg] = useState('')
   const [popUpType, setpopUpType] = useState('error')
   const [checkAllInput, setcheckAllInput] = useState(false)
   const [loading, setloading] = useState(false)
   const noticeMessage='All students are to select 7 core courses and one elective in both semesters'
   const inputRef=useRef()


   const checkBothSemesters=(data)=>{ allCourses.map((item)=> item.checked=data) }
    // set both semesters checked property to false ,incase the user leaves and enters this page
   useEffect(()=>{
    checkBothSemesters(false)
   },[])
//    code to check and uncheck all input checkboxes
   useEffect(()=>{
    if(checkAll) checkBothSemesters(true)
    else checkBothSemesters(false)
    setallRefs([0]) 
   },[checkAll])

   const cancelMultipleCourse=()=>{
    setselectMultipleCourse(false)
    setcheckAll(false)
    setcheckAllInput(false)
    checkBothSemesters(false)

   }
    // code to add a single course
    const addSingleCourse=async(item)=>{
        setloading(true)
        let {checked,...body}=item
        // make a post request to the backend
            let response= addCourse(userId,token,body,'addCourse')
            let data=await response
            if((data?.status)){
                setloading(false)
                displayPopUpMessage(data?.message,setpopUpMsg,setpopUpType,setdisplayPopUp,data?.status)
            } else  {
                setloading(false)
                displayPopUpMessage(data?.code==='ERR_BAD_REQUEST' ? 'unable to add courses, an error occured please try again later': data?.message ,setpopUpMsg,setpopUpType,setdisplayPopUp,data?.status)
            }
            cancelPopUP(setdisplayPopUp,500)
    }
    // function to check an input checkbox
    const handleCheckInput=(e,item)=>{
        if(e.target.checked)item.checked=true
        else item.checked=false
        setallRefs([0])
    }

    // code to add a multiple courses
    const addMultipleCourse=async()=>{
        setloading(true)
        //get all checked courses and add a link id to match the backend schema
        let courses=allCourses.filter((item)=> item.checked=== true )
       
        // checks to see if no course was selected
        if(courses.length ===0){
            setloading(false)
            displayPopUpMessage('you have not selected any course',setpopUpMsg,setpopUpType,setdisplayPopUp,false)
            cancelPopUP(setdisplayPopUp,500)
            return
        }
        // check if more than one elective course was selected in each semester, user can only select one elective course in a semester
        const firstSemesterElectiveCheck=courses.filter((item)=> item.Semester==='1ST' && item.Nature==='elective')
        const secondSemesterElectiveCheck=courses.filter((item)=> item.Semester==='2ND' && item.Nature==='elective')
            if(firstSemesterElectiveCheck.length > 1 || secondSemesterElectiveCheck.length > 1){
                setloading(false)
                displayPopUpMessage('you can only select one elective course  in both semesters',setpopUpMsg,setpopUpType,setdisplayPopUp,false)
                cancelPopUP(setdisplayPopUp,500)
                return
            }
        // removes the checked key from the object
        let newCourse=courses.map(item=>{
            const {checked,...data}=item
            return data
        })
        // make a post request to the backend
            let response= addCourse(userId,token,newCourse,'addMultipleCourse')
            let data=await response
            if((data?.status)){
                setloading(false)
                displayPopUpMessage(data?.message,setpopUpMsg,setpopUpType,setdisplayPopUp,data?.status)
            } else  {
                setloading(false)
                displayPopUpMessage(data?.code==='ERR_BAD_REQUEST' ? 'unable to add courses, an error occured please try again later': data?.message ,setpopUpMsg,setpopUpType,setdisplayPopUp,data?.status)
            }
            cancelPopUP(setdisplayPopUp,500)
            setcheckAllInput(false)
            setcheckAll(false)
    }
    
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const loaderStyle={
    margin:"38vh auto"
    }
    return (
      <div className="courseReg">
          {loading && <div className='loaderWrapper'><div className='loader'><Loader loaderStyle={loaderStyle}/></div></div>}
              <div className='Reg'>
            <div className='Result'>
                <h2>Session 2024/2025</h2>
                <div className="multipleBtnWrapper">
                    {selectMultipleCourse ?
                    <div className='cancelMultiple'><button onClick={cancelMultipleCourse}><h3>cancel multiple course</h3></button></div>
                    :
                    <div className='multipleBtn'><button onClick={(e)=>setselectMultipleCourse(true)}><h3>select multiple course</h3></button></div>
                    }
                </div>
                <button ></button>
                <table >
                    <thead>
                        <tr>
                            {selectMultipleCourse && <th>
                            <Checkbox
                            ref={inputRef}
                            checked={checkAllInput}
                            {...label}
                            onChange={()=>{
                                setcheckAllInput(!checkAllInput)
                                setcheckAll(!checkAll)
                            }}
                            sx={{
                            color:'#60d9fb' ,
                            '&.Mui-checked': {
                                color:'#60d9fb' ,
                            },
                            }}
                            />
                            </th>}
                            <th>Course Code</th>
                            <th  >Course Title</th>
                            <th>Unit</th>
                            <th>Semester</th>
                            <th>Nature</th>
                            {!selectMultipleCourse && <th>Action</th>}
                        </tr>
                    </thead>
                        {
                        allCourses.map(item=>{
                            return  <tbody key={item.No}>
                                <tr  key={item.No}>{selectMultipleCourse && 
                                <td>
                                     <Checkbox
                                    {...label}
                                    checked={item.checked}
                                    sx={{
                                    color:'#60d9fb' ,
                                    '&.Mui-checked': {
                                        color:'#60d9fb' ,
                                    },
                                    }}
                                    onChange={(e)=>handleCheckInput(e,item)}
                                    />
                                </td>}<td>{item.CourseCode}</td><td>{item.CourseTitle}</td><td>{item.Unit}</td><td>{item.Semester}</td><td>{item.Nature}</td>{!selectMultipleCourse && <td><button onClick={()=>addSingleCourse(item)}>Add Course</button></td>}</tr>
                            </tbody>
                        })
                    }
                </table>
                {selectMultipleCourse && <div className='submitBtn'><button onClick={addMultipleCourse}><h3>Submit</h3></button></div>}
            </div>   
            <PopUpMessage noticeMessage={noticeMessage}/>
            <PopUpMessageWithAutoCancel popUpMsg={popUpMsg} displayPopUp={displayPopUp} type={popUpType} duration={1800}/>
        </div>
      </div>
    )
}

export default AddCourse



