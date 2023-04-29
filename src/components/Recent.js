import React from 'react'
import './Recent.css'
import Data from './obituaries.json'

const Recent = () => {
    return (
    <div className='recent'>
        <h2>Recent Deaths</h2>
        <div className="obits">
            {Data.map((item, id) => {
                return(
                    <div className='individual'>
                        <p className='title'>{item.title}</p>
                        <p className=''>{item.name}</p>
                        <p className=''>{item.date}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}
export default Recent