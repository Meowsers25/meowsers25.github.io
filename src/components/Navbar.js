import React, {useState} from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import './Navbar.css'
import bylaws from './images/2021ByLaws.pdf'
import forms from './images/PACKET2022.pdf'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
  return (
    <div className='header'>
        <nav className='navbar'>
            <a href='/' className='logo'>
                <h1>CPFRA</h1>
            </a>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={33}/>) : (<FaBars size={33}/>)}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'><a href='/news'>News</a></li>
                <li className='nav-item'><a href='/recent'>Recent Deaths</a></li>
                <li className='nav-item'><a href='/bod'>Board of Directors</a></li>
                <li className='nav-item'><a href={forms} target='_blank' rel='noreferrer'>Forms</a></li>
                <li className='nav-item'><a href={bylaws} target='_blank' rel='noreferrer'>By-Laws</a></li>
            </ul>
        </nav>
    </div>
  )
}
export default Navbar