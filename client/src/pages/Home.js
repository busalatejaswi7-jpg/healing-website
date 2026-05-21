import React, { useState } from "react";
import Estore from "./Estore";
import Academy from "./Academy";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="relative h-[105vh] flex items-center overflow-hidden">
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


        {/* Content */}
        <div className="container mx-auto px-6 md:px-10 z-10 text-left md:max-w-4xl md:mx-0 md:ml-10 lg:ml-16">
          <div className="inline-block bg-gradient-to-r from-[#1F142A]/26 via-[#1F142A]/10 to-transparent px-3 py-4 md:px-4 md:py-5 rounded-lg">
            <p className="text-[#D4AF37] tracking-[0.24em] mb-3 uppercase text-sm md:text-base">
            Ascend with Clarity
          </p>
            <h1 className="text-5xl md:text-6xl font-light mb-5 leading-[1.12] text-[#F8F2E6] [text-shadow:0_2px_8px_rgba(18,9,30,0.28),0_6px_18px_rgba(18,9,30,0.18)]">
            Find Purpose, Peace,
            <br />
            and Personal Growth.
          </h1>
            <p className="text-lg md:text-xl mb-8 max-w-md italic leading-relaxed text-[#EEE4D2] drop-shadow-[0_4px_16px_rgba(18,8,32,0.35)]">
            Your Journey Starts Here.
          </p>
            <div className="flex space-x-4">
              {/* Tarot Modal Trigger */}
              <button
                onClick={() => setShowModal(true)}
              className="bg-[#D4AF37] text-[#2A1B3A] px-8 py-3 rounded-md font-bold shadow-[0_8px_20px_rgba(25,12,40,0.24)] hover:bg-[#B8860B] hover:text-[#23112F] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(212,175,55,0.35)]"
            >
                BEGIN YOUR READING
              </button>

              {/* Energy Healing Redirect */}
              <button
                onClick={() => (window.location.href = "/energyhealing")}
              className="border border-[#F4EEDF]/90 text-[#F4EEDF] bg-white/5 px-8 py-3 rounded-md font-bold shadow-[0_8px_18px_rgba(16,7,27,0.18)] hover:bg-white/18 hover:text-[#2A1B3A] transition-all duration-300 ease-out hover:-translate-y-0.5"
            >
                EXPLORE HEALING
              </button>
            </div>
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
