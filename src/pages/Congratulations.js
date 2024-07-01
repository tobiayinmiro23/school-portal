import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/pages/Congratulations.scss'

const Congratulations = () => {

  return (
    <div className='Congratulations'>
      <div className="wrapper">
        <div className="img"><img src="/image/tick (1).png" alt="" /></div>
          <h2>Congratulations account successfully created</h2>
          <button><Link to='/Login'><h3>proceed to Login</h3></Link></button>
      </div>
    </div>
  )
}

export default Congratulations