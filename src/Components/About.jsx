import React from 'react'
import AboutPic from "../assets/about_art.png"
import FloatingPic from "../assets/page-decoration.png"

const About = () => {
  return (
    <div className="about flex flex-col sm:flex-row relative items-center sm:items-start">
      {/* Floating Image - Visible only on screens larger than mobile */}
      <img src={FloatingPic} className="h-96 absolute left-[-8rem] top-[-8rem] hidden sm:block" alt="Floating" />

      <div className='container mx-auto flex flex-col justify-center sm:w-1/2 items-center p-4 gap-4'>
        <h1 className='text-4xl font-bold text-center'>At Toto we are removing friction from children and reading</h1>
        <p className='text-center text-3xl'>Transforming literacy across the continent with culturally relevant stories, phonetic-based content, and solar-powered solutions</p>
        <button className='bg-blue-600 px-3 py-1 text-white'>Learn more</button>
      </div>

      <img src={AboutPic} className="h-96" alt="About" />
    </div>
  )
}

export default About
