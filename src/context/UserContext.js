import React,{createContext,useState} from 'react'
export let userContext=createContext()
const UserContext = ({children}) => {
    const [userId, setuserId] = useState('')
    const [matricNumber, setmatricNumber] = useState('')
    const [photoUrl, setphotoUrl] = useState('')
    const [token, settoken] = useState('')
    const [username, setusername] = useState('')
  return (
   <userContext.Provider value={[userId,setuserId,matricNumber, setmatricNumber,photoUrl,setphotoUrl,token,settoken,username, setusername]}>
    {children}
   </userContext.Provider>
  )
}

export default UserContext