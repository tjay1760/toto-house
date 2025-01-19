import React from 'react'
import ContactPhoto from  "../assets/bottom_art.png"

const Contact = () => {
  return (
    <div className=' bg-green-900 flex relative items-center justify-center text-white py-10'>
      <img src={ContactPhoto} className='h-96 absolute left-0 bottom-0' alt="Contact" />
      <div className="details flex flex-col gap-10  justify-between">
        <h1 className='font-bold text-3xl'>Be The First To Know!</h1>
        <div className="items">
        <input type="email" placeholder="Enter your email" className="mt-2 p-2 rounded" />
        <button className="py-2 px-8 bg-yellow-400 text-white font-bold rounded">JOIN</button>
        </div>
        
      </div>
    </div>
  )
}

export default Contact