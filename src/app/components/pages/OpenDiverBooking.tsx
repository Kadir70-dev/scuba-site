"use client";

import { useState } from "react";
import { X, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function OpenDiverBooking({ isOpen, onClose }: any) {
  const [divers, setDivers] = useState(1);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 z-[999] flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >

        {/* MODAL */}
        <motion.div
          initial={{ scale: 0.95, y: 40 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.95, y: 40 }}
          className="bg-[#f1f3f5] w-full max-w-[340px] rounded-xl p-5 relative shadow-2xl font-habara"
        >

          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute right-3 top-3 text-gray-500 hover:text-black"
          >
            <X size={18} />
          </button>

          {/* TITLE */}
          <h2 className="text-[14px] font-bold text-center text-gray-900 mb-4">
            START YOUR ADVENTURE
          </h2>

          {/* INFO */}
          <div className="bg-[#e9ecef] border-l-4 border-cyan-500 p-3 text-[11px] text-gray-600 mb-5 rounded">
            We will contact you after the booking to schedule your session and Initial briefing.
          </div>

          {/* DIVERS */}
          <div className="text-center mb-6">
            <p className="text-[9px] tracking-[3px] text-gray-400 mb-3">
              NUMBER OF DIVERS
            </p>

            {/* ✅ THIN + TALL CONTROL */}
            <div className="flex justify-center items-center gap-2">

              {/* MINUS */}
              <button
                onClick={() => setDivers(Math.max(1, divers - 1))}
                className="w-9 h-12 flex items-center justify-center 
                bg-white border border-gray-300 rounded-md 
                text-lg font-bold text-gray-800
                hover:bg-gray-100 active:scale-95 transition"
              >
                −
              </button>

              {/* NUMBER */}
              <div className="w-12 h-12 flex items-center justify-center 
              bg-white border border-gray-300 rounded-md 
              text-xl font-bold text-gray-900">
                {divers}
              </div>

              {/* PLUS */}
              <button
                onClick={() => setDivers(divers + 1)}
                className="w-9 h-12 flex items-center justify-center 
                bg-white border border-gray-300 rounded-md 
                text-lg font-bold text-gray-800
                hover:bg-gray-100 active:scale-95 transition"
              >
                +
              </button>

            </div>
          </div>

          {/* OPTIONS */}
          <div className="space-y-3 mb-5">

            {/* OPTION 1 */}
            <div className="flex justify-between items-center bg-white border rounded-lg p-3">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-[12px] font-semibold">
                    1-on-1 Private Instructor
                  </p>
                  <Info size={12} className="text-gray-400" />
                </div>

                <p className="text-[11px] text-cyan-600">
                  Upgrade for Premium Attention + AED 250
                </p>
              </div>

              <input type="checkbox" className="w-4 h-4 accent-cyan-600" />
            </div>

            {/* OPTION 2 */}
            <div className="flex justify-between items-center bg-white border rounded-lg p-3">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-[12px] font-semibold">
                    Dive in Deep Dive Dubai
                  </p>
                  <Info size={12} className="text-gray-400" />
                </div>

                <p className="text-[11px] text-cyan-600">
                  The World's Deepest Pool
                  <span className="line-through ml-1 text-gray-400">
                    AED 1,200
                  </span>{" "}
                  INCLUDED
                </p>

                <p className="text-[10px] text-yellow-600 font-semibold">
                  EXCLUSIVELY FOR NEMO MEMBERS
                </p>
              </div>

              <input type="checkbox" className="w-4 h-4 accent-cyan-600" />
            </div>

          </div>

          {/* CTA */}
          <button className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-3 rounded-lg text-sm font-semibold transition">
            PROCEED TO PAYMENT
          </button>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}