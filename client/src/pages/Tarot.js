import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";

const containerVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const testimonials = [
  {
    name: "Aditi",
    text: "The tarot reading gave me clarity and peace of mind.",
  },
  {
    name: "Rohan",
    text: "Amazing experience! Felt truly connected and guided.",
  },
  { name: "Meera", text: "The insights were spot on and very comforting." },
];

const Tarot = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative flex flex-col md:flex-row bg-gradient-to-r from-purple-50 to-white border border-[#B8860B] shadow-xl rounded-xl overflow-hidden hover:shadow-2xl transition"
    >
      {/* Animated Aura Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-200 via-transparent to-yellow-100 opacity-30 animate-pulse"></div>

      {/* Left Side Image */}
      <motion.div variants={childVariants} className="md:w-1/2 relative z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/tarot.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Right Side Content */}
      <motion.div
        variants={childVariants}
        className="md:w-1/2 p-8 flex flex-col justify-center relative z-10"
      >
        <h3 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-[#B8860B] mb-2 tracking-wide">
          Tarot Reading
        </h3>
        <p className="text-base text-gray-700 mb-4 italic">
          Guidance through tarot spreads for clarity and insight.
        </p>
        <p className="text-xl font-bold text-[#B8860B] mb-6">
          20 Min: ₹499 • 45 Min: ₹1499
        </p>

        {/* Flip Card Feature */}
        <motion.div
          whileHover={{ rotateY: 180 }}
          transition={{ duration: 0.8 }}
          className="w-32 h-48 bg-purple-100 border rounded-lg shadow-md flex items-center justify-center cursor-pointer mb-6"
        >
          <p className="text-purple-700 font-bold">✨ Reveal ✨</p>
        </motion.div>

        {/* Booking Button */}
        <motion.button
          whileHover={{ scale: 1.08, backgroundColor: "#7e22ce" }}
          whileTap={{ scale: 0.95 }}
          className="w-full md:w-auto border px-6 py-2 font-bold rounded-lg bg-purple-600 text-white shadow-md transition mb-6"
          onClick={() => navigate("/book")}
        >
          BOOK APPOINTMENT
        </motion.button>

        {/* QR Code for Quick Booking */}
        <div className="flex justify-center mb-6">
          <QRCode value="https://yourwebsite.com/pay-demo" size={128} />
          <img
            src="/images/scanner.jpeg"
            alt="QR Code"
            className="w-32 h-32 absolute"
          />
        </div>

        {/* Testimonials Carousel */}
        <div className="overflow-hidden">
          <motion.div
            className="flex space-x-6"
            animate={{ x: [0, -300, 0] }}
            transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
          >
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="min-w-[250px] bg-white shadow-md rounded-lg p-4 border border-gray-200"
              >
                <p className="italic text-gray-600">"{t.text}"</p>
                <p className="text-sm font-bold text-purple-700 mt-2">
                  - {t.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Tarot;
