import React from 'react'
import person1 from "../assets/nandi-photo-crp.jpeg"
import person2 from "../assets/winnie-photo-crp.jpeg"



const OurTeam = () => {
  return (
    <div className="team w-full bg-gradient-to-b from-cyan-500 to-blue-500 flex flex-col">
        {/* Divider */}
        <div className='w-full h-4 bg-blue-600'></div>

        {/* Content Section */}
        <div className='flex flex-col justify-center items-center flex-grow text-white border'> 
          <h1 className='text-4xl font-bold text-center bubblegum-sans-regular '>Our Team</h1>
          
          {/* Cards Section */}
          <div className="md:flex justify-center gap-28">
            {/* Person 1 */}
            <div className='flex flex-col items-center gap-2'>
              <img src={person1} className='h-40 w-40 md:h-72 md:w-72  rounded-full border-8 border-pink-600' alt='person1' />
              <h2 className="text-xl font-bold">Nandi Fernandez</h2>
              <p>CEO</p>
            </div>

            {/* Person 2 */}
            <div className='flex flex-col items-center gap-2'>
              <img src={person2} className='h-40 w-40 md:h-72 md:w-72 rounded-full border-8 border-pink-600' alt='person2' />
              <h2 className="text-xl font-semibold">Winnie Mangeni</h2>
              <p className='font-bold text-xl'>CTO</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default OurTeam
