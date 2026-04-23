"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export function MasterScubaCTA() {
  return (
    <section
      className="py-20 bg-gradient-to-r from-[#081c2c] to-[#0d2f45] text-white"
      style={{ fontFamily: "Harabara, sans-serif" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-[700px] mx-auto text-center px-4"
      >

        {/* SMALL TITLE */}
        <p className="text-[13px] text-white/60 tracking-wide">
          The "Black Belt" of Diving:
        </p>

        {/* MAIN TITLE */}
        <h2 className="text-2xl md:text-3xl font-semibold mt-1">
          Master Scuba Diver
        </h2>

        {/* DESCRIPTION */}
        <p className="text-[12px] text-white/60 mt-3 leading-relaxed max-w-[520px] mx-auto">
          Rescue Diver is the final core step. You are now just 5 specialty courses
          away from earning the highest non-professional rating in recreational diving.
        </p>

        {/* BUTTONS */}
        <div className="mt-6 flex items-center justify-center gap-3 flex-wrap">

          {/* PRIMARY BUTTON */}
          <button className="px-5 py-2.5 text-[12px] rounded-lg bg-white text-[#0a0e27] font-medium hover:scale-105 transition">
            START YOUR JOURNEY
          </button>

          {/* WHATSAPP BUTTON */}
          <a
            href="https://wa.me/971XXXXXXXXX?text=Hi%20I%20want%20to%20plan%20my%20diving%20roadmap"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 text-[12px] rounded-lg border border-green-400 text-green-400 hover:bg-green-400 hover:text-white transition"
          >
            <FaWhatsapp className="text-sm" />
            PLAN YOUR ROADMAP
          </a>

        </div>
      </motion.div>

      {/* FONT */}
      <style jsx global>{`
        @font-face {
          font-family: 'Harabara';
          src: url('/fonts/Harabara.woff') format('woff');
        }
      `}</style>
    </section>
  );
}