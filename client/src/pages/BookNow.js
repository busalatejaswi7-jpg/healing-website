import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const BookNow = () => {
  const navigate = useNavigate();
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${service} on ${date} at ${time}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex justify-center items-center h-screen bg-gradient-to-r from-indigo-800 to-purple-700"
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-purple-700">
          Book a Healing Session
        </h2>
        <select
          className="w-full p-2 border rounded mb-3"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">Select a Service</option>
          <option value="Tarot Reading">Tarot Reading</option>
          <option value="Reiki Healing">Reiki Healing</option>
          <option value="Sound Healing">Sound Healing</option>
          <option value="Crystal Healing">Crystal Healing</option>
          <option value="Aura Cleansing / Chakra Healing">
            Aura Cleansing / Chakra Healing
          </option>
          <option value="Pranic Healing">Pranic Healing</option>
          <option value="Aroma Therapy">Aroma Therapy</option>
        </select>
        <input
          type="date"
          className="w-full p-2 border rounded mb-3"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type="time"
          className="w-full p-2 border rounded mb-3"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
        <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-800" onClick={() => navigate("/pay-demo")}>
          Confirm Booking
        </button>
      </form>
    </motion.div>
  );
}

export default BookNow;
