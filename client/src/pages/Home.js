import React, { useState } from "react";
import Estore from "./Estore";
import Academy from "./Academy";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <section className="relative flex min-h-[96vh] items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover object-center md:object-[center_65%]"
        >
          <source src="/video/home.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/75" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(212,175,55,0.2),transparent_40%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20 text-white md:px-10">
          <div className="premium-panel reveal-on-load max-w-3xl rounded-3xl px-6 py-8 md:px-10 md:py-12">
            <p className="mb-3 text-xs uppercase tracking-[0.4em] text-[#D4AF37] md:text-sm">
              Ascend with Clarity
            </p>
            <h1 className="mb-5 text-4xl font-semibold leading-[1.12] md:text-6xl lg:text-7xl">
              Find Purpose, Peace,
              <br />
              and Personal Growth.
            </h1>
            <p className="mb-9 max-w-xl text-base italic text-white/90 md:text-xl">
              Your Journey Starts Here.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                onClick={() => setShowModal(true)}
                className="premium-button bg-[#D4AF37] text-[#2f1642] shadow-xl shadow-yellow-900/30 hover:-translate-y-1 hover:bg-[#c79f23]"
              >
                Begin Your Reading
              </button>

              <button
                onClick={() => (window.location.href = "/energyhealing")}
                className="premium-button border border-white/70 bg-white/10 text-white hover:-translate-y-1 hover:bg-white hover:text-black"
              >
                Explore Healing
              </button>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="w-full max-w-sm rounded-2xl border border-purple-200/40 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.35)] md:p-7">
            <h2 className="mb-3 text-center text-2xl font-semibold text-purple-800">
              Tarot Reading
            </h2>
            <p className="mb-5 text-center italic text-gray-600">
              Choose your session length
            </p>
            <button className="mb-2 w-full rounded-md bg-purple-600 py-2.5 text-white transition hover:bg-purple-800">
              20 Min – ₹499
            </button>
            <button className="w-full rounded-md bg-purple-600 py-2.5 text-white transition hover:bg-purple-800">
              45 Min – ₹1499
            </button>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 w-full rounded-md border border-purple-600 py-2.5 text-purple-700 transition hover:bg-purple-600 hover:text-white"
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
