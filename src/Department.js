import React from 'react'
import './Department.css'
function Department() {
    return (
        <div className='Department'>
            <div className='lecturers'>
                <h1>Lecturers</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Course(s)  2021/2022 Session</th>
                    </tr>
                </thead>   
                <tbody>
                    <tr><td>Mohammed Idris Kolo</td><td></td></tr>
                    <tr><td>JOHN K. ALHASSAN</td><td></td></tr>
                    <tr><td>Solomon Adelowo Adepoju</td><td></td></tr>
                    <tr><td>Aminu Enesi Femi</td><td></td></tr>
                    <tr><td>Ugwuoke Cosmas Uchenna</td><td></td></tr>
                    <tr><td>Shehu Ibrahim Shehi</td><td></td></tr>
                    <tr><td>Dr. Abdullahi Muhammad Bashir </td><td></td></tr>
                    <tr><td>Dr. Ojerinde Oluwaseun Adeniyi </td><td></td></tr>
                    <tr><td>Falaye Adeyinka Adesuyi</td><td></td></tr>
                    <tr><td>Adama Ndako Victor</td><td></td></tr>
                    <tr><td>Muhammad Kudu Muhammad</td><td></td></tr>
                    <tr><td>Dr. Ameen Ahmed Oloduowo</td><td></td></tr>
                    <tr><td>Dr. Bashir Sulaimon Adebayo</td><td></td></tr>
                    <tr><td>Saliu Adam Muhammad</td><td></td></tr>
                    <tr><td>Abisoye Opeyemi Aderike</td><td></td></tr>
                    <tr><td>Dr. Mohammed Danlami Abdulmalik</td><td></td></tr>
                    <tr><td>Murtala Aminu Buhari</td><td></td></tr>
                    <tr><td>Ayobami Ekundayo</td><td></td></tr>
                    <tr><td>Lasotte Yakubu Boyi-Musa</td><td></td></tr>
                    <tr><td>Lawal Kehinde Hussein</td><td></td></tr>
                    <tr><td >SANI ALKALI UMAR</td><td></td></tr>
                </tbody>
             </table>
            </div>
            <div className="courses">
                <h1>All courses</h1>
            <tbody>
                 <tr><td style={{background:'#61dafbdb', color:'#FFF'}}>BIO111</td><td>General Biology I (Cell Biology)</td></tr>
                <tr><td style={{background:'#61dafbdb', color:'#FFF'}}>CHM111</td><td>Physical Chemistry I</td></tr>
                <tr><td style={{background:'#61dafbdb', color:'#FFF'}}>CHM121</td><td>Organic chemistry I</td></tr>
                <tr><td style={{background:'#61dafbdb', color:'#FFF'}}>CPT111</td><td>Introduction to Computer Science</td></tr>
                <tr><td style={{background:'#61dafbdb', color:'#FFF'}}>CPT121</td><td>Introduction to Problem Solving</td></tr>
                <tr><td>CSS121</td><td> Fundamentals of Cyber Security I</td></tr>
                <tr><td style={{background:'#61dafbdb', color:'#FFF'}}>GRY124</td><td>Introduction to Environmental Science</td></tr>
                <tr><td style={{background:'#61dafbdb', color:'#FFF'}}>GST103</td><td>Nigerian Peoples and Culture</td></tr>
                <tr><td>GST104</td><td>Introduction to Principles of Economics</td></tr>
                <tr><td style={{background:'#61dafbdb', color:'#FFF'}}>GST110</td><td>Use of English I and Library</td></tr>
                <tr><td style={{background:'#61dafbdb', color:'#FFF'}}>GST121</td><td>Use of English II</td></tr>
                <tr><td style={{background:'#61dafbdb', color:'#FFF'}}>MAT111</td><td>Algebra &amp; Trigonometry</td></tr>
                <tr><td style={{background:'#61dafbdb', color:'#FFF'}}>MAT112</td><td>Geometry and Trigonometry</td></tr>
                <tr><td style={{background:'#61dafbdb', color:'#FFF'}}>MAT121</td><td>Differential and Integral Calculus</td></tr>
                <tr><td>PHY100</td><td>General Physics Laboratory</td></tr>
                <tr><td style={{background:'#61dafbdb', color:'#FFF'}}>PHY113</td><td>General Physics I</td></tr>
                <tr><td style={{background:'#61dafbdb', color:'#FFF'}}>PHY123</td><td>General Physics II</td></tr>
                <tr><td style={{background:'#61dafbdb', color:'#FFF'}}>PHY126</td><td>General Physics III</td></tr>
                <tr><td style={{background:'#61dafbdb', color:'#FFF'}}>STA117</td><td>Introduction to Statistics I</td></tr>
                <tr><td>STA121</td><td>Statistical Computing I</td></tr>
                <tr><td style={{background:'#61dafbdb', color:'#FFF'}}>STA127</td><td>Probability I</td></tr>
                <tr><td>CIT224</td><td>Discrete Mathematical Structure </td></tr>
                <tr><td>CPT211</td><td>Object-Oriented Programming I</td></tr>
                <tr><td>CPT213</td><td>Computer Organization and Assembly Language </td></tr>
                <tr><td>CPT214</td><td>Computer Architecture</td></tr>
                <tr><td>CPT221</td><td>Object-Oriented Programming II</td></tr>
                <tr><td>CPT222</td><td>Data Structures</td></tr>
                <tr><td>CPT223</td><td>Introduction to Algorithms</td></tr>
                <tr><td>CPT224</td><td>Introduction to Web Design</td></tr>
                <tr><td>CPT226</td><td>Hardware Systems and Maintenance</td></tr>
                <tr><td>CSS216</td><td>Cryptography Theory 1</td></tr>
                <tr><td>GST211</td><td>Logic and Philosophy</td></tr>
                <tr><td>MAT212</td><td>Linear Algebra I</td></tr>
                <tr><td>MAT216</td><td>Mathematical Methods I</td></tr>
                <tr><td>MAT222</td><td>Linear Algebra II</td></tr>
                <tr><td>MAT225</td><td>Introduction to Numerical Analysis</td></tr>
                <tr><td>PHY216</td><td>Electric Circuits and Electronics</td></tr>
                <tr><td>STA217</td><td>Probability II</td></tr>
                <tr><td>CIT315</td><td>Internet Security</td></tr>
                <tr><td>CPT311</td><td>OBJECT-ORIENTED PROGRAMMING III</td></tr>
                <tr><td>CPT313</td><td>Operating System</td></tr>
                <tr><td>CPT314</td><td>COMPUTER ETHICS</td></tr>
                <tr><td>CPT316</td><td>Systems Analysis and Design</td></tr>
                <tr><td>CPT317</td><td>Data Communication and Networks I</td></tr>
                <tr><td>CPT318</td><td>HUMAN COMPUTER INTERATION</td></tr>
                <tr><td>CPT321</td><td>Computer Graphics</td></tr>
                <tr><td>CPT322</td><td>Introduction to Digital Design and Microprocessors</td></tr>
                <tr><td>CPT323</td><td>Automata, Computability and Complexity</td></tr>
                <tr><td>CPT324</td><td>Information Management</td></tr>
                <tr><td>CPT325</td><td>Database Design and Management</td></tr>
                <tr><td>CPT326</td><td>Computer and Network Security</td></tr>
                <tr><td>CPT327</td><td>INTERNET PROGRAMMING</td></tr>
                <tr><td>CPT328</td><td>Programming Language Translation II</td></tr>
                <tr><td>CSS311</td><td>CYBER CRIME &amp; COUNTER MEASURES</td></tr>
                <tr><td>CSS312</td><td>CRYPTOGRAPHY THOERY II</td></tr>
                <tr><td>CSS323</td><td>CYBER CRIME LAW</td></tr>
                <tr><td>GST311</td><td>Entrepreneurship I</td></tr>
                <tr><td>CIT411</td><td>Green IT</td></tr>
                <tr><td>CIT415</td><td>Research Writing and Methodology</td></tr>
                <tr><td>CPT410</td><td>User Centred Design</td></tr>
                <tr><td>CPT411</td><td> Net-centric Computing</td></tr>
                <tr><td>CPT413</td><td> Systems Operations Research</td></tr>
                <tr><td>CPT414</td><td> Design and Analysis of Algorithms</td></tr>
                <tr><td>CPT415</td><td> Compiler Construction</td></tr>
                <tr><td>CPT416</td><td>Software Engineering</td></tr>
                <tr><td>CPT417</td><td>Advanced Visual Basic Programming</td></tr>
                <tr><td>CPT418</td><td>Electronic Commerce  Technology</td></tr>
                <tr><td>SIW400</td><td>SIWES</td></tr>
                <tr><td>CPT511</td><td>Advanced Computer Networks</td></tr>
                <tr><td>CPT512</td><td>Current Trends in Computer Science</td></tr>
                <tr><td>CPT513</td><td>System Simulation and Modelling</td></tr>
                <tr><td>CPT515</td><td>Artificial Intelligence</td></tr>
                <tr><td>CPT516</td><td>Advance Database System</td></tr>
                <tr><td>CPT517</td><td>Entrepreneurship II</td></tr>
                <tr><td>CPT519</td><td>Computer Installation and Maintenance</td></tr>
                <tr><td>CPT521</td><td>Organization of Programming Languages</td></tr>
                <tr><td>CPT522</td><td>DATA MINING</td></tr>
                <tr><td>CPT523</td><td>Introduction to Mobile Computing
                </td></tr>
                <tr><td>CPT524</td><td>Expert Systems</td></tr>
                <tr><td>CPT525</td><td>System performance Evaluation</td></tr>
                <tr><td>CPT529</td><td>Project</td></tr>
                                            
            </tbody>
            </div>
        </div>
    )
}

export default Department
