import React, { useState } from 'react';
import SignUpModal from './SignUpModal';

const GetStarted = () => {
  const [showModal, setShowModal] = useState(false);

  const handleGetStartedClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div className='bg-blue-600 text-white flex flex-col justify-center items-center py-5 gap-4'>
      <h1 className='text-4xl'>A World Awaits!</h1>
      <button
        className="w-1/3 md:w-1/6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-1 px-2 rounded-lg"
        onClick={handleGetStartedClick}
      >
        Get Started
      </button>
      {showModal && <SignUpModal setShowSignup={setShowModal}/>}
    </div>
  );
};

export default GetStarted;
