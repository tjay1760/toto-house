import React from "react";
import BackgroundImg from "../assets/hero_reader.jpg";
import BackgroundImgDsk from "../assets/hero-header.jpeg";

const Hero = () => {
  return (
    <div
      className="home relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${window.innerWidth >= 1024 ? BackgroundImgDsk : BackgroundImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    

      {/* Content container */}
      <div className="relative h-full flex-col justify-center items-center text-white">
        <div className="text-content md:w-2/3 flex flex-col items-center justify-center mt-20 md:mt-48 md:ml-20 md:p-3 absolute">
          <h1 className="bubblegum-sans-regular font-bold text-7xl text-center px-4 z-10 md:mb-4">
            Little Readers are Little Leaders.
          </h1>
          <p className="comic-neue-regular text-xl font-semibold text-center px-4">
            Inspire a love for reading and a passion for change with our global
            library of diverse student stories
          </p>
          <button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-lg shadow-md">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
