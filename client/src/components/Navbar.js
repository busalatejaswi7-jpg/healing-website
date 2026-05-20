import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false); // dropdown
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-purple-800 via-purple-700 to-purple-900 text-white px-6 py-3 shadow-lg relative">
      
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img
          src="/images/logo.jpg"
          alt="Logo"
          className="h-12 w-12 object-cover rounded-full border-2 border-yellow-400"
        />
        <span className="text-lg font-bold bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
          S Healing Center
        </span>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-8 items-center">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/energyhealing" className="hover:text-yellow-400">Energy-Healing</Link>
        <Link to="/tarot" className="hover:text-yellow-400">Tarot</Link>
        <Link to="/estore" className="hover:text-yellow-400">E-store</Link>
        <Link to="/academy" className="hover:text-yellow-400">Academy</Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        
        {/* User Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button onClick={() => setOpen(!open)}>
            <FaUserCircle className="text-2xl hover:text-yellow-400" />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-white text-purple-700 rounded-lg shadow-xl border z-50">
              <Link
                to="/register"
                className="block px-4 py-2 hover:bg-purple-100"
                onClick={() => setOpen(false)}
              >
                Register
              </Link>
              <Link
                to="/login"
                className="block px-4 py-2 hover:bg-purple-100"
                onClick={() => setOpen(false)}
              >
                Login
              </Link>
            </div>
          )}
        </div>

        {/* Book Now */}
        <Link
          to="/book"
          className="hidden md:block bg-yellow-400 text-purple-900 font-semibold px-4 py-2 rounded-full hover:scale-105 transition"
        >
          Book Now
        </Link>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden text-xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-purple-900 flex flex-col items-center space-y-4 py-5 md:hidden z-40">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/energyhealing" onClick={() => setMenuOpen(false)}>Energy-Healing</Link>
          <Link to="/tarot" onClick={() => setMenuOpen(false)}>Tarot</Link>
          <Link to="/estore" onClick={() => setMenuOpen(false)}>E-store</Link>
          <Link to="/academy" onClick={() => setMenuOpen(false)}>Academy</Link>
          <Link
            to="/book"
            className="bg-yellow-400 text-purple-900 px-4 py-2 rounded-full"
            onClick={() => setMenuOpen(false)}
          >
            Book Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;