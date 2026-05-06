"use client";

import { motion } from "framer-motion";

export function EnvironmentSection() {
  return (
    <section
      className="bg-[#02131d] text-white py-32 relative overflow-hidden"
      style={{ fontFamily: "Harabara, sans-serif" }}
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/10 blur-[120px] rounded-full" />

      <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/10 blur-[120px] rounded-full" />

      {/* ================= TOP CONTENT ================= */}
      <div className="relative max-w-[1120px] mx-auto text-center px-6">

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-semibold leading-[1.18] tracking-[1.2px]">

          CHOOSE{" "}

          <span className="text-cyan-400">
            YOUR ENVIRONMENT
          </span>

        </h2>

        {/* DESCRIPTION */}
        <p className="text-white/55 text-[15px] md:text-[16px] mt-9 max-w-[760px] mx-auto leading-[2] tracking-[0.5px]">

          Choose to master your skills at Palm Jumeirah HQ
          or join our complimentary East Coast expedition
          for a more immersive and advanced marine experience.

        </p>

        {/* ================= CARDS ================= */}
        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {/* CARD 1 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.25 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-9 text-left backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          >

            {/* LABEL */}
            <p className="text-[10px] text-cyan-400 tracking-[3.2px] mb-6">

              OPERATIONAL BASE: DUBAI HQ

            </p>

            {/* TITLE */}
            <h3 className="text-2xl font-semibold tracking-[0.9px] leading-[1.5]">

              PALM JUMEIRAH

            </h3>

            {/* DESCRIPTION */}
            <p className="text-white/60 text-[14px] mt-6 leading-[2] tracking-[0.4px]">

              Complete your training at our flagship
              facility with premium amenities,
              structured mentorship, and luxury-level
              diving convenience.

            </p>

            {/* LIST */}
            <ul className="mt-9 space-y-5 text-[13px] text-white/72 tracking-[0.4px]">

              <li className="flex items-center gap-3">

                <span className="w-2 h-2 bg-cyan-400 rounded-full shrink-0" />

                Azure Residences Facility

              </li>

              <li className="flex items-center gap-3">

                <span className="w-2 h-2 bg-cyan-400 rounded-full shrink-0" />

                Private Beach Training

              </li>

              <li className="flex items-center gap-3">

                <span className="w-2 h-2 bg-cyan-400 rounded-full shrink-0" />

                Zero Travel Requirement

              </li>

            </ul>

          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.25 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-9 text-left backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
          >

            {/* LABEL */}
            <p className="text-[10px] text-cyan-400 tracking-[3.2px] mb-6">

              ELITE UPGRADE

            </p>

            {/* TITLE */}
            <h3 className="text-2xl font-semibold tracking-[0.9px] leading-[1.5]">

              THE MARINE EXPEDITION

            </h3>

            {/* DESCRIPTION */}
            <p className="text-white/60 text-[14px] mt-6 leading-[2] tracking-[0.4px]">

              Experience the East Coast with
              vibrant marine biodiversity,
              professional boat operations,
              and deeper expedition dives.

            </p>

            {/* LIST */}
            <ul className="mt-9 space-y-5 text-[13px] text-white/72 tracking-[0.4px]">

              <li className="flex items-center gap-3">

                <span className="w-2 h-2 bg-cyan-400 rounded-full shrink-0" />

                Turtles, Sharks & Rays

              </li>

              <li className="flex items-center gap-3">

                <span className="w-2 h-2 bg-cyan-400 rounded-full shrink-0" />

                Exotic Reef Biodiversity

              </li>

              <li className="flex items-center gap-3">

                <span className="w-2 h-2 bg-cyan-400 rounded-full shrink-0" />

                Professional Boat Ops

              </li>

            </ul>

          </motion.div>

        </div>
      </div>

      {/* ================= FOOTER ================= */}
      <div className="relative mt-28 border-t border-white/10 pt-16 px-6">

        <div className="max-w-[1150px] mx-auto grid md:grid-cols-5 gap-12 text-sm">

          {/* DOWNLOAD */}
          <div>

            <p className="text-white/50 text-[10px] tracking-[3.2px] mb-6">

              DOWNLOAD APP

            </p>

            <div className="space-y-4">

              <button className="w-full border border-white/20 py-3.5 rounded-xl text-[12px] tracking-[0.45px] hover:bg-white/10 transition duration-300">

                App Store

              </button>

              <button className="w-full border border-white/20 py-3.5 rounded-xl text-[12px] tracking-[0.45px] hover:bg-white/10 transition duration-300">

                Google Play

              </button>

            </div>

          </div>

          {/* CONNECT */}
          <div>

            <p className="text-white/50 text-[10px] tracking-[3.2px] mb-6">

              CONNECT

            </p>

            <p className="text-[13px] text-white/70 mb-5 tracking-[0.4px] leading-[1.9]">

              WhatsApp Support

            </p>

            <div className="flex overflow-hidden rounded-xl">

              <input
                placeholder="Enter email..."
                className="bg-white/5 border border-white/10 px-4 py-3.5 text-[12px] tracking-[0.35px] w-full outline-none placeholder:text-white/35"
              />

              <button className="bg-cyan-500 px-5 text-[11px] tracking-[1px] font-semibold">

                SUBSCRIBE

              </button>

            </div>

          </div>

          {/* INFO */}
          <div>

            <p className="text-white/50 text-[10px] tracking-[3.2px] mb-6">

              INFORMATION

            </p>

            <ul className="space-y-5 text-white/70 text-[13px] tracking-[0.4px]">

              <li className="hover:text-white transition cursor-pointer">
                About Us
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Blogs
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Terms
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Privacy
              </li>

            </ul>

          </div>

          {/* EXPERIENCES */}
          <div>

            <p className="text-white/50 text-[10px] tracking-[3.2px] mb-6">

              EXPERIENCES

            </p>

            <ul className="space-y-5 text-white/70 text-[13px] tracking-[0.4px]">

              <li className="hover:text-white transition cursor-pointer">
                Try Scuba
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Dive Trips
              </li>

              <li className="hover:text-white transition cursor-pointer">
                International
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Refresher
              </li>

            </ul>

          </div>

          {/* COURSES */}
          <div>

            <p className="text-white/50 text-[10px] tracking-[3.2px] mb-6">

              DIVING COURSES

            </p>

            <ul className="space-y-5 text-white/70 text-[13px] tracking-[0.4px]">

              <li className="hover:text-white transition cursor-pointer">
                Open Water
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Advanced
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Rescue
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Divemaster
              </li>

            </ul>

          </div>

        </div>

        {/* COPYRIGHT */}
        <div className="text-center text-white/35 text-[11px] tracking-[1.2px] mt-20 leading-[2]">

          © 2026 Diving UAE · Powered by Dive Campus Center

        </div>

      </div>

    </section>
  );
}