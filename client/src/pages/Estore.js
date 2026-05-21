import React from "react";

const Estore = () => {
  return (
    <div>
      <section className="bg-[#4A2C5D] py-16 md:py-20 text-white text-center">
        <h2 className="text-4xl mb-10 md:mb-12 uppercase tracking-widest text-[#D4AF37]">
          Our Spiritual E-Store
        </h2>
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
          <div className="bg-white/10 p-4 rounded-lg">
            <div className="aspect-square bg-gray-300 rounded mb-4 overflow-hidden">
              <img
                src="/images/stones.webp"
                alt="Runes Stone set"
                className="h-full w-full object-cover"
              />
            </div>
            <h4 className="text-lg">Runes Stone Set</h4>
            <p className="text-[#D4AF37]">$45.00</p>
            <button className="mt-2 text-xs border border-[#D4AF37] px-4 py-1 hover:bg-[#D4AF37] transition uppercase">
              Add To Cart
            </button>
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <div className="aspect-square bg-gray-300 rounded mb-4 overflow-hidden">
              <img
                src="/images/tarot2.webp"
                alt="Tarot Deck"
                className="h-full w-full object-cover"
              />
            </div>
            <h4 className="text-lg">Celestial Tarot Deck</h4>
            <p className="text-[#D4AF37]">$34.00</p>
            <button className="mt-2 text-xs border border-[#D4AF37] px-4 py-1 hover:bg-[#D4AF37] transition uppercase">
              Add To Cart
            </button>
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <div className="aspect-square bg-gray-300 rounded mb-4 overflow-hidden">
              <img
                src="/images/oils.webp"
                alt="Chakra Essential Oils"
                className="h-full w-full object-cover"
              />
            </div>
            <h4 className="text-lg">Chakra Essential Oils</h4>
            <p className="text-[#D4AF37]">$25.00</p>
            <button className="mt-2 text-xs border border-[#D4AF37] px-4 py-1 hover:bg-[#D4AF37] transition uppercase">
              Add To Cart
            </button>
          </div>
          <div className="bg-white/10 p-4 rounded-lg">
            <div className="aspect-square bg-gray-300 rounded mb-4 overflow-hidden">
              <img
                src="/images/crystal.webp"
                alt="Selenite Cleansing Wand"
                className="h-full w-full object-cover"
              />
            </div>
            <h4 className="text-lg">Selenite Cleansing Wand</h4>
            <p className="text-[#D4AF37]">$29.00</p>
            <button className="mt-2 text-xs border border-[#D4AF37] px-4 py-1 hover:bg-[#D4AF37] transition uppercase">
              Add To Cart
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Estore;
