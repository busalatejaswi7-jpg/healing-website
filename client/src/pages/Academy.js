import React from "react";

const courses = [
  {
    title: "Reiki Healing & Teaching",
    details: [
      "Level 1 & 2 — $40 USD",
      "Level 3 — $55 USD",
      "Level 4 — $65 USD",
      "Level 5 — $111 USD",
      "Level 6 — $128 USD",
    ],
  },
  {
    title: "Basic Numerology Course",
    details: ["$250 USD"],
  },
  {
    title: "Advance Numerology Course",
    details: ["$307 USD"],
  },
  {
    title: "Crystal Healing Course",
    details: ["Channel Crystal Vibrations"],
  },
  {
    title: "Runes Course",
    details: ["$171 USD"],
  },
  {
    title: "Tarot for Beginners",
    details: ["Unlock Your Intuition"],
  },
  {
    title: "Aura Cleansing Course",
    details: ["Restore Spiritual Balance"],
  },
  {
    title: "Sound Healing Course",
    details: ["$190 USD"],
  },
  {
    title: "Aroma Healing Course",
    details: ["$111 USD"],
  },
];

const Academy = () => {
  return (
    <div>
      <section className="py-12 md:py-14 container mx-auto px-6 text-center">
        <h2 className="text-4xl mb-9 md:mb-10 uppercase tracking-widest">
          Transformational Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-fr max-w-6xl mx-auto">
          {courses.map((course) => (
            <div
              key={course.title}
              className="relative group overflow-hidden rounded-xl h-full min-h-64 bg-black border border-white/10 shadow-[0_10px_24px_rgba(15,8,24,0.2)] transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(212,175,55,0.18)]"
            >
              <div className="absolute inset-0 bg-gray-800 opacity-60 group-hover:scale-105 transition-transform duration-500"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-between text-white px-5 py-7 text-center">
                <h3 className="text-2xl md:text-3xl font-light leading-snug mb-4">{course.title}</h3>
                <div className="mb-6 space-y-1 tracking-[0.16em] text-[#D4AF37] text-sm md:text-base">
                  {course.details.map((detail) => (
                    <p key={detail}>{detail}</p>
                  ))}
                </div>
                <button className="mt-auto bg-[#D4AF37] px-6 py-2 rounded font-bold uppercase text-sm transition-all duration-300 ease-out hover:bg-[#c39e28] hover:-translate-y-0.5">
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
