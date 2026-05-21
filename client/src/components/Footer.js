/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaInstagram, FaYoutube, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-[#D4AF37]/30 bg-gradient-to-b from-[#4A2C5D] to-[#2E173C] py-12 text-white md:py-14">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-7">
          <h2 className="mb-4 text-2xl font-semibold tracking-[0.06em] text-white md:text-3xl">
            S Healing Center • Spiritual Awakening
          </h2>
          <p className="mx-auto max-w-lg text-sm italic leading-relaxed text-white/75 md:text-base">
            Guiding you through the stars and ancient symbols to find your true
            purpose.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap items-start justify-center gap-x-7 gap-y-6 md:gap-x-10 md:gap-y-7">
          {[
            ["https://www.instagram.com", <FaInstagram size={22} />, "Instagram"],
            ["https://youtu.be/jHUOzixQ8Wg", <FaYoutube size={22} />, "YouTube Main"],
            ["https://youtu.be/YOUR_SECOND_CHANNEL_LINK", <FaYoutube size={22} />, "YouTube Clips"],
            ["https://t.me/+tkCnkzT96kxmMzQ1", <FaTelegramPlane size={22} />, "Telegram Free 🎁"],
            ["https://t.me/+tkCnkzT96kxmMzQ1", <FaTelegramPlane size={22} />, "Telegram Paid 🔒"],
          ].map(([href, icon, label]) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" className="group flex w-24 flex-col items-center">
              <div className="premium-panel flex h-14 w-14 items-center justify-center rounded-full border-[#D4AF37]/70 text-white transition duration-300 group-hover:-translate-y-1 group-hover:bg-[#D4AF37] group-hover:text-[#2f1642] group-hover:shadow-[0_12px_35px_rgba(212,175,55,0.45)]">
                {icon}
              </div>
              <span className="mt-2 text-center text-[0.65rem] uppercase leading-relaxed tracking-[0.14em] text-white/75 transition group-hover:text-[#D4AF37]">
                {label}
              </span>
            </a>
          ))}
        </div>

        <p className="text-xs tracking-[0.07em] text-white/60">
          © 2026 S Healing Center Spiritual Awakening. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
