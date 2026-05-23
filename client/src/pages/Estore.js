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
  {
    name: "Raw Rose Quartz Crystals",
    price: "$32 USD",
    image: "/images/crystal.webp",
    alt: "Raw Rose Quartz Crystals",
  },
  {
    name: "Raw Clear Quartz Crystals Tumble",
    price: "$30 USD",
    image: "/images/stones.webp",
    alt: "Raw Clear Quartz Crystals Tumble",
  },
  {
    name: "Raw Amethyst Crystals Tumble",
    price: "$34 USD",
    image: "/images/amethyst.webp",
    alt: "Raw Amethyst Crystals Tumble",
  },
  {
    name: "1 Mukhi Rudraaksh",
    price: "$68 USD",
    image: "/images/amethyst.webp",
    alt: "1 Mukhi Rudraaksh",
  },
  {
    name: "2 Mukhi Rudraaksh",
    price: "$64 USD",
    image: "/images/amethyst.webp",
    alt: "2 Mukhi Rudraaksh",
  },
  {
    name: "4 Mukhi Rudraaksh",
    price: "$56 USD",
    image: "/images/amethyst.webp",
    alt: "4 Mukhi Rudraaksh",
  },
  {
    name: "5 Mukhi Rudraaksh",
    price: "$48 USD",
    image: "/images/amethyst.webp",
    alt: "5 Mukhi Rudraaksh",
  },
  {
    name: "6 Ek Mukhi Rudraaksh",
    price: "$60 USD",
    image: "/images/amethyst.webp",
    alt: "6 Ek Mukhi Rudraaksh",
  },
  {
    name: "7 Ek Mukhi Rudraaksh",
    price: "$62 USD",
    image: "/images/amethyst.webp",
    alt: "7 Ek Mukhi Rudraaksh",
  },
  {
    name: "Rudraaksh + Crystal Bracelet",
    price: "$40 USD",
    image: "/images/angel.webp",
    alt: "Rudraaksh and Crystal Bracelet",
  },
  {
    name: "Rudraaksh + Crystal Mala",
    price: "$54 USD",
    image: "/images/chakra.webp",
    alt: "Rudraaksh and Crystal Mala",
  },
  {
    name: "Rudraaksh Mala",
    price: "$44 USD",
    image: "/images/chakra.webp",
    alt: "Rudraaksh Mala",
  },
  {
    name: "7 Chakra Crystal Set",
    price: "$38 USD",
    image: "/images/stones.webp",
    alt: "7 Chakra Crystal Set",
  },
  {
    name: "7 Chakra Crystal Tree",
    price: "$52 USD",
    image: "/images/chakra.webp",
    alt: "7 Chakra Crystal Tree",
  },
  {
    name: "Gomti Chakra Tree",
    price: "$46 USD",
    image: "/images/chakra.webp",
    alt: "Gomti Chakra Tree",
  },
  {
    name: "Rudraaksh + Gomti Chakra Tree",
    price: "$58 USD",
    image: "/images/chakra.webp",
    alt: "Rudraaksh and Gomti Chakra Tree",
  },
  {
    name: "Black Obsidian Tower",
    price: "$36 USD",
    image: "/images/stones.webp",
    alt: "Black Obsidian Tower",
  },
  {
    name: "Reiki Healing Grid Box",
    price: "$62 USD",
    image: "/images/reiki.webp",
    alt: "Reiki Healing Grid Box",
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
