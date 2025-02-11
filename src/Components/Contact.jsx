import React from 'react'
import ContactPhoto from  "../assets/bottom_art.png"

const Contact = () => {
  return (
    <div className='contact bg-green-900 flex flex-col sm:flex-row relative items-center justify-center text-white pt-10 md:py-10'>
      <div className="details flex flex-col gap-10 justify-between items-center text-center">
        <h1 className='font-bold text-3xl bubblegum-sans-regular '>Be The First To Know!</h1>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <input type="email" placeholder="Enter your email" className="p-2 rounded text-black" />
          <button className="py-2 px-8 bg-yellow-400 text-white font-bold rounded">JOIN</button>
        </div>
      </div>
      {/* Image below input on mobile */}
      <img src={ContactPhoto} className='h-96 sm:absolute sm:left-0 sm:bottom-0 sm:block' alt="Contact" />
    </div>
  )
}

export default Contact
