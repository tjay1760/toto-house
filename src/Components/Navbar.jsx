import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-xl font-bold">MySite</div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Nav Links (Desktop & Mobile) */}
        <ul
          className={`md:flex md:space-x-6 absolute md:static bg-white md:bg-transparent w-full left-0 top-16 md:w-auto md:py-0 py-4 md:shadow-none shadow-lg transition-all ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {["home", "about", "team", "contact"].map((section) => (
            <li key={section} className="text-center md:text-left">
              <Link
                to={section}
                smooth={true}
                duration={500}
                className="block py-2 px-4 text-gray-800 hover:text-blue-600 cursor-pointer"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
