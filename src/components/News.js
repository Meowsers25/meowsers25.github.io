import React , { useState } from 'react'
import './News.css'
import program from './images/2022.pdf'

const News = () => {
  return (
    <div>
      <div className='news'>
          <h2>Welcome to the CPFRA Website</h2>
          
          <p className='under'>To view the 2022 Firefighter Memorial Sunday program please click <a href={program} target='_blank' rel='noreferrer'><button className='btn'>here</button></a></p>

          <p className='download'>To download or print the current year's Medical Claim and Beneficiary forms, please click the link above. Please mail claims to:</p>

          <p className='under'>CPFRA<br></br>P.O. Box 20570<br></br>Cranston, RI 02920</p>

          <p className='under'>The revised by-laws are now available on our website. Please click the link above to view. Please contact any board member if you have questions.</p>

          <p className='under'>Monthly CPFRA meetings are held on the first Tuesday of each month, 6pm, with the exception of June, July, and August. The location is at the Local 1363 Union Hall on Avery St. All Association members are welcome.</p>
      </div>
    </div>
  )
}
export default News