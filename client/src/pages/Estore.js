import React from "react";

const products = [
  { name: "Runes Stone Set", price: "$45.00", image: "/images/stones.webp", alt: "Runes Stone set" },
  { name: "Chakra Essential Oils", price: "$25.00", image: "/images/oils.webp", alt: "Chakra Essential Oils" },
  { name: "Healing Crystal Kit", price: "$50 USD", image: "/images/crystal.webp", alt: "Healing Crystal Kit" },
  { name: "Healing Grid", price: "$58 USD", image: "/images/chakra.webp", alt: "Healing Grid" },
  { name: "Rudraksha", price: "$42 USD", image: "/images/amethyst.webp", alt: "Rudraksha" },
  { name: "Crystal Bracelet", price: "$36 USD", image: "/images/angel.webp", alt: "Crystal Bracelet" },
  { name: "Raw Rose Quartz Crystals", price: "$32 USD", image: "/images/estore/raw-rose-quartz-crystals.svg", alt: "Raw Rose Quartz Crystals" },
  { name: "Raw Clear Quartz Crystals", price: "$30 USD", image: "/images/estore/raw-clear-quartz-crystals.svg", alt: "Raw Clear Quartz Crystals" },
  { name: "Raw Amethyst Crystals", price: "$34 USD", image: "/images/estore/raw-amethyst-crystals.svg", alt: "Raw Amethyst Crystals" },
  { name: "1 Mukhi Rudraaksh", price: "$68 USD", image: "/images/estore/1-mukhi-rudraaksh.svg", alt: "1 Mukhi Rudraaksh" },
  { name: "2 Mukhi Rudraaksh", price: "$64 USD", image: "/images/estore/2-mukhi-rudraaksh.svg", alt: "2 Mukhi Rudraaksh" },
  { name: "4 Mukhi Rudraaksh", price: "$56 USD", image: "/images/estore/4-mukhi-rudraaksh.svg", alt: "4 Mukhi Rudraaksh" },
  { name: "5 Mukhi Rudraaksh", price: "$48 USD", image: "/images/estore/5-mukhi-rudraaksh.svg", alt: "5 Mukhi Rudraaksh" },
  { name: "6 Mukhi Rudraaksh", price: "$60 USD", image: "/images/estore/6-mukhi-rudraaksh.svg", alt: "6 Mukhi Rudraaksh" },
  { name: "7 Mukhi Rudraaksh", price: "$62 USD", image: "/images/estore/7-mukhi-rudraaksh.svg", alt: "7 Mukhi Rudraaksh" },
  { name: "Rudraaksh + Crystal Bracelet", price: "$40 USD", image: "/images/estore/rudraaksh-crystal-bracelet.svg", alt: "Rudraaksh and Crystal Bracelet" },
  { name: "Rudraaksh + Crystal Mala", price: "$54 USD", image: "/images/estore/rudraaksh-crystal-mala.svg", alt: "Rudraaksh and Crystal Mala" },
  { name: "Rudraaksh Mala", price: "$44 USD", image: "/images/estore/rudraaksh-mala.svg", alt: "Rudraaksh Mala" },
  { name: "7 Chakra Crystal Set", price: "$38 USD", image: "/images/estore/7-chakra-crystal-set.svg", alt: "7 Chakra Crystal Set" },
  { name: "7 Chakra Crystal Tree", price: "$52 USD", image: "/images/estore/7-chakra-crystal-tree.svg", alt: "7 Chakra Crystal Tree" },
  { name: "Gomti Chakra Tree", price: "$46 USD", image: "/images/estore/gomti-chakra-tree.svg", alt: "Gomti Chakra Tree" },
  { name: "Rudraaksh + Gomti Chakra Tree", price: "$58 USD", image: "/images/estore/rudraaksh-gomti-chakra-tree.svg", alt: "Rudraaksh and Gomti Chakra Tree" },
  { name: "Black Obsidian Tower", price: "$36 USD", image: "/images/estore/black-obsidian-tower.svg", alt: "Black Obsidian Tower" },
  { name: "Reiki Healing Grid Box", price: "$62 USD", image: "/images/estore/reiki-healing-grid-box.svg", alt: "Reiki Healing Grid Box" },
];

const Estore = () => {
  return (
    <section className="section-shell bg-[#4A2C5D] text-center text-white">
      <h2 className="section-heading text-[#D4AF37]">Our Spiritual E-Store</h2>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-6 px-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <article
            key={product.name}
            className="premium-card group flex h-full min-h-[26rem] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,0.18)] transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/40 hover:shadow-[0_14px_36px_rgba(0,0,0,0.28)]"
          >
            <div className="image-frame aspect-[4/3] h-56 overflow-hidden">
              <img
                src={product.image}
                alt={product.alt}
                className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                style={{ borderRadius: "12px" }}
                loading="lazy"
              />
            </div>
            <div className="flex flex-1 flex-col p-4 text-left">
              <h4 className="min-h-[3.4rem] text-lg leading-snug text-white">{product.name}</h4>
              <p className="mt-1 text-sm font-medium text-[#D4AF37]">{product.price}</p>
              <button className="mt-auto rounded-full border border-[#D4AF37]/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#2a1b3a]">
                Add To Cart
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Estore;
