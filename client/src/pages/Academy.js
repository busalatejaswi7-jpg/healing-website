import React from "react";

const Academy = () => {
  return (
    <div>
      <section className="container mx-auto px-6 py-20 text-center md:py-24">
        <h2 className="mb-12 text-3xl uppercase tracking-[0.2em] text-white md:text-4xl">
          Transformational Courses
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {[
            ["Runes Mastery Course", "Learn Ancient Divination"],
            ["Tarot for Beginners", "Unlock Your Intuition"],
          ].map(([title, subtitle]) => (
            <div key={title} className="premium-panel group relative h-64 overflow-hidden rounded-xl bg-black">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.18),transparent_62%)]" />
              <div className="absolute inset-0 bg-black/45 transition duration-500 group-hover:bg-black/35" />
              <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-white">
                <h3 className="text-2xl font-medium md:text-3xl">{title}</h3>
                <p className="mb-5 mt-2 tracking-[0.16em] text-[#D4AF37]">{subtitle}</p>
                <button className="premium-button bg-[#D4AF37] py-2 text-xs text-[#2f1642] hover:-translate-y-1 hover:bg-[#c79f23]">
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
