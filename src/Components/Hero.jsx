import React from "react";
import BackgroundImg from "../assets/hero_reader.jpg";
import BackgroundImgDsk from "../assets/hero-header.jpeg";

const Hero = () => {
  return (
    <div
      className="home relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${
          window.innerWidth >= 1024 ? BackgroundImgDsk : BackgroundImg
        })`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Darkening overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content container */}
      <div className="relative h-full flex flex-col justify-center items-center text-white">
        <div className="text-content md:w-2/3">
        <h1 className=" font-bold text-6xl text-center px-4 z-10 mb-5">
          Little Readers are Little Leaders.
        </h1>
        <p1>
          Inspire a love for reading and a passion for change with our global
          library of diverse student stories
        </p1>
        </div>
        
      </div>
    </div>
  );
};

export default Hero;
