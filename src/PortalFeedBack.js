import React from 'react'
import './PortalFeedBack.css'
function PortalFeedBack() {
    return (
        <div className='portalFeedBack'>
            <h1>Feed Back</h1>
            <form action="">
                <textarea required placeholder='Message' name="" id="" cols="30" rows="10"></textarea>
                <button>send</button>
            </form>
        </div>
    )
}

export default PortalFeedBack
