import { useState } from "react";
import { Link } from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../assets/logo2.png";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full bg-gray-900 text-white shadow-md px-4 py-3 shadow-xl">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
                    <img src={logo} alt="logo" className="w-16 h-16 sm:w-20 sm:h-20" />
                    <h1 className='text-2xl text-white font-bold'>SignLearn</h1>
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-lg font-medium">
            <Link to="/" className="text-xl px-4 py-2 hover:text-cyan-500 transition-all block">Home</Link>
            <Link to="/detect" className="text-xl px-4 py-2 hover:text-cyan-500 transition-all block">Sign Language Detection</Link>
            <Link to="/fingerspelling" className="text-xl px-4 py-2 hover:text-cyan-500 transition-all block">Learn Fingerspelling</Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          {toggle ? (
            <RiCloseLine size={28} onClick={() => setToggle(false)} />
          ) : (
            <RiMenu3Line size={28} onClick={() => setToggle(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {toggle && (
        <div className="md:hidden mt-3 px-4">
          <div className="flex flex-col space-y-4 text-lg font-medium">
            <Link to="/" className="hover:text-cyan-400 transition-all" onClick={() => setToggle(false)}>Home</Link>
            <Link to="/detect" className="hover:text-cyan-400 transition-all" onClick={() => setToggle(false)}>Detect</Link>
            <Link to="/fingerspelling" className="hover:text-cyan-400 transition-all" onClick={() => setToggle(false)}>Learn Fingerspelling</Link>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
