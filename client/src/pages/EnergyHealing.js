import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const EnergyHealingData = [
  {
    name: "Reiki Healing",
    image: "/images/reiki.webp",
    desc: "Balance energy with Reiki therapy.",
    price: "Basic: ₹999 • Premium: ₹2999",
  },
  {
    name: "Sound Healing",
    image: "/images/sound.webp",
    desc: "Healing through vibrations and sound.",
    price: "Group: ₹499 • Personal: ₹2499",
  },
  {
    name: "Crystal Healing",
    image: "/images/crystal.webp",
    desc: "Restore harmony using crystals.",
    price: "₹800 – ₹3000 • Premium: ₹3000 – ₹6000",
  },
  {
    name: "Angel Healing",
    image: "/images/angel.webp",
    desc: "Connect with angelic guidance.",
    price: "₹1000 – ₹4000 • Premium: ₹4000 – ₹8000",
  },
  {
    name: "Aura Cleansing / Chakra Healing",
    image: "/images/aura.webp",
    desc: "Cleanse aura and balance chakras.",
    price: "₹800 – ₹3000 • Premium: ₹3000 – ₹6000",
  },
  {
    name: "Pranic Healing",
    image: "/images/pranic.webp",
    desc: "Energy healing through prana.",
    price: "₹500 – ₹2500 • Premium: ₹2500 – ₹5000",
  },
  {
    name: "Aromatherapy",
    image: "/images/aroma.webp",
    desc: "Healing with essential oils.",
    price: "₹800 – ₹3000 • Premium: ₹3000 – ₹6000",
  },
];

const EnergyHealing = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-gradient-to-b from-[#f7f3fa] via-white to-[#f8f5fb] py-14 md:py-16">
      <h2 className="mb-12 text-center text-4xl font-bold uppercase tracking-[0.18em] text-purple-700">
        Book A Session
      </h2>

      <div className="grid grid-cols-1 gap-7 px-6 md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:px-14">
        {EnergyHealingData.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group overflow-hidden rounded-2xl border border-purple-100 bg-white/90 p-5 shadow-[0_16px_40px_rgba(60,16,88,0.12)] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(60,16,88,0.2)]"
          >
            <div className="mb-4 overflow-hidden rounded-xl">
              <img
                src={s.image}
                alt={s.name}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
            </div>

            <h2 className="text-xl font-bold text-purple-700">{s.name}</h2>
            <p className="mt-2 text-gray-600">{s.desc}</p>
            <p className="mb-6 text-xl font-bold text-[#B8860B]">{s.price}</p>
            <button
              onClick={() => navigate("/book")}
              className="mt-2 rounded-full bg-purple-600 px-5 py-2 text-sm font-semibold tracking-wide text-white transition duration-300 hover:bg-purple-800"
            >
              Book Now
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EnergyHealing;
