import React from 'react'
import '../styles/component/NoResult.scss'

const NoResult = () => {
  return (
    <div className='NoResult'>
        <div className='NoResultImg'>
            <img src="/image/undraw_No_data_re_kwbl (2).png" alt="no data" />
        </div>
        <h2>Sorry, no records were found</h2>
    </div>
  )
}

export default NoResult