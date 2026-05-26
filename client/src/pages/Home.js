import React, { useState } from "react";
import Estore from "./Estore";
import Academy from "./Academy";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="relative flex min-h-[88vh] items-center overflow-hidden lg:min-h-[96vh]">
        <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover object-bottom">
          <source src="/video/home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-[#160C22]/85 via-[#221233]/65 to-[#1d102b]/40" />

        <div className="container relative z-10 mx-auto px-6 py-16 md:px-10 lg:px-14">
          <div className="reveal-on-load max-w-3xl rounded-2xl border border-white/15 bg-gradient-to-r from-[#1F142A]/60 via-[#1F142A]/25 to-transparent p-6 shadow-[0_16px_45px_rgba(8,4,16,0.45)] md:p-10">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[#D4AF37] md:text-sm">Ascend with Clarity</p>
            <h1 className="mb-5 text-4xl font-light leading-tight text-[#FFF8EE] [text-shadow:0_2px_10px_rgba(20,10,34,0.34)] sm:text-5xl md:text-6xl">
              Find Purpose, Peace,
              <br />
              and Personal Growth.
            </h1>
            <p className="mb-8 max-w-xl text-base italic leading-relaxed text-[#EEE4D2] sm:text-lg md:text-xl">
              Your Journey Starts Here.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
              <button
                onClick={() => setShowModal(true)}
                className="rounded-full bg-[#D4AF37] px-7 py-3 text-sm font-semibold tracking-[0.06em] text-[#2A1B3A] shadow-[0_8px_20px_rgba(25,12,40,0.24)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#B8860B] hover:text-[#23112F] hover:shadow-[0_12px_26px_rgba(212,175,55,0.35)]"
              >
                BEGIN YOUR READING
              </button>

              <button
                onClick={() => (window.location.href = "/energyhealing")}
                className="rounded-full border border-[#F4EEDF]/90 bg-white/5 px-7 py-3 text-sm font-semibold tracking-[0.06em] text-[#F4EEDF] shadow-[0_8px_18px_rgba(16,7,27,0.18)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/20 hover:text-[#2A1B3A]"
              >
                EXPLORE HEALING
              </button>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-sm rounded-xl bg-white p-6 shadow-lg">
            <h2 className="mb-4 text-center text-2xl font-bold text-purple-700">Tarot Reading</h2>
            <p className="mb-4 text-center italic text-gray-600">Choose your session length</p>
            <button className="mb-2 w-full rounded bg-purple-600 py-2 text-white hover:bg-purple-800">20 Min – ₹499</button>
            <button className="w-full rounded bg-purple-600 py-2 text-white hover:bg-purple-800">45 Min – ₹1499</button>
            <button onClick={() => setShowModal(false)} className="mt-4 w-full rounded border border-purple-600 py-2 text-purple-600 hover:bg-purple-600 hover:text-white">
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
