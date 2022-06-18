import React from 'react'
import './LectureTimeTable.css'
function LectureTimeTable() {
    return (
        <div className='lecturetimetable'>
            <div className="timetable">
                <h1>Lecture Time Table</h1>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Day</th>
                                <th>8:00AM</th>
                                <th>9:00AM</th>
                                <th>10:00AM</th>
                                <th>11:00AM</th>
                                <th className='lecturenone'>12:00PM</th>
                                <th className='lecturenone'>1:00PM</th>
                                <th className='lecturenone'>2:00PM</th>
                                <th className='lecturenone'>3:00PM</th>
                                <th>4:00PM</th>
                                <th  className='timetablenone'>5:00PM</th>
                                <th className='timetablenone'>6:00PM</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><h3>Mon</h3></td>
                                <td></td>
                                <td className='class'><h5>MAT212</h5><p>2hrs</p></td>
                                <td></td>
                                <td></td>
                                <td className='lecturenone'></td>
                                <td className='lecturenone'></td>
                                <td className='lecturenone'></td>
                                <td className='lecturenone'></td>
                                <td className='class'><h5>MAT212</h5><p>2hrs</p></td>
                                <td className='timetablenone'></td>
                                <td className='timetablenone'></td>
                            </tr>
                            <tr>
                                <td><h3>Tue</h3></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className='class'><h5>CPT211</h5><p>1hr</p></td>
                                <td className='lecturenone'></td>
                                <td className='lecturenone'></td>
                                <td className='lecturenone'></td>
                                <td className='lecturenone'></td>
                                <td></td>
                                <td className='timetablenone'></td>
                                <td className='timetablenone'></td>
                            </tr>
                            <tr>
                                <td><h3>Wed</h3></td>
                                <td  className='class'><h5>MAT216</h5><p>2hrs</p></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className='lecturenone'></td>
                                <td className='lecturenone'></td>
                                <td className='lecturenone'></td>
                                <td className='lecturenone'></td>
                                <td className='timetablenone'></td>
                                <td className='timetablenone'></td>
                            </tr>
                            <tr>
                                <td ><h3>Thur</h3></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className='lecturenone'></td>
                                <td className='lecturenone'></td>
                                <td className='lecturenone'></td>
                                <td className='lecturenone'></td>
                                <td className='timetablenone'></td>
                                <td className='timetablenone'></td>
                            </tr>
                            <tr>
                                <td ><h3>Fri</h3></td>
                                <td></td>
                                <td className='class'><h5>STA217</h5><p>1hr</p></td>
                                <td className='class'><h5>MAT216</h5><p>1hr</p></td>
                                <td></td>
                                <td></td>
                                <td className='lecturenone'></td>
                                <td className='lecturenone'></td>
                                <td className='lecturenone'></td>
                                <td className='lecturenone'></td>
                                <td className='timetablenone'></td>
                                <td className='timetablenone'></td>
                            </tr>
                            <tr>
                                <td><h3>Sat</h3></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className='lecturenone'></td>
                                <td className='lecturenone'></td>
                                <td className='lecturenone'></td>
                                <td className='lecturenone'></td>
                                <td className='timetablenone'></td>
                                <td className='timetablenone'></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="details">
                <div>
                    <h1>Details</h1>
                    <thead>
                        <tr><th>Courses</th><th>Venue</th><th>Lecturer(s)</th></tr>
                    </thead>
                    <tr>
                        <td>CPT211</td><td>SICT LT</td><td><strong>Staff Name: Dr. Bashir Sulaimon Adebayo</strong><br/> Department of Computer Science<br/> Contact No/email: 09097622911<br/> email: bashirsulaimon@futminna.edu.ng<br/> Office: <br/><br/><strong>Staff Name: Adama Ndako Victor</strong><br/> Department of Computer Science<br/> Contact No/email: 08060243457<br/> email: vnadama@futminna.edu.ng<br/> Office: <br/><br/></td>
                    </tr>
                    <tr>
                        <td>CPT213</td><td></td><td><strong>Staff Name: Abisoye Opeyemi Aderike</strong><br/> Department of Computer Science<br/> Contact No/email: 08060546074<br/> email: o.abisoye@futminna.edu.ng<br/> Office: <br/><br/><strong>Staff Name: Mohammed Idris Kolo</strong><br/> Department of Computer Science<br/> Contact No/email: 07039780788<br/> email: idris.kolo@futminna.edu.ng<br/> Office: <br/><br/></td>
                    </tr>
                    <tr>
                        <td>CPT214</td><td></td><td><strong>Staff Name: Ugwuoke Cosmas Uchenna</strong><br/> Department of Computer Science<br/> Contact No/email: 08065477056<br/> email: cosmas.uchenna@futminna.edu.ng<br/> Office: <br/><br/><strong>Staff Name: Ayobami Ekundayo</strong><br/> Department of Computer Science<br/> Contact No/email: 08066025009<br/> email: a.ekundayo@futminna.edu.ng<br/> Office: <br/><br/></td>
                    </tr>
                    <tr>
                        <td>CSS216</td><td></td><td><strong>Staff Name: </strong><br/> Department of Computer Science<br/> Contact No/email: <br/> email: <br/> Office: <br/><br/></td>
                    </tr>
                    <tr>
                        <td>MAT212</td><td>Lecture Room 3, Agric. Extension</td><td><strong>Staff Name: HAKIMI DANLADI</strong><br/> Department of Mathematics<br/> Contact No/email: 08034513313<br/> email: hakimi_shengu@yahoo.com<br/> Office: <br/><br/><strong>Staff Name: MUHAMMAD RAIHANATU</strong><br/> Department of Mathematics<br/> Contact No/email: 08036128483<br/> email: r.muhd@futminna.edu.ng<br/> Office: <br/><br/><strong>Staff Name: Samuel Abu Somma</strong><br/> Department of Mathematics<br/> Contact No/email: 08068037304<br/> email: sam.abu@futminna.edu.ng<br/> Office: Room 227,<br/> School of Physical Sciences Complex,<br/> Bosso Campus<br/></td>
                    </tr>
                    <tr>
                        <td>MAT216</td><td>NLH1 and DH</td><td><strong>Staff Name: BOLARIN GBOLAHAN AKINTAYO</strong><br/> Department of Mathematics<br/> Contact No/email: 08187141978<br/> email: g.bolarin@futminna.edu.ng<br/> Office: <br/><br/><strong>Staff Name: Jimoh Omanany Razaq</strong><br/> Department of Mathematics<br/> Contact No/email: 08077808699<br/> email: razaq.jimoh@futminna.edu.ng<br/> Office: Room 226,<br/> School of Physical Sciences Complex,<br/> Bosso Campus<br/><br/><strong>Staff Name: Oguntolu Festus Abiodun</strong><br/> Department of Mathematics<br/> Contact No/email: 08166119526<br/> email: festus.tolu@futminna.edu.ng<br/> Office: <br/><br/></td>
                    </tr>
                    <tr>
                        <td>STA217</td><td></td><td><strong>Staff Name: Prof. Audu Isah</strong><br/> Department of Statistics<br/> Contact No/email: 08034684287<br/> email: aisah@futminna.edu.ng<br/> Office: <br/><br/><strong>Staff Name: O. M. Adetutu</strong><br/> Department of Statistics<br/> Contact No/email: 08030737153<br/> email: ola.adetutu@futminna.edu.ng<br/> Office: <br/><br/><strong>Staff Name: Usman Abdullahi</strong><br/> Department of Statistics<br/> Contact No/email: 08032892723<br/> email: u.abdullahi@futminna.edu.ng<br/> Office: <br/><br/><strong>Staff Name: MAYAKI JAMES</strong><br/> Department of Statistics<br/> Contact No/email: 08030944224<br/> email: j.mayaki@futminna.edu.ng<br/> Office: <br/><br/><strong>Staff Name: Usman Abubakar</strong><br/> Department of Statistics<br/> Contact No/email: 8035924242<br/> email: abuusman@futminna.edu.ng<br/> Office: <br/><br/></td>
                    </tr>
                </div>
            </div>
        </div>
    )
}

export default LectureTimeTable
