import React from 'react'
import {Result,SchoolCalendar} from '../AllFiles';
import '../styles/pages/DashBoard.scss'

function Dashbord () {
    return (
        <div>
            <SchoolCalendar/>
            <Result/>
            <div className="visionWrapper">
                <div className="vision">
                    <h1>Mission</h1>
                    <p>To become a world class and Nigeria's leading University recognized for its excellence in capacity building and service delivery.</p>
                </div>
                <div className="mision">
                    <h1>Vision</h1>
                    <p>As a specialized University we are committed to the training of skilled and innovative work-force that would transform Nigeria's natural resources into goods and services driven by entrepreneurship and Information and Communication Technology (ICT), to positively affect the economy and thus the quality of life of her people.</p>
                </div>
            </div>
            
        </div>
    )
}

export default Dashbord
