import React from "react";

const Estore = () => {
  return (
    <div>
      <section className="bg-[#4A2C5D] py-20 text-white text-center">
        <h2 className="text-4xl mb-12 uppercase tracking-widest text-[#D4AF37]">
          Our Spiritual E-Store
        </h2>
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Store Item: Runes Set */}
          <div className="bg-white/10 p-4 rounded-lg">
            <div className="aspect-square bg-gray-300 rounded mb-4">
              <img
                src="/images/stones.webp"
                alt="Runes Stone set"
                className="h-full"
              />
            </div>
            <h4 className="text-lg">Runes Stone Set</h4>
            <p className="text-[#D4AF37]">$45.00</p>
            <button className="mt-2 text-xs border border-[#D4AF37] px-4 py-1 hover:bg-[#D4AF37] transition uppercase">
              Add To Cart
            </button>
          </div>
          {/* Store Item: Amethyst */}
          <div className="bg-white/10 p-4 rounded-lg">
            <div className="aspect-square bg-gray-300 rounded mb-4">
              <img
                src="/images/amethyst.webp"
                alt="Amethyst Geode"
                className="h-full"
              />
            </div>
            <h4 className="text-lg">Amethyst Geode</h4>
            <p className="text-[#D4AF37]">$99.00</p>
            <button className="mt-2 text-xs border border-[#D4AF37] px-4 py-1 hover:bg-[#D4AF37] transition uppercase">
              Add To Cart
            </button>
          </div>
          {/* Store Item: Tarot Deck */}
          <div className="bg-white/10 p-4 rounded-lg">
            <div className="aspect-square bg-gray-300 rounded mb-4">
              <img
                src="/images/tarot2.webp"
                alt="Tarot Deck"
                className="h-full"
              />
            </div>
            <h4 className="text-lg">Celestial Tarot Deck</h4>
            <p className="text-[#D4AF37]">$34.00</p>
            <button className="mt-2 text-xs border border-[#D4AF37] px-4 py-1 hover:bg-[#D4AF37] transition uppercase">
              Add To Cart
            </button>
          </div>
          {/* Store Item: Essential Oils */}
          <div className="bg-white/10 p-4 rounded-lg">
            <div className="aspect-square bg-gray-300 rounded mb-4">
              <img
                src="/images/oils.webp"
                alt="Chakra Essential Oils"
                className="h-full"
              />
            </div>
            <h4 className="text-lg">Chakra Essential Oils</h4>
            <p className="text-[#D4AF37]">$25.00</p>
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
