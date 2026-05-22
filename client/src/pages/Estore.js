import React from "react";

const products = [
  {
    name: "Runes Stone Set",
    price: "$45.00",
    image: "/images/stones.webp",
    alt: "Runes Stone set",
  },
  {
    name: "Chakra Essential Oils",
    price: "$25.00",
    image: "/images/oils.webp",
    alt: "Chakra Essential Oils",
  },
  {
    name: "Healing Crystal Kit",
    price: "$50 USD",
    image: "/images/crystal.webp",
    alt: "Healing Crystal Kit",
  },
  {
    name: "Healing Grid",
    price: "$58 USD",
    image: "/images/chakra.webp",
    alt: "Healing Grid",
  },
  {
    name: "Rudraksha",
    price: "$42 USD",
    image: "/images/amethyst.webp",
    alt: "Rudraksha",
  },
  {
    name: "Crystal Bracelet",
    price: "$36 USD",
    image: "/images/angel.webp",
    alt: "Crystal Bracelet",
  },
];

const Estore = () => {
  return (
    <div>
      <section className="bg-[#4A2C5D] py-12 md:py-14 text-white text-center">
        <h2 className="text-4xl mb-9 md:mb-10 uppercase tracking-widest text-[#D4AF37]">
          Our Spiritual E-Store
        </h2>
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
          {products.map((product) => (
            <div key={product.name} className="bg-white/10 p-4 rounded-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(212,175,55,0.16)]">
              <div className="aspect-square bg-gray-300 rounded mb-4 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="h-full w-full object-cover"
                />
              </div>
              <h4 className="text-lg">{product.name}</h4>
              <p className="text-[#D4AF37]">{product.price}</p>
              <button className="mt-2 text-xs border border-[#D4AF37] px-4 py-1 hover:bg-[#D4AF37] transition-all duration-300 ease-out uppercase">
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
