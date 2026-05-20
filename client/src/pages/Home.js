import React, { useState } from "react";
import Estore from "./Estore";
import Academy from "./Academy";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="relative h-[110vh] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        >
          <source src="/video/home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Content */}
        <div className="container mx-auto px-10 z-10 text-white">
          <p className="text-[#D4AF37] tracking-[0.3em] mb-2 uppercase">
            Ascend with Clarity
          </p>
          <h1 className="text-5xl md:text-7xl font-light mb-4 leading-tight">
            Find Purpose, Peace,
            <br />
            and Personal Growth.
          </h1>
          <p className="text-xl mb-8 max-w-lg italic">
            Your Journey Starts Here.
          </p>
          <div className="flex space-x-4">
            {/* Tarot Modal Trigger */}
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#D4AF37] px-8 py-3 rounded-md font-bold hover:bg-[#B8860B] transition"
            >
              BEGIN YOUR READING
            </button>

            {/* Energy Healing Redirect */}
            <button
              onClick={() => window.location.href = "/energyhealing"}
              className="border border-white px-8 py-3 rounded-md font-bold hover:bg-white hover:text-black transition"
            >
              EXPLORE HEALING
            </button>
          </div>
        </div>
      </section>

      {/* Tarot Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <h2 className="text-2xl font-bold text-purple-700 mb-4 text-center">
              Tarot Reading
            </h2>
            <p className="text-gray-600 mb-4 italic text-center">
              Choose your session length
            </p>
            <button className="w-full bg-purple-600 text-white py-2 rounded mb-2 hover:bg-purple-800">
              20 Min – ₹499
            </button>
            <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-800">
              45 Min – ₹1499
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 w-full border border-purple-600 text-purple-600 py-2 rounded hover:bg-purple-600 hover:text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Estore />
      <Academy />
    </>
  );
};

export default Home;