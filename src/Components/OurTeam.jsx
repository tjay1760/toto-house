import React from 'react'
import person1 from "../assets/person-1.jpeg"
import person2 from "../assets/person-2.jpeg"

const OurTeam = () => {
  return (
    <div className="team min-h-screen w-full bg-gradient-to-b from-cyan-500 to-blue-500 flex flex-col">
        {/* Divider */}
        <div className='w-full h-4 bg-blue-600'></div>

        {/* Content Section */}
        <div className='flex flex-col gap-8 justify-center items-center flex-grow p-8 text-white'> 
          <h1 className='text-4xl font-bold text-center'>Our Team</h1>
          
          {/* Cards Section */}
          <div className="flex justify-center gap-14">
            {/* Person 1 */}
            <div className='flex flex-col items-center gap-2'>
              <img src={person1} className='h-96 rounded-full border-8 border-pink-600' alt='person1' />
              <h2 className="text-xl font-semibold">Jane Doe</h2>
              <p>CEO</p>
            </div>

            {/* Person 2 */}
            <div className='flex flex-col items-center gap-2'>
              <img src={person2} className='h-96 rounded-full border-8 border-pink-600' alt='person2' />
              <h2 className="text-xl font-semibold">Jane Smith</h2>
              <p className='font-bold text-xl'>CTO</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default OurTeam
