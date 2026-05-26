import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  ["/", "Home"],
  ["/energyhealing", "Energy Healing"],
  ["/tarot", "Tarot"],
  ["/estore", "E-Store"],
  ["/academy", "Academy"],
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    const handleScroll = () => setIsScrolled(window.scrollY > 18);

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b px-4 py-3 text-white transition-all duration-300 md:px-8 ${
        isScrolled
          ? "border-white/25 bg-purple-950/65 shadow-[0_20px_40px_rgba(20,8,35,0.55)] backdrop-blur-2xl"
          : "border-white/15 bg-gradient-to-r from-purple-950/90 via-purple-900/85 to-purple-950/90"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3">
          <img
            src="/images/logo.jpg"
            alt="Logo"
            className="h-12 w-12 rounded-full border-2 border-yellow-400 object-cover shadow-lg shadow-yellow-700/40"
          />
          <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-white bg-clip-text text-base font-semibold tracking-[0.1em] text-transparent md:text-lg">
            S Healing Center
          </span>
        </Link>

        <div className="hidden items-center gap-7 text-sm tracking-[0.06em] md:flex">
          {navLinks.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `relative pb-1 transition-all duration-300 after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-yellow-300 after:transition-transform after:duration-300 hover:text-yellow-200 hover:after:scale-x-100 ${
                  isActive ? "text-yellow-300 after:scale-x-100" : "text-white/90"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpen(!open)}
              className="rounded-full p-1.5 transition duration-300 hover:bg-white/10 hover:shadow-[0_0_18px_rgba(255,255,255,0.2)]"
              aria-label="Account"
            >
              <FaUserCircle className="text-2xl transition hover:text-yellow-300" />
            </button>

            {open && (
              <div className="premium-panel absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-xl text-purple-800">
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
            className="hidden rounded-full border border-yellow-300/70 bg-gradient-to-br from-yellow-300 to-yellow-500 px-5 py-2 text-sm font-semibold tracking-[0.07em] text-purple-900 shadow-lg shadow-yellow-700/25 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:from-yellow-200 hover:to-yellow-400 md:block"
          >
            Book Now
          </Link>

          <button className="rounded-md p-2 text-xl transition hover:bg-white/10 md:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="premium-panel reveal-on-load absolute left-3 right-3 top-[calc(100%+0.5rem)] rounded-2xl border-purple-200/20 bg-purple-900/95 py-4 md:hidden">
          <div className="flex flex-col items-center gap-4 text-sm tracking-[0.07em] text-white">
            {navLinks.map(([to, label]) => (
              <NavLink key={to} to={to} onClick={() => setMenuOpen(false)} className={({ isActive }) => (isActive ? "text-yellow-300" : "text-white/90")}>
                {label}
              </NavLink>
            ))}
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
