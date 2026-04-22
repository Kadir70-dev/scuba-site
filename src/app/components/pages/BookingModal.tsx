"use client";

import { useState } from "react";
import { X, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function BookingModal({ isOpen, onClose }: any) {
  const [divers, setDivers] = useState(1);
  const [selected, setSelected] = useState<number[]>([]);

  const toggleOption = (i: number) => {
    setSelected((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );
  };

  const options = [
    {
      title: "Private Instructor",
      sub: "1 ON 1 Training",
      price: "+ AED 250",
    },
    {
      title: "Advanced Open Water Course",
      sub: "Bundle Offer (Save AED 100)",
      price: "+ AED 1,300",
    },
    {
      title: "Fujairah Expedition",
      sub: "2 Dives in UAE’s best Dive sites",
      price: "+ AED 400",
    },
  ];

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[999] flex items-center justify-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* MODAL */}
        <motion.div
          initial={{ scale: 0.9, y: 60 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 60 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="bg-[#f7f7f7] w-full max-w-[360px] rounded-2xl p-5 relative shadow-[0_25px_60px_rgba(0,0,0,0.4)]"
        >
          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute right-3 top-3 text-gray-400 hover:text-black transition"
          >
            <X size={18} />
          </button>

          {/* TITLE */}
          <h2 className="text-[15px] font-bold text-gray-900 text-center mb-3 tracking-wide">
            START YOUR ADVENTURE
          </h2>

          {/* INFO BOX */}
          <div className="bg-[#e9ecef] border-l-4 border-cyan-400 p-3 text-xs text-gray-600 mb-5 rounded-md shadow-sm">
            We will contact you shortly after the booking confirmation to
            schedule your session and Initial briefing.
          </div>

          {/* ================= DIVERS ================= */}
          <div className="text-center mb-5">
            <p className="text-[9px] tracking-[3px] text-gray-400 mb-3">
              NUMBER OF DIVERS
            </p>

            <div className="flex justify-center items-center gap-4">

              {/* MINUS */}
              <button
                onClick={() => setDivers((d) => Math.max(1, d - 1))}
                className="w-10 h-10 rounded-md border border-gray-300 bg-white shadow-md 
                           flex items-center justify-center text-xl font-bold text-gray-800 
                           hover:bg-gray-100 active:scale-95 transition"
              >
                −
              </button>

              {/* NUMBER */}
              <motion.div
                key={divers}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="px-4 py-2 bg-white rounded-md shadow-md border text-lg font-bold text-gray-900 min-w-[50px] text-center"
              >
                {divers}
              </motion.div>

              {/* PLUS */}
              <button
                onClick={() => setDivers((d) => d + 1)}
                className="w-10 h-10 rounded-md border border-gray-300 bg-white shadow-md 
                           flex items-center justify-center text-xl font-bold text-gray-800 
                           hover:bg-gray-100 active:scale-95 transition"
              >
                +
              </button>
            </div>
          </div>

          {/* ================= OPTIONS ================= */}
          <div className="space-y-2.5 mb-5">
            {options.map((item, i) => {
              const active = selected.includes(i);

              return (
                <motion.div
                  key={i}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => toggleOption(i)}
                  className={`
                    flex justify-between items-center rounded-xl px-4 py-3 cursor-pointer transition
                    ${active
                      ? "bg-cyan-50 border border-cyan-400 shadow-md"
                      : "bg-white border border-gray-300 hover:border-cyan-300"
                    }
                  `}
                >
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="text-xs font-semibold text-gray-800">
                        {item.title}
                      </p>
                      <Info size={12} className="text-gray-400" />
                    </div>

                    <p className="text-[11px] text-cyan-500">
                      {item.sub}{" "}
                      <span className="text-black font-medium">
                        {item.price}
                      </span>
                    </p>
                  </div>

                  {/* CUSTOM CHECKBOX */}
                  <div
                    className={`
                      w-5 h-5 rounded-md flex items-center justify-center transition
                      ${active
                        ? "bg-cyan-500 text-white"
                        : "border border-gray-300 bg-white"
                      }
                    `}
                  >
                    {active && "✓"}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* ================= CTA ================= */}
          <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:opacity-90 text-white py-2.5 rounded-lg text-sm font-semibold transition shadow-md">
            PROCEED TO CHECKOUT
          </button>

          {/* ================= PAYMENT ================= */}
          <div className="flex justify-end mt-3">
            <img
              src="/payt.png"
              className="h-8 md:h-10 object-contain"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}