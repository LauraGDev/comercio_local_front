import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoConTexto from "/logoConTexto.svg";

const Navbar = ({handleScroll}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };



  return (
    <nav className="bg-mediumBlue shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 border-b-2 border-solid border-slate-400">
        <div className="flex justify-between h-24">
          <div className="flex items-center">
            {/* Logo */}
            <div className="text-2xl font-bold">
              <img src={logoConTexto} alt="log-img" />
            </div>
          </div>
          <div className="hidden md:flex space-x-6 items-center">
            <button className="text-white hover:text-gray-900">
              Barris més populars
            </button>
            <button className="text-white hover:text-gray-900">
              Vols obrir un negoci?
            </button>
            <button className="text-white hover:text-gray-900">
              About us
            </button>
            <button className="text-white hover:text-gray-900">
              Contacte
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden p-2">
          <button className="block px-4 py-2 text-white hover:bg-gray-100">
            · Barris més populars
          </button>
          <button onClick={() => { handleScroll('android'), toggleMenu()}} className="block px-4 py-2 text-white hover:bg-gray-100">
            · Vols obrir un negoci?
          </button>
          <button className="block px-4 py-2 text-white hover:bg-gray-100">
            · About us
          </button>
          <button className="block px-4 py-2 text-white hover:bg-gray-100">
            · Contacte
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
