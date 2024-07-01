import React from 'react'
import { lectureMaterials } from '../database/Resources'
import '../styles/pages/Resource.scss'
function Resource() {
    return (
        <div className='Resource'>
            <h2>Download handouts below</h2>
            <select name="" id="">
                <option style={{fontweight:'bolder'}} value="">--Select course--</option>
                {
                    lectureMaterials.map((item)=><option key={item.No}>{item.CourseCode}</option>)
                }
            </select>
            <div className="btn"><button ><h3>Download</h3></button></div>
        </div>
    )
}

export default Resource
