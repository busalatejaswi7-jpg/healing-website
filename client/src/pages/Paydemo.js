import React from "react";
import { motion } from "framer-motion";

const PayDemo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-50 to-yellow-50"
    >
      <h2 className="text-3xl font-bold text-purple-700 mb-6">
        Payment Demo
      </h2>

      {/* Fake Payment Options */}
      <div className="bg-white shadow-lg rounded-lg p-6 w-80">
        <p className="text-lg font-semibold mb-4">Choose Payment Method</p>
        <button className="w-full mb-3 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition">
          Pay with UPI
        </button>
        <button className="w-full mb-3 px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition">
          Pay with Card
        </button>
        <button className="w-full px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
          Pay with Wallet
        </button>
      </div>

      {/* Confirmation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-6 text-gray-600 italic"
      >
        (This is a demo — no real payment is processed)
      </motion.div>
    </motion.div>
  );
};

export default PayDemo;
