import React from 'react';
import BackgroundImg from "../assets/hero_reader.jpg"

const Hero = () => {
  return (
    <div 
      className="home relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Darkening overlay */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content container */}
      <div className="relative h-full flex justify-center items-center">
        <h1 className="text-white font-bold text-6xl text-center px-4 z-10">
          LITTLE READERS ARE LITTLE LEADERS
        </h1>
      </div>
    </div>
  );
};

export default Hero;