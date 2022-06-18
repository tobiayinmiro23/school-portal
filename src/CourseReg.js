import React from 'react'
import './CourseReg.css'
const CourseReg = () => {
    return (
        <div className='Reg'>
            <div className='Result'>
                <h2>Session 2021/2022</h2>
                <h3>1st Semester Courses</h3>
            <table >
                <thead>
                    <tr>
                        <th>Course Code</th>
                        <th  className='Result-none'>Course Title</th>
                        <th>Unit</th>
                        <th>Semester</th>
                        <th>Nature</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>CPT211</td><td className='Result-none'>Object-Oriented Programming I</td>< td>3</td><td>1ST</td><td>core</td></tr>
                    <tr><td>CPT213</td><td className='Result-none'>Computer Organization and Assembly Language</td><td>2</td><td>1ST</td><td>core</td></tr>
                    <tr><td>CPT214</td><td className='Result-none'>Computer Architecture</td><td>3</td><td>1ST</td><td>core</td></tr>
                    <tr><td>CSS216</td><td className='Result-none'>	Cryptography Theory 1</td><td>3</td><td>1ST</td><td>elective</td></tr>
                    <tr><td>GST211</td><td className='Result-none'>Logic and Philosophy</td><td>2</td><td>1ST</td><td>core</td></tr>
                    <tr><td>MAT212</td><td className='Result-none'>Linear Algebra I</td><td>2</td><td>1ST</td><td>core</td></tr>
                    <tr><td>MAT216</td><td className='Result-none'>Mathematical Methods I</td><td>3</td><td>1ST</td><td>core</td></tr>
                    <tr><td>STA217</td><td className='Result-none'>Probability II</td><td>3</td><td>1ST</td><td>core</td></tr>
                </tbody>
            </table>
            <p>Total Credit Unit:21</p>
         </div>   
         <div className='Result'>
         <h3>2nd Semester Courses</h3>
            <table >
                <thead>
                    <tr>
                        <th>Course Code</th>
                        <th  className='Result-none'>Course Title</th>
                        <th>Unit</th>
                        <th>Semester</th>
                        <th>Nature</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>C1T224</td><td className='Result-none'>Discrete Mathematical Structure</td>< td>3</td><td>2ND</td><td>core</td></tr>
                    <tr><td>CPT221</td><td className='Result-none'>Object-Oriented Programming II</td><td>3</td><td>2ND</td><td>core</td></tr>
                    <tr><td>CPT214</td><td className='Result-none'>Data Structures</td><td>3</td><td>2ND</td><td>core</td></tr>
                    <tr><td>CSS216</td><td className='Result-none'>Introduction to Algorithms</td><td>3</td><td>2ND</td><td>core</td></tr>
                    <tr><td>GST211</td><td className='Result-none'>	Introduction to Web Design</td><td>2</td><td>2ND</td><td>core</td></tr>
                    <tr><td>MAT212</td><td className='Result-none'>	Hardware Systems and Maintenance</td><td>1</td><td>2ND</td><td>core</td></tr>
                    <tr><td>MAT216</td><td className='Result-none'>Linear Algebra II</td><td>2</td><td>2ND</td><td>core</td></tr>
                    <tr><td>STA217</td><td className='Result-none'>Introduction to Numerical Analysis</td><td>3</td><td>2ND</td><td>core</td></tr>
                </tbody>
            </table>
            <p>Total Credit Unit:20</p>
            <div className="signature">
                <h4>Validated</h4>
                <h4>HOD</h4>
                <h4>Dean</h4>
                <h4>Register</h4>
            </div>
            <button className='btn'><h3>Print</h3></button>
         </div>   
        </div>
    )
}

export default CourseReg
