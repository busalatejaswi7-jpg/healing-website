import React from "react";

const Estore = () => {
  return (
    <div>
      <section className="bg-[#4A2C5D] py-20 text-center text-white md:py-24">
        <h2 className="section-heading text-[#D4AF37]">
          Our Spiritual E-Store
        </h2>
        <div className="container mx-auto grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-4 md:gap-7">
          {[
            ["/images/stones.webp", "Runes Stone set", "Runes Stone Set", "$45.00"],
            ["/images/tarot2.webp", "Tarot Deck", "Celestial Tarot Deck", "$34.00"],
            ["/images/oils.webp", "Chakra Essential Oils", "Chakra Essential Oils", "$25.00"],
          ].map(([src, alt, name, price]) => (
            <div key={name} className="premium-card group reveal-on-load p-4 md:p-5">
              <div className="mb-4 aspect-square overflow-hidden rounded-xl bg-gray-200/20">
                <img src={src} alt={alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <h4 className="text-lg font-semibold tracking-wide text-white">{name}</h4>
              <p className="mt-1 text-[#D4AF37]">{price}</p>
              <button className="mt-4 rounded-full border border-[#D4AF37] px-4 py-1.5 text-xs uppercase tracking-[0.12em] transition duration-300 hover:bg-[#D4AF37] hover:text-[#2f1642]">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Estore;
