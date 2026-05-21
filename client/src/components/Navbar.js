import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef();

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
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-purple-900/95 via-purple-800/95 to-purple-900/95 px-4 py-3 text-white shadow-[0_10px_40px_rgba(0,0,0,0.35)] backdrop-blur-md md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex items-center gap-3">
          <img
            src="/images/logo.jpg"
            alt="Logo"
            className="h-12 w-12 rounded-full border-2 border-yellow-400 object-cover shadow-lg shadow-yellow-700/40"
          />
          <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-white bg-clip-text text-base font-semibold tracking-[0.12em] text-transparent md:text-lg">
            S Healing Center
          </span>
        </div>

        <div className="hidden items-center space-x-7 text-[0.92rem] tracking-[0.08em] md:flex">
          {[
            ["/", "Home"],
            ["/energyhealing", "Energy-Healing"],
            ["/tarot", "Tarot"],
            ["/estore", "E-store"],
            ["/academy", "Academy"],
          ].map(([to, label]) => (
            <Link key={to} to={to} className="transition duration-300 hover:text-yellow-300 hover:drop-shadow-[0_0_12px_rgba(212,175,55,0.4)]">
              {label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="relative" ref={dropdownRef}>
            <button onClick={() => setOpen(!open)} className="rounded-full p-1 transition hover:bg-white/10">
              <FaUserCircle className="text-2xl transition hover:text-yellow-300" />
            </button>

            {open && (
              <div className="premium-panel absolute right-0 mt-2 w-44 overflow-hidden rounded-xl text-purple-800 z-50">
                <Link to="/register" className="block px-4 py-2.5 text-sm hover:bg-purple-100/90" onClick={() => setOpen(false)}>
                  Register
                </Link>
                <Link to="/login" className="block px-4 py-2.5 text-sm hover:bg-purple-100/90" onClick={() => setOpen(false)}>
                  Login
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/book"
            className="hidden rounded-full border border-yellow-300/60 bg-yellow-400 px-5 py-2 text-sm font-semibold tracking-[0.08em] text-purple-900 shadow-lg shadow-yellow-700/25 transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-300 md:block"
          >
            Book Now
          </Link>

          <button className="rounded-md p-2 text-xl transition hover:bg-white/10 md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="premium-panel absolute left-3 right-3 top-[calc(100%+0.5rem)] rounded-2xl border-purple-200/20 bg-purple-900/95 py-4 md:hidden">
          <div className="flex flex-col items-center gap-4 text-sm tracking-[0.08em] text-white">
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/energyhealing" onClick={() => setMenuOpen(false)}>Energy-Healing</Link>
            <Link to="/tarot" onClick={() => setMenuOpen(false)}>Tarot</Link>
            <Link to="/estore" onClick={() => setMenuOpen(false)}>E-store</Link>
            <Link to="/academy" onClick={() => setMenuOpen(false)}>Academy</Link>
            <Link
              to="/book"
              className="rounded-full bg-yellow-400 px-5 py-2 text-xs font-semibold tracking-[0.1em] text-purple-900"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
