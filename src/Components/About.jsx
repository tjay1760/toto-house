import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import FloatingPic from "../assets/page-decoration.png";
import Book1 from "../assets/book-1.jpeg";
import Book2 from "../assets/book-2.jpeg";
import Book3 from "../assets/book-3.jpeg";
import Book4 from "../assets/book-4.jpeg";
import Book5 from "../assets/Book5-min.png";
import Book6 from "../assets/Book6-min.png";
import Book7 from "../assets/Book7-min.png";
import Book8 from "../assets/Book8-min.png";
import Book9 from "../assets/Book9-min.png";
import Book10 from "../assets/Book10-min.png";
import Book11 from "../assets/Book11-min.png";

const books = [
  { img: Book1, title: "The Story of Sanji", author: "Pangea", bookLink: "https://heyzine.com/flip-book/010dc9722f.html", active: true },
  { img: Book3, title: "Zaynab The Great and the Giant Plastic Mansa", author: "Suzzie Hicks", bookLink: "https://heyzine.com/flip-book/c730a40b69.html", active: true },
  { img: Book2, title: "Daddies and Daughters Stick Together", author: "Aissatou Diallo", bookLink: "", active: false },
  { img: Book4, title: "Welcome to Balloon City", author: "Ammon Jordan", bookLink: "", active: false },
  { img: Book5, title: "Tala", author: "", bookLink: "", active: false },
  { img: Book6, title: "The Unwelcome Stranger Visits", author: "Pangea", bookLink: "", active: false },
  { img: Book7, title: "Razzle Dazzle: The Green Nosed Reindeer", author: "Pangea", bookLink: "", active: false },
  { img: Book8, title: "Taking Care of Each Other", author: "Pangea", bookLink: "", active: false },
  { img: Book9, title: "Abiola Time", author: "", bookLink: "", active: false },
  { img: Book10, title: "Brady the Brave Saves the Day", author: "", bookLink: "", active: false },
  { img: Book11, title: "I Have Questions", author: "", bookLink: "", active: false },
];

const About = () => {
  return (
    <div className="books flex flex-col sm:flex-row relative items-center sm:items-start">
      <img
        src={FloatingPic}
        className="h-96 absolute left-[-8rem] top-[-8rem] hidden sm:block"
        alt="Floating"
      />

      <div className="container w-full flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center my-6">Sample Our Library</h2>
        
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          breakpoints={{
            640: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3.5 },
          }}
          className="w-full px-4"
        >
          {books.map((book, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center p-4 bg-white shadow-lg rounded-lg">
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
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default About;
