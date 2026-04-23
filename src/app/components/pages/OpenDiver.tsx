"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { OpenDiverBooking } from "./OpenDiverBooking";
import { FaWhatsapp } from "react-icons/fa";

export function OpenDiver() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        className="relative min-h-screen w-full overflow-hidden text-white"
        style={{ fontFamily: "Harabara, sans-serif" }}
      >

        {/* BACKGROUND */}
        <div className="absolute inset-0">
          <img src="/1.avif" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#02182b]/70" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center min-h-screen px-6">

          {/* BADGE */}
          <div className="mb-6 px-5 py-2 text-[11px] tracking-widest border border-cyan-300/40 rounded-full text-cyan-200">
            LEVEL 2 - ADVANCED OPEN WATER
          </div>

          {/* HEADING */}
          <h1 className="text-4xl md:text-6xl font-bold">
            WHY STOP <span className="text-cyan-400">AT 18 METERS?</span>
          </h1>

          {/* DESC */}
          <p className="mt-4 text-white/70 max-w-2xl">
            The shallow reef was just the training ground. Unlock the deep sector to encounter sharks,
            huge rays, and kingfish that patrol the 30m wrecks.
          </p>

          {/* PRICE */}
          <div className="mt-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-10 py-6">
            <p className="text-sm text-white/40 line-through">AED 2,199</p>
            <h2 className="text-5xl font-bold">
              1,599 <span className="text-cyan-400 text-lg">AED</span>
            </h2>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col items-center gap-4">

            {/* MAIN BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="group relative overflow-hidden rounded-xl w-[280px] py-3"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 blur-xl opacity-70" />

              <div className="relative z-10 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-xl py-3 flex items-center justify-center gap-2">
                GET LICENSED FOR 30M →
              </div>
            </button>

            {/* WHATSAPP BUTTON (FIXED) */}
            <a
              href="https://wa.me/971XXXXXXXXX?text=Hi%20I%20want%20to%20book%20Advanced%20Open%20Water%20course"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[280px] py-3 border border-white/20 rounded-xl text-white flex items-center justify-center gap-2 hover:bg-white/10 transition"
            >
              <FaWhatsapp className="text-green-400 text-lg" />
              BOOK VIA WHATSAPP
            </a>

          </div>

          {/* FEATURES */}
          <div className="mt-12 flex gap-8 text-white/60 text-xs flex-wrap justify-center">
            <span>✔ 5 Adventure Dives</span>
            <span>✔ Full Kit Rental</span>
            <span>✔ Multiple Locations</span>
            <span>✔ Get Licensed for 30M</span>
          </div>

        </div>
      </section>

      {/* FLOATING CTA */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-50">

        {/* BOOK */}
        <button
          onClick={() => setOpen(true)}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 text-white font-semibold shadow-xl hover:scale-105 transition"
        >
          ENROLL NOW →
        </button>

        {/* WHATSAPP FLOAT */}
        <a
          href="https://wa.me/971XXXXXXXXX?text=Hi%20I%20want%20to%20book%20Advanced%20Open%20Water%20course"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white text-2xl shadow-xl hover:scale-110 hover:shadow-[0_0_25px_rgba(34,197,94,0.6)] transition"
        >
          <FaWhatsapp />
        </a>

      </div>

      {/* MODAL */}
      <OpenDiverBooking
        isOpen={open}
        onClose={() => setOpen(false)}
      />

      {/* FONT */}
      <style jsx global>{`
        @font-face {
          font-family: 'Harabara';
          src: url('/fonts/Harabara.woff') format('woff');
        }
      `}</style>
    </>
  );
}