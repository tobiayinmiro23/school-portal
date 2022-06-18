import React from 'react'
import './ChangePassword.css'
function ChangePassword() {
    return (
        <div className='changePassword'>
            <form action="">
                <input type="text" required placeholder='Student ID' name="" id="" />
                <input type="text" required placeholder='Matric No' name="" id="" />
                <input type="text" required placeholder='Jamb No' name="" id="" />
                <div className="btn">
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default ChangePassword
