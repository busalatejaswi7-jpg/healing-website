import React from "react";

const products = [
  {
    name: "Runes Stone Set",
    price: "$45.00",
    image: "/images/stones.webp",
    alt: "Runes Stone set",
  },
  {
    name: "Celestial Tarot Deck",
    price: "$34.00",
    image: "/images/tarot2.webp",
    alt: "Tarot Deck",
  },
  {
    name: "Chakra Essential Oils",
    price: "$25.00",
    image: "/images/oils.webp",
    alt: "Chakra Essential Oils",
  },
  {
    name: "Healing Crystal Kit",
    price: "$39.00",
    image: "/images/crystal.webp",
    alt: "Healing Crystal Kit",
  },
];

const Estore = () => {
  return (
    <div>
      <section className="bg-[#4A2C5D] py-14 md:py-16 text-white text-center">
        <h2 className="text-4xl mb-10 md:mb-12 uppercase tracking-widest text-[#D4AF37]">
          Our Spiritual E-Store
        </h2>
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
          {products.map((product) => (
            <div key={product.name} className="bg-white/10 p-4 rounded-lg">
              <div className="aspect-square bg-gray-300 rounded mb-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="h-full w-full object-cover"
                />
              </div>
              <h4 className="text-lg">{product.name}</h4>
              <p className="text-[#D4AF37]">{product.price}</p>
              <button className="mt-2 text-xs border border-[#D4AF37] px-4 py-1 hover:bg-[#D4AF37] transition uppercase">
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
