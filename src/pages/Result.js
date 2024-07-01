import React from 'react'
import '../styles/pages/Result.scss'
function Result() {
    return (
        <div className='Result'>
            <div className="resultWrapper">
            <table >
                <thead>
                    <tr>
                        <th>Course Code</th>
                        <th  className='Result-none'>Course Title</th>
                        <th>Unit</th>
                        <th>Semester</th>
                        <th>Session</th>
                        <th>Grade</th>
                        <th>GP</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>BIO111</td><td className='Result-none'>Cell Biology</td>< td>2</td><td>1ST</td><td>2019/2020</td><td>C</td><td>6</td>
                        </tr>
                    <tr><td>CHM111</td><td className='Result-none'>Physical Chemistry</td><td>3</td><td>1ST</td><td>2019/2020</td><td>C</td><td>9</td></tr>
                    <tr><td>CIT111</td><td className='Result-none'>Introduction to Information Theory and Application</td><td>3</td><td>1ST</td><td>2019/2020</td><td>B</td><td>12</td></tr>
                    <tr><td>CPT111</td><td className='Result-none'>Introduction to Computer</td><td>2</td><td>1ST</td><td>2019/2020</td><td>A</td><td>10</td></tr>
                    <tr><td>GST110</td><td className='Result-none'>Use of English and Library</td><td>3</td><td>1ST</td><td>2019/2020</td><td>A</td><td>15</td></tr>
                    <tr><td>MAT111</td><td className='Result-none'>Algebra and Trigonometry</td><td>3</td><td>1ST</td><td>2019/2020</td><td>D</td><td>6</td></tr>
                    <tr><td>MAT112</td><td className='Result-none'>Vector, Geometry and Dynamics</td><td>3</td><td>1ST</td><td>2019/2020</td><td>A</td><td>15</td></tr>
                    <tr><td>PHY113</td><td className='Result-none'>Mechanics</td><td>3</td><td>1ST</td><td>2019/2020</td><td>B</td><td>12</td></tr>
                    <tr><td>STA117</td><td className='Result-none'>Introduction to Statistics</td><td>2</td><td>1ST</td><td>2019/2020</td><td>A</td><td>10</td></tr>
                    <tr><td>CHM121</td><td className='Result-none'>Organic Chemistry</td><td>3</td><td>2ND</td><td>2019/2020</td><td>D</td><td>6</td></tr>
                    <tr><td>CPT121</td><td className='Result-none'>Introduction to Programming</td><td>2</td><td>2ND</td><td>2019/2020</td><td>A</td><td>10</td></tr>
                    <tr><td>GRY124</td><td className='Result-none'>Introduction to Environmental science</td><td>3</td><td>2ND</td><td>2019/2020</td><td>A</td><td>15</td></tr>
                    <tr><td>GST103</td><td className='Result-none'>Nigerian People and Culture</td><td>2</td><td>2ND</td><td>2019/2020</td><td>B</td><td>8</td></tr>
                    <tr><td>GST121</td><td className='Result-none'>Use of English II</td><td>2</td><td>2ND</td><td>2019/2020</td><td>A</td><td>10</td></tr>
                    <tr><td>MAT121</td><td  className='Result-none'>Differential and Integral Calculus</td><td>3</td><td>2ND</td><td>2019/2020</td><td>B</td><td>12</td></tr>
                    <tr><td>PHY123</td><td  className='Result-none'>Properties of Matter</td><td>2</td><td>2ND</td><td>2019/2020</td><td>A</td><td>10</td></tr>
                    <tr><td>PHY126</td><td  className='Result-none'>Electricity and Magnetism</td><td>3</td><td>2ND</td><td>2019/2020</td><td>C</td><td>9</td></tr>
                    <tr><td>STA127</td><td  className='Result-none'>Probability II</td><td>2</td><td>2ND</td><td>2019/2020</td><td>D</td><td>4</td></tr>
                    <tr><td className='none'></td><th className='Result-none'>Total</th><th>46</th><td className='none'></td><td className='none'></td><td className='none'></td><th>179</th></tr>   
                </tbody>
            </table>
            <center>
                GPA =   3.89
                <br/>
                CGPA =   3.89
            </center>
            <div className='btn'><button ><h3>Print</h3></button></div>
            </div>
         </div>   
    )
}

export default Result
