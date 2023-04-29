import React from 'react'
import './Hero.css'

const Hero = () => {
  let date = new Date().getFullYear()
  return (
    <div className='hero'>
        <div className='content'>
            <p>Cranston</p>
            <p>Permanent Firefighter's</p>
            <p>Relief Association</p>
        </div>
        <footer>
            <p>Copyright &copy; Meowsers25 {date}</p>
        </footer>
    </div>
  )
}
export default Hero