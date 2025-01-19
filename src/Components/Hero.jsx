import React from 'react'
import HeroBgImage from '../assets/hero_reader.jpg'

const Hero = () => {    
  return (
    <div className='h-screen flex justify-center items-center bg-blue-300'
    style={{
      backgroundImage: `url(${HeroBgImage})`,
      backgroundSize: "cover",
    }}
    >
      <h1 className='text-white font-bold text-6xl'>LITTLE READERS ARE LITTLE LEADERS</h1>
    </div>
  )
}

export default Hero