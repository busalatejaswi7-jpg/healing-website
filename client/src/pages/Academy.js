import React from "react";

const Academy = () => {
  return (
    <div>
      <section className="py-16 md:py-20 container mx-auto px-6 text-center">
        <h2 className="text-4xl mb-10 md:mb-12 uppercase tracking-widest">
          Transformational Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 auto-rows-fr max-w-6xl mx-auto">
          {[
            ["Reiki Healing + Teaching", "Master Energy Alignment"],
            ["Numerology Course", "Decode Sacred Number Wisdom"],
            ["Crystal Healing Course", "Channel Crystal Vibrations"],
            ["Runes Course", "Learn Ancient Divination"],
            ["Tarot for Beginners", "Unlock Your Intuition"],
          ].map(([title, subtitle]) => (
            <div
              key={title}
              className="relative group overflow-hidden rounded-xl h-full min-h-64 bg-black"
            >
              <div className="absolute inset-0 bg-gray-800 opacity-60 group-hover:scale-110 transition duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
                <h3 className="text-3xl font-light">{title}</h3>
                <p className="mb-4 tracking-widest text-[#D4AF37]">{subtitle}</p>
                <button className="bg-[#D4AF37] px-6 py-2 rounded font-bold uppercase text-sm">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Academy;
