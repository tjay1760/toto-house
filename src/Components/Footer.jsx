import React from 'react'
import Logo from '../assets/white_logo.png'
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className='bg-blue-600 text-white'>
      <div className="sec-one w-full flex flex-col sm:flex-row justify-between items-center py-4 px-8 gap-4">
        <img src={Logo} className='h-20 w-20' alt='logo' />
        
        <div className="links flex flex-col sm:flex-row gap-4 text-center">
          <Link to="home" smooth={true} duration={500} className="text-white hover:text-blue-400 cursor-pointer">Home</Link>
          <Link to="about" smooth={true} duration={500} className="text-white hover:text-blue-400 cursor-pointer">About</Link>
          <Link to="team" smooth={true} duration={500} className="text-white hover:text-blue-400 cursor-pointer">Team</Link>
          <Link to="contact" smooth={true} duration={500} className="text-white hover:text-blue-400 cursor-pointer">Contact</Link>
        </div>

        <div className="dots flex gap-4">
          <div className="dot h-2 w-2 rounded-full bg-black border-2"></div>
          <div className="dot h-2 w-2 rounded-full bg-black border-2"></div>
          <div className="dot h-2 w-2 rounded-full bg-black border-2"></div>
        </div>
      </div>

      <div className="divider w-5/6 border mx-auto"></div>
      <div className="texts text-center mt-4 pb-10">Little Readers Are Little Leaders</div>
    </div>
  )
}

export default Footer
