import React from "react";

const products = [
  {
    id: "raw-rose-quartz-crystals",
    name: "Raw Rose Quartz Crystals",
    price: "$32 USD",
    category: "Raw Crystals",
    image: "/images/crystal.webp",
    imageAlt: "Raw Rose Quartz Crystals",
  },
  {
    id: "raw-clear-quartz-crystals",
    name: "Raw Clear Quartz Crystals",
    price: "$30 USD",
    category: "Raw Crystals",
    image: "/images/stones.webp",
    imageAlt: "Raw Clear Quartz Crystals",
  },
  {
    id: "raw-amethyst-crystals",
    name: "Raw Amethyst Crystals",
    price: "$34 USD",
    category: "Raw Crystals",
    image: "/images/amethyst.webp",
    imageAlt: "Raw Amethyst Crystals",
  },
  {
    id: "1-mukhi-rudraaksh",
    name: "1 Mukhi Rudraaksh",
    price: "$68 USD",
    category: "Rudraaksh",
    image: "/images/amethyst.webp",
    imageAlt: "1 Mukhi Rudraaksh",
  },
  {
    id: "2-mukhi-rudraaksh",
    name: "2 Mukhi Rudraaksh",
    price: "$64 USD",
    category: "Rudraaksh",
    image: "/images/amethyst.webp",
    imageAlt: "2 Mukhi Rudraaksh",
  },
  {
    id: "4-mukhi-rudraaksh",
    name: "4 Mukhi Rudraaksh",
    price: "$56 USD",
    category: "Rudraaksh",
    image: "/images/amethyst.webp",
    imageAlt: "4 Mukhi Rudraaksh",
  },
  {
    id: "5-mukhi-rudraaksh",
    name: "5 Mukhi Rudraaksh",
    price: "$48 USD",
    category: "Rudraaksh",
    image: "/images/amethyst.webp",
    imageAlt: "5 Mukhi Rudraaksh",
  },
  {
    id: "6-mukhi-rudraaksh",
    name: "6 Mukhi Rudraaksh",
    price: "$60 USD",
    category: "Rudraaksh",
    image: "/images/amethyst.webp",
    imageAlt: "6 Mukhi Rudraaksh",
  },
  {
    id: "7-mukhi-rudraaksh",
    name: "7 Mukhi Rudraaksh",
    price: "$62 USD",
    category: "Rudraaksh",
    image: "/images/amethyst.webp",
    imageAlt: "7 Mukhi Rudraaksh",
  },
  {
    id: "rudraaksh-crystal-bracelet",
    name: "Rudraaksh + Crystal Bracelet",
    price: "$40 USD",
    category: "Bracelets & Malas",
    image: "/images/angel.webp",
    imageAlt: "Rudraaksh and Crystal Bracelet",
  },
  {
    id: "rudraaksh-crystal-mala",
    name: "Rudraaksh + Crystal Mala",
    price: "$54 USD",
    category: "Bracelets & Malas",
    image: "/images/chakra.webp",
    imageAlt: "Rudraaksh and Crystal Mala",
  },
  {
    id: "rudraaksh-mala",
    name: "Rudraaksh Mala",
    price: "$44 USD",
    category: "Bracelets & Malas",
    image: "/images/chakra.webp",
    imageAlt: "Rudraaksh Mala",
  },
  {
    id: "7-chakra-crystal-set",
    name: "7 Chakra Crystal Set",
    price: "$38 USD",
    category: "Chakra Tools",
    image: "/images/stones.webp",
    imageAlt: "7 Chakra Crystal Set",
  },
  {
    id: "7-chakra-crystal-tree",
    name: "7 Chakra Crystal Tree",
    price: "$52 USD",
    category: "Spiritual Trees",
    image: "/images/chakra.webp",
    imageAlt: "7 Chakra Crystal Tree",
  },
  {
    id: "gomti-chakra-tree",
    name: "Gomti Chakra Tree",
    price: "$46 USD",
    category: "Spiritual Trees",
    image: "/images/chakra.webp",
    imageAlt: "Gomti Chakra Tree",
  },
  {
    id: "rudraaksh-gomti-chakra-tree",
    name: "Rudraaksh + Gomti Chakra Tree",
    price: "$58 USD",
    category: "Spiritual Trees",
    image: "/images/chakra.webp",
    imageAlt: "Rudraaksh and Gomti Chakra Tree",
  },
  {
    id: "black-obsidian-tower",
    name: "Black Obsidian Tower",
    price: "$36 USD",
    category: "Crystal Towers",
    image: "/images/stones.webp",
    imageAlt: "Black Obsidian Tower",
  },
  {
    id: "reiki-healing-grid-box",
    name: "Reiki Healing Grid Box",
    price: "$62 USD",
    category: "Reiki Tools",
    image: "/images/reiki.webp",
    imageAlt: "Reiki Healing Grid Box",
  },
];

const ProductImage = ({ product }) => {
  const [imageUnavailable, setImageUnavailable] = React.useState(false);

  if (product.image && !imageUnavailable) {
    return (
      <img
        src={product.image}
        alt={product.imageAlt}
        className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        loading="lazy"
        onError={() => setImageUnavailable(true)}
      />
    );
  }

  return (
    <div
      aria-label={`${product.name} image coming soon`}
      className="flex h-full w-full flex-col items-center justify-center bg-[#2a1638] px-6 text-center"
      role="img"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
        Image Coming Soon
      </span>
      <span className="mt-2 text-sm leading-6 text-white/75">
        Real product photography will appear here when available.
      </span>
    </div>
  );
};

const Estore = () => {
  return (
    <section className="section-shell relative overflow-hidden bg-[#4A2C5D] px-4 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(212,175,55,0.18),transparent_28%),radial-gradient(circle_at_82%_5%,rgba(255,255,255,0.1),transparent_24%),linear-gradient(180deg,rgba(74,44,93,0.98),rgba(42,22,56,0.98))]" />
      <div className="container relative mx-auto max-w-7xl">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <span className="mb-3 inline-flex rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#D4AF37]">
            Spiritual Essentials
          </span>
          <h2 className="section-heading mb-4 text-[#D4AF37]">Our Spiritual E-Store</h2>
          <p className="mx-auto max-w-2xl text-base leading-8 text-white/78 md:text-lg">
            Curated crystals, Rudraaksh, chakra tools, and Reiki essentials prepared for real product photography.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <article
              key={product.id}
              className="premium-card group flex h-full min-h-[30rem] flex-col overflow-hidden rounded-3xl border border-white/15 bg-white/[0.07] shadow-[0_18px_45px_rgba(16,7,29,0.28)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-[#D4AF37]/50 hover:bg-white/[0.1] hover:shadow-[0_26px_60px_rgba(16,7,29,0.38)]"
            >
              <div className="image-frame h-64 overflow-hidden rounded-b-[2rem] border-b border-white/10 bg-[#2a1638]/70">
                <ProductImage product={product} />
              </div>

              <div className="flex flex-1 flex-col p-6 text-left">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                  {product.category}
                </p>
                <h3 className="text-xl leading-snug text-white transition-colors duration-300 group-hover:text-[#F1D36B]">
                  {product.name}
                </h3>
                <p className="mt-3 text-lg font-semibold text-[#D4AF37]">{product.price}</p>
                <div className="mt-5 h-px w-full bg-gradient-to-r from-[#D4AF37]/45 via-white/10 to-transparent" />
                <button className="mt-auto rounded-full border border-[#D4AF37]/80 px-5 py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#2a1b3a] focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-2 focus:ring-offset-[#4A2C5D]">
                  Add To Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Estore;
