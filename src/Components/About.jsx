import React from 'react'
import AboutPic from "../assets/about_art.png"
import FloatingPic from "../assets/page-decoration.png"


const About = () => {
  return (
    <div className="about flex">
<div className='container mx-auto flex  flex-col justify-center w-1/2 items-center p-4 gap-4'>
      <h1 className='text-4xl font-bold text-center'>At Toto we are removing friction from children and reading</h1>
      <p className='text-center text-3xl'>Transfroming literacy across the continent with culturally relevant stories, phonetic based content and solar powered solutions</p>
      <button className='bg-blue-600 px-3 py-1'>Learn more</button>
    </div>
    <img src={AboutPic} className="h-96" alt="About" />
    </div>
    
  )
}

export default About
