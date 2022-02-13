import React from 'react'
import './Resource.css'
function Resource() {
    return (
        <div className='Resource'>
            <h2>Download handouts below</h2>
            <select name="" id="">
                <option style={{fontweight:'bolder'}} value="">--Select course--</option>
                <option value="">CPT211</option>
                <option value="">CPT213</option>
                <option value="">GST211</option>
                <option value="">CPT214</option>
                <option value="">CSS216</option>
                <option value="">MAT212</option>
                <option value="">MAT216</option>
                <option value="">STA217</option>
            </select>
            <button>Download</button>
        </div>
    )
}

export default Resource
