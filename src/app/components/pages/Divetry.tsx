"use client";

import { useState } from "react";

export default function Divetry() {
  const [selected, setSelected] = useState<"dubai" | "fujairah">("dubai");

  const isDubai = selected === "dubai";

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden font-habara text-white bg-cover bg-center"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.85)),
          url('/img3.jpeg')
        `,
      }}
    >
      {/* 🔥 CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">

        {/* TOP TAG */}
        <div className="mb-4 px-4 py-1 rounded-full bg-white/10 backdrop-blur text-xs tracking-widest">
          100% BEGINNER FRIENDLY · NO SWIMMING REQUIRED
        </div>

        {/* HEADING */}
        <p className="text-sm tracking-[4px] text-cyan-300 mb-2">
          FIRST-TIME SCUBA EXPERIENCE
        </p>

        <h1 className="text-4xl md:text-6xl font-semibold mb-2">
          FOR COMPLETE BEGINNERS
        </h1>

        <p className="text-cyan-300 text-sm mb-8">
          OPEN TO AGES 10 & ABOVE
        </p>

        {/* 🔥 CARDS */}
        <div className="flex flex-col md:flex-row gap-6">

          {/* DUBAI */}
          <div
            onClick={() => setSelected("dubai")}
            className={`relative w-[260px] cursor-pointer rounded-xl border transition-all duration-300 p-5 backdrop-blur-md
            ${
              isDubai
                ? "bg-cyan-500/20 border-cyan-400 shadow-lg scale-105"
                : "bg-white/5 border-white/20 hover:scale-105"
            }`}
          >
            <p className="text-xs text-cyan-300 mb-2">BEACH TRY DIVE</p>
            <h3 className="text-lg font-semibold mb-2">DUBAI</h3>

            <p className="text-xs text-gray-300 mb-4">
              Walk-in Beach Entry <br />
              Palm Jumeirah Beach <br />
              Quick & Convenient
            </p>

            <h2 className="text-2xl font-semibold">AED 350</h2>

            {/* ACTIVE DOT */}
            {isDubai && (
              <div className="absolute top-3 right-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>
            )}
          </div>

          {/* FUJAIRAH */}
          <div
            onClick={() => setSelected("fujairah")}
            className={`relative w-[260px] cursor-pointer rounded-xl border transition-all duration-300 p-5 backdrop-blur-md
            ${
              !isDubai
                ? "bg-cyan-500/20 border-cyan-400 shadow-lg scale-105"
                : "bg-white/5 border-white/20 hover:scale-105"
            }`}
          >
            <p className="text-xs text-cyan-300 mb-2">BOAT TRY DIVE</p>
            <h3 className="text-lg font-semibold mb-2">FUJAIRAH REEFS</h3>

            <p className="text-xs text-gray-300 mb-4">
              Natural Corals <br />
              Scenic Boat Trip <br />
              Exotic Marine Life
            </p>

            <h2 className="text-2xl font-semibold">AED 450</h2>

            {/* ACTIVE DOT */}
            {!isDubai && (
              <div className="absolute top-3 right-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
              </div>
            )}
          </div>
        </div>

        {/* 🔥 CTA */}
        <button className="mt-8 px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-md transition">
          {isDubai ? "BOOK DUBAI EXPERIENCE" : "BOOK FUJAIRAH EXPERIENCE"}
        </button>

        {/* 🔥 WHATSAPP */}
        <button className="mt-4 flex items-center gap-2 text-sm text-green-400 border border-green-400 px-4 py-2 rounded-full hover:bg-green-400 hover:text-black transition">
          <span>🟢</span> QUICK BOOK VIA WHATSAPP
        </button>

      </div>
    </section>
  );
}