import React from 'react'
import person1 from "../assets/nandi-photo-min.png"
import person2 from "../assets/winnie-photo-min.png"



const OurTeam = () => {
  return (
    <div className="team w-full  flex flex-col text-black" >
      
      <h1 className="mt-2 text-2xl text-center">We are removing friction For children and reading</h1>
        {/* Content Section */}
        <div className='flex flex-col justify-center items-center flex-grow'> 
          <h1 className='text-3xl md:text-4xl font-bold text-center'>Our Team</h1>
          
          {/* Cards Section */}
          <div className="md:flex justify-center gap-28 md:gap-36">
            {/* Person 1 */}
            <div className='flex flex-col items-center gap-2'>
              <img src={person1} className='h-40 md:h-72' alt='person1' />
              <h2 className="text-xl font-semibold">Nandi Fernandez</h2>
              <p className='font-bold text-xl'>CEO</p>
            </div>

            {/* Person 2 */}
            <div className='flex flex-col items-center gap-2'>
              <img src={person2} className='h-40 md:h-72' alt='person2' />
              <h2 className="text-xl font-semibold">Winnie Mangeni</h2>
              <p className='font-bold text-xl'>CTO</p>
            </div>
            
          </div>
        </div>
        
    </div>
  )
}

export default OurTeam
