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
    <section className="py-12 bg-gray-50">
      <h2 className="text-4xl mb-12 uppercase tracking-widest text-center text-purple-700 font-bold">
        Book A Session
      </h2>

      <div className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {EnergyHealingData.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition"
          >
            <div>
              <img
                src={s.image}
                alt={s.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h2 className="text-xl font-bold text-purple-700">{s.name}</h2>
            <p className="text-gray-600 mt-2">{s.desc}</p>
            <p className="text-xl font-bold text-[#B8860B] mb-6">{s.price}</p>
            <button
              onClick={() => navigate("/book")}
              className="mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-800"
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
