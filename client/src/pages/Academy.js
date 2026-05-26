import React from "react";

const courses = [
  { title: "Reiki Healing & Teaching", details: ["Level 1 & 2 — $40 USD", "Level 3 — $55 USD", "Level 4 — $65 USD", "Level 5 — $111 USD", "Level 6 — $128 USD"] },
  { title: "Basic Numerology Course", details: ["$250 USD"] },
  { title: "Advance Numerology Course", details: ["$307 USD"] },
  { title: "Crystal Healing Course", details: ["Channel Crystal Vibrations"] },
  { title: "Runes Course", details: ["$171 USD"] },
  { title: "Tarot for Beginners", details: ["Unlock Your Intuition"] },
  { title: "Aura Cleansing Course", details: ["Restore Spiritual Balance"] },
  { title: "Sound Healing Course", details: ["$190 USD"] },
  { title: "Aroma Healing Course", details: ["$111 USD"] },
];

const Academy = () => {
  return (
    <section className="section-shell container mx-auto px-6 text-center">
      <h2 className="section-heading">Transformational Courses</h2>
      <div className="mx-auto grid max-w-6xl auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <article key={course.title} className="premium-card group relative flex h-full min-h-72 flex-col overflow-hidden rounded-2xl p-6 text-center">
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-black/30 opacity-90" />
            <div className="relative flex h-full flex-col">
              <h3 className="mb-4 text-2xl font-medium leading-snug text-white md:text-3xl">{course.title}</h3>
              <div className="mb-6 space-y-1 text-sm tracking-[0.12em] text-[#D4AF37] md:text-base">
                {course.details.map((detail) => (
                  <p key={detail}>{detail}</p>
                ))}
              </div>
              <button className="mt-auto rounded-full bg-[#D4AF37] px-6 py-2 text-sm font-semibold uppercase tracking-[0.08em] text-[#2f1642] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#c39e28]">
                Enroll Now
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Academy;
