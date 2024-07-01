import React,{useRef,useState,useContext,useEffect} from 'react'
import { SideBarData } from '../database/SideBar';
import { Link } from 'react-router-dom';
import '../styles/component/SideBar.scss'
import { Progress ,PopUpMessageWithAutoCancel} from '../AllFiles';
import { displayPopUpMessage} from '../helper function/popUp';
import { cancelPopUP } from '../helper function/cancelPopUp'
import {  UploadingPhoto} from '../hooks/Fetch'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { userContext } from '../context/UserContext';
import { getStorage ,ref ,uploadBytesResumable,getDownloadURL} from "firebase/storage";
import { storage } from '../firebase';



function SideBar({mobile,setmobile}) {
  let userData=useContext(userContext)
  const [userId,,,,photoUrl,,token,,,]=userData
    const [fileDownloadLink, setfileDownloadLink] = useState(photoUrl===null ? '/image/user.png' : photoUrl)
    const [uploading, setuploading] = useState(false)
    const [uploadProgress, setuploadProgress] = useState(0)
    const [popUpMsg, setpopUpMsg] = useState('')
    const [displayPopUp, setdisplayPopUp] = useState(false)
    const [popUpType, setpopUpType] = useState('error')
    const storage = getStorage();
    const upload=(file)=>{
      setuploading(true)
      const storageRef = ref(storage,`images/${Date.now()}${file.name}`);
      const uploadTask=uploadBytesResumable(storageRef, file)
          uploadTask.on('state_changed',
          (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setuploadProgress(progress)
          }, 
          (error) => {
            setuploading(false)
            displayPopUpMessage(error?.message|| 'an error occured ,try again later',setpopUpMsg,setpopUpType,setdisplayPopUp,false)
            cancelPopUP(setdisplayPopUp,500)
          }, 
          () => {
            // Upload completed successfully, now we can get the download URL
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setfileDownloadLink(downloadURL)
              UploadingPhoto(downloadURL,userId,token,'updateProfilePicture')
              .then( ()=>{
                displayPopUpMessage('photo successfully uploaded',setpopUpMsg,setpopUpType,setdisplayPopUp,true)
                cancelPopUP(setdisplayPopUp,500)
                setuploading(false)
              })
              .catch(error=>{
                displayPopUpMessage(error?.message|| 'an error occured ,try again later',setpopUpMsg,setpopUpType,setdisplayPopUp,false)
                cancelPopUP(setdisplayPopUp,500)
                setuploading(false)
              })
              setuploading(false)
              setuploadProgress(0)
            });
          }
        );
      }

    let DashBoard=useRef()
    let Result=useRef()
    let CourseReg=useRef()
    let RegisteredCourse=useRef()
    let Department=useRef()
    let Resource=useRef()
    let LectureTimetable=useRef()
    let SchoolCalendar=useRef()
    let MissedSession=useRef()
    let PortalFeedback=useRef()
    let ChangePassword=useRef()
    let refs=[DashBoard,Result,CourseReg,RegisteredCourse,Department,Resource,LectureTimetable,SchoolCalendar,MissedSession,PortalFeedback,ChangePassword]

    const Focus=(i)=>{
        refs.forEach((item)=>{ item.current.classList.remove('current') })
        refs[i].current.classList.add('current')
        if(mobile)setmobile(false)

    }
    // code for the sidebar focus stays on the current page if there is a refresh
    useEffect(()=>{
        if( window.location.pathname=== '/DashBoard')return
        let allSideBar=SideBarData.map((item)=> window.location.pathname.split('/')[2] === item.link )
        let currentSideBarIndex=allSideBar.findIndex((item)=> item=== true)
        Focus(currentSideBarIndex)
    },[])
    return (
         <div  className={'PortalLinks'}> 
            <div className="userimgwrapper">
                <div className="userimg">
                        {
                          uploading ?
                          <div className='progressWrapper'><Progress uploadProgress={uploadProgress}/></div>
                            :
                          <img src={fileDownloadLink} alt="" />
                        }
                </div> 
                <label className='uploadWrapper' >
                    <div className="img"><AddAPhotoIcon/></div>
                    <input type="file" name="upload" accept="image/*"  className='upload' onInput={(e)=>{upload(e.target.files[0])}
                      }  id="" />
                </label>
            </div>
            <hr color='white'/>
            {
                SideBarData.map((item,i)=>{
                    return <div  key={item.id}>
                        <Link to={item.link}  >
                            <div key={item.id}  onClick={(e)=>{Focus(i) }} ref={refs[i]} className={i===0 ? "general current" : "general"} >
                                <item.imgComponent className={'img'}/>
                                <h4>{item.text}</h4>
                            </div>
                        </Link>
                        <hr color='white'/>
                    </div>
                })
            }
            <PopUpMessageWithAutoCancel popUpMsg={popUpMsg} displayPopUp={displayPopUp} type={popUpType} duration={1200}/>
            <div className="cpy">
                <CopyrightIcon className="cpyimg"/>
                <p>Ayinmiro tobi all rights reserver</p>
            </div>
        </div>
    )
}

export default SideBar
