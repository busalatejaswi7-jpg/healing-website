/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaInstagram, FaYoutube, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#4A2C5D] py-12 text-white border-t border-[#D4AF37]/30">
      <div className="container mx-auto px-6 text-center">
        {/* Brand + Tagline */}
        <div className="mb-8">
          <h2 className="text-white text-2xl md:text-3xl font-bold mb-4 tracking-tight">
            S Healing Center • Spiritual Awakening
          </h2>
          <p className="max-w-md mx-auto text-sm md:text-base italic text-white/70">
            Guiding you through the stars and ancient symbols to find your true
            purpose.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-10 mb-8">
          {/* Instagram */}
          <a
            href="https://www.instagram.com"
            target="_blank"
            className="flex flex-col items-center group" rel="noreferrer"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full border border-[#D4AF37] text-white group-hover:bg-[#D4AF37] group-hover:text-black transition">
              <FaInstagram size={22} />
            </div>
            <span className="mt-2 text-xs uppercase tracking-widest group-hover:text-[#D4AF37]">
              Instagram
            </span>
          </a>

          {/* YouTube Channel 1 */}
          <a
            href="https://youtu.be/jHUOzixQ8Wg"
            target="_blank"
            className="flex flex-col items-center group" rel="noreferrer"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full border border-[#D4AF37] text-white group-hover:bg-[#D4AF37] group-hover:text-black transition">
              <FaYoutube size={22} />
            </div>
            <span className="mt-2 text-xs uppercase tracking-widest group-hover:text-[#D4AF37]">
              YouTube Main
            </span>
          </a>

          {/* YouTube Channel 2 */}
          <a
            href="https://youtu.be/YOUR_SECOND_CHANNEL_LINK"
            target="_blank"
            className="flex flex-col items-center group" rel="noreferrer"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full border border-[#D4AF37] text-white group-hover:bg-[#D4AF37] group-hover:text-black transition">
              <FaYoutube size={22} />
            </div>
            <span className="mt-2 text-xs uppercase tracking-widest group-hover:text-[#D4AF37]">
              YouTube Clips
            </span>
          </a>

          {/* Telegram Free */}
          <a
            href="https://t.me/+tkCnkzT96kxmMzQ1"
            target="_blank"
            className="flex flex-col items-center group" rel="noreferrer"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full border border-[#D4AF37] text-white group-hover:bg-[#D4AF37] group-hover:text-black transition">
              <FaTelegramPlane size={22} />
            </div>
            <span className="mt-2 text-xs uppercase tracking-widest group-hover:text-[#D4AF37]">
              Telegram Free 🎁
            </span>
          </a>

          {/* Telegram Paid */}
          <a
            href="https://t.me/+tkCnkzT96kxmMzQ1"
            target="_blank"
            className="flex flex-col items-center group" rel="noreferrer"
          >
            <div className="w-14 h-14 flex items-center justify-center rounded-full border border-[#D4AF37] text-white group-hover:bg-[#D4AF37] group-hover:text-black transition">
              <FaTelegramPlane size={22} />
            </div>
            <span className="mt-2 text-xs uppercase tracking-widest group-hover:text-[#D4AF37]">
              Telegram Paid 🔒
            </span>
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-white/60">
          © 2026 S Healing Center Spiritual Awakening. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
