import { useState } from "react";
import { Link } from "react-scroll";
import Logo from "../assets/white_logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-transparent absolute z-50">
      {/* Blur Background when menu is open */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Logo positioned absolutely */}
      <div className="top-0 left-0 p-4">
        <img src={Logo} className="h-20" alt="Logo" />
      </div>
      
      <nav className="fixed top-0 w-full z-50 text-white bg-transparent">
        <div className="container mx-auto flex justify-end items-center p-4">
          {/* Hamburger Menu (Mobile) - Hidden when menu is open */}
          {!isOpen && (
            <button 
              className="md:hidden text-3xl focus:outline-none" 
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              ☰
            </button>
          )}

          {/* Desktop Menu (Always Visible on Larger Screens) */}
          <ul className="hidden md:flex space-x-8">
            {["home", "books", "team", "contact"].map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  className="text-lg hover:text-blue-400 cursor-pointer"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Close Button - Positioned where the hamburger was */}
        {isOpen && (
          <button 
            className="fixed top-4 right-6 text-3xl text-white focus:outline-none z-50"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            ✖
          </button>
        )}

        {/* Mobile Menu (Fixed & Centered) */}
        <div 
          className={`fixed inset-0 flex items-center justify-center transition-transform duration-300 bg-gray-900 text-white z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="rounded-lg w-3/4 max-w-sm p-6 text-center shadow-lg">
            {/* Menu Items */}
            <ul className="flex flex-col space-y-4">
              {["home", "about", "team", "contact"].map((section) => (
                <li key={section}>
                  <Link
                    to={section}
                    smooth={true}
                    duration={500}
                    className="text-lg hover:text-blue-400 cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;