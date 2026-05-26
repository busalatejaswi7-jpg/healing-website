import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaYoutube, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-[#D4AF37]/30 bg-gradient-to-b from-[#3F2450] to-[#21102c] py-14 text-white">
      <div className="container mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="mb-3 text-2xl text-[#D4AF37]">S Healing Center</h3>
          <p className="max-w-md text-sm leading-relaxed text-white/75">
            A premium spiritual wellness sanctuary guiding your inner evolution through tarot, energy healing, and mindful mystical practices.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm uppercase tracking-[0.1em] text-[#D4AF37]">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-white/85">
            <Link to="/">Home</Link>
            <Link to="/energyhealing">Energy Healing</Link>
            <Link to="/estore">E-Store</Link>
            <Link to="/academy">Academy</Link>
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-sm uppercase tracking-[0.1em] text-[#D4AF37]">Contact</h4>
          <p className="text-sm text-white/75">support@shealingcenter.com</p>
          <p className="text-sm text-white/75">+1 (555) 012-8899</p>
          <div className="mt-4 flex items-center gap-3">
            {[ ["https://www.instagram.com", <FaInstagram />, "Instagram"], ["https://youtu.be/jHUOzixQ8Wg", <FaYoutube />, "YouTube"], ["https://t.me/+tkCnkzT96kxmMzQ1", <FaTelegramPlane />, "Telegram"] ].map(([href, icon, label]) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="premium-panel flex h-10 w-10 items-center justify-center rounded-full text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#D4AF37] hover:text-[#2f1642]">
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="mt-10 text-center text-xs tracking-[0.06em] text-white/60">© 2026 S Healing Center Spiritual Awakening. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
