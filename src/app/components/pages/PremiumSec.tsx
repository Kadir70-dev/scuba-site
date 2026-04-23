"use client";

import { Facebook, Instagram, Twitter } from "lucide-react";

export function PremiumSec() {
  return (
    <>
      <footer
        className="relative text-white pt-20 pb-10 overflow-hidden"
        style={{ fontFamily: "Harabara, sans-serif" }}
      >

        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src="/img3.jpeg"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[#02131d]/90" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-5 gap-10">

            {/* DOWNLOAD */}
            <div>
              <h4 className="text-xs tracking-widest text-gray-400 mb-4">
                DOWNLOAD APP
              </h4>

              <div className="space-y-3">

                <button className="w-full border border-white/20 rounded-xl px-4 py-3 text-left hover:bg-white/10 transition backdrop-blur-md">
                  🍎 App Store
                </button>

                <button className="w-full border border-white/20 rounded-xl px-4 py-3 text-left hover:bg-white/10 transition backdrop-blur-md">
                  ▶ Google Play
                </button>

              </div>
            </div>

            {/* CONNECT */}
            <div>
              <h4 className="text-xs tracking-widest text-gray-400 mb-4">
                CONNECT
              </h4>

              <p className="text-sm mb-3 text-cyan-400">
                WhatsApp Support
              </p>

              <div className="flex flex-col gap-3">

                <input
                  placeholder="Enter email for deals..."
                  className="bg-white/10 border border-white/20 px-4 py-2 rounded-full text-sm outline-none backdrop-blur-md placeholder:text-white/50"
                />

                <button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white py-2 rounded-full text-sm font-semibold hover:scale-105 transition shadow-lg">
                  SUBSCRIBE
                </button>

              </div>
            </div>

            {/* INFO */}
            <div>
              <h4 className="text-xs tracking-widest text-gray-400 mb-4">
                INFORMATION
              </h4>

              <ul className="space-y-2 text-sm text-gray-300">
                <li className="hover:text-white transition cursor-pointer">About Us</li>
                <li className="hover:text-white transition cursor-pointer">Blogs</li>
                <li className="hover:text-white transition cursor-pointer">Terms & Conditions</li>
                <li className="hover:text-white transition cursor-pointer">Privacy Policy</li>
              </ul>
            </div>

            {/* EXPERIENCES */}
            <div>
              <h4 className="text-xs tracking-widest text-gray-400 mb-4">
                EXPERIENCES
              </h4>

              <ul className="space-y-2 text-sm text-gray-300">
                <li className="hover:text-white transition cursor-pointer">Try Scuba Dive</li>
                <li className="hover:text-white transition cursor-pointer">Certified Trips</li>
                <li className="hover:text-white transition cursor-pointer">International Trips</li>
                <li className="hover:text-white transition cursor-pointer">Refresher Course</li>
              </ul>
            </div>

            {/* COURSES */}
            <div>
              <h4 className="text-xs tracking-widest text-gray-400 mb-4">
                DIVING COURSES
              </h4>

              <ul className="space-y-2 text-sm text-gray-300">
                <li className="hover:text-white transition cursor-pointer">PADI Open Water</li>
                <li className="hover:text-white transition cursor-pointer">Advanced Open Water</li>
                <li className="hover:text-white transition cursor-pointer">Rescue Diver</li>
                <li className="hover:text-white transition cursor-pointer">Dive Master</li>
              </ul>
            </div>

          </div>

          {/* DIVIDER */}
          <div className="border-t border-white/10 my-10" />

          {/* BOTTOM */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            {/* SOCIAL */}
            <div className="flex gap-3">

              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full hover:bg-white/10 transition cursor-pointer"
                >
                  <Icon size={16} />
                </div>
              ))}

            </div>

            {/* COPYRIGHT */}
            <p className="text-xs text-gray-400 text-center">
              © 2026 DIVING IN UAE | POWERED BY NEMO DIVING CENTER
            </p>

          </div>

        </div>
      </footer>

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