import React from 'react'
import TalaVideo from "../assets/Tala-Video.mp4"


const Contact = () => {
   
  return (
    <div className='contact py-5 bg-green-900 text-white flex flex-col justify-center items-center'>
      
      <h1 className="mt-4 font-bold text-2xl md:text-4xl">Introducing Tala</h1>
      <video className="w-2/3 md:w-1/2 mt-4 rounded-lg" autoPlay loop muted>
        <source src={TalaVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1 className="mt-4 text-2xl">Support Us on  
        <a href='kickstarter.com'> KickStarter</a></h1>
    </div>
  )
}

export default Contact
