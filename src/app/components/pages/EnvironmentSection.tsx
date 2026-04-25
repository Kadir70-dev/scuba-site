"use client";

import { motion } from "framer-motion";

export function EnvironmentSection() {
  return (
    <section className="bg-[#02131d] text-white py-20 relative overflow-hidden">

      {/* TOP CONTENT */}
      <div className="max-w-[1000px] mx-auto text-center px-6">

        {/* HEADING */}
        <h2 className="text-2xl md:text-3xl font-semibold tracking-wide">
          CHOOSE <span className="text-cyan-400">YOUR ENVIRONMENT</span>
        </h2>

        <p className="text-white/50 text-sm mt-3 max-w-[600px] mx-auto">
          Choose to master your skills at Palm Jumeirah HQ or join our free upgrade expedition.
        </p>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-6 mt-10">

          {/* CARD 1 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left backdrop-blur-md"
          >
            <p className="text-[10px] text-cyan-400 tracking-widest mb-2">
              OPERATIONAL BASE: DUBAI HQ
            </p>

            <h3 className="text-lg font-semibold">
              PALM JUMEIRAH
            </h3>

            <p className="text-white/60 text-xs mt-2">
              Complete your training at our flagship facility with premium amenities.
            </p>

            <ul className="mt-4 space-y-2 text-xs text-white/70">
              <li>• Azure Residences Facility</li>
              <li>• Private Beach Training</li>
              <li>• Zero Travel Requirement</li>
            </ul>
          </motion.div>

          {/* CARD 2 */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left backdrop-blur-md"
          >
            <p className="text-[10px] text-cyan-400 tracking-widest mb-2">
              ELITE UPGRADE
            </p>

            <h3 className="text-lg font-semibold">
              THE MARINE EXPEDITION
            </h3>

            <p className="text-white/60 text-xs mt-2">
              Experience the East Coast with diverse marine life and professional dives.
            </p>

            <ul className="mt-4 space-y-2 text-xs text-white/70">
              <li>• Turtles, Sharks & Rays</li>
              <li>• Exotic Reef Biodiversity</li>
              <li>• Professional Boat Ops</li>
            </ul>
          </motion.div>

        </div>
      </div>

      {/* FOOTER */}
      <div className="mt-16 border-t border-white/10 pt-10 px-6">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-5 gap-8 text-sm">

          {/* DOWNLOAD */}
          <div>
            <p className="text-white/60 text-xs mb-3">DOWNLOAD APP</p>
            <div className="space-y-2">
              <button className="w-full border border-white/20 py-2 rounded-lg text-xs hover:bg-white/10 transition">
                App Store
              </button>
              <button className="w-full border border-white/20 py-2 rounded-lg text-xs hover:bg-white/10 transition">
                Google Play
              </button>
            </div>
          </div>

          {/* CONNECT */}
          <div>
            <p className="text-white/60 text-xs mb-3">CONNECT</p>
            <p className="text-xs text-white/70 mb-2">WhatsApp Support</p>

            <div className="flex">
              <input
                placeholder="Enter email..."
                className="bg-white/5 border border-white/10 px-3 py-2 text-xs rounded-l-lg w-full outline-none"
              />
              <button className="bg-cyan-500 px-4 text-xs rounded-r-lg">
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* INFO */}
          <div>
            <p className="text-white/60 text-xs mb-3">INFORMATION</p>
            <ul className="space-y-2 text-white/70 text-xs">
              <li>About Us</li>
              <li>Blogs</li>
              <li>Terms</li>
              <li>Privacy</li>
            </ul>
          </div>

          {/* EXPERIENCES */}
          <div>
            <p className="text-white/60 text-xs mb-3">EXPERIENCES</p>
            <ul className="space-y-2 text-white/70 text-xs">
              <li>Try Scuba</li>
              <li>Dive Trips</li>
              <li>International</li>
              <li>Refresher</li>
            </ul>
          </div>

          {/* COURSES */}
          <div>
            <p className="text-white/60 text-xs mb-3">DIVING COURSES</p>
            <ul className="space-y-2 text-white/70 text-xs">
              <li>Open Water</li>
              <li>Advanced</li>
              <li>Rescue</li>
              <li>Divemaster</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="text-center text-white/40 text-xs mt-10">
          © 2026 Diving UAE | Powered by Nemo Diving Center
        </div>
      </div>

    </section>
  );
}