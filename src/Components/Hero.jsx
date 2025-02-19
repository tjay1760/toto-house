import React, { useState } from "react";
import BackgroundImg from "../assets/Hero Mobile.jpeg";
import BackgroundImgDsk from "../assets/hero-header.jpeg";

const Hero = () => {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div
      className="home relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${window.innerWidth >= 768 ? BackgroundImgDsk : BackgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Blur background when modal is active */}
      <div className={`relative h-full flex-col justify-center items-center text-white ${showSignup ? "backdrop-blur-md" : ""}`}>
        <div className="text-content md:w-2/4 flex flex-col items-center justify-center mt-10 md:mt-10 md:ml-32 lg:mt-28 lg:ml-48 md:p-3 absolute">
          <h1 className="font-bold text-3xl mt-8 md:text-5xl text-center px-4 z-10 md:mb-3">
            Little Readers are Little Leaders.
          </h1>
          <p className="md:text-2xl text-base lg:w-2/3 font-semibold text-center px-4">
            Inspire a love for reading and a passion for change with our global library of diverse student stories.
          </p>
          <button
            className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg shadow-md"
            onClick={() => setShowSignup(true)}
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Signup Modal */}
      {showSignup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sign Up</h2>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 mb-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 mb-2 border border-gray-300 rounded"
            />
            <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 rounded-lg">Submit</button>
            <button
              className="w-full mt-2 text-gray-700 hover:text-gray-900"
              onClick={() => setShowSignup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
