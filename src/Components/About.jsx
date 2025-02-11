import React from 'react';
import AboutPic from "../assets/about_art.png";
import FloatingPic from "../assets/page-decoration.png";
import Book1 from "../assets/book-1.jpeg";
import Book2 from "../assets/book-2.jpeg";
import Book3 from "../assets/book-3.jpeg";
import Book4 from "../assets/book-4.jpeg";

const books  = [
  { img: Book1, title: "The Story of Sanji", author: "Nandi Fernandez" },
  { img: Book2, title: "Daddies and Daughters Stick Together", author: "Nandi Fernandez" },
  { img: Book3, title: "Zayner The Great", author: "Nandi Fernandez" },
  { img: Book4, title: "Welcome to Balloon City", author: "Nandi Fernandez" }
];

const About = () => {
  return (
    <div className="about flex flex-col sm:flex-row relative items-center sm:items-start">
      {/* Floating Image - Visible only on screens larger than mobile */}
      <img src={FloatingPic} className="h-96 absolute left-[-8rem] top-[-8rem] hidden sm:block" alt="Floating" />
      
      <div className='container w-full flex flex-col items-center'>
        {/* Book Section Title */}
        <h2 className="text-3xl font-bold text-center bubblegum-sans-regular my-6">Explore Our Books</h2>
        
        <div className='flex flex-col md:flex-row sm:w-1/2 items-center justify-center mx-auto my-10 gap-10'>
          {books.map((book, index) => 
            <img src={book.img} key={index} className='h-40' alt={book.title} />
          )}
        </div>
        
        {/* Read Book Link */}
        <a 
          href="https://externalbooksite.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="mt-4 mb-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg shadow-md"
        >
          Read Book
        </a>
      </div>

      <img src={AboutPic} className="h-96 md:absolute right-1" alt="About" />
    </div>
  );
};

export default About;
