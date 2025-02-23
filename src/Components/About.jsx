import React from "react";
import AboutPic from "../assets/about_art.png";
import FloatingPic from "../assets/page-decoration.png";
import Book1 from "../assets/book-1.jpeg";
import Book2 from "../assets/book-2.jpeg";
import Book3 from "../assets/book-3.jpeg";
import Book4 from "../assets/book-4.jpeg";

const books = [
  { img: Book1, title: "The Story of Sanji", author: "Pangea",bookLink:"https://heyzine.com/flip-book/010dc9722f.html", active: true },
  { img: Book3, title: "Zaynab The Great and the Giant Plastic Mansa", author: "Suzzie Hicks",bookLink:"https://heyzine.com/flip-book/c730a40b69.html", active: true },
  { img: Book2, title: "Daddies and Daughters Stick Together", author: "Aissatou Diallo",bookLink:"", active: false },
  { img: Book4, title: "Welcome to Balloon City", author: "Ammon Jordan", bookLink:"", active: false },
];

const About = () => {
  return (
    <div className="books flex flex-col sm:flex-row relative items-center sm:items-start">
      {/* Floating Image - Visible only on screens larger than mobile */}
      <img
        src={FloatingPic}
        className="h-96 absolute left-[-8rem] top-[-8rem] hidden sm:block"
        alt="Floating"
      />

      <div className="container w-full flex flex-col items-center">
        {/* Book Section Title */}
        <h2 className="text-3xl font-bold text-center my-6">Sample Our Library</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-10">
          {books.map((book, index) => (
            <div key={index} className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
              <img src={book.img} className="h-40 w-32 object-cover rounded-md" alt={book.title} />
              <h3 className="mt-4 text-lg font-bold text-center">{book.title}</h3>
              <p className="text-gray-600 text-sm">by {book.author}</p>
              <a
                href={book.bookLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-4 px-6 py-2 text-white font-bold rounded-lg shadow-md ${
                  book.active ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
                }`}
                style={{ pointerEvents: book.active ? "auto" : "none" }}
              >
                Start Reading
              </a>
            </div>
          ))}
        </div>
      </div>
{/* 
      <img src={AboutPic} className="h-96 md:absolute right-1" alt="About" /> */}
    </div>
  );
};

export default About;
