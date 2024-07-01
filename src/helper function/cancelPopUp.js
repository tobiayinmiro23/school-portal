export const cancelPopUP=(setdisplayPopUp,duration)=>{
    setTimeout(()=>{
        setdisplayPopUp(false)
    },duration)
}