import React from "react";

const Estore = () => {
  return (
    <div>
      <section className="bg-[#4A2C5D] py-20 text-center text-white md:py-24">
        <h2 className="mb-12 text-3xl uppercase tracking-[0.24em] text-[#D4AF37] md:text-4xl">
          Our Spiritual E-Store
        </h2>
        <div className="container mx-auto grid grid-cols-1 gap-6 px-6 sm:grid-cols-2 md:grid-cols-4 md:gap-7">
          {[
            ["/images/stones.webp", "Runes Stone set", "Runes Stone Set", "$45.00"],
            ["/images/amethyst.webp", "Amethyst Geode", "Amethyst Geode", "$99.00"],
            ["/images/tarot2.webp", "Tarot Deck", "Celestial Tarot Deck", "$34.00"],
            ["/images/oils.webp", "Chakra Essential Oils", "Chakra Essential Oils", "$25.00"],
          ].map(([src, alt, name, price]) => (
            <div key={name} className="premium-panel group rounded-xl p-4 transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_45px_rgba(0,0,0,0.35)]">
              <div className="mb-4 aspect-square overflow-hidden rounded bg-gray-200/20">
                <img src={src} alt={alt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <h4 className="text-lg font-medium">{name}</h4>
              <p className="text-[#D4AF37]">{price}</p>
              <button className="mt-3 rounded border border-[#D4AF37] px-4 py-1.5 text-xs uppercase tracking-[0.12em] transition hover:bg-[#D4AF37] hover:text-[#2f1642]">
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
