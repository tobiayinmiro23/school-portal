import axios from "axios";
export const signin= async(userName,password,route)=>{
  try{
        let response= axios({
          method: 'post',
          // url: `http://localhost:3000/${route}`,
          url: `https://courseregistrationbackend.onrender.com/${route}`,
          withCredentials:true,
          data: {
            userName,
           password
         }
        })
          let data= await response
          return  data
       }catch(err){
        return err
       }
}

export const login= async(userName,password,checkBox,route)=>{
  try{
        let response= axios({
          method: 'post',
          url: `https://courseregistrationbackend.onrender.com/${route}`,
          withCredentials:true,
          headers:{checked:checkBox},
          data: {
            userName,
           password,
           checked:checkBox
         }
        })
          let data= await response
          return  data.data
       }catch(err){
        return err
       }
}

export const rememberMe=async(route)=>{
   try{
    let response=axios({
      method: 'get',
      url: `https://courseregistrationbackend.onrender.com/${route}`,
      withCredentials:true,
    })
    let data=await response
      return  data
   }catch(err){
   }
}

export const ForgotPassword=async(password,userid,token,route)=>{
  try{
    let response= axios({
      method: 'post',
      url: `https://courseregistrationbackend.onrender.com/${route}`,
      withCredentials:true,
      data: {
        password
      },
      headers: {
        userid,
        token
        },
    })
      let data= await response
      return  data.data
   }catch(err){
    return err
   }
}

export const UploadingPhoto=async(photo,userid,token,route)=>{
  try{
    let response= axios({
      method: 'post',
      url: `https://courseregistrationbackend.onrender.com/${route}`,
      withCredentials:true,
      data: {
        photo
      },
      headers: {
        userid,
        token
        },
    })
      let data= await response
      return  data.data
   }catch(err){
    return err
   }
}

// for add course and add multiple course
export const addCourse=async(userid,token,body,route)=>{
  try{
    let response= axios({
      method: 'post',
      url: `https://courseregistrationbackend.onrender.com/${route}`,
      withCredentials:true,
      headers: {
        userid,
        token
        },
            data:body
    })
      let data= await response
      return  data.data
   }catch(err){
    return err
   }
}

export const getAllCourse=async(userid,token,route)=>{
  try{
    let response= axios({
      method: 'post',
      url: `https://courseregistrationbackend.onrender.com/${route}`,
      withCredentials:true,
      data: {
        userid,
        token
        },
    })
      let data= await response
      return  data.data
   }catch(err){
    return err
   }
}
export const deleteCourse=async(userId,token,id,route)=>{
  try{
    let response= axios({
      method: 'delete',
      url: `https://courseregistrationbackend.onrender.com/${route}/${id}`,
      withCredentials:true,
      data: {
        userId,
        token
      },
    params:{
        id
    }
    })
      let data= await response
      return  data.data
   }catch(err){
    return err
   }
}